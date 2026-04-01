import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MainContent from './components/MainContent';
import Steps from './components/Steps';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    if (cart.find(item => item.id === product.id)) {
      toast.info("Item already in cart!");
    } else {
      setCart([...cart, product]);
      toast.success(`${product.name} added to cart!`);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
    toast.error("Removed from cart");
  };

  const checkout = () => {
    setCart([]);
    toast.success("Checkout successful!");
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar cartCount={cart.length} />
      <Hero />
      <MainContent 
        cart={cart} 
        onAdd={addToCart} 
        onRemove={removeFromCart} 
        onCheckout={checkout} 
      />
      <Steps />
      <Pricing />
      <Footer />
      <ToastContainer position="bottom-right" autoClose={2000} />
    </div>
  );
}

export default App;