import {  Routes, Route } from "react-router-dom";
import Navbar from "./componentes/Navbar";
import Home from "./pages/Home";
import Product from "./pages/Product";
import ProductsPage from "./pages/ProductsPage";
import Cart from "./pages/Cart";
import CartContext from "./context/CartContext";
import { useState } from "react";
import { ToastContainer } from 'react-toastify';
// import glamor css to style the toast notification
import 'react-toastify/dist/ReactToastify.css';


function App() {

  // create state variable to store the cart items
  const [cart, setCart] = useState([]);

  return (
    
    <CartContext.Provider value={{cart, setCart}}>
      <Navbar />
      <ToastContainer/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<ProductsPage/>} />
        <Route path="/product/:id" element={<Product/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </CartContext.Provider>
    
  
  );
}

export default App;