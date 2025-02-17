from flask import Flask, request, jsonify
from flask_cors import CORS  
import joblib

app = Flask(__name__)
CORS(app)  

model = joblib.load('models/expense_model.pkl')
vectorizer = joblib.load('models/vectorizer.pkl')

@app.route("/categorize", methods=["POST"])
def categorize():
    data = request.json
    description = data.get("description", "")
    transformed_description = vectorizer.transform([description])
    predicted_category = model.predict(transformed_description)[0]
    return jsonify({"category": predicted_category})

if __name__ == "__main__":
    app.run(debug=True)
