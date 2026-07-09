import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Home, ShoppingBag, Phone, ShoppingCart } from 'lucide-react';
import { getGeneralWhatsAppUrl, STORE_PHONE } from '../data/dairyData';
import WhatsAppIcon from './WhatsAppIcon';

interface BottomNavProps {
  cartCount: number;
}

export default function BottomNav({ cartCount }: BottomNavProps) {
  const location = useLocation();
  const navigate = useNavigate();

  const getActiveTab = () => {
    const path = location.pathname;
    if (path === '/') return 'home';
    if (path.startsWith('/products') || path.startsWith('/product/')) return 'products';
    if (path.startsWith('/cart')) return 'cart';
    return '';
  };

  const activeTab = getActiveTab();

  const handleNavClick = (path: string) => {
    navigate(path);
  };

  const whatsappUrl = getGeneralWhatsAppUrl();
  const cleanPhoneNum = STORE_PHONE.replace(/\s+/g, '');

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-[105] bg-[#FDFBF7]/95 backdrop-blur-lg border-t border-[#F0EAD6] py-2 px-3 shadow-[0_-10px_25px_rgba(62,39,35,0.06)]">
      <div className="max-w-md mx-auto flex items-center justify-between">
        
        {/* Home Button */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => handleNavClick('/')}
          className={`flex flex-col items-center justify-center w-12 py-1 transition-colors cursor-pointer ${
            activeTab === 'home' ? 'text-[#FF9933]' : 'text-[#C5A059] hover:text-[#3E2723]'
          }`}
        >
          <Home className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] font-black tracking-wide">Home</span>
        </motion.button>

        {/* Shop Button */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => handleNavClick('/products')}
          className={`flex flex-col items-center justify-center w-12 py-1 transition-colors cursor-pointer ${
            activeTab === 'products' ? 'text-[#FF9933]' : 'text-[#C5A059] hover:text-[#3E2723]'
          }`}
        >
          <ShoppingBag className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] font-black tracking-wide">Shop</span>
        </motion.button>

        {/* Floating WhatsApp Center Button */}
        <div className="relative -mt-6">
          <motion.a
            initial={{ scale: 1 }}
            animate={{ 
              scale: [1, 1.05, 1],
              boxShadow: [
                "0 4px 14px rgba(37, 211, 102, 0.3)",
                "0 6px 20px rgba(37, 211, 102, 0.5)",
                "0 4px 14px rgba(37, 211, 102, 0.3)"
              ]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            whileTap={{ scale: 0.95 }}
            href={whatsappUrl}
            target="_blank"
            referrerPolicy="no-referrer"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 transition-transform duration-200 ring-4 ring-[#FDFBF7]"
            aria-label="Order on WhatsApp"
          >
            <WhatsAppIcon className="w-7 h-7" />
          </motion.a>
          <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-[9px] font-black text-[#25D366] whitespace-nowrap tracking-wider">
            ORDER NOW
          </span>
        </div>

        {/* Cart Button */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => handleNavClick('/cart')}
          className={`flex flex-col items-center justify-center w-12 py-1 transition-colors cursor-pointer relative ${
            activeTab === 'cart' ? 'text-[#FF9933]' : 'text-[#C5A059] hover:text-[#3E2723]'
          }`}
        >
          <ShoppingCart className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] font-black tracking-wide">Cart</span>
          {cartCount > 0 && (
            <span className="absolute top-0 right-0 min-w-[16px] h-4 px-1 rounded-full bg-red-500 text-white text-[9px] font-black font-mono flex items-center justify-center border border-[#FDFBF7] animate-pulse">
              {cartCount}
            </span>
          )}
        </motion.button>

        {/* Call Button */}
        <motion.a
          whileTap={{ scale: 0.9 }}
          href={`tel:${cleanPhoneNum}`}
          className="flex flex-col items-center justify-center w-12 py-1 text-[#C5A059] hover:text-[#3E2723] transition-colors"
        >
          <Phone className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] font-black tracking-wide">Call</span>
        </motion.a>

      </div>
    </div>
  );
}
