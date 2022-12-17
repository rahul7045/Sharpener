import React, { useReducer } from "react";
import CartContext from "./cart-context";

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

    const cartContext = {
        items: cartState.items ,
        totalAmount: cartState.totalAmount,
        addItem : addItemHandler,
        removeItem : removeItemHandler
    }
 return(
    <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
 )
}

export default CartProvider