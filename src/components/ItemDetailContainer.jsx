import React from 'react'
import { useState, useEffect } from 'react';
import './ItemDetailContainer.css'
import productos from '../utils/Productos'
import ItemDetail from './ItemDetail';
const id =2;

function ItemDetailContainer(props) {
  const [detail, setDetail] = useState([]);
  useEffect( ()=>{
    let getProductos = ()=>{

    return new Promise (  (resolve, rejet)=>{
        setTimeout(  ()=>{ 
          resolve(productos )          
             },1000 );
    } );
    }
    getProductos()
    .then( (res)=>{
      setDetail(res.filter( item=> parseInt(item.id)==id))
    // console.log(producto[0].id)
    } )
    .catch( ()=>{console.log("No se encontró el Producto")} )

      
  }, [] );

    
  return (
    <div>
      {
        detail.map( (data)=>
          <ItemDetail
            key ={data.id}
            id = {data.id}
            title = {data.title}
            description = {data.description}
            price = {data.price}
            stock ={data.stock}
            pictureUrl = {data.pictureUrl}
          />
         )

      }
     
    </div>

  )
};

export default ItemDetailContainer
