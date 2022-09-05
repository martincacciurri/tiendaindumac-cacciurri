import React, {useState} from "react";

const ComponenteSubHijoA = ({obtenerValor}) => {
    const [contador, setContador] = useState(0);

    const sumar = () =>{
        setContador(contador+1)
    }

    const funcionInterna = () =>{
        obtenerValor(contador)
    }

    return(
        <div style={{border:"3px solid orange", margin:"10px"}}>
            ComponenteSubHijoA, contador: {contador}
            <button onClick={sumar}>+</button>
            <button onClick={()=>obtenerValor(contador)}>Pasa valor</button>
        </div>
    )
}

export default ComponenteSubHijoA