import React from 'react'
import './ItemListContainer.css'
import ItemList from './ItemList';
import productos from '../utils/Productos'
import { useState, useEffect } from 'react';

 const ItemListContainer = () =>{

    const [listaProductos, setListaProductos]= useState([])
    useEffect( ()=>{

        let traerProductos = ()=>{
            return new Promise ( (resolve, reject)=>{
                
             setTimeout( ()=>{
                     resolve(productos)
                 },1000 );
             } );
         }
     
         traerProductos()
             .then( (res)=>{setListaProductos(res)})
             .catch( ()=>{alert("No se encontraron productos")})
            
         
    }, [listaProductos] );
    

    return(
        
        <div className="Container">
            {
                listaProductos.map( (data) =>
                <ItemList
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
    );
};
export default ItemListContainer;
