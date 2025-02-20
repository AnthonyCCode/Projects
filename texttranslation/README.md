🌍 Text Translation Chrome Extension

A lightweight Chrome extension that allows users to translate text directly from their browser. Built with React and Python, this extension provides a seamless translation experience.


🚀 Features

✅ Instant Translation – Quickly translate selected text in the browser

✅ Multiple Languages – Supports translation into various languages

✅ Minimalist UI – Simple and easy-to-use interface

✅ Custom Backend – Uses a Flask API for handling translations

📂 Project Structure

text-translation-extension/
│── backend/                # Flask backend for translation
│   ├── app.py              # API to handle translation
│   ├── requirements.txt    # Dependencies for the backend
│── chrome-extension/       # Chrome extension source
│   ├── manifest.json       # Extension configuration
│   ├── popup.html          # UI for the extension
│   ├── popup.js            # Handles user input & API calls
│   ├── styles.css          # Styling for the popup
│── README.md               # Project documentation


🛠 Tech Stack

Frontend: HTML, CSS, JavaScript, React (Chrome Extension)

Backend: Python (Flask)

📖 Installation & Setup

1️⃣ Run the Backend (Flask API)

cd backend
pip install -r requirements.txt
python app.py
The API will start at http://127.0.0.1:5000/.

2️⃣ Load the Chrome Extension

Open Google Chrome
Go to chrome://extensions/
Enable Developer Mode
Click Load Unpacked
Select the chrome-extension/ folder

📸 Screenshots


