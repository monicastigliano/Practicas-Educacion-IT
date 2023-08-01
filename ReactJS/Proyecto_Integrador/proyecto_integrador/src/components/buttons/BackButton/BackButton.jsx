import "./BackButton.css";
import { Link } from "react-router-dom";

const BackButton = () => (
  <div className="back-button">
    <Link to="/">Volver</Link>
  </div>
);

export default BackButton;