import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CartPage from './pages/cart/CartPage';
import DetailsPage from './pages/details/DetailsPage';
import IndexPage from './pages/index/IndexPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/cart' element={<CartPage />} />
          <Route path='/details/:id' element={<DetailsPage />} />
          <Route path='/' element={<IndexPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;