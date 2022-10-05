import { useContext, useState, useEffect } from "react";
import CartContext from "../../context/CartContext";
import "./CartContainer.css";
import Alert from 'react-bootstrap/Alert';
import { db } from '../../utils/firebase';
import { collection, addDoc, doc, updateDoc} from 'firebase/firestore';
import { Timestamp } from "firebase/firestore";
import Swal from 'sweetalert2';
import thanks from '../../assets/thanks.png'


const CartContainer = () => {
    const {productCartList, deleteProduct, clearCartList, total} = useContext(CartContext);
    const [idOrder, setIdOrder] = useState("")
    const [compra, setCompra] = useState(false)
   
    const mostrarAlerta = () =>{
        Swal.fire({
            imagenURL: thanks,
            title: "¡Gracias por tu compra!",
            button: "Aceptar",
            confirmButtonColor: '#0d6efd'
        })
    }

    const sendOrder = (e) =>{

        e.preventDefault()
        const order = {
            buyer: {
                name: e.target[0].value,
                phone: e.target[1].value,
                email: e.target[2].value
            },
            items: productCartList,
            total: total,
            date: Timestamp.fromDate(new Date())
        }
        // Crear referencia en la base de datos donde voy a guarder el documento
        const queryRef = collection(db,"orders")
        // Agregamos el documento a la base
        addDoc(queryRef, order)
        .then(respuesta=>setIdOrder(respuesta.id)) 
        .then(mostrarAlerta())       
        console.log(order)
    }
    return(
        <div className="lista-items">
            {
                total === 0
                ?
                <div>
                    <Alert variant="info">No posee compras <Alert.Link href="/productos">¡Click aquí para comprar!</Alert.Link> 
                    </Alert>
                </div>
                :
                <div>
                    <div className="menu-carrito">
                        <h2>Sus compras</h2>
                        <button className="btn btn-warning" onClick={()=>clearCartList()}>
                            Limpiar carrito
                        </button>
                    </div>
                
                <h1>Su total es: $ {total}</h1>
                <div className="items-carrito">
                {
                     productCartList.map(item=>(
                        <div className= "carrito-container">
                            <div>
                                <img className="imagen-item-carrito" src={item.img}/>
                            </div>
                            <div className="datos-item-carrito">
                                <h1>{item.nombre}</h1>
                                <div className="detalle-item-carrito">
                                    <p>Cantidad: {item.quantity}</p>
                                    <p>Precio por cantidad: $ {item.precio * item.quantity}</p>
                                </div>
                            </div>
                          <button className="btn btn-outline-primary" onClick={()=>deleteProduct(item.id)}>Eliminar</button>
                        </div>
                      ))
                }
                </div>
                
                <div className="div-form" >
                    <h2>Orden de compra</h2>
                    <form className="form-order" onSubmit={sendOrder}>
                        <input className="form-input" type="text" placeholder='Nombre'/>
                        <input className="form-input" type="text" placeholder='Telefono'/>
                        <input className="form-input" type="email" placeholder='Email'/>
                        <button onClick={mostrarAlerta} className="btn btn-outline-primary" type='submit'>
                            Enviar orden
                        </button>
                    </form>
                </div>
     
                </div>
            }
        </div>    
    ) 
}

export default CartContainer