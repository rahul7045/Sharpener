import './ExpensesItem.css'
import ExpenseDate from './ExpenseDate';
import ExpenseDetail from './ExpenseDetail';
import Card from '../UI/Card'

const ExpensesItem=(props)=>{
     let title = props.title
    const changeTitleHandler = () =>{
      title = 'Updated'
      console.log(title)
    }

    const deleteExpenseHandler =()=>{
        console.log('deleted')
    }
   
    return(
     <Card className='expense-item'>
        <ExpenseDate date={props.date} />
        <ExpenseDetail title={title} amount={props.amount} location={props.location} />
        <button onClick ={changeTitleHandler}>Change Title</button>
        <button onClick ={deleteExpenseHandler}>Delete</button>

    </Card>
    );
}

export default ExpensesItem;