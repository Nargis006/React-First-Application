import "./NewExpense.css";
import React from "react";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
    const saveExpenseHandler = (enteredExpense)=>{
        const expenseData = {
            ...enteredExpense,
            id: Math.ceil(Math.random()*10)
        }
        props.onAddNewExpense(expenseData);
        //console.log(expenseData);
    }
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseDate={saveExpenseHandler}/>
    </div>
  );
};

export default NewExpense;
