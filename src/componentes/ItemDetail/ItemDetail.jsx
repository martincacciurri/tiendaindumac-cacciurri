import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useContext } from 'react';
import CartContext from '../../context/CartContext';

const ItemDetail = ({productoDetalle}) => {
    const {addProduct} = useContext(CartContext);

    // console.log('Llega ',productoDetalle)
    const {nombre, precio, img, stock} = productoDetalle;

    const onAdd = (contador) => {
        // console.log('compraste',contador)
        const newProduct = {...productoDetalle, quantity:contador}
        // console.log('newProduct', newProduct)
        addProduct(newProduct, contador)
    }

    return(
        <div className="item-detail">
            <div className="img-container">
                <img src={img} alt=''/>
            </div>
            <div className="detail-count">
                <ItemCount nombre={nombre} stock={stock} precio={precio} initial={1} onAdd={onAdd}/>
            </div>
            
        </div>
    )
} 

export default ItemDetail