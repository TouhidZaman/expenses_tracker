import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';

const Expenses = (props) => {
    
      return <Card className="expenses">
        {props.items.map(expense => (
          <ExpenseItem 
            key = {expense.id}
            expenseDate = {expense.date}
            expenseTitle = {expense.title}
            expenseAmount = {expense.amount} 
          />
        ))}
      </Card>
}
export default Expenses;