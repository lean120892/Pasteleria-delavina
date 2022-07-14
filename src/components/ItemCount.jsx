
/**
  Espacio destinado al contador de cantidad de productos
  y al boton agregar.
 */

import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import './ItemCount.css'



function ItemCount({stock,initial}) {

 
  const  [cantProducto, setCantProducto] = useState(parseInt(initial));

  const [botonState, setBotonState] = useState();

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
      }

  }
  const botonRestar = ()=>{
    if(cantProducto > 0){
      setCantProducto (cantProducto -1);
    }
  }

  const onAdd = ()=>{
  
      alert("Se agregaron "+ ""+ cantProducto +" productos" )
    
    
  }
  return (
    <div className='ItemCountContainer'>
        
        <div className='ItemCountainer-Contador'>
          <button  onClick={botonSumar}> + </button>
          <p>{cantProducto}</p>
          <button disabled={botonState} onClick={botonRestar}> - </button>
        </div>
        
        <button id ="BotonAdd" disabled={botonState} onClick={onAdd} > Agregar</button>

        

    </div>
  )
}

export default ItemCount