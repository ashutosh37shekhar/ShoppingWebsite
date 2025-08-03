import React, { useState } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import { CartItem, Product, CustomerDetails } from './types/Product';

function App() {
  const [currentScreen, setCurrentScreen] = useState('home');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const handleAddToCart = (product: Product) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.product.id === product.id);
      if (existingItem) {
        return prev.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveFromCart(productId);
      return;
    }
    
    setCartItems(prev =>
      prev.map(item =>
        item.product.id === productId
          ? { ...item, quantity }
          : item
      )
    );
  };

  const handleRemoveFromCart = (productId: string) => {
    setCartItems(prev => prev.filter(item => item.product.id !== productId));
  };

  const handleProceedToCheckout = () => {
    setCurrentScreen('checkout');
  };

  const handlePlaceOrder = (customerDetails: CustomerDetails) => {
    // In a real app, this would send the order to a backend
    console.log('Order placed:', { cartItems, customerDetails });
    // Clear cart after successful order
    setTimeout(() => {
      setCartItems([]);
      setCurrentScreen('home');
    }, 3000);
  };

  const cartItemsCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const renderCurrentScreen = () => {
    switch (currentScreen) {
      case 'home':
        return (
          <Home 
            cartItems={cartItems}
            onAddToCart={handleAddToCart}
          />
        );
      case 'cart':
        return (
          <Cart
            cartItems={cartItems}
            onUpdateQuantity={handleUpdateQuantity}
            onRemoveFromCart={handleRemoveFromCart}
            onProceedToCheckout={handleProceedToCheckout}
          />
        );
      case 'checkout':
        return (
          <Checkout
            cartItems={cartItems}
            onPlaceOrder={handlePlaceOrder}
          />
        );
      default:
        return <Home cartItems={cartItems} onAddToCart={handleAddToCart} />;
    }
  };

  return (
    <Layout 
      currentScreen={currentScreen}
      onScreenChange={setCurrentScreen}
      cartItemsCount={cartItemsCount}
    >
      {renderCurrentScreen()}
    </Layout>
  );
}

export default App;