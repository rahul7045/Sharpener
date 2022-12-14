import './App.css';
import React ,{useState}from 'react'
import UserList from './components/UI/UserList';
import Form from './components/Forms/Form';
const dummy_info =[
  {name : "Rahul" , age : 22},
  {name : "Raja" , age : 18},
  {name : "Sarthak" , age : 12}

]
const App=()=> {
const[userList , setUserList] = useState(dummy_info)
  const addUserHandler=(newUser)=>{
    setUserList((prevUserList)=>{
      return [newUser , ...prevUserList]
    })
  }

  return (
    <div className='container'>
      <Form onAddUser={addUserHandler} />
      <UserList items={userList} />
    </div>
  );
}

export default App;
