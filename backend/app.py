from flask import Flask, request, jsonify
from flask_cors import CORS
import requests
import logging
from database import init_db

app = Flask(__name__)
CORS(app)  # Allow frontend to connect

# Initialize database on startup
init_db()

# Mistral API Configuration
MISTRAL_API_KEY = "your_mistral_api_key"
MISTRAL_API_URL = "https://api.mistral.ai/v1/chat/completions"

@app.route('/ask', methods=['POST'])
def ask_question():
    try:
        data = request.json
        question = data.get("question", "")

        if not question:
            return jsonify({"error": "Question is required"}), 400

        headers = {"Authorization": f"Bearer {MISTRAL_API_KEY}", "Content-Type": "application/json"}
        payload = {
            "model": "mistral-medium",
            "messages": [{"role": "user", "content": question}],
            "max_tokens": 200
        }

        response = requests.post(MISTRAL_API_URL, json=payload, headers=headers)
        answer = response.json().get("choices", [{}])[0].get("message", {}).get("content", "No response.")

        return jsonify({"answer": answer})
    except Exception as e:
        logging.error(f"Error in AI request: {e}")
        return jsonify({"error": "Internal server error"}), 500

if __name__ == '__main__':
    logging.basicConfig(level=logging.INFO)
    app.run(host="0.0.0.0", port=10000)  # Render uses port 10000
