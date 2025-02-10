from flask import Flask, request, jsonify
from flask_cors import CORS  
import joblib

app = Flask(__name__)
CORS(app)  

model = joblib.load('models/expense_model.pkl')
vectorizer = joblib.load('models/vectorizer.pkl')

# CATEGORY_KEYWORDS = {
#     "Food": ["restaurant", "grocery", "coffee", "snack"],
#     "Transport": ["bus", "train", "uber", "fuel", "gas"],
#     "Bills": ["electricity", "water", "internet", "phone"],
#     "Entertainment": ["movie", "game", "concert", "club"],
#     "Other": [],
# }

# def categorization_expense(description):
#     description = description.lower()
#     for category, keywords in CATEGORY_KEYWORDS.items():
#         if any(keyword in description for keyword in keywords):
#             return category
#     return "Other"

@app.route("/categorize", methods=["POST"])
def categorize():
    data = request.json
    description = data.get("description", "")
    transformed_description = vectorizer.transform([description])
    predicted_category = model.predict(transformed_description)[0]
    # category = categorization_expense(description)
    return jsonify({"category": predicted_category})

if __name__ == "__main__":
    app.run(debug=True)
