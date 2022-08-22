
import React, { useEffect,useState,useContext  } from 'react'
import { CartContext } from './CartContext'
import{Link} from 'react-router-dom'
import './ItemCount.css'



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
        alert("No disponemos de esa cantidad")
        setAgregado(!agregado);
      }

  }
  const botonRestar = ()=>{
    if(cantProducto > 0){
      setCantProducto (cantProducto -1);
    }
  }

  const onAdd = (cantidad)=>{
  
      alert("Se agregaron "+ ""+ cantidad +" productos" )
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