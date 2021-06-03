import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import { useState } from 'react';

const INITIAL_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14)
  },
  {
    id: 'e2',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28)
  }
]

const App = () => {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES)
  
  const addExpenseHandler = (expense) => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses]
    })
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items = {expenses}/>
    </div>
  );
}

export default App; 
