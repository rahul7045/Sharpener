import React from 'react'
import cartIcon from './cartIconwhite.png'
import "./Header.css";



const HeaderCartButton = (props) => {
  return (
    <button
            type="button"
            className="btn btn-primary"
            style={{ padding: 10 + "px" +" " +70 + "px",
                     borderRadius: 25 + "px" ,
                     
                    }}
          >
            <img src={cartIcon} />
            Your Cart
            <span className="cartItemsNumber">1</span>
          </button>
  )
}

export default HeaderCartButton
