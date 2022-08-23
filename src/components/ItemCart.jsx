import React from 'react'
import './ItemCart.css'
import  { useContext  } from 'react'
import{useNavigate} from 'react-router-dom'
import { CartContext } from './CartContext'


function ItemCart(props) {
  
  const test = useContext(CartContext)
  const navigate = useNavigate();

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
let GoTo = (data)=>{
  navigate("/item/"+ data)

}


  return (
    
    <div className='ItemCart-Contenedor'>
      <div className='Cart-Cont1'>
        <img src ={props.image} className='Cart-Img'></img>
      </div>
      <div className='Cart-Cont2'>
        <div className='Item-Titulo'>{props.title}</div>
        <div className='Item-Texto'>Precio: {props.price}</div>
        <div className='Item-Texto'>Stock: {props.stock}</div>
      </div>
      <div className='Cart-Cont3'>
        <span className='Item-Texto'>Cantidad: {props.cant}</span>

        <button  className='Item-Boton' onClick={()=>{GoTo(props.id)}}>Ir al Producto</button>
        <button className='Item-Boton' onClick={()=>{Delete(props.id)}}>Eliminar Compra</button>
        
      </div>
    
    
  

    </div>
  )
}

export default ItemCart