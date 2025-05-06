🌩️ Cloud Service Pricing Simulation

This project simulates cloud pricing for different providers like AWS, Azure, and GCP based on user-selected parameters such as CPU, RAM, and storage. It also stores and displays the pricing history using Firebase Realtime Database.

📁 Project Structure

├── 📂 backend
│   ├── app.py
│   ├── pricing_logic.py
│   └── 📂 data
│       ├── aws.json
│       ├── azure.json
│       └── gcp.json
│
├── 📂 frontend
│   ├── 📂 src
│   │   ├── App.jsx
│   │   ├── Dashboard.jsx
│   │   ├── History.jsx
│   │   ├── firebase.js
│   │   └── main.jsx
│   ├── index.html
│   └── .env (🔐 should be in .gitignore)
│
└── README.md


⚙️ How to Run This Project

1. Clone the repository

git clone https://github.com/Sanjay-S-jpg/Cloud_price_stimulation.git
cd Cloud_price_stimulation

2. Set up the backend (Flask)

cd backend
python -m venv venv
venv\Scripts\activate    # For Windows
pip install flask
python app.py

✅ Flask server will start at http://127.0.0.1:5000

3. Set up the frontend (React + Vite + Tailwind)

cd ../frontend
npm install
npm run dev

✅ React app will run at something like http://localhost:5173

🧐 Features

💻 Select Cloud Provider (AWS / Azure / GCP)

⚙️ Input specs (CPU, RAM, Storage)

💸 Get estimated pricing instantly

🖓 View simulation history saved to Firebase

*create an account in firebase and get credentials to add it in your .env file*

create .env content (place inside frontend/.env):

VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_domain
VITE_FIREBASE_DB_URL=your_db_url
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MSG_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
