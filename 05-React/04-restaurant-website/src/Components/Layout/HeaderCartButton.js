import React from 'react'
import cartIcon from './cartIconwhite.png'
import "./Header.css";



const HeaderCartButton = (props) => {
  return (
    <button
            type="button"
            className="btn btn-primary header-button"
            style={{ padding: 10 + "px" +" " +70 + "px",
                     borderRadius: 25 + "px" ,
                     
                    }}
            onClick={props.onClick}        
          >
            <img src={cartIcon} />
            Your Cart
            <span className="cartItemsNumber">1</span>
          </button>
  )
}

export default HeaderCartButton
