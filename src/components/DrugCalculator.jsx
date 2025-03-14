import { useState } from "react";

export default function DrugCalculator() {
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [dose, setDose] = useState(null);
  const [error, setError] = useState("");

  // Sample Drug Dosage Calculation (Acetaminophen Example)
  const calculateDose = () => {
    setError("");

    if (!weight || !age) {
      setError("Please enter both weight and age.");
      return;
    }

    const weightKg = parseFloat(weight);
    if (isNaN(weightKg) || weightKg <= 0) {
      setError("Invalid weight entered.");
      return;
    }

    // Acetaminophen (Paracetamol) Dosage Calculation (10-15 mg/kg per dose)
    const minDose = weightKg * 10;
    const maxDose = weightKg * 15;

    setDose({ min: minDose.toFixed(2), max: maxDose.toFixed(2) });
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md mt-4">
      <h1 className="text-2xl font-bold text-center text-blue-600 mb-4">
        Pediatric Drug Calculator
      </h1>

      {error && <p className="text-red-500 text-center">{error}</p>}

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Child's Weight (kg):
        </label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-300"
          placeholder="Enter weight in kg"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Child's Age (years):
        </label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-300"
          placeholder="Enter age in years"
        />
      </div>

      <button
        onClick={calculateDose}
        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
      >
        Calculate Dose
      </button>

      {dose && (
        <div className="mt-4 p-4 bg-gray-100 rounded-md text-center">
          <p className="text-lg font-semibold">Recommended Dose:</p>
          <p className="text-blue-600">
            {dose.min} mg - {dose.max} mg per dose
          </p>
        </div>
      )}
    </div>
  );
}
