import './CartWidget.css' 
import { useContext } from "react";
import CartContext from "../../context/CartContext";

function CardWidget(){
    const {cantidad} = useContext(CartContext);

    return(
        <div className="cart-container">
            <img src="./carrito.png" alt="" />
            <p className='cantidad-carrito'>{cantidad}</p>
        </div>
    )
}

export default CardWidget;