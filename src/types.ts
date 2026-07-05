export interface Product {
  id: string;
  name: string;
  gujaratiName: string;
  price: number;
  category: string; // matches Category ID
  unit: string; // e.g. "500g", "1 kg", "500 ml", "1 Litre"
  description: string;
  isBestSeller?: boolean;
  isFeatured?: boolean;
  badge?: string; // e.g. "Pure A2", "Live Kitchen", "Festival Special"
  illustrationType: 'milk' | 'ghee' | 'paneer' | 'shrikhand' | 'sweet' | 'buttermilk' | 'dahi' | 'pedha' | 'kaju-katli';
}

export interface Category {
  id: string;
  name: string;
  gujaratiName: string;
  description: string;
  iconName: string; // Lucide icon name
  bgColor: string; // e.g., warm cream/gold variations
  textColor: string;
  illustrationType: 'milk' | 'ghee' | 'paneer' | 'shrikhand' | 'sweet' | 'buttermilk' | 'dahi';
}

export interface Testimonial {
  id: string;
  name: string;
  gujaratiName?: string;
  rating: number;
  text: string;
  location: string;
  date: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  gujaratiTitle?: string;
  category: 'production' | 'sweets' | 'store' | 'festivals';
  description: string;
  illustrationType: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

