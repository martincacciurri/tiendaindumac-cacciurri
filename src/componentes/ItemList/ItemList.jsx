import './ItemList.css'
import Item from '../Item/Item'

const ItemList = ({items}) => {

    return(
        // <>
        //     <h1 className='section-title'>Productos</h1>
        //     {
        //         loading ? 
                
        //         <PulseLoader cssOverride={{}}/>
                
        //         :
                <div className='grid-product-container'>
                    <div className='grid-product'>
                        {items.map(producto =>(
                            <Item key={producto.id} item={producto}/>
                        ))}
                    </div>
                </div>
                
        //     }
        // </>
    )
}



export default ItemList;