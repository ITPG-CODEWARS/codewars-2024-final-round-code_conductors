from flask import Blueprint, jsonify, request, send_file
import qrcode
import io
from cryptography.fernet import Fernet

api_routes = Blueprint('api_routes', __name__)

# Generate a key for encryption
encryption_key = Fernet.generate_key()
cipher = Fernet(encryption_key)

@api_routes.route('/buy_ticket', methods=['POST'])
def buy_ticket():
    # Simulate getting ticket data from the request
    ticket_data = request.json
    required_fields = ['coupe', 'seat', 'wagon', 'platform', 'departure_time', 'arrival_time']
    
    if not all(field in ticket_data for field in required_fields):
        return jsonify({"error": "Missing required fields"}), 400

    # Encrypt ticket information
    plain_text_data = f"Coupe: {ticket_data['coupe']}, Seat: {ticket_data['seat']}, Wagon: {ticket_data['wagon']}, " \
                      f"Platform: {ticket_data['platform']}, Departure: {ticket_data['departure_time']}, " \
                      f"Arrival: {ticket_data['arrival_time']}"
    encrypted_data = cipher.encrypt(plain_text_data.encode())

    # Generate a QR code
    qr = qrcode.QRCode(version=1, box_size=10, border=5)
    qr.add_data(encrypted_data.decode())
    qr.make(fit=True)
    
    # Save QR code to an in-memory file
    qr_image = io.BytesIO()
    qr.make_image(fill='black', back_color='white').save(qr_image)
    qr_image.seek(0)

    # Respond with the QR code image
    return send_file(qr_image, mimetype='image/png')


@api_routes.route('/ticket_info', methods=['GET'])
def get_ticket_info():
    # Hardcoded ticket details
    ticket_info = {
        "coupe": "2",
        "seat": "15B",
        "wagon": "5",
        "platform": "3",
        "departure_time": "10:30",
        "arrival_time": "14:00",
        "is_delayed": True,
        "delay_minutes": 15
    }

    # Return the hardcoded ticket information as JSON
    return jsonify(ticket_info), 200
