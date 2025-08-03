import React, { useState } from 'react';
import { CheckCircle, MapPin, Phone, Mail, User } from 'lucide-react';
import { CartItem, CustomerDetails } from '../types/Product';

interface CheckoutProps {
  cartItems: CartItem[];
  onPlaceOrder: (customerDetails: CustomerDetails) => void;
}

const Checkout: React.FC<CheckoutProps> = ({ cartItems, onPlaceOrder }) => {
  const [customerDetails, setCustomerDetails] = useState<CustomerDetails>({
    name: '',
    phone: '',
    email: '',
    address: ''
  });
  const [orderPlaced, setOrderPlaced] = useState(false);

  const totalAmount = cartItems.reduce(
    (total, item) => total + (item.product.price * item.quantity), 
    0
  );

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  const handleInputChange = (field: keyof CustomerDetails, value: string) => {
    setCustomerDetails(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onPlaceOrder(customerDetails);
    setOrderPlaced(true);
  };

  const isFormValid = customerDetails.name && customerDetails.phone && customerDetails.address;

  if (orderPlaced) {
    return (
      <div className="max-w-2xl mx-auto text-center py-16">
        <CheckCircle className="h-24 w-24 text-emerald-500 mx-auto mb-6" />
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Order Placed Successfully!</h1>
        <p className="text-lg text-gray-600 mb-8">
          Thank you for your order. We'll deliver your items within 2-3 hours.
        </p>
        <div className="bg-emerald-50 rounded-lg p-6 mb-8">
          <h3 className="font-semibold text-emerald-800 mb-2">Order Summary</h3>
          <p className="text-emerald-700">{totalItems} items • ₹{totalAmount.toFixed(2)}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold text-gray-800">Checkout</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Customer Details Form */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">Delivery Information</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <User className="inline h-4 w-4 mr-2" />
                Full Name
              </label>
              <input
                type="text"
                required
                value={customerDetails.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Phone className="inline h-4 w-4 mr-2" />
                Phone Number
              </label>
              <input
                type="tel"
                required
                value={customerDetails.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
                placeholder="Enter your phone number"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Mail className="inline h-4 w-4 mr-2" />
                Email (Optional)
              </label>
              <input
                type="email"
                value={customerDetails.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
                placeholder="Enter your email address"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <MapPin className="inline h-4 w-4 mr-2" />
                Delivery Address
              </label>
              <textarea
                required
                value={customerDetails.address}
                onChange={(e) => handleInputChange('address', e.target.value)}
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
                placeholder="Enter your complete delivery address"
              />
            </div>

            <button
              type="submit"
              disabled={!isFormValid}
              className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-200 ${
                isFormValid
                  ? 'bg-orange-500 hover:bg-orange-600 text-white shadow-sm hover:shadow-md'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              Place Order • ₹{totalAmount.toFixed(2)}
            </button>
          </form>
        </div>

        {/* Order Summary */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 h-fit">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">Order Summary</h2>
          
          <div className="space-y-4 mb-6">
            {cartItems.map((item) => (
              <div key={item.product.id} className="flex items-center space-x-3 py-3 border-b border-gray-100 last:border-b-0">
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="w-12 h-12 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h4 className="font-medium text-gray-800">{item.product.name}</h4>
                  <p className="text-sm text-gray-500">
                    ₹{item.product.price} × {item.quantity}
                  </p>
                </div>
                <span className="font-semibold text-gray-800">
                  ₹{(item.product.price * item.quantity).toFixed(2)}
                </span>
              </div>
            ))}
          </div>

          <div className="space-y-3 pt-4 border-t border-gray-200">
            <div className="flex justify-between text-lg">
              <span className="text-gray-600">Subtotal ({totalItems} items)</span>
              <span className="font-semibold">₹{totalAmount.toFixed(2)}</span>
            </div>
            
            <div className="flex justify-between text-lg">
              <span className="text-gray-600">Delivery Fee</span>
              <span className="font-semibold text-emerald-600">Free</span>
            </div>
            
            <hr className="border-gray-200" />
            
            <div className="flex justify-between text-xl">
              <span className="font-bold text-gray-800">Total</span>
              <span className="font-bold text-emerald-600">₹{totalAmount.toFixed(2)}</span>
            </div>
          </div>

          <div className="mt-6 p-4 bg-emerald-50 rounded-lg">
            <p className="text-sm text-emerald-700 font-medium">
              🚚 Free delivery within 2-3 hours
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;