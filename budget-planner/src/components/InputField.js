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

  const editExpense = (index) => {
    console.log("Editing Expense", index);
  };

  const deleteExpense = (index) => {
    const transactionsToDelete = transactions[index];
    const updatedTransactions = transactions.filter((_, i) => i !== index);

    setBalance((prevBalance) => prevBalance + transactionsToDelete.amount);

    setTransactions(updatedTransactions);

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
                <span>{index + 1}</span>
                <p>{transactions.date}</p>
                <p>{transactions.category}</p>
                <p>${transactions.amount}</p>
                <button className="edit-button" onClick={editExpense}>
                  <svg className="edit-svgIcon" viewBox="0 0 512 512">
                    <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"></path>
                  </svg>
                </button>
                <button className="btn-del" onClick={() => deleteExpense(index)}>
                  <svg
                    viewBox="0 0 15 17.5"
                    height="17.5"
                    width="15"
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon"
                  >
                    <path
                      transform="translate(-2.5 -1.25)"
                      d="M15,18.75H5A1.251,1.251,0,0,1,3.75,17.5V5H2.5V3.75h15V5H16.25V17.5A1.251,1.251,0,0,1,15,18.75ZM5,5V17.5H15V5Zm7.5,10H11.25V7.5H12.5V15ZM8.75,15H7.5V7.5H8.75V15ZM12.5,2.5h-5V1.25h5V2.5Z"
                      id="Fill"
                    ></path>
                  </svg>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default InputField;
