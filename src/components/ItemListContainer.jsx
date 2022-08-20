import React from 'react'
import './ItemListContainer.css'
import ItemList from './ItemList';
import { useState, useEffect } from 'react';
import {useParams} from 'react-router';
import {FirebaseRead} from './funciones/Funciones.js'


 const ItemListContainer = () =>{

    const [listaProductos, setListaProductos]= useState([])
    const {id} = useParams();

        useEffect( ()=>{

        if (id === undefined){
            FirebaseRead()
                .then( (res)=>{ setListaProductos(res) })
                .catch( ()=>{alert("No se encontraron productos")})
        }else{
            FirebaseRead()
                .then( (res)=>{ setListaProductos(res.filter(item=> item.category === id)) })
                .catch( ()=>{alert("No se encontraron productos")})
            }
    
    }, [id] );
    

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
