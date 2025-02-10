🏦 Budget-Planner: AI-Powered Smart Budgeting App

📌 Overview
Budget-Planner is a smart budgeting application that leverages AI-driven expense categorization to help users track their spending and optimize their budgets. Built with React.js for a responsive front-end and Flask for a powerful back-end, the app integrates machine learning to automatically classify expenses into categories like Food, Transport, Bills, and Entertainment.

🚀 Features:

✅ AI-Powered Expense Categorization – Uses a trained machine learning model to predict expense categories based on transaction descriptions.

✅ User-Friendly Dashboard – View real-time balance updates, transaction history, and budget summaries.

✅ RESTful API Integration – Flask-based back-end with CORS support for seamless front-end communication.

✅ Secure & Fast – Optimized with local storage for user preferences and a robust API for efficient data handling.

✅ Scalability – Easily extendable with additional AI models or new financial features.


🏗️ Tech Stack:

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

🏃 Getting Started

1️⃣ Clone the Repository
bash
Copy
Edit
git clone https://github.com/your-username/budget-planner.git
cd budget-planner

2️⃣ Set Up the Backend
bash
Copy
Edit
cd src/backend
pip install -r requirements.txt
python app.py

3️⃣ Set Up the Frontend
bash
Copy
Edit
cd src/frontend
npm install
npm start

4️⃣ Train the AI Model (Optional)
bash
Copy
Edit
cd src/backend
python train_model.py

📸 Screenshots
![1](https://github.com/user-attachments/assets/02e9d392-f221-4fe5-9957-0ef6d25a750a)
General Overview of the UI, using React.js.
![2](https://github.com/user-attachments/assets/daf07def-4ffd-4317-8ecf-f816996ff5b9)
In the description field, we enter what the details of the transaction is that we want the AI model to predict which category it belongs to, in this case; it's "Movie Tickets".


![3](https://github.com/user-attachments/assets/a839f52e-9035-4f6b-98e8-3db783350ebc)

In this screenshot, we have the item to be, "Movie Tickets", in which the AI model has placed this item into the category; "Entertainment", predicting correctly.

![4](https://github.com/user-attachments/assets/5f122b65-93a6-4807-ba07-b38ddd8dfb08)

In this screenshot, we have the item to be, "Coffee at Starbucks", in which the AI model has placed this item into the category; "Food", predicting correctly.

![image](https://github.com/user-attachments/assets/074a2157-4096-4481-87ea-1e39d38e174e)
Postman Request testing the backend Flask API with (/categorize)


