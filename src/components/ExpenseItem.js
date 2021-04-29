import './ExpenseItem.css'
function ExpenseItem() {
    return (
        <div className="expense-item">
            <div>April 30th 2021</div>
            <div className="expense-item__description">
                <h2>Car Insurence</h2>
                <div className='expense-item__price'>$297.6</div>
            </div>
        </div>
    );
}

export default ExpenseItem