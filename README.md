# Nelson-GPT

Nelson-GPT is a Progressive Web App (PWA) designed as a digital companion to the Nelson Textbook of Pediatrics.

## Features
- AI-Powered Pediatric Q&A (GPT-4 Turbo)
- Drug Dosage Calculator (Safe medication dosing)
- Growth Charts (Interactive WHO/CDC percentile charts)
- Offline Support (PWA capabilities)

## Installation
1. Install dependencies:
   ```sh
   pip install -r backend/requirements.txt
   ```
2. Run the Flask server:
   ```sh
   python backend/app.py
   ```
3. Open `frontend/index.html` in a browser.

## API Endpoints
- `POST /ask` → AI Q&A
- `POST /calculate_dose` → Drug dosage calculation

## License
This project is for educational purposes and requires proper licensing for medical data.
