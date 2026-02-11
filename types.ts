
export type Category = 'All' | 'Breakfast' | 'Lunch' | 'Snacks' | 'Beverages';

export interface Dish {
  id: string;
  name: string;
  description: string;
  price: number;
  category: Category;
  image: string;
  calories: number;
  isVegetarian: boolean;
  isPopular?: boolean;
}

export interface CartItem extends Dish {
  quantity: number;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
