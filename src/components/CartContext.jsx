import { createContext, useState } from 'react';


export const CartContext = createContext();

const CartContextProvider = ({children}) =>{
    const [carList, setCarList] = useState([]);
   
    const addToCart = (item)=>{
        setCarList([...carList,item])
    }
    return(
        <CartContext.Provider value ={{carList, addToCart}}>
            {children}

        </CartContext.Provider>
    )
}

export default CartContextProvider