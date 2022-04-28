import ExpenseItems from './ExpenseItems';
import Card from './Card';
import './Expenses.css'
function Expense(prop) {
  return (
    <Card className="expenses">
      <ExpenseItems
        title={prop.expense[0].title}
        amount={prop.expense[0].amount}
        date={prop.expense[0].date}
        id={prop.expense[0].id}
      ></ExpenseItems>
      <ExpenseItems
        title={prop.expense[1].title}
        amount={prop.expense[1].amount}
        date={prop.expense[1].date}
        id={prop.expense[1].id}
      ></ExpenseItems>
      <ExpenseItems
        title={prop.expense[2].title}
        amount={prop.expense[2].amount}
        date={prop.expense[2].date}
        id={prop.expense[2].id}
      ></ExpenseItems>
      <ExpenseItems
        title={prop.expense[3].title}
        amount={prop.expense[3].amount}
        date={prop.expense[3].date}
        id={prop.expense[3].id}
      ></ExpenseItems>
    </Card>
  );
}
export default Expense;
