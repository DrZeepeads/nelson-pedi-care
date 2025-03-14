from flask import Blueprint, request, jsonify
from werkzeug.security import generate_password_hash, check_password_hash
import jwt
import datetime

auth_bp = Blueprint('auth', __name__)
SECRET_KEY = "supersecretkey"

users = {}  # Temporary storage, replace with DB

@auth_bp.route('/signup', methods=['POST'])
def signup():
    data = request.json
    username = data.get("username")
    password = data.get("password")

    if username in users:
        return jsonify({"error": "User already exists"}), 400

    users[username] = generate_password_hash(password)
    return jsonify({"message": "User created successfully"})

@auth_bp.route('/login', methods=['POST'])
def login():
    data = request.json
    username = data.get("username")
    password = data.get("password")

    if username not in users or not check_password_hash(users[username], password):
        return jsonify({"error": "Invalid credentials"}), 401

    token = jwt.encode(
        {"user": username, "exp": datetime.datetime.utcnow() + datetime.timedelta(hours=2)},
        SECRET_KEY, algorithm="HS256")

    return jsonify({"token": token})
