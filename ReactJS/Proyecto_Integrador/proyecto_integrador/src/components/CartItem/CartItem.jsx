import "./CartItem.css";

const CartItem = ({ cartItem }) => (
  <div className="cart-item">
    <div className="cart-item-title">{ cartItem.title }</div>
    <div className="cart-item-details-list">
      <span className="cart-detail">
        <span className="title">Talle</span>
        <span className="content">{cartItem.size}</span>
      </span>
      <span className="cart-detail">
        <span className="title">Color</span>
        <span className="content">{cartItem.color}</span>
      </span>
    </div>
    <div className="cart-item-footer">
      <span className="cart-item-price">{cartItem.price}</span>
      <div className="cart-item-count">
        <span className="subs">-</span>
        <span className="qty">{cartItem.count}</span>
        <span className="add">+</span>
      </div>
    </div>
  </div>
);

export default CartItem;