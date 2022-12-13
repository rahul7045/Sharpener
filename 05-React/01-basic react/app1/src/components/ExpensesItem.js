import './ExpensesItem.css'
import ExpenseDate from './ExpenseDate';
import ExpenseDetail from './ExpenseDetail';

function ExpensesItem(props){
    // const expenseDate =new Date();
    // const expenseTitle = 'Car Insurance';
    // const expenseAmount = 294.67
    // const locationOfExpenditure = 'Mumbai'
   
    return(
     <div className='expense-item'>
     <ExpenseDate date={props.date} />
    <ExpenseDetail title={props.title} amount={props.amount} location={props.location} />s
    </div>
    );
}

export default ExpensesItem;