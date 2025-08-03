import { Plus } from 'lucide-react';
import React, { useState } from 'react';
import { categories, products } from '../data/products';
import { CartItem, Product } from '../types/Product';

interface HomeProps {
  cartItems: CartItem[];
  onAddToCart: (product: Product) => void;
}

const Home: React.FC<HomeProps> = ({ cartItems, onAddToCart }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCartQuantity = (productId: string) => {
    const cartItem = cartItems.find(item => item.product.id === productId);
    return cartItem ? cartItem.quantity : 0;
  };

  return (
    <div className="space-y-8">
      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row items-center justify-between bg-green-50 p-6 rounded-lg shadow-lg">
      {/* Left Section */}
      <div className="md:w-1/2 space-y-4">
        <h1 className="text-3xl font-bold text-green-700 ">
          Order your Dairy Groceries
        </h1>
        <div className="flex">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-1/2 pl-10 pr-4 py-3 border border-gray-300 rounded-s"
          />
          <button className="bg-green-600 text-white px-4 py-2 rounded-r-md hover:bg-green-700">
            Search
          </button>
        </div>
      </div>
        
        {/* Image*/}
        <div className="md:w-1/2 flex justify-center mt-4 md:mt-0">
          <img
            src="https://png.pngtree.com/thumb_back/fw800/background/20241007/pngtree-fresh-produce-supermarket-line-for-healthy-groceries-in-the-style-of-image_16265827.jpg"
            alt="Groceries"
            className="w-full h-auto rounded-lg shadow-md"
          />
          </div>
      </div>

 {/* Shop By Categories Section */}
      <div className="flex flex-col items-center shadow-md p-6 bg-white rounded-lg mt-8 space-between-items">
        <h2 className="text-xl font-semibold text-gray-700 mb-6">Shop By Categories</h2>
        <div className="flex flex-wrap justify-center gap-10 mb-2">
          {categories.map(category => (
            <button
              key={category.id}
              type="button"
              onClick={() => setSelectedCategory(category.id)}
              className={`flex flex-col items-center focus:outline-none transition-all duration-200 ${selectedCategory === category.id ? 'ring-2 ring-emerald-500' : ''}`}
            >
              <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-2 shadow-sm transition-all duration-200 ${selectedCategory === category.id ? 'bg-emerald-100' : 'bg-gray-100'}`}>
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-16 h-16 object-contain rounded-full"
                />
              </div>
              <span className={`text-sm mt-1 ${selectedCategory === category.id ? 'text-emerald-700 font-semibold' : 'text-gray-600'}`}>{category.name}</span>
            </button>
          ))}
        </div>
      </div>
      
      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 shadow-md p-4 bg-white rounded-lg">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100"
          >
            <div className="aspect-w-1 aspect-h-1 bg-gray-200">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            <div className="p-4 space-y-3">
              <div>
                <h3 className="font-semibold text-gray-800 text-lg">{product.name}</h3>
                <p className="text-sm text-gray-500">{product.description}</p>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-2xl font-bold text-emerald-600">₹{product.price}</span>
                  <span className="text-sm text-gray-500 ml-1">/{product.unit}</span>
                </div>
                
                {product.inStock ? (
                  <div className="flex items-center space-x-2">
                    {getCartQuantity(product.id) > 0 && (
                      <span className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full text-sm font-medium">
                        {getCartQuantity(product.id)} in cart
                      </span>
                    )}
                    <button
                      onClick={() => onAddToCart(product)}
                      className="bg-emerald-600 hover:bg-emerald-700 text-white p-2 rounded-lg transition-colors duration-200 shadow-sm hover:shadow-md"
                    >
                      <Plus className="h-5 w-5" />
                    </button>
                  </div>
                ) : (
                  <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium">
                    Out of Stock
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No products found matching your search.</p>
        </div>
      )}
    </div>
  );
};

export default Home;