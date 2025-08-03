import React from 'react';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { CartItem } from '../types/Product';

interface CartProps {
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveFromCart: (productId: string) => void;
  onProceedToCheckout: () => void;
}

const Cart: React.FC<CartProps> = ({ 
  cartItems, 
  onUpdateQuantity, 
  onRemoveFromCart, 
  onProceedToCheckout 
}) => {
  const totalAmount = cartItems.reduce(
    (total, item) => total + (item.product.price * item.quantity), 
    0
  );

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  if (cartItems.length === 0) {
    return (
      <div className="text-center py-16">
        <ShoppingBag className="h-24 w-24 text-gray-300 mx-auto mb-6" />
        <h2 className="text-2xl font-semibold text-gray-600 mb-4">Your cart is empty</h2>
        <p className="text-gray-500 mb-8">Add some products to get started!</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">Shopping Cart</h1>
        <div className="text-right">
          <p className="text-sm text-gray-500">{totalItems} items</p>
          <p className="text-2xl font-bold text-emerald-600">₹{totalAmount.toFixed(2)}</p>
        </div>
      </div>

      {/* Cart Items */}
      <div className="space-y-4">
        {cartItems.map((item) => (
          <div
            key={item.product.id}
            className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow duration-200"
          >
            <div className="flex items-center space-x-4">
              <img
                src={item.product.image}
                alt={item.product.name}
                className="w-20 h-20 object-cover rounded-lg"
              />
              
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800 text-lg">{item.product.name}</h3>
                <p className="text-gray-500 text-sm">{item.product.description}</p>
                <p className="text-emerald-600 font-semibold mt-1">
                  ₹{item.product.price} / {item.product.unit}
                </p>
              </div>

              <div className="flex items-center space-x-3">
                <button
                  onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                  className="p-2 text-gray-500 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors duration-200"
                >
                  <Minus className="h-4 w-4" />
                </button>
                
                <span className="bg-gray-100 px-4 py-2 rounded-lg font-semibold text-gray-800 min-w-12 text-center">
                  {item.quantity}
                </span>
                
                <button
                  onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                  className="p-2 text-gray-500 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors duration-200"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>

              <div className="text-right">
                <p className="text-lg font-bold text-gray-800">
                  ₹{(item.product.price * item.quantity).toFixed(2)}
                </p>
                <button
                  onClick={() => onRemoveFromCart(item.product.id)}
                  className="text-red-500 hover:text-red-700 hover:bg-red-50 p-1 rounded-lg transition-colors duration-200 mt-2"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Cart Summary */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="space-y-4">
          <div className="flex justify-between items-center text-lg">
            <span className="text-gray-600">Subtotal ({totalItems} items)</span>
            <span className="font-semibold text-gray-800">₹{totalAmount.toFixed(2)}</span>
          </div>
          
          <div className="flex justify-between items-center text-lg">
            <span className="text-gray-600">Delivery Fee</span>
            <span className="font-semibold text-emerald-600">Free</span>
          </div>
          
          <hr className="border-gray-200" />
          
          <div className="flex justify-between items-center text-xl">
            <span className="font-bold text-gray-800">Total</span>
            <span className="font-bold text-emerald-600">₹{totalAmount.toFixed(2)}</span>
          </div>

          <button
            onClick={onProceedToCheckout}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 shadow-sm hover:shadow-md"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;