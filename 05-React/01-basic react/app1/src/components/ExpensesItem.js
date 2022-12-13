import './ExpensesItem.css'

function ExpensesItem(props){
    // const expenseDate =new Date();
    // const expenseTitle = 'Car Insurance';
    // const expenseAmount = 294.67
     const locationOfExpenditure = 'Mumbai'
    return(
     <div className='expense-item'>
      <div>{props.date.toISOString()}</div>
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div>{props.location}</div>
        <div className='expense-item__price'>Rs{props.amount}</div>
      </div>
    </div>
    );
}

export default ExpensesItem;