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

import { collection, getDocs,query, orderBy, updateDoc, increment} from "@firebase/firestore";
import { doc,getDoc,setDoc} from "firebase/firestore";
import {db} from './Firebase'



//Obtener todos los productos
const FirebaseRead = async ()=>{
    let q = query(collection(db,"Productos") ,orderBy('title'));
    const querySnapshot = await getDocs(q) ;
    const dataFromFirestore = querySnapshot.docs.map((doc) =>({
      id: doc.id,
      ...doc.data()
}));

return dataFromFirestore

}


// Obtener un unico producto mediante ID
const FirebaseOneProduct = async (idItem)=>{
    const docRef = doc(db, "Productos",idItem);
    const docSnap = await getDoc(docRef);
    if(docSnap.exists()){
        return{
            id: idItem,
            ...docSnap.data()
        }
    } else{
        console.log("No se encontro el elemento")
    }

}

//Agregar elementos a la base de datos
//Crear nueva colecccion
 const createOrderInFirebase = async (obj)=>{
    const newOrderRef = doc(collection(db,"Orders"));
    await setDoc(newOrderRef, obj);
    return newOrderRef;
 }

 //Modificar un elemento de la base de datos

const updateElementInFirebase = async (elementos)=>{
    elementos.forEach( async (item)=>{
        const itemRef = doc(db,'Products', item.id);
        await updateDoc(itemRef, {
            stock:increment(-item.qty)
        })
    } )

}


export  {FirebaseRead, FirebaseOneProduct, createOrderInFirebase, updateElementInFirebase} 