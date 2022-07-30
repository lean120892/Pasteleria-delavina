import React from 'react'
import { useContext,useState,useEffect } from 'react'
import { CartContext } from './CartContext'
import ItemCart from './ItemCart'

function Cart() {
 
  const test = useContext(CartContext)
  const [state, setState] = useState(test.carList.length);
  console.log(test.change)
  useEffect(()=>{

    
  },[test.change])
/*
   const changeState = ()=>{
      setState(test.carList.length)
      }

       actualizar = {()=>{changeState()}}
      */
     
  return (
    <>
    <div>Soy el carrito</div>
    <div><button onClick={()=>{test.deleteAllProducts()}}>Eliminar Todo</button></div>
    <hr/>
    {
     
       test.carList.length >0  && test.carList.map( item=>(
          <ItemCart
         
          key={item.id}
          id = {item.id}
          image= {item.image}
          title= {item.title}
          price={item.price}
          stock ={item.stock}
          cant = {item.cant}
          >
          </ItemCart>
        ))
      
     
    
    }

    </>
  )
}

export default Cart 
