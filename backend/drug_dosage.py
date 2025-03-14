from flask import Blueprint, request, jsonify

dosage_bp = Blueprint('dosage', __name__)

@dosage_bp.route('/calculate_dose', methods=['POST'])
def calculate_dose():
    data = request.json
    weight = data.get("weight", 0)
    dosage_per_kg = data.get("dosage_per_kg", 0)

    if weight <= 0 or dosage_per_kg <= 0:
        return jsonify({"error": "Invalid input"}), 400

    dose = weight * dosage_per_kg
    return jsonify({"recommended_dose": dose})
