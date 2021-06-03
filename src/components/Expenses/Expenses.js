import Card from "../UI/Card";
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";
import { useState } from 'react';
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState('2021')

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  }

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  })

  return <Card className="expenses">
    <ExpensesFilter 
      selected={filteredYear}
      onExpensesFilterChange={filterChangeHandler} 
    />
    <ExpensesList items={filteredExpenses}/>
  </Card>
}

export default Expenses;