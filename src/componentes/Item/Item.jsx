import './Item.css'
import {Link, NavLink} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const Item = ({item}) =>{
    const navegar = useNavigate();

    return(
        <div>
             <div className='card' key={item.id}>
                <div >
                    <img src={item.img} alt="" className="card-img"/>
                </div>
                <div className='card-data'>
                    <h1 className='card-description'>{item.nombre}</h1>
                    <h2 className='card-price'>$ {item.precio}</h2>
                </div>
                
                <div className='card-button'>
                    <button className='btn btn-outline-primary' onClick={()=> navegar(`/item/${item.id}`)}>Ver detalle</button>
                </div>
                
                {/* <p>{item.nombre}</p>
                <p>Nro Likes</p>
                <button onClick={incrementar}>+</button> */}
            </div>
        </div>
    )
}

export default Item