import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";
import { useState } from 'react';

const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState('2020')

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log(selectedYear);
  }

  return <Card className="expenses">
    <ExpensesFilter 
      selected={filteredYear}
      onExpensesFilterChange={filterChangeHandler} 
    />
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