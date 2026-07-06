import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import BottomNav from './components/BottomNav';
import HomeView from './components/HomeView';
import ProductsView from './components/ProductsView';
import CategoriesView from './components/CategoriesView';
import GalleryView from './components/GalleryView';
import AboutView from './components/AboutView';
import ContactView from './components/ContactView';
import CartView from './components/CartView';
import CheckoutView from './components/CheckoutView';
import ProductDetailView from './components/ProductDetailView';
import { Product, CartItem } from './types';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Load cart state from localStorage
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const stored = localStorage.getItem('khodiyar_cart');
      return stored ? JSON.parse(stored) : [];
    } catch (e) {
      return [];
    }
  });

  // Sync cart with localStorage
  useEffect(() => {
    localStorage.setItem('khodiyar_cart', JSON.stringify(cart));
  }, [cart]);

  const handleTabChange = (tabId: string) => {
    setSelectedProduct(null);
    setActiveTab(tabId);
  };

  // Cart helper functions
  const handleAddToCart = (product: Product, quantity: number = 1) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.product.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prevCart, { product, quantity }];
    });
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveFromCart(productId);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveFromCart = (productId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const totalCartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  // Render current tab content with smooth transitions
  const renderContent = () => {
    if (selectedProduct) {
      return (
        <ProductDetailView
          product={selectedProduct}
          onBack={() => setSelectedProduct(null)}
          onAddToCart={handleAddToCart}
          cart={cart}
          onUpdateQuantity={handleUpdateQuantity}
        />
      );
    }

    switch (activeTab) {
      case 'home':
        return (
          <HomeView
            setActiveTab={handleTabChange}
            setSelectedCategory={setSelectedCategory}
            onAddToCart={(prod) => handleAddToCart(prod, 1)}
            onViewDetail={setSelectedProduct}
          />
        );
      case 'products':
        return (
          <ProductsView
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            onAddToCart={(prod) => handleAddToCart(prod, 1)}
            onViewDetail={setSelectedProduct}
          />
        );
      case 'categories':
        return (
          <CategoriesView
            setActiveTab={handleTabChange}
            setSelectedCategory={setSelectedCategory}
          />
        );
      case 'gallery':
        return <GalleryView />;
      case 'about':
        return <AboutView setActiveTab={handleTabChange} />;
      case 'contact':
        return <ContactView />;
      case 'cart':
        return (
          <CartView
            cart={cart}
            onUpdateQuantity={handleUpdateQuantity}
            onRemoveFromCart={handleRemoveFromCart}
            onClearCart={handleClearCart}
            setActiveTab={handleTabChange}
          />
        );
      case 'checkout':
        return (
          <CheckoutView
            cart={cart}
            onClearCart={handleClearCart}
            setActiveTab={handleTabChange}
          />
        );
      default:
        return (
          <HomeView
            setActiveTab={handleTabChange}
            setSelectedCategory={setSelectedCategory}
            onAddToCart={(prod) => handleAddToCart(prod, 1)}
            onViewDetail={setSelectedProduct}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#3E2723] flex flex-col selection:bg-[#FF9933]/10 selection:text-[#FF9933]">
      
      {/* Premium Top Navigation Header */}
      <Navbar activeTab={activeTab} setActiveTab={handleTabChange} cartCount={totalCartCount} />

      {/* Main Content Area with elegant fade-up animations on page transit */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedProduct ? `detail-${selectedProduct.id}` : activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="w-full"
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Sticky Mobile Bottom Navigation Panel */}
      <BottomNav activeTab={activeTab} setActiveTab={handleTabChange} cartCount={totalCartCount} />

    </div>
  );
}
