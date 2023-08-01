import "./NavBar.css";

import {Link} from 'react-router-dom';

const NavBar = ({ isCart = false }) => (
  <nav>
    <div className="nav-wrapper">
      <span className="logo">MioMio</span>
      {isCart ? (
        <span className="cart-text">Tu Compra</span>
      ) : (
        <Link to="/cart" className="cart-button">
          Carrito
        </Link>
      )}
    </div>
  </nav>
);

export default NavBar;
