import pandas as pd
from prophet import Prophet
import joblib

data = pd.read_csv("src/backend/models/expense_data.cvs")

data.rename(columns={"Date": "ds", "Amount": "y"}, inplace=True)