import React from "react";
import { useState } from "react";
import ComponenteSubHijoA from "./ComponenteSubHijoA";
import ComponenteSubHijoB from "./ComponenteSubHijoB";

const ComponenteHijo = () => {
    const[value, setValue] = useState(0)

    const obtenerValor = (contador) =>{
        console.log('click en componente hijo', contador)
        setValue(contador)
    }

    return(
        <div style={{border:"3px solid red", margin:"10px"}}>
            ComponenteHijo
            <ComponenteSubHijoA obtenerValor={obtenerValor}/>
            <ComponenteSubHijoB value={value}/>
        </div>

    )
}

export default ComponenteHijo