
import { collection, getDocs,query, orderBy, updateDoc} from "@firebase/firestore";
import { doc,getDoc,setDoc, increment} from "firebase/firestore";
import {db} from './Firebase'

import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"



//Obtener todos los productos
const FirebaseRead = async ()=>{
    console.log("Lee base de datos")
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
    
        const itemRef = doc(db,'Productos', item.id);
        console.log(item.qty)
        await updateDoc(itemRef, {
            
            stock:increment(- item.cant)
        })
        
    } )

}

const mensaje = (texto)=>{
    Toastify({
        text: texto,
        duration: 3000,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        className: 'notification my-toast'
       
      }).showToast();
}


export  {FirebaseRead, FirebaseOneProduct, createOrderInFirebase, updateElementInFirebase, mensaje} 