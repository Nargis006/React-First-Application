import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [titleChange, setTitleChange] = useState("");
  const [amountChange, setAmountChange] = useState("");
  const [dateChange, setDateChange] = useState("");

  const titleChangeHandler = (event) => {
    setTitleChange(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setAmountChange(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setDateChange(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newAddedExpense = {
        title: titleChange,
        amount: amountChange,
        date:dateChange
    }
    props.onSaveExpenseDate(newAddedExpense);
    setTitleChange("");
    setAmountChange("");
    setDateChange(new Date());
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={titleChange} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={amountChange}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            // min="2019-01-01"
            // max="2022-12-31"
            onChange={dateChangeHandler}
            value={dateChange}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
