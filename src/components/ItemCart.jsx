import React from 'react'
import './ItemCart.css'

function ItemCart(props) {

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
    
        <button>Eliminar Compra</button>
      </div>
    
    
  

    </div>
  )
}

export default ItemCart