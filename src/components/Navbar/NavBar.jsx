
import './NavBar.css';
import CartWidget from './CartWidget';
import{Link} from 'react-router-dom'
import React, { useEffect,useState,useContext  } from 'react'
import { CartContext } from '../CartContext'


function NavBar(){
    const test = useContext(CartContext)
    const [cantidad, setCantidad] = useState(0);

       
    useEffect( ()=>{
  
        let parcial =0;
        for (let info of test.carList){
          parcial = parcial + info.cant
        }
        setCantidad( parcial)
    
    }, [test.change, test.carList.length]);
    

    return(

        <div className='contenedor-navbar'>
  
            <div className='titulo-navbar'> 
                <Link className= 'link' to ="/"><p> My Pasteleria</p> </Link>
            </div>
            
            <div>
                <ul className='accesos-navbar'>
                 <Link className= 'link'to ="/"><p>Productos</p> </Link>
                 <Link className= 'link'to ="/category/Salado"> <p>Salados</p></Link>
                 <Link  className= 'link'to ="/category/Dulce"> <p>  Dulces</p>
               </Link>

                </ul>
            </div>
            <div className='cart-navbar'>
                <Link to="/cart">
                    
                    <CartWidget val={cantidad} ></CartWidget>
                </Link>
          
            </div>
            
        </div>

    );
}
export default  NavBar

