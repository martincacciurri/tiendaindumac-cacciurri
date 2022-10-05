import React from 'react'
import './PaginaEventos.css'
import { useState } from 'react';
import { useEffect } from 'react';

const PaginaEventos = () => {
    const [openModal, setOpenModal] = useState(false);

    const showModal = (event) =>{
        console.log(event)
        setOpenModal(!openModal)
    }

    const enviarFormulario = (event) => {
        event.preventDefault()
        console.log('form enviado'); 
    }

    const handleChange = (event) =>{
        console.log('event', event)
        console.log(event.target.value)
    }

    const stopEvent = (e) =>{
        e.stopPropagation();
    }
    return(
        <div>
            <button onClick={showModal}>Abrir modal</button>
            {
                openModal ? 
                <div className="background-modal" onClick={showModal}>
                <div className="modal-alert" onClick={stopEvent}>
                    <p> Soy un modal</p>
                    <button onClick={showModal}>Cerrar</button>
                </div>
            </div>
            :
            null
            }
            <hr/>
            <h2>prevent default</h2>
            <form onSubmit={enviarFormulario} action="">
                <input onChange={handleChange} placeholder="email"/>
                <button type="submit">Enviar formulario</button>
            </form>
        </div>
    )
}

export default PaginaEventos