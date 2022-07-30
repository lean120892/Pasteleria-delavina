import { createContext, useState } from 'react';


export const CartContext = createContext();

const CartContextProvider = ({children}) =>{
    const [carList, setCarList] = useState([]);
    const [change, setChange]= useState(true);
   
    const addToCart = (item)=>{
        setCarList([...carList,item])
    }
    const deleteOneProduct = (dato)=>{

        carList.splice(dato,1);
        setChange(!change);

       
    }
    const deleteAllProducts = ()=>{
        setCarList([]);
        setChange(!change);
    }
    return(
        <CartContext.Provider value ={{carList, change, addToCart,deleteOneProduct,deleteAllProducts}}>
            {children}

        </CartContext.Provider>
    )
}

export default CartContextProvider