import React from 'react'
import { useContext,useState,useEffect } from 'react'
import { CartContext } from './CartContext'
import ItemCart from './ItemCart'

function Cart() {
 
  const test = useContext(CartContext)
  console.log(test.carList.length)
  const [state, setState] = useState();
  useEffect( ()=>{
    setState(test.carList.length)
    

  }, []);

  return (
    <>
    <div>Soy el carrito</div>
    <hr/>
    {
      test.carList.length >0 && test.carList.map( item=>(
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