import React from 'react'
import { useState, useEffect } from 'react';
import './ItemDetailContainer.css'
import ItemDetail from './ItemDetail';
import {useParams} from 'react-router';
import {getProductos} from './funciones/Funciones.js'



function ItemDetailContainer() {
  const [detail, setDetail] = useState([]);
  const {id} = useParams();

  useEffect( ()=>{

    getProductos(1000)
      .then( (res)=>{setDetail(res.filter( item=> item.id === id))})
      .catch( ()=>{console.log("No se encontró el Producto")} )
    
  }, [id] );

    
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
