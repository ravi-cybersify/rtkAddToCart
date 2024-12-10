import './App.css';
import { Route,Routes } from 'react-router-dom';
import Product from './components/Product';
import Cart from './components/Cart';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        {/* <Route path='/' element={<Product />} /> */}
      </Routes>
    </>
  );
}

export default App;
