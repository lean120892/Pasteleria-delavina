import React from 'react'
import './ItemListContainer.css'

 const ItemListContainer = (props) =>{

    return(
        <>
            <div className="cardContainer">
                <div className='tituloContainer'>
                    {props.titulo}
                </div>
                <div className='cuerpoContainer'>
                    {props.cuerpo}
                </div>
              
            </div>
        
        </>
    );
};
export default ItemListContainer;