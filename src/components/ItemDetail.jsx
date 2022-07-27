import React from "react";
import './ItemDetail.css'
import ItemCount from "./ItemCount";



function ItemDetail (props){
    let inicial =0;
    if(props.stock !=0){
         inicial=1;
    } 
    return(
       <div className="ItemDetail">
            <div className="ItemDetail-Imd">
                <img src ={props.pictureUrl} ></img>
               
            </div>
            <br/>
            <div className="ItemDetail-Info">
                <div className="Info-titulo"> {props.title}</div>
                <div className="Info-Descripcion">{props.description}</div>
                <div className="Info-Precio">Precio: ${props.price}</div>
                <div className="Info-Stock">Stock: {props.stock}</div>
                <div><ItemCount
                     props ={props }id ={props.id} stock={props.stock} initial ={inicial}
                /></div> 

            </div>

       </div>
    )
}

export default ItemDetail;