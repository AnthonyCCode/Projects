🏦 Budget-Planner: AI-Powered Smart Budgeting App
📌 Overview
Budget-Planner is a smart budgeting application that leverages AI-driven expense categorization to help users track their spending and optimize their budgets. Built with React.js for a responsive front-end and Flask for a powerful back-end, the app integrates machine learning to automatically classify expenses into categories like Food, Transport, Bills, and Entertainment.

🚀 Features
✅ AI-Powered Expense Categorization – Uses a trained machine learning model to predict expense categories based on transaction descriptions.
✅ User-Friendly Dashboard – View real-time balance updates, transaction history, and budget summaries.
✅ RESTful API Integration – Flask-based back-end with CORS support for seamless front-end communication.
✅ Secure & Fast – Optimized with local storage for user preferences and a robust API for efficient data handling.
✅ Scalability – Easily extendable with additional AI models or new financial features.

🏗️ Tech Stack
🔹 Front-End: React.js, JavaScript, HTML5, CSS3
🔹 Back-End: Flask, Python, REST APIs
🔹 Machine Learning: Scikit-learn, TfidfVectorizer, RandomForestClassifier
🔹 Deployment: Flask-CORS, Joblib, Local Storage

🎯 How It Works
1️⃣ User Inputs Transaction – The user enters an expense description.
2️⃣ AI Model Analyzes Description – The system processes the input using TF-IDF vectorization.
3️⃣ Expense Categorization – The Random Forest Classifier predicts the category.
4️⃣ User Receives Insights – Categorized transactions appear in the dashboard.

📊 AI Model Training
The expense categorization model was trained using a dataset containing various expense descriptions.

Vectorization: TF-IDF (Term Frequency-Inverse Document Frequency) was used to process text data.
Classifier: RandomForestClassifier trained on labeled expense categories.
Storage: Model and vectorizer are saved using Joblib for quick loading.

📸 Screenshots
![1](https://github.com/user-attachments/assets/02e9d392-f221-4fe5-9957-0ef6d25a750a)

