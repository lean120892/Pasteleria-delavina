import React from "react";
import './ItemList.css'
import Item from "./Item";
import ItemCount from './ItemCount'


const ItemList = (props)=>{
    let inicial =0;
    if(props.stock !=0){
         inicial=1;
    } 

    return(
        <div className="Item">
            <div className="Item-1">
                <Item
                    image={props.pictureUrl}
                    title ={props.title}
                    stock={props.stock}
                    id = {props.id}
                />
            </div>
            <div className="Item-2">
                <ItemCount id ={props.id} stock={props.stock} initial ={inicial}/>
            </div>

        </div>
    );
}
export default ItemList;




