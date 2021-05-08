import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    //Note: Using Multi State
    // const [enteredTitle, setEnteredTitle] = useState('');
    // const [enteredAmount, setEnteredAmount] = useState('');
    // const [enteredDate, setEnteredDate] = useState('');

    //Note: Using Single State
    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    })

    const titleChangeHandler = (event) =>{
        //Note: Using Multi State
        // setEnteredTitle(event.target.value);
        
        //Note: Using Single State
        setUserInput((prevState) => {
            return {
                ...prevState,
                enteredTitle: event.target.value
            }
        }) 
    }
    const amountChangeHandler = (event) => {
        //Note: Using Multi State
        // setEnteredAmount(event.target.value)

        //Note: Using Single State
        setUserInput((prevState)=>{
            return {
                ...prevState,
                enteredAmount: event.target.value
            }
        })
    }
    const dateChangeHandler = (event) => {
        //Note: Using Multi State
        // setEnteredDate(event.target.value)

        //Note: Using Single State
        setUserInput((prevState)=>{
            return {
                ...prevState,
                enteredDate: event.target.value
            }
        })
    }
    
    const formSubmitHandler = (event) => {
        event.preventDefault();
        props.onSaveExpenseData(userInput);
        setUserInput({
            enteredTitle: '',
            enteredAmount: '',
            enteredDate: ''
        })
    }

    return (
        <form onSubmit={formSubmitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input 
                        type='text' 
                        onChange={titleChangeHandler}
                        value={userInput.enteredTitle} //Note: Using Single State
                        // value={enteredTitle} //Note: Using Multi State
                    />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input 
                        type='number' 
                        min="0.01" 
                        step="0.01" 
                        onChange={amountChangeHandler}
                        value={userInput.enteredAmount} //Note: Using Single State
                        // value={enteredAmount} //Note: Using Multi State
                    />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input 
                        type='date' 
                        min="2019-01-01" 
                        max="2022-12-31" 
                        onChange={dateChangeHandler}
                        value={userInput.enteredDate} //Note: Using Single State
                        // value={enteredDate} //Note: Using Multi State
                    />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
            
        </form>
    )
}

export default ExpenseForm;