import { Routes, Route } from 'react-router-dom'
import './App.css';
import { AdminCms } from './components/AdminCms';
import Product from './pages/Product';
import HomePage from './pages/homePage';
import { Login } from './pages/login';
import ProducsPage from './pages/producspage';
import { Register } from './pages/register';
import CartPage from './pages/cartPage';
import TestPage from './pages/testpage';


function App() {
  return (
    <>
      {/* <div className="ui inverted large container"> */}
      <div className="ui vertical masthead center aligned segment">
        {/* <NavBar /> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProducsPage />} />
          <Route path="/testing" element={<TestPage />} />
          <Route path="/product" element={<Product />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cms" element={<AdminCms />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
