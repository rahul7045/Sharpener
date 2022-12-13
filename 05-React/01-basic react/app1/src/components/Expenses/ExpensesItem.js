import React , {useState} from 'react'
import './ExpensesItem.css'
import ExpenseDate from './ExpenseDate';
import ExpenseDetail from './ExpenseDetail';
import Card from '../UI/Card'

const ExpensesItem=(props)=>{

   const [title , setTitle] = useState(props.title)
   const[amount,setAmount] = useState(props.amount)
    const changeTitleHandler = () =>{
        setTitle('Updated');
    }

    const deleteExpenseHandler =()=>{
        console.log('deleted')
    }
    const changeExpenseHandler =()=>{
     setAmount('100');
    }
   
    return(
     <Card className='expense-item'>
        <ExpenseDate date={props.date} />
        <ExpenseDetail title={title} amount={amount} location={props.location} />
        <button onClick={changeExpenseHandler}>Change Expenses</button>
        <button onClick ={changeTitleHandler}>Change Title</button>
        {/* <button onClick ={deleteExpenseHandler}>Delete</button> */}

    </Card>
    );
}

export default ExpensesItem;