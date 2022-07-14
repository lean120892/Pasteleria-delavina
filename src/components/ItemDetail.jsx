import React from "react";
import './ItemDetail.css'
import ItemCount from "./ItemCount";



function ItemDetail (props){
    return(
       <div className="ItemDetail">
            <div className="ItemDetail-Imd">
                <img src ={props.pictureUrl} ></img>
                <div><ItemCount
                     id ={props.id} stock={props.stock} initial ="1"
                /></div> 
            </div>
            <br/>
            <div className="ItemDetail-Info">
                <div> {props.title}</div>
                <div>{props.description}</div>
                <div>Precio: ${props.price}</div>
                <div>Stock: {props.stock}</div>

            </div>

       </div>
    )
}

export default ItemDetail;