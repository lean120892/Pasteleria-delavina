import React from 'react'
import { useContext } from 'react'
import { CartContext } from './CartContext'
import ItemCart from './ItemCart'

function Cart() {
  const test = useContext(CartContext)
  console.log(test.carList)
  return (
    <>
    <div>Soy el carrito</div>
    <hr/>
    {
      test.carList.length >0 && test.carList.map( item=>(
        <ItemCart
        image= {item.pictureUrl}
        title= {item.title}
        price={item.price}
        stock ={item.stock}
        >

        </ItemCart>
      ))
    }

    </>
  )
}

export default Cart