import React from 'react'
import MealItem from './MealItem'
import './Meals.css'

 const Meals = () => {
    const Dummy_items =[
        {id:1,name : "Sushi" , price: 12 , desc:"Finesh Fish and Veggies"},
        {id:2,name : "Sushi" , price: 12 , desc:"Finesh Fish and Veggies"},
        {id:3,name : "Sushi" , price: 12 , desc:"Finesh Fish and Veggies"},
        {id:4,name : "Sushi" , price: 12 , desc:"Finesh Fish and Veggies"},
    ]
  return (
    <div className='card meal'>
       {Dummy_items.map(data1=><MealItem key={data1.id}  name={data1.name} price={data1.price} desc={data1.desc} />)}
    </div>
  )
}

export default Meals
