import { useContext } from "react";
import CartContext from "../../context/CartContext";
import "./CartContainer.css";
import Alert from 'react-bootstrap/Alert';

const CartContainer = () => {
    const {productCartList, deleteProduct, total} = useContext(CartContext);
    
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
                <h2>Sus compras</h2>
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
                </div>
            }
        </div>
    ) 
}

export default CartContainer