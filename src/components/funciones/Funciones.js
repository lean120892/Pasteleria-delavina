
import productos from "../../utils/Productos";
/*
    Funcion que obtiene la lista de todos los productos del archivo Productos.js
*/
function getProductos(time) {
    return new Promise( (resolve, rejet)=>{
        setTimeout( 
            ()=>{
                resolve(productos)
            },time
        )
    }
    );
}

export{getProductos};