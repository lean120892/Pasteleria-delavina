import React from "react";
import './ItemList.css'
import Item from "./Item";
import ItemCount from './ItemCount'



const ItemList = (props)=>{


    return(
        <div className="Item">
            <div className="Item-1">
                <Item
                    image={props.pictureUrl}
                    title ={props.title}
                />
            </div>
            <div className="Item-2">
                <ItemCount id ={props.id} stock={props.stock} initial ="1"/>
            </div>

        </div>
    );
}
export default ItemList;




