
import { Dish } from './types';

export const MENU_ITEMS: Dish[] = [
  {
    id: '1',
    name: 'Classic Pancakes',
    description: 'Fluffy buttermilk pancakes served with maple syrup and fresh berries.',
    price: 8.50,
    category: 'Breakfast',
    image: 'https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=800&q=80',
    calories: 450,
    isVegetarian: true
  },
  {
    id: '2',
    name: 'Avocado Toast',
    description: 'Sourdough bread topped with smashed avocado, chili flakes, and a poached egg.',
    price: 12.00,
    category: 'Breakfast',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80',
    calories: 380,
    isVegetarian: true,
    isPopular: true
  },
  {
    id: '3',
    name: 'Grilled Salmon Bowl',
    description: 'Fresh Atlantic salmon with quinoa, roasted broccoli, and lemon tahini dressing.',
    price: 18.50,
    category: 'Lunch',
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80',
    calories: 520,
    isVegetarian: false,
    isPopular: true
  },
  {
    id: '4',
    name: 'Chickpea Curry',
    description: 'Spicy and aromatic chickpea curry served with basmati rice and garlic naan.',
    price: 14.00,
    category: 'Lunch',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80',
    calories: 610,
    isVegetarian: true
  },
  {
    id: '5',
    name: 'Signature Burger',
    description: 'Prime beef patty, cheddar cheese, caramelized onions, and secret sauce.',
    price: 15.50,
    category: 'Lunch',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
    calories: 850,
    isVegetarian: false,
    isPopular: true
  },
  {
    id: '6',
    name: 'Sweet Potato Fries',
    description: 'Crispy sweet potato fries with a side of chipotle mayo.',
    price: 6.00,
    category: 'Snacks',
    image: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=800&q=80',
    calories: 320,
    isVegetarian: true
  },
  {
    id: '7',
    name: 'Cold Brew Coffee',
    description: '12-hour steeped smooth cold brew with optional oat milk.',
    price: 4.50,
    category: 'Beverages',
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=800&q=80',
    calories: 5,
    isVegetarian: true
  },
  {
    id: '8',
    name: 'Fresh Berry Smoothie',
    description: 'Mixed berries, greek yogurt, honey, and chia seeds.',
    price: 7.50,
    category: 'Beverages',
    image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=800&q=80',
    calories: 210,
    isVegetarian: true
  }
];
