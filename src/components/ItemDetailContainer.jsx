import React from 'react'
import { useState, useEffect } from 'react';
import './ItemDetailContainer.css'
import ItemDetail from './ItemDetail';
import {useParams} from 'react-router';
import {FirebaseOneProduct, mensaje} from './funciones/Funciones.js'




function ItemDetailContainer() {
  const [detail, setDetail] = useState([]);
  const {id} = useParams();

  useEffect( ()=>{

    FirebaseOneProduct(id) 
      .then( (res)=>{setDetail(res)})
      
      .catch( ()=>{mensaje("No se encontró el Producto")} )

  
  }, [id] );


  return (
    <div>
      
     
          <ItemDetail
            key ={detail.id}
            id = {detail.id}
            title = {detail.title}
            description = {detail.description}
            price = {detail.price}
            stock ={detail.stock}
            pictureUrl = {detail.pictureUrl}
          />
         

      
     
    </div>

  )
};

export default ItemDetailContainer
