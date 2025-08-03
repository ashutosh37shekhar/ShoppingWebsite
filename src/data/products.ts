import { Product } from '../types/Product';

export const products: Product[] = [
  {
    id: '1',
    name: 'Basmati Rice',
    price: 120,
    image: 'https://images.pexels.com/photos/723198/pexels-photo-723198.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'grains',
    unit: 'kg',
    description: 'Premium quality basmati rice',
    inStock: true
  },
  {
    id: '2',
    name: 'Whole Wheat Flour',
    price: 45,
    image: 'https://images.pexels.com/photos/4110256/pexels-photo-4110256.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'grains',
    unit: 'kg',
    description: 'Fresh ground whole wheat flour',
    inStock: true
  },
  {
    id: '3',
    name: 'Red Lentils (Masoor Dal)',
    price: 85,
    image: 'https://images.pexels.com/photos/4198012/pexels-photo-4198012.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'pulses',
    unit: 'kg',
    description: 'High quality red lentils',
    inStock: true
  },
  {
    id: '4',
    name: 'Sunflower Oil',
    price: 180,
    image: 'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=500',
    category: 'oils',
    unit: 'liter',
    description: 'Pure sunflower cooking oil',
    inStock: true
  },
  {
    id: '5',
    name: 'Brown Sugar',
    price: 65,
    image: 'https://images.pexels.com/photos/65882/brown-sugar-sugar-food-sweet-65882.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'spices',
    unit: 'kg',
    description: 'Natural brown sugar',
    inStock: true
  },
  {
    id: '6',
    name: 'Green Tea',
    price: 95,
    image: 'https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'beverages',
    unit: '100g',
    description: 'Premium green tea leaves',
    inStock: true
  },
  {
    id: '7',
    name: 'Fresh Tomatoes',
    price: 40,
    image: 'https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'vegetables',
    unit: 'kg',
    description: 'Farm fresh red tomatoes',
    inStock: true
  },
  {
    id: '8',
    name: 'White Onions',
    price: 30,
    image: 'https://images.pexels.com/photos/144248/potatoes-vegetables-erdfrucht-bio-144248.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'vegetables',
    unit: 'kg',
    description: 'Fresh white onions',
    inStock: true
  }
];

export const categories = [
  { id: 'all', name: 'All Items' , image: 'https://images.pexels.com/photos/723198/pexels-photo-723198.jpeg?auto=compress&cs=tinysrgb&w=500'},
  { id: 'grains', name: 'Grains & Cereals', image: 'https://images.pexels.com/photos/164077/pexels-photo-164077.jpeg?auto=compress&cs=tinysrgb&w=500' },
  { id: 'pulses', name: 'Pulses & Legumes', image: 'https://images.pexels.com/photos/164077/pexels-photo-164077.jpeg?auto=compress&cs=tinysrgb&w=500' },
  { id: 'oils', name: 'Oils & Ghee', image: 'https://images.pexels.com/photos/164077/pexels-photo-164077.jpeg?auto=compress&cs=tinysrgb&w=500' },
  { id: 'spices', name: 'Spices & Condiments', image: 'https://images.pexels.com/photos/164077/pexels-photo-164077.jpeg?auto=compress&cs=tinysrgb&w=500' },
  { id: 'vegetables', name: 'Fresh Vegetables', image: 'https://images.pexels.com/photos/164077/pexels-photo-164077.jpeg?auto=compress&cs=tinysrgb&w=500' },
  { id: 'beverages', name: 'Beverages', image: 'https://images.pexels.com/photos/164077/pexels-photo-164077.jpeg?auto=compress&cs=tinysrgb&w=500' }
];
