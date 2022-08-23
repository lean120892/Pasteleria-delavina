import React from 'react'
import './Item.css'
import{ useNavigate} from 'react-router-dom'

function Item (props) {
    const navigate = useNavigate();
    const GoTo = (id)=>{
        navigate("/item/"+id)
    }
    
    return(
        <div className='Item-Contenedor'>
            <img src ={props.image} className='Item-Imagen'></img>
            <div className='Item-Titulo'>{props.title}</div>
            <p className='Item-Stock'> Stock: {props.stock} </p>
            <button className='Item-Boton' onClick={ ()=>{GoTo(props.id)}}>Mas Informacion</button>
        </div>
    );
}
export default Item;