import { useContext, useState } from "react";
import CartContext from "../../context/CartContext";
import "./CartContainer.css";
import Alert from 'react-bootstrap/Alert';
import { db } from '../../utils/firebase';
import { collection, addDoc, doc, updateDoc} from 'firebase/firestore';
import { Timestamp } from "firebase/firestore";

const CartContainer = () => {
    const {productCartList, deleteProduct, clearCartList, total} = useContext(CartContext);
    const [idOrder, setIdOrder] = useState("")

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
        addDoc(queryRef, order).then(respuesta=>setIdOrder(respuesta.id))
        console.log(order)

    }

    // const updateOrder = () =>{
    //     const queryRef = doc(db,"items","3KmnqMn8DiL8RCABXMYO")
    //     updateDoc(queryRef, {

    //     })
    // }

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

                    <div className="form-order">
                    <form onSubmit={sendOrder}>
                        <input type="text" placeholder='Nombre'/>
                        <input type="text" placeholder='Telefono'/>
                        <input type="email" placeholder='Email'/>
                        <button type='submit'>
                            Enviar orden
                        </button>
                        {/* <button onClick={updateOrder}>
                            Actualizar orden
                        </button> */}
                    </form>
                    </div>

                </div>

                


            }
        </div>
    ) 
}

export default CartContainer