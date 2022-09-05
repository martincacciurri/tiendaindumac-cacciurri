import './NavBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import CartWidget from '../CartWidget/CartWidget';
import {Link, NavLink} from 'react-router-dom'

function NavBar(){
    return(  
      <div className="navbar-contenedor">
        <NavLink to=''>
          <div>
            <img className="img_logo" src="./indumac-logo.png" alt="" />
          </div>
        </NavLink>
       
        <ul className="menu">
          <li className="menu-item">
            <NavLink className={({isActive})=> isActive ? "classActive" : "classInactive"} to="/productos">Productos</NavLink>
          </li>
          <li className="menu-item">
            <NavLink className={({isActive})=> isActive ? "classActive" : "classInactive"} to="/categoria/termo">Termo</NavLink>
          </li>
          <li className="menu-item">
            <NavLink className={({isActive})=> isActive ? "classActive" : "classInactive"} to="/categoria/soldadora">Soldadoras</NavLink>
          </li>
          <li className="menu-item">
            <NavLink className={({isActive})=> isActive ? "classActive" : "classInactive"} to="/serviciotecnico">Servicio Técnico</NavLink>
          </li>

          <li className="menu-item">
            <NavLink className={({isActive})=> isActive ? "classActive" : "classInactive"} to="/eventos">Eventos</NavLink>
          </li>

          <li className="menu-item">
            <NavLink className={({isActive})=> isActive ? "classActive" : "classInactive"} to="/eventos-react">Eventos React</NavLink>
          </li>

        </ul>
        <NavLink to="/carrito">
          <div className='btn-navbar-container'>
            <CartWidget></CartWidget>
            <Button variant="btn primary">Login</Button> 
          </div>
        </NavLink>
       
       
      </div>
    )
}

export default NavBar;