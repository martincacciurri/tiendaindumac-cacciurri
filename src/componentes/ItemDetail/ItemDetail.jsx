import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({productoDetalle}) => {
 
    console.log('Llega ',productoDetalle)
    const {nombre, precio, img, stock} = productoDetalle;

    const onAdd = () => {
        console.log('compraste')
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