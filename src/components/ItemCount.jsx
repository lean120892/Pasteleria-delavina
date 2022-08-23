
import React, { useEffect,useState,useContext  } from 'react'
import { CartContext } from './CartContext'
import{Link} from 'react-router-dom'
import './ItemCount.css'
import {mensaje} from './funciones/Funciones.js'



function ItemCount({props,stock,initial}) {
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
        mensaje("No disponemos de esa cantidad")
        setAgregado(!agregado);
      }

  }
  const botonRestar = ()=>{
    if(cantProducto > 0){
      setCantProducto (cantProducto -1);
    }
  }

  const onAdd = (cantidad)=>{
  
     mensaje("Se agregaron "+ ""+ cantidad +" productos" )
      setAgregado(!agregado)
      let addIsOk = true;
      let i =0;
      for (const dato of test.carList){
        if(dato.id == props.id){
          test.carList[i].cant = test.carList[i].cant + cantProducto;
          addIsOk = false
          break
        }
        i++;
        
      }
      if(addIsOk){
        let ProductoSeleccionado = {
          id: props.id,
          title : props.title,
          image: props.pictureUrl,
          price: props.price,
          stock: props.stock,
          cant: cantProducto
      };
      test.addToCart(ProductoSeleccionado)
    
     }

  }
  const irAlCarrito = ()=>{
    setAgregado(!agregado)
  }

  return (
    <>
    { agregado

      ?<div className='ItemCountContainer' >
          <div className='ItemCountainer-Contador'>
                <button className='ItemCountainer-Btn1' onClick={botonSumar}> + </button>
                <p>{cantProducto}</p>
                <button className='ItemCountainer-Btn1' disabled={botonState} onClick={botonRestar}> - </button>
          </div>
          <button id ="BotonAdd" className='ItemCountainer-Btn2' disabled={botonState} onClick={()=>{onAdd(cantProducto)}} > Agregar</button>
        </div>
      :<div className='ItemCountContainer' >
         <Link className='link' to="/cart"><button className='ItemCountainer-Btn2' onClick={irAlCarrito}>Ir al Carrito</button></Link>
         <Link className='link' to="/"><button className='ItemCountainer-Btn2' onClick={irAlCarrito}>Seguir Comprando</button></Link>
      </div>
    }
    </>
    

  )
}

export default ItemCount