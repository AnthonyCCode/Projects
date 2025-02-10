import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.ensemble import RandomForestClassifier  
from sklearn.model_selection import train_test_split
import joblib

data = {
    "Description": [
        # Food
        "Grocery shopping at Walmart", "Dinner at Italian restaurant", "Bought coffee at Starbucks",
        "Fast food from McDonald's", "Vegan meal from a cafe", "Lunch at a sushi place",

        # Transport
        "Uber ride to office", "Monthly subway pass", "Train ticket to work",
        "Taxi ride home", "Bus fare", "Fuel refill for my car", "Flight to New York",

        # Bills
        "Electricity bill for January", "Internet bill from ISP", "Water bill payment",
        "Monthly phone bill", "Gas bill for home heating", "Netflix subscription renewal",

        # Entertainment
        "Movie night at the theater", "Concert ticket for rock band", "Gaming subscription for PlayStation",
        "Bought a book", "Entry ticket to amusement park", "Streaming service subscription",

        # Other
        "Bought a new laptop", "Medical bill for checkup", "Gym membership renewal",
        "Gift for a friend's birthday", "Charity donation"
    ],
    "Category": [
        "Food", "Food", "Food", "Food", "Food", "Food",
        "Transport", "Transport", "Transport", "Transport", "Transport", "Transport", "Transport",
        "Bills", "Bills", "Bills", "Bills", "Bills", "Bills",
        "Entertainment", "Entertainment", "Entertainment", "Entertainment", "Entertainment", "Entertainment",
        "Other", "Other", "Other", "Other", "Other"
    ]
}

df = pd.DataFrame(data)


vectorizer = TfidfVectorizer(stop_words='english', ngram_range=(1, 2))
X = vectorizer.fit_transform(df['Description'])
y = df['Category']


X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)


model = RandomForestClassifier(n_estimators=100, random_state=42)
model.fit(X_train, y_train)


joblib.dump(model, 'src/backend/models/expense_model.pkl')
joblib.dump(vectorizer, 'src/backend/models/vectorizer.pkl')

print("Model retrained and saved with improved dataset.")
