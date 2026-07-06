import React from 'react';
import { motion } from 'motion/react';
import { Home, ShoppingBag, Phone, ShoppingCart } from 'lucide-react';
import { getGeneralWhatsAppUrl, STORE_PHONE } from '../data/dairyData';

interface BottomNavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  cartCount: number;
}

export default function BottomNav({ activeTab, setActiveTab, cartCount }: BottomNavProps) {
  const handleNavClick = (tabId: string) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = getGeneralWhatsAppUrl();
  const cleanPhoneNum = STORE_PHONE.replace(/\s+/g, '');

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-[105] bg-[#FDFBF7]/95 backdrop-blur-lg border-t border-[#F0EAD6] py-2 px-3 shadow-[0_-10px_25px_rgba(62,39,35,0.06)]">
      <div className="max-w-md mx-auto flex items-center justify-between">
        
        {/* Home Button */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => handleNavClick('home')}
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
          onClick={() => handleNavClick('products')}
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
            <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.18 1.449 4.725 1.451 5.435.002 9.851-4.388 9.854-9.842.002-2.641-1.02-5.124-2.877-6.986-1.855-1.859-4.325-2.885-6.963-2.887-5.438 0-9.856 4.387-9.86 9.843-.002 1.951.512 3.851 1.493 5.557l-.989 3.602 3.707-.973zm8.211-12.234c.453.01.7.079.81.124.113.045.24.114.336.221.161.18.545.943.545 2.1 0 1.157-.843 2.276-.963 2.425-.12.15-1.624 2.583-3.992 3.518-.565.222-1.002.355-1.343.463-.569.18-1.084.155-1.491.094-.455-.069-1.399-.571-1.595-1.122-.196-.551-.196-1.025-.138-1.122.059-.098.218-.15.459-.272.242-.12 1.399-.691 1.61-.767.21-.075.362-.113.512.113.15.225.578.767.708.916.13.15.26.166.5.045.241-.12.981-.362 1.868-1.154.689-.615 1.153-1.373 1.288-1.602.135-.228.014-.351-.1-.472-.104-.108-.242-.272-.362-.41-.12-.135-.16-.228-.24-.381-.08-.154-.04-.288-.02-.41.02-.12.196-.867.271-1.047.071-.18.15-.15.218-.15z" />
            </svg>
          </motion.a>
          <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-[9px] font-black text-[#25D366] whitespace-nowrap tracking-wider">
            ORDER NOW
          </span>
        </div>

        {/* Cart Button */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => handleNavClick('cart')}
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
