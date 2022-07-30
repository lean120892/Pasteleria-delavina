import React from 'react'
import './ItemCart.css'
import  { useEffect,useState,useContext  } from 'react'

import { CartContext } from './CartContext'

function ItemCart(props) {
  const {actualizar}= props
  const test = useContext(CartContext)

/*
  let Delete =(val)=>{

    let i =0;
    for (const dato of test.carList){

      if(dato.id === val){
        test.carList.splice(i,1);
        actualizar();
        break
      }
      i++;
      
     }

  }
*/
let Delete =(val)=>{

  let i =0;
  for (const dato of test.carList){

    if(dato.id === val){
      test.deleteOneProduct(i)
      break
    }
    i++;
    
   }

}
  return (
    
    <div className='ItemCart-Contenedor'>
      <div className='Cart-Cont1'>
        <img src ={props.image} className='Cart-Img'></img>
      </div>
      <div className='Cart-Cont2'>
        <div className='Item-Titulo'>{props.title}</div>
        <div className='Item-Titulo'>Precio: {props.price}</div>
        <div className='Item-Titulo'>Stock: {props.stock}</div>
      </div>
      <div className='Cart-Cont3'>
        <span>Cantidad: {props.cant}</span>
    
        <button onClick={()=>{Delete(props.id)}}>Eliminar Compra</button>
        
      </div>
    
    
  

    </div>
  )
}

export default ItemCart