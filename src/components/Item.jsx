import React from 'react'
import './Item.css'


function Item (props) {
    return(
        <div className='Item-Contenedor'>
            <img src ={props.image} className='Item-Imagen'></img>
            <div className='Item-Titulo'>{props.title}</div>
            <div><p>{props.description} </p></div>
            <button className='Item-Boton'>Mas Informacion</button>
           
        </div>
    );
}
export default Item;