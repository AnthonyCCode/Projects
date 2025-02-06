import { useEffect, useState } from "react";
import "../styles/InputField.css";

//balance and input fields on the left side, with the charts and what not on the right side
//have AI recommendations on like how much you should be spending with the balance
//userprofile sign in sign out ?? python backend???

const InputField = () => {
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [balance, setBalance] = useState(0);
  const [enteredBalance, setEnteredBalance] = useState("");
  const [theme, setTheme] = useState("light");
  const [showSettings, setShowSettings] = useState(false);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    }
  }, []);

  const handleChangeDate = (event) => {
    setDate(event.target.value);
  };

  const handleChangeCategory = (event) => {
    setCategory(event.target.value);
  };

  const handleChangeAmount = (event) => {
    setAmount(event.target.value);
  };

  const handleChangeBalance = (event) => {
    setEnteredBalance(event.target.value);
  };

  //handles the submit of the states
  const handleSubmit = (event) => {
    event.preventDefault();

    if (enteredBalance === "" || amount === "" || category === "") {
      alert("Please fill in all fields");
      return;
    }

    const newBalance = balance + Number(enteredBalance) - Number(amount);
    setBalance(newBalance);

    console.log("Balance Entered:", enteredBalance);
    console.log("Category Entered:", category);
    console.log("Amount Entered", amount);
    console.log("Date Entered:", date);

    const newTransaction = {
      date,
      category,
      amount: Number(amount),
    };

    setTransactions([...transactions, newTransaction]); //adds to the list

    setEnteredBalance("");
    setCategory("");
    setAmount("");
    setDate("");
  };

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div>
      <button
        className="setting-btn"
        onClick={() => setShowSettings(!showSettings)}
      >
        <span className="bar bar1"></span>
        <span className="bar bar2"></span>
        <span className="bar bar1"></span>
      </button>

      {showSettings && (
        <div className="settings-dropdown">
          <p className="settings-title">Settings</p>
          <div className="theme-toggle-container">
            <p>Dark Mode</p>
            <label className="switch-label">
              <input
                type="checkbox"
                className="checkbox"
                checked={theme === "dark"}
                onChange={toggleTheme}
              />
              <span className="slider"></span>
            </label>
          </div>
        </div>
      )}
      <form onSubmit={handleSubmit} className="form-container">
        <h1 className="form-title">Balance</h1>
        <p className={`form-balance ${balance < 0 ? "negative" : ""}`}>
          ${balance}
        </p>
        <input
          type="number"
          value={enteredBalance}
          onChange={handleChangeBalance}
          placeholder="Enter your Balance"
          className="input-field"
        />
        <select
          value={category}
          onChange={handleChangeCategory}
          className="input-field-list"
        >
          <option value="">Category</option>
          <option value="Food">Food</option>
          <option value="Transport">Transport</option>
          <option value="Bills">Bills</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Other">Other</option>
        </select>
        <input
          type="number"
          value={amount}
          onChange={handleChangeAmount}
          placeholder="Expense Amount"
          className="input-field"
        />
        <input
          type="date"
          value={date}
          onChange={handleChangeDate}
          className="input-field"
        />
        <button type="submit" className="submit-button">
          <span className="label">Add New Item</span>
          <span className="gradient-container">
            <span className="gradient"></span>
          </span>
        </button>
      </form>
      <div className="transactions-container">
        <h2>History</h2>
        {transactions.length === 0 ? (
          <p>No History Yet.</p>
        ) : (
          <ul>
            {transactions.map((transactions, index) => (
              <li key={index} className="transaction-item">
              <p>{transactions.date}</p>
              <p>{transactions.category}</p>
              <p>${transactions.amount}</p>
            </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default InputField;
