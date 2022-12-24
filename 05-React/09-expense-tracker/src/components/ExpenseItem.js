import React from 'react'

export const ExpenseItem = (props) => {
  return (
    <div>
        <li>{`${props.item.amount}  ${props.item.description}   ${props.item.category}`}</li>
    </div>
  )
}
