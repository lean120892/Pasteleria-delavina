
/**
  Espacio destinado al contador de cantidad de productos
  y al boton agregar.
 */

import React, { useEffect,useState } from 'react'
import{Link} from 'react-router-dom'
import './ItemCount.css'



function ItemCount({stock,initial}) {
  const  [cantProducto, setCantProducto] = useState(parseInt(initial));
  const [botonState, setBotonState] = useState();
  const [agregado , setAgregado] = useState(true);

  useEffect( ()=>{
    if(parseInt(stock) >= 1 && cantProducto >= 1){
      setBotonState(false);
    }
      else{
        setBotonState(true);
      }

  }, [stock,cantProducto]);

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

  const onAdd = ()=>{
  
      alert("Se agregaron "+ ""+ cantProducto +" productos" )
      setAgregado(false)

  }
  const irAlCarrito = ()=>{
    setAgregado(true)
  
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
          <button id ="BotonAdd" disabled={botonState} onClick={onAdd} > Agregar</button>
        </div>
      :<div>
         <button onClick={irAlCarrito}><Link to="/cart">Ir al Carrito</Link></button>
         <button><Link to="/">Seguir Comprando</Link></button>
      </div>
    }
    </>
    

  )
}

export default ItemCount