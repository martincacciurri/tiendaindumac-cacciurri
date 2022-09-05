import React from "react";
import ComponenteHijo from "./ComponenteHijo";

const ComponentePadre = () => {
    return(
        <div style={{border:"3px solid black", margin:"10px"}}>
            ComponentePadre
            <ComponenteHijo/>
        </div>
    )
}

export default ComponentePadre