import React from 'react'
import './MealItem.css'

const MealItem = (props) => {
  return (
    <div className='flex-container'>
    <div className='mealitem card-body'>
        <h4 className='item-name'>{props.name}</h4>
        <h6 className='item-desc'>{props.desc}</h6>
        <h3 className='item-price'>{`$ ${props.price}`}</h3>
    </div>
    <div className='container-add-item'>
      <div><label className='label-meal'>Amount</label><input className='input-meal'  type="number"/></div>
      <button className='add-button-meal'>+ Add</button>
    </div>
    </div>
  )
}

export default MealItem
