
/**
  Espacio destinado al contador de cantidad de productos
  y al boton agregar.
 */

import React, { useEffect,useState,useContext  } from 'react'
import { CartContext } from './CartContext'
import{Link} from 'react-router-dom'
import './ItemCount.css'



function ItemCount({props,id,stock,initial}) {
  const Productos = props;
  const  [cantProducto, setCantProducto] = useState(parseInt(initial));
  const [botonState, setBotonState] = useState();
  const [agregado , setAgregado] = useState(true);
  const test = useContext(CartContext)

  useEffect( ()=>{
    if(parseInt(stock) >= 1 && cantProducto >= 1){
      setBotonState(false);
    }
      else{
        setBotonState(true);
      }

  }, [stock,cantProducto,agregado]);

  const botonSumar = (e)=>{       
    if(cantProducto < parseInt(stock) ){
      setCantProducto (cantProducto +1);
    }
      else{
        alert("No disponemos de esa cantidad")
        setAgregado(true);
      }

  }
  const botonRestar = ()=>{
    if(cantProducto > 0){
      setCantProducto (cantProducto -1);
    }
  }

  const onAdd = (cantidad)=>{
  
      alert("Se agregaron "+ ""+ cantidad +" productos" )
      setAgregado(false)
      let ProductoSeleccionado = Productos
      ProductoSeleccionado.push(cantProducto)
      console.log(Productos)
      console.log(ProductoSeleccionado)
      test.addToCart(props)

  }
  const irAlCarrito = ()=>{
    setAgregado(!agregado)
  
  }
  return (
    <>
    { agregado

      ?<div className='ItemCountContainer' >
          <div className='ItemCountainer-Contador'>
                <button  onClick={botonSumar}> + </button>
                <p>{cantProducto}</p>
                <button disabled={botonState} onClick={botonRestar}> - </button>
          </div>
          <button id ="BotonAdd" disabled={botonState} onClick={()=>{onAdd(cantProducto)}} > Agregar</button>
        </div>
      :<div>
         <button onClick={irAlCarrito}><Link to="/cart">Ir al Carrito</Link></button>
         <button onClick={irAlCarrito}><Link to="/">Seguir Comprando</Link></button>
      </div>
    }
    </>
    

  )
}

export default ItemCount