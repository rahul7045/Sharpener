import './ExpensesItem.css'

function ExpensesItem(){
    const expenseDate =new Date();
    const expenseTitle = 'Car Insurance';
    const expenseAmount = 294.67
    const locationOfExpenditure = 'Mumbai'
    return(
     <div className='expense-item'>
      <div>{expenseDate.toISOString()}</div>
      <div className='expense-item__description'>
        <h2>{expenseTitle}</h2>
        <div>{locationOfExpenditure}</div>
        <div className='expense-item__price'>Rs{expenseAmount}</div>
      </div>
    </div>
    );
}

export default ExpensesItem;