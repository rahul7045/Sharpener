import React from 'react'


 const ExpenseItem = (props) => {
 
    const deleteHandler=async()=>{
        try{
            const res = await fetch(`https://expense-tracker-760b4-default-rtdb.firebaseio.com/expense-tracker/${props.item.id}.json`,
             {
                method:'DELETE',
                headers :{
                    'Content-Type':'application/json'
                },
             })
            const data = await res.json();
        
            if(res.ok){
                alert("Expense Deleted Successfully")
               
        
            }else{
                throw data.error
            }
       }catch(error){
        console.log(error.message)
       }
    }

    const editHandler=()=>{
        
    }

  return (
    <div>
        <li>{`${props.item.amount}  ${props.item.description}   ${props.item.category} ` } <button onClick={editHandler}>Edit</button>   <button onClick={deleteHandler}>Delete</button> </li>
    </div>
  )
}

export default ExpenseItem
