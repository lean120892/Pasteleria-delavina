
import './NavBar.css';
import CartWidget from './CartWidget';
import{Link} from 'react-router-dom'
import React, { useEffect,useState,useContext  } from 'react'
import { CartContext } from '../CartContext'


export default  function NavBar(){
    const test = useContext(CartContext)
   // console.log(test.carList.length)
    return(

        <div className='contenedor-navbar'>
  
            <div className='titulo-navbar'> 
                <p><Link to ="/"> My Pasteleria</Link></p> 
            </div>
            
            <div>
                <ul className='accesos-navbar'>
                 <Link to ="/">Productos</Link>
                 <Link to ="/category/Salado">Salados</Link>
                 <Link to ="/category/Dulce">Dulces</Link>

                </ul>
            </div>
            <div className='cart-navbar'>
                <Link to="/cart">
                    
                    <CartWidget val = {test.carList.length}></CartWidget>
                </Link>
          
            </div>
            
        </div>

    );
}