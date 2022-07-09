import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import './ItemCount.css'



function ItemCount({stock,initial}) {
 
  const  [cantProducto, setCantProducto] = useState(parseInt(initial));
  
  useEffect( ()=>{
      let BotonAdd =document.getElementById("BotonAdd");
      if(stock == 0 || cantProducto == 0){
        BotonAdd.disabled =true;
      }
        else{
          BotonAdd.disabled =false;
        }
  },[stock, cantProducto]);

  const botonSumar = ()=>{       

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
          <button onClick={botonRestar}> - </button>
        </div>
        
        <button id ="BotonAdd" onClick={onAdd} > Agregar</button>
        

    </div>
  )
}

export default ItemCount