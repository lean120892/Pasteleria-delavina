import React from 'react'
import { useState, useEffect } from 'react';
import './ItemDetailContainer.css'
import ItemDetail from './ItemDetail';
import {useParams} from 'react-router';
import {FirebaseOneProduct} from './funciones/Funciones.js'




function ItemDetailContainer() {
  const [detail, setDetail] = useState([]);
  const {id} = useParams();

  useEffect( ()=>{
/*
    getProductos(1000)
      .then( (res)=>{setDetail(res.filter( item=> item.id === id))})
      .catch( ()=>{console.log("No se encontró el Producto")} )
   */
  
      FirebaseOneProduct(id) 
      .then( (res)=>{setDetail(res)})
      .then( (res)=>{console.log(res)})
      .catch( ()=>{console.log("No se encontró el Producto")} )

      
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
