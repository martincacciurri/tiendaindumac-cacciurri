import './Contador.css';
import {useState} from "react"; 

export const Contador = ({stock, initial, agregarProducto})=> {
    // Cuando una propiedad o variable de estado cambie
    // el componente vuelve a renderizarse
    const [contador, setContador] = useState(initial);
    
    const incrementar = () =>{
        if(contador<stock){
           setContador(contador + 1) 
        }
    }

    const decrementar = () =>{
        if(contador>0){
           setContador(contador - 1) 
        }
    }

    return(
        <div className="contador-container">
            <button onClick={decrementar}>Decrementar</button>
            <p>{contador}</p>
            <button onClick={incrementar}>Incrementar</button>
            <div>
                <button onClick={()=>(agregarProducto(contador))}>Agregar al carrito</button>
            </div>
        </div>
    )
}
