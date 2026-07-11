import React, { useState, useEffect } from 'react';
import { Routes, Route, useParams, useNavigate, useLocation } from 'react-router-dom';
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
import GrandOpeningIntro from './components/GrandOpening';
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

const FORCE_SHOW_INTRO = true;

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const stored = localStorage.getItem('khodiyar_cart');
      return stored ? JSON.parse(stored) : [];
    } catch (e) {
      return [];
    }
  });

  const [isLoading, setIsLoading] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [introCompleted, setIntroCompleted] = useState(false);

  console.log("isLoading", isLoading);
  console.log("showIntro", showIntro);
  console.log("introCompleted", introCompleted);

  const [isSiteUnlocked, setIsSiteUnlocked] = useState(false);
  const [isCheckingStatus, setIsCheckingStatus] = useState(false);
  const [cutsRemaining, setCutsRemaining] = useState(2);
  const [showGrandToast, setShowGrandToast] = useState(false);

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

  const totalCartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const handleViewDetail = (product: Product) => {
    navigate(`/product/${product.id}`);
  };

  useEffect(() => {
    // Check if the URL requests a reset of the grand opening status
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('reset') || urlParams.has('ribbon')) {
      try {
        localStorage.removeItem('khodiyar-intro-played');
      } catch (e) {}
      
      // Clean up the URL query parameter so we don't loop endlessly
      const newUrl = window.location.pathname;
      window.history.replaceState({}, document.title, newUrl);
      
      // Call the API reset, then fetch the status
      fetch('/api/reset-grand-opening', { method: 'POST' })
        .then(() => {
          fetchStatus();
        })
        .catch(() => {
          fetchStatus();
        });
      return;
    }

    fetchStatus();

    function fetchStatus() {
      // If FORCE_SHOW_INTRO is enabled, we always show the intro
      if (FORCE_SHOW_INTRO) {
        // Fetch status to display cuts remaining count on card
        fetch('/api/grand-opening-status')
          .then((res) => {
            if (!res.ok) throw new Error('API error');
            return res.json();
          })
          .then((data) => {
            setCutsRemaining(data.cutsRemaining ?? 0);
          })
          .catch((err) => {
            console.error('Error fetching grand opening status (forced intro):', err);
            setCutsRemaining(0);
          })
          .finally(() => {
            setIsSiteUnlocked(false);
            setIsCheckingStatus(false);
          });
        return;
      }

      // Check local storage first to prevent API requests for already-unlocked devices
      try {
        const hasPlayed = localStorage.getItem('khodiyar-intro-played') === 'true';
        if (hasPlayed) {
          setIsSiteUnlocked(true);
          setIsCheckingStatus(false);
          return;
        }
      } catch (e) {
        console.warn('localStorage not available:', e);
      }

      // Check server status
      fetch('/api/grand-opening-status')
        .then((res) => {
          if (!res.ok) {
            throw new Error('KV API error');
          }
          return res.json();
        })
        .then((data) => {
          if (data.cutsRemaining > 0) {
            setCutsRemaining(data.cutsRemaining);
            setIsSiteUnlocked(false);
          } else {
            // If no cuts remaining (already cut by other devices), directly unlock
            setIsSiteUnlocked(true);
            setShowGrandToast(true);
            // Automatically hide toast after 5 seconds
            setTimeout(() => {
              setShowGrandToast(false);
            }, 5000);
          }
        })
        .catch((err) => {
          console.error('Error checking grand opening status:', err);
          // API is down or unavailable: skip the intro and directly unlock
          setIsSiteUnlocked(true);
        })
        .finally(() => {
          setIsCheckingStatus(false);
        });
    }
  }, []);

  if (showIntro) {
    return (
      <GrandOpeningIntro 
        initialCutsRemaining={2} 
        onComplete={() => {
          console.log("onComplete called");
          setIntroCompleted(true);
          setShowIntro(false);
          setIsSiteUnlocked(true);
        }} 
      />
    );
  }

  if (isCheckingStatus) {
    return (
      <div className="fixed inset-0 bg-[#FAF6EE] flex items-center justify-center z-[999999] select-none pointer-events-none">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-10 h-10 border-4 border-[#C5A059] border-t-transparent rounded-full animate-spin" />
          <p className="text-xs font-black uppercase tracking-[0.2em] text-[#3E2723]/60">
            Loading...
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Toast notification if ribbon was already cut by others */}
      <AnimatePresence>
        {showGrandToast && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="fixed top-20 right-4 sm:right-6 z-[9999] bg-[#3E2723] text-white border border-[#D4AF37] px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3 max-w-sm"
          >
            <div className="bg-[#D4AF37]/20 p-1.5 rounded-full text-[#D4AF37] text-lg">
              ✨
            </div>
            <div>
              <h4 className="font-extrabold text-[11px] uppercase tracking-wider text-[#D4AF37]">
                GRAND OPENING
              </h4>
              <p className="text-xs font-medium text-amber-50/90 mt-0.5">
                The grand opening ribbon has already been cut. Welcome!
              </p>
            </div>
            <button 
              onClick={() => setShowGrandToast(false)}
              className="text-white/40 hover:text-white text-xs font-black ml-2 focus:outline-none"
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {!isSiteUnlocked && (
        <GrandOpeningIntro 
          initialCutsRemaining={cutsRemaining} 
          onComplete={() => setIsSiteUnlocked(true)} 
        />
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
