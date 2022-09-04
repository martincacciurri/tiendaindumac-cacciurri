import React from "react";
import imgServicioTecnico from '../../assets/serviciotecnico.jpg'
import './PaginaServicioTecnico.css'

const PaginaServicioTecnico = () =>{
    return(
        <div className="item-list-container">
            <img className="img-serv-tec" src={imgServicioTecnico} alt="" />
        </div>
    )
}

export default PaginaServicioTecnico;