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
  const [showSettings, setShowSettings] = useState(false)

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

    const newBalance = balance + Number(enteredBalance) - Number(amount);
    setBalance(newBalance);

    console.log("Balance Entered:", enteredBalance);
    console.log("Category Entered:", category);
    console.log("Amount Entered", amount);
    console.log("Date Entered:", date);

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
      <button class="setting-btn" onClick={() => setShowSettings(!showSettings)}>
        <span class="bar bar1"></span>
        <span class="bar bar2"></span>
        <span class="bar bar1"></span>
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
        <p className="form-balance">${balance}</p>
        <input
          type="number"
          value={enteredBalance}
          onChange={handleChangeBalance}
          placeholder="Enter your Balance"
          className="input-field"
        />
        <select
          value={category} onChange={handleChangeCategory} className="input-field-list">
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
    </div>
  );
};

export default InputField;
