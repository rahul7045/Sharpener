import React, { useState } from "react";

const Form = (props) => {
    const[name,setName] = useState('');
    const[age,setAge] = useState('');

    const submitHandler =(event)=>{
       event.preventDefault();
       const newUser = {
        name : name,
        age : age
       }
       console.log(newUser);
       props.onAddUser(newUser);
      
       setName('');
       setAge('');
    }

    const nameChangeHandler=(event)=>{
     setName(event.target.value)
    }
    const ageChangeHandler=(event)=>{
      setAge(event.target.value)
    }
  return (
    <form onSubmit={submitHandler} className="mb-3" >
        <h2 className="w-60 text-center mt-3">Add User</h2>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          value={name}
          onChange={nameChangeHandler}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          type="number"
          className="form-control"
          id="age"
          value={age}
          onChange={ageChangeHandler}
        />
      </div>
      <button type="submit" className="btn btn-primary w-100 ">
        Add User
      </button>
    </form>
  );
};

export default Form;
