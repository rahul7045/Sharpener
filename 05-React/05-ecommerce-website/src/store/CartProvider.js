import React, { useReducer , useState } from "react";
import CartContext from "./cart-context";
import { useHistory } from "react-router-dom";

const defaultCartState ={
    items : [],
    totalAmount : 0
}

const cartReducer =(state , action)=>{
    if(action.type === "ADD"){
        const isPresent = state.items.find(obj => obj.id === action.item.id);
        const isboolean = isPresent===undefined?false : true;

        if(!isboolean){
            const updatedItems = state.items.concat(action.item);
        const newTotalAmount =
          state.totalAmount + action.item.price;
          return {
            items: updatedItems,
            totalAmount: newTotalAmount,
          };
        }else{
            const updatedItems = state.items.map((item) => {
                if (item.id == action.item.id) {
                  return { ...item, quantity: action.item.quantity + 1 };
                }
                return item;
              });
              const newTotalAmount = state.totalAmount + action.item.price;
              return {
                items: updatedItems,
                totalAmount: newTotalAmount,
              };  
        }
       
    }else if(action.type==="REMOVE"){
        const updatedItems = state.items.filter((item) => item.id != action.item.id);
          const newTotalAmount = state.totalAmount - action.item.price;
          return {
            items: updatedItems,
            totalAmount: newTotalAmount,
          };
    }
    return defaultCartState
}

const CartProvider =(props)=>{
    const [cartState , dispatchcartAction] = useReducer(cartReducer , defaultCartState)

    const addItemHandler=(item)=>{
   dispatchcartAction({type:"ADD" , item : item})
    }

    const removeItemHandler =(item)=>{
  dispatchcartAction({type:"REMOVE" , item : item})
    }

    //login and auuthentication 

    const initialToken = localStorage.getItem('token');
    const[token , setToken] = useState(initialToken);
    const userLoggedIn = !!token;
    const history = useHistory()


    const loginHandler=(token)=>{
        setToken(token)
        localStorage.setItem('token' , token)
        history.replace('/store')

    }

    const logoutHandler=()=>{
        setToken(null);
        localStorage.removeItem('token')
    }

    const cartContext = {
        items: cartState.items ,
        totalAmount: cartState.totalAmount,
        addItem : addItemHandler,
        removeItem : removeItemHandler,
        token : token,
        login : loginHandler,
        logout : logoutHandler,
        isLoggedIn : userLoggedIn

    }
 return(
    <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
 )
}

export default CartProvider