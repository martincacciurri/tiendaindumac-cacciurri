import './ItemCount.css';
import {useState} from "react"; 
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';


const ItemCount = ({nombre, stock, initial,precio, onAdd})=> {
    // Cuando una propiedad o variable de estado cambie
    // el componente vuelve a renderizarse
    const [contador, setContador] = useState(initial);
    
    const incrementar = () =>{
        if(contador<stock){
           setContador(contador + 1) 
        }
    }

    const decrementar = () =>{
        if(contador>0){
           setContador(contador - 1) 
        }
    }

    return(
        <div className='contador-container'>  
            <div>
                <img src="./01.jpg" alt="" className="producto" />
                <h1>{nombre}</h1>
                <h2>$ {precio}</h2>
                <ButtonGroup className='me-2' aria-label="Second group">
                    <Button className='resta' onClick={decrementar}>-</Button> 
                    <Button className='cantidad'>{contador}</Button> 
                    <Button className='suma' onClick={incrementar}>+</Button>
                </ButtonGroup>
            </div> 
            {/* <ButtonToolbar aria-label="Toolbar with button groups">  
            
        </ButtonToolbar> */}
            <div>
                <Button variant="outline-primary" onClick={()=>(onAdd(contador))}>Agregar al carrito</Button> 
            </div>
        </div>
    )
}

export default ItemCount