import "./AddToCartButton.css";

import {Link} from 'react-router-dom';

const AddToCartButton = () => (
  <div className="add-to-cart-wrapper">
    <Link to="/cart" className="add-to-cart-button">
      lo quiero
    </Link>
  </div>
);

export default AddToCartButton;
