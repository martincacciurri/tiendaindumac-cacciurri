import './NavBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import CartWidget from '../CartWidget/CartWidget';

function NavBar(){
    return(  
      <div className="navbar-contenedor">
        <img className="img_logo" src="./indumac-logo.png" alt="" />
        <ul className="menu">
          <li className="menu-item">
            <a className="menu-link">Marcas</a>
          </li>
          <li className="menu-item">
            <a className="menu-link">Productos</a>
          </li>
          <li className="menu-item">
            <a className="menu-link">Servicio Técnico</a>
          </li>
        </ul>
        <CartWidget></CartWidget>
        <Button variant="primary">Login</Button> 
      </div>
    )
}

export default NavBar;