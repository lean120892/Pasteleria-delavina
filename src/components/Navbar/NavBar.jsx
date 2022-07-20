
import './NavBar.css';
import CartWidget from './CartWidget';
import{Link} from 'react-router-dom'

export default  function NavBar(){
    return(

        <div className='contenedor-navbar'>

            <div>
            <CartWidget></CartWidget>
            </div>
        
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
            
        </div>

    );
}