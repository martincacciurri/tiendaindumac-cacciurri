import { collection, getDocs , doc , getDoc, query, where, limit } from "firebase/firestore";
import { useState, useEffect } from "react";
import { db } from "../../utils/firebase";

const PaginaFirebase = () => {
    const [arregloProductos, setArregloProductos] = useState([]);

    // Trae todos los documentos
    useEffect(()=>{
        const getData = async()=>{
            // consulta de referencia
            const queryRef = query(collection(db,"items"), where("categoria", "==", "soldadora"), limit(1));
            const response = await getDocs(queryRef );
            const docs = response.docs;
            // console.log("doc info", docs[0].data())
            // console.log("doc id", docs[0].id)
            const data = docs.map(doc=>{return{...doc.data(), id:doc.id}})
            console.log(data) 
            setArregloProductos(data);
        }
        getData()
    }, [])


    // Trae 1 solo documento
    useEffect(()=>{
        const getData = async()=>{
            // consulta de referencia
            const query = doc(db, "items", "91CkFDRtS4aO803pBJUN")
            const response = await getDoc(query);
            const producto = {
                ...response.data(),
                id: response.id
            }
            console.log("productos", producto)
        }
        getData()
    }, [])







    return(
        <div>Pagina Firebase</div>
       
    )
}

export default PaginaFirebase;