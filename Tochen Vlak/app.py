from flask import Flask
from flask_cors import CORS
from routes import api_routes

# Initialize the Flask application
app = Flask(__name__)

# Enable Cross-Origin Resource Sharing (CORS)
CORS(app)

# Register the API routes from routes.py
app.register_blueprint(api_routes)

# Main entry point for the application
if __name__ == '__main__':
    app.run(debug=True)
