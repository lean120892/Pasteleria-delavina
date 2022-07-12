import React from 'react'
import './ItemListContainer.css'
import ItemList from './ItemList';
import productos from '../utils/Productos'
import { useState } from 'react';

 const ItemListContainer = () =>{

    const [listaProductos, setListaProductos]= useState([])
    let traerProductos = ()=>{
       return new Promise ( (resolve, reject)=>{
           
        setTimeout( ()=>{
                resolve(productos)
            },2000 );
        } );
    }

    traerProductos()
        .then( (res)=>{setListaProductos(res)})
        .catch( ()=>{alert("No se encontraron productos")})
       
    

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
