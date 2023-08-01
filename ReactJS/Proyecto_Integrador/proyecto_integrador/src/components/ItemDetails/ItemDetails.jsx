import "./ItemDetails.css";

const ItemDetails = ({ item }) => (
  <div className="details-wrapper">
    <div className="image-wrapper">
      <img
        src={item.image}
        alt={item.title}
      />
    </div>

    <h2 className="title">{item.title}</h2>

    <div className="content">
      {item.description}
    </div>

    <div className="product-info">
      <div className="colors">
        <span>Colores</span>
        <ul className="colors-list">
            {item.colors.map((c, i) => <li key={i}>{c}</li>)}
        </ul>
      </div>

      <div className="sizes">
        <span>Talles</span>
        <ul className="sizes-list">
            {item.sizes.map((s, i) => <li key={i}>{s}</li>)}
        </ul>
      </div>

      <div className="price">
        <span className="price-text">Precio</span>
        <span className="price-value">{item.price}</span>
      </div>
    </div>
  </div>
);

export default ItemDetails;