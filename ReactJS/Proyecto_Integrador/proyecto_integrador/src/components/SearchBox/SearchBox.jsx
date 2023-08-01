import "./SearchBox.css";
import { useNavigate } from 'react-router-dom';

const SearchBox = () => {
  const navigate = useNavigate();
  const onInput = (e) => navigate({
    pathname: '/',
    search: `?q=${e.target.value}`
  });

  return (
    <div className="search-box-wrapper">
      <input
        type="text"
        placeholder="Tu busqueda..."
        className="search-box"
        onInput={onInput}
      />
    </div>
  );
};

export default SearchBox;
