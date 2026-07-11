import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useParams, useNavigate, useLocation } from 'react-router-dom';
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
import GrandOpening from './components/GrandOpening';
import { Product, CartItem } from './types';
import { products } from './data/dairyData';
import { motion, AnimatePresence } from 'motion/react';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname, search]);

  return null;
}

// Product detail lookup and route wrapper
interface ProductDetailRouteWrapperProps {
  onAddToCart: (product: Product, quantity?: number) => void;
  cart: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
}

function ProductDetailRouteWrapper({
  onAddToCart,
  cart,
  onUpdateQuantity
}: ProductDetailRouteWrapperProps) {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();

  const product = products.find((p) => p.id === productId);

  useEffect(() => {
    if (!product && productId) {
      navigate('/products', { replace: true });
    }
  }, [product, productId, navigate]);

  if (!product) return null;

  return (
    <ProductDetailView
      product={product}
      onBack={() => navigate(-1)}
      onAddToCart={onAddToCart}
      cart={cart}
      onUpdateQuantity={onUpdateQuantity}
    />
  );
}

function AppContent() {
  const location = useLocation();
  const navigate = useNavigate();

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

  const [isSiteUnlocked, setIsSiteUnlocked] = useState(() => {
    try {
      return localStorage.getItem('khodiyar-intro-played') === 'true';
    } catch (e) {
      return false;
    }
  });

  const totalCartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const handleViewDetail = (product: Product) => {
    navigate(`/product/${product.id}`);
  };

  return (
    <>
      {!isSiteUnlocked && (
        <GrandOpening onComplete={() => setIsSiteUnlocked(true)} />
      )}

      <div 
        className={`min-h-screen bg-[#FDFBF7] text-[#3E2723] flex flex-col selection:bg-[#FF9933]/10 selection:text-[#FF9933] transition-opacity duration-1000 ease-out ${
          isSiteUnlocked ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden pointer-events-none'
        }`}
      >
        <ScrollToTop />

        {/* Premium Top Navigation Header */}
        <Navbar cartCount={totalCartCount} />

        {/* Main Content Area with elegant fade-up animations on page transit */}
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              className="w-full"
            >
              <Routes location={location}>
                <Route
                  path="/"
                  element={
                    <HomeView
                      onAddToCart={(prod) => handleAddToCart(prod, 1)}
                      onViewDetail={handleViewDetail}
                    />
                  }
                />
                <Route
                  path="/products"
                  element={
                    <ProductsView
                      onAddToCart={(prod) => handleAddToCart(prod, 1)}
                      onViewDetail={handleViewDetail}
                    />
                  }
                />
                <Route path="/categories" element={<CategoriesView />} />
                <Route path="/gallery" element={<GalleryView />} />
                <Route path="/about" element={<AboutView />} />
                <Route path="/contact" element={<ContactView />} />
                <Route
                  path="/cart"
                  element={
                    <CartView
                      cart={cart}
                      onUpdateQuantity={handleUpdateQuantity}
                      onRemoveFromCart={handleRemoveFromCart}
                      onClearCart={handleClearCart}
                    />
                  }
                />
                <Route
                  path="/checkout"
                  element={
                    <CheckoutView
                      cart={cart}
                      onClearCart={handleClearCart}
                    />
                  }
                />
                <Route
                  path="/product/:productId"
                  element={
                    <ProductDetailRouteWrapper
                      onAddToCart={handleAddToCart}
                      cart={cart}
                      onUpdateQuantity={handleUpdateQuantity}
                    />
                  }
                />
                <Route
                  path="*"
                  element={
                    <HomeView
                      onAddToCart={(prod) => handleAddToCart(prod, 1)}
                      onViewDetail={handleViewDetail}
                    />
                  }
                />
              </Routes>
            </motion.div>
          </AnimatePresence>
        </main>

        {/* Sticky Mobile Bottom Navigation Panel */}
        <BottomNav cartCount={totalCartCount} />
      </div>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
