import axios from "axios";

const API_URL = "http://127.0.0.1:5000/categorize";

export const categorizeExpense = async (description) => {
  try {
    const response = await axios.post(API_URL, { description });
    return response.data.category; 
  } catch (error) {
    console.error("Error categorizing expense:", error);
    return "Error"; 
  }
};
