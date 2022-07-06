
import './NavBar.css';
import CartWidget from './CartWidget';

export default  function NavBar(){
    return(

        <div className='contenedor-navbar'>
            <div>
            <CartWidget></CartWidget>
            </div>
        
            <div className='titulo-navbar'> 
                <p>My Pasteleria</p>
            </div>
            
            <div>
                <ul className='accesos-navbar'>
                    <li><a href=''>Compreas</a></li>
                    <li><a href=''>Nosotros</a></li>
                    <li><a href=''>Productos</a></li>
                </ul>
            </div>
            
        </div>

    );
}