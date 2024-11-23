from flask import Blueprint, jsonify, request, send_file
import qrcode
import io
from cryptography.fernet import Fernet
from datetime import datetime, timedelta

# Blueprint for routes
api_routes = Blueprint('api_routes', __name__)

# Encryption key for Fernet
encryption_key = Fernet.generate_key()
cipher = Fernet(encryption_key)

# Endpoint to generate a ticket with encrypted QR code
@api_routes.route('/buy_ticket', methods=['POST'])
def buy_ticket():
    ticket_data = request.json
    required_fields = ['coupe', 'seat', 'wagon', 'platform', 'departure_time', 'arrival_time']
    
    # Validate request data
    if not all(field in ticket_data for field in required_fields):
        return jsonify({"error": "Missing required fields"}), 400

    # Simulate delay calculation
    current_time = datetime.now()
    scheduled_departure = datetime.strptime(ticket_data['departure_time'], "%H:%M")
    delay_minutes = max(0, (current_time - scheduled_departure).seconds // 60) if current_time > scheduled_departure else 0
    is_delayed = delay_minutes > 0

    # Add delay information to ticket data
    ticket_data['is_delayed'] = is_delayed
    ticket_data['delay_minutes'] = delay_minutes

    # Encrypt ticket data
    plain_text_data = f"Coupe: {ticket_data['coupe']}, Seat: {ticket_data['seat']}, Wagon: {ticket_data['wagon']}, " \
                      f"Platform: {ticket_data['platform']}, Departure: {ticket_data['departure_time']}, " \
                      f"Arrival: {ticket_data['arrival_time']}, Delayed: {is_delayed}, Delay Minutes: {delay_minutes}"
    encrypted_data = cipher.encrypt(plain_text_data.encode())

    # Generate a QR code
    qr = qrcode.QRCode(version=1, box_size=10, border=5)
    qr.add_data(encrypted_data.decode())
    qr.make(fit=True)
    
    # Save QR code as an image in-memory
    qr_image = io.BytesIO()
    qr.make_image(fill='black', back_color='white').save(qr_image)
    qr_image.seek(0)

    # Return the QR code as a response
    return send_file(qr_image, mimetype='image/png')

# Endpoint to decrypt QR code data
@api_routes.route('/decrypt_qr', methods=['POST'])
def decrypt_qr():
    try:
        # Get encrypted data from the client
        encrypted_data = request.json.get('encrypted_data')
        
        if not encrypted_data:
            return jsonify({"error": "No encrypted data provided"}), 400
        
        # Decrypt the data
        decrypted_data = cipher.decrypt(encrypted_data.encode()).decode()

        # Parse and structure the decrypted string
        ticket_details = {}
        for item in decrypted_data.split(", "):
            key, value = item.split(": ", 1)
            ticket_details[key.strip()] = value.strip()

        # Return the structured ticket details
        return jsonify({"decrypted_data": ticket_details}), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 400

