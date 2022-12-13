import ExpensesItem from "./components/Expenses/ExpensesItem";
const App=() =>{

  const data = [
    {id:'e1' ,title:'Car Insurance' , amount : 250 , date : new Date(2021,2,28) ,location:'Mumbai' },
    {id:'e2' ,title:'Bike Insurance' , amount : 150 , date : new Date(2022,3,28) ,location:'Gurgaon'},
    {id:'e3' ,title:'Truck Insurance' , amount : 350 , date : new Date(2019,5,20),location:'Bangalore' },
    {id:'e4' ,title:'Home Insurance' , amount : 500 , date : new Date(2000,5,19),location:'Delhi' }

  ]
  // let innerdata =""
  // const ele = data.forEach(info =>{
  //   innerdata = innerdata + `<ExpensesItem title={info.title} amount={info.amount} date={info.date} />`
  // })

  return (
    <>
      <h1>Lets get Started</h1>
      <ExpensesItem title={data[0].title} amount={data[0].amount} date={data[0].date} location={data[0].location}/> 
      <ExpensesItem title={data[1].title} amount={data[1].amount} date={data[1].date} location={data[1].location} /> 
      <ExpensesItem title={data[2].title} amount={data[2].amount} date={data[2].date} location={data[2].location} /> 
      <ExpensesItem title={data[3].title} amount={data[3].amount} date={data[3].date} location={data[3].location} /> 

     {/* {innerdata} */}
    </>

  );
}

export default App;
