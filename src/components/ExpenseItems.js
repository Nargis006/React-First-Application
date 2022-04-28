import React, { useState } from "react";
import Card from "./Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItems(props) {
  const [title, setTitle] = useState(props.title);
  const clickHandler = () => {
    setTitle("updated!!");
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.amount}</div>
        <button onClick={clickHandler}>Change value</button>
      </div>
    </Card>
  );
}

export default ExpenseItems;
