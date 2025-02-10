import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
import joblib


data = {
    "Description": [
        "Grocery store", "Bus ticket", "Electricity bill", "Movie ticket", 
        "Coffee at Starbucks", "Uber ride", "Cinema ticket", "Internet bill"
    ],
    "Category": [
        "Food", "Transport", "Bills", "Entertainment", 
        "Food", "Transport", "Entertainment", "Bills"
    ]
}

df = pd.DataFrame(data)


vectorizer = TfidfVectorizer(stop_words='english')
X = vectorizer.fit_transform(df['Description'])

y = df['Category']

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)


model = LogisticRegression()
model.fit(X_train, y_train)

joblib.dump(model, 'src/backend/models/expense_model.pkl')
joblib.dump(vectorizer, 'src/backend/models/vectorizer.pkl')

print("Model trained and saved.")