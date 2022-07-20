import React from 'react'
import './Item.css'
import{Link} from 'react-router-dom'

function Item (props) {
    
    return(
        <div className='Item-Contenedor'>
            <img src ={props.image} className='Item-Imagen'></img>
            <div className='Item-Titulo'>{props.title}</div>
            <div><p> Stock: {props.stock} </p></div>
            <Link to={"/item/"+props.id}><button className='Item-Boton'>Mas Informacion</button></Link>
        </div>
    );
}
export default Item;