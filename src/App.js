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
    date: new Date(2020, 3, 28)
  },
  {
    id: 'e3',
    title: 'New Android Mobile',
    amount: 694,
    date: new Date(2021, 2, 28)
  },
  {
    id: 'e4',
    title: 'Samsung TV',
    amount: 500,
    date: new Date(2021, 5, 13)
  },
  {
    id: 'e5',
    title: 'Walton AC 150TON',
    amount: 600,
    date: new Date(2021, 9, 8)
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
