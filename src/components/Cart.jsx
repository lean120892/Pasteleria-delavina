import React from 'react'
import{Link,useNavigate} from 'react-router-dom'
import { useContext,useState,useEffect } from 'react'
import { CartContext } from './CartContext'
import ItemCart from './ItemCart'
import './Cart.css'

function Cart() {
 let subTotal=0;
  const test = useContext(CartContext)
  const navigate = useNavigate();
  const CalcSubTotal = ()=>{
 
    test.carList.map( item =>{
      subTotal = subTotal + (parseInt(item.price) * parseInt(item.cant) ) 
      
    })
  }
  CalcSubTotal();

  const FinalizarCompra = ()=>{
    alert ("Gracias por Comprar");
    test.deleteAllProducts();
    navigate("/")
 
  }






  return (
    <>
      { test.carList.length >0
      
   ?<div className='Cart-Lleno'>
      <div className='Cart-Productos'>
        {test.carList.map( item=>(
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
              ))}
      </div>
      <div className='Cart-Compra'>
        <div>Mis Productos</div>
        <div>Subtotal: $ {subTotal}</div>
        <div><button onClick={()=>{test.deleteAllProducts()}}>Eliminar Todo</button></div>
        <div><button onClick={FinalizarCompra}>Comprar</button></div>
      </div>
    </div>


    : <div className='Cart-Vacio'>
        <h3>Su Carrito se encuentra vacio</h3>
        <Link to="/"><button>Ir a Comprar!!</button></Link>
      </div>
     
    
    }

    </>
  )
}

export default Cart 
