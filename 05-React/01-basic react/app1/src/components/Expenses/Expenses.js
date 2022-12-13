import ExpensesItem from "./ExpensesItem"
const Expenses =(props)=>{
  

      return (
      <>
            <ExpensesItem title={props.data[0].title} amount={props.data[0].amount} date={props.data[0].date} location={props.data[0].location}/> 
            <ExpensesItem title={props.data[1].title} amount={props.data[1].amount} date={props.data[1].date} location={props.data[1].location} /> 
            <ExpensesItem title={props.data[2].title} amount={props.data[2].amount} date={props.data[2].date} location={props.data[2].location} /> 
            <ExpensesItem title={props.data[3].title} amount={props.data[3].amount} date={props.data[3].date} location={props.data[3].location} /> 
      </>
      )
}

export default Expenses