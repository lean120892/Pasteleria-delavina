import React from 'react'
import './ItemListContainer.css'
import ItemCount from './ItemCount';

 const ItemListContainer = (props) =>{

    return(
    
            <div className="cardContainer">
                <div className='tituloContainer'>
                    {props.titulo}
                </div>
                <div className='cuerpoContainer'>
                    {props.cuerpo}
                </div>
                <div> {props.stock}</div>
                <ItemCount stock = "3" initial ="1"/>
                
            </div>
        
        
    );
};
export default ItemListContainer;