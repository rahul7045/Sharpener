import React,{useState} from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/ExpenseForm/NewExpense";
const App=() =>{

  const data1 = [
    {id:'e1' ,title:'Car Insurance' , amount : 250 , date : new Date(2021,2,28) ,location:'Mumbai' },
    {id:'e2' ,title:'Bike Insurance' , amount : 150 , date : new Date(2022,3,28) ,location:'Gurgaon'},
    {id:'e3' ,title:'Truck Insurance' , amount : 350 , date : new Date(2019,5,20),location:'Bangalore' },
    {id:'e4' ,title:'Home Insurance' , amount : 500 , date : new Date(2000,5,19),location:'Delhi' }

  ]
  const[data , setData] = useState(data1);


 const addExpenseHandler=(expenseData)=>{
  console.log(expenseData);
  data1.push(expenseData);
  setData(data1);
 }


  return (
    <>
      <NewExpense  onAddNewExpense={addExpenseHandler} />
      <Expenses data={data} />
    </>

  );
}

export default App;
