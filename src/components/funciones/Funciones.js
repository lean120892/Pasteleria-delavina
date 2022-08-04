/*
import productos from "../../utils/Productos";

   // Funcion que obtiene la lista de todos los productos del archivo Productos.js

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
*/
import { collection, getDocs } from "firebase/firestore";
import {db} from './Firebase'

//Obtener todos los productos
const FirebaseRead = async ()=>{
    const querySnapshot = await getDocs(collection(db, "Productos"));
    const dataFromFirestore = querySnapshot.docs.map((doc) =>({
      id: doc.id,
      ...doc.data()
}));

return dataFromFirestore

}

// Obtener un producto mediante ID
const FirebaseOneProduct = async ()=>{

    
}

export  {FirebaseRead} 