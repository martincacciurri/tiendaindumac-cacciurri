import './ItemList.css'
import Item from '../Item/Item'

const ItemList = ({items}) => {

    return(
        <div className='grid-product-container'>
            <div className='grid-product'>
                {items.map(producto =>(
                    <Item key={producto.id} item={producto}/>
                ))}
            </div>
        </div>
    )
}



export default ItemList;