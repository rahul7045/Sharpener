import React from 'react'
import MealItem from './MealItem'
import './Meals.css'

 const Meals = () => {
    const Dummy_items =[
        {name : "Sushi" , price: 12 , desc:"Finesh Fish and Veggies"},
        {name : "Sushi" , price: 12 , desc:"Finesh Fish and Veggies"},
        {name : "Sushi" , price: 12 , desc:"Finesh Fish and Veggies"},
        {name : "Sushi" , price: 12 , desc:"Finesh Fish and Veggies"},
    ]
  return (
    <div className='card meal'>
       {Dummy_items.map(data1=><MealItem  name={data1.name} price={data1.price} desc={data1.desc} />)}
    </div>
  )
}

export default Meals
