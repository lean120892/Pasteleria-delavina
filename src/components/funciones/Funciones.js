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
import { collection, getDocs,query,where } from "firebase/firestore";
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
const FirebaseOneProduct = async (id)=>{
let q;
if(id){
    q= query(collection(db, "Productos"), where ('categoryId', '==', id))
    console.log(q)
}
const querySnapshot = await getDocs(q);
const dataFromFirestore = querySnapshot.docs.map(doc =>({
        id: doc.id,
        ...doc.data()
    }))
    return dataFromFirestore;
}
    


export  {FirebaseRead, FirebaseOneProduct} 