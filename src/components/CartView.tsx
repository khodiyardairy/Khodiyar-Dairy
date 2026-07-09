import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { CartItem } from '../types';
import { Minus, Plus, Trash2, ArrowRight, ShoppingBag } from 'lucide-react';
import { categories } from '../data/dairyData';
import { getCandidateImageUrls } from '../utils/imageHelper';

interface CartViewProps {
  cart: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveFromCart: (productId: string) => void;
  onClearCart: () => void;
}

export default function CartView({
  cart,
  onUpdateQuantity,
  onRemoveFromCart,
  onClearCart
}: CartViewProps) {
  const navigate = useNavigate();
  const subtotal = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  // Helper for image fallback or emoji matching
  const getImagePlaceholder = (category: string) => {
    return category === 'liquid' ? '🥛' : category === 'shrikhand_matho' ? '🥣' : '✨';
  };

  if (cart.length === 0) {
    return (
      <div className="py-16 px-4 max-w-lg mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-3xl border border-[#F0EAD6] p-8 sm:p-12 shadow-xs"
        >
          <div className="w-20 h-20 rounded-full bg-[#FFF8E1] flex items-center justify-center mx-auto mb-6 text-4xl">
            🥣
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-[#3E2723] mb-2">
            Your Cart is Empty
          </h2>
          <p className="text-sm text-[#C5A059] font-bold mb-6 uppercase tracking-wider">
            Your Cart is Empty!
          </p>
          <p className="text-xs sm:text-sm text-[#3E2723]/60 mb-8 max-w-xs mx-auto leading-relaxed">
            Add our fresh, premium milk sweets, shrikhand, or delicious liquid beverages to your cart to order them on WhatsApp.
          </p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate('/products')}
            className="w-full py-3.5 px-6 rounded-2xl bg-[#FF9933] hover:bg-[#E68A00] text-white text-sm font-black uppercase tracking-wider shadow-md shadow-[#FF9933]/15 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <ShoppingBag className="w-4 h-4" />
            Shop Premium Dairy
          </motion.button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="py-6 px-4 max-w-2xl mx-auto pb-24">
      {/* Page Title */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-black text-[#3E2723]">Your Cart</h2>
          <p className="text-xs text-[#C5A059] font-bold uppercase tracking-wider">
            Your Selected Items ({totalItems})
          </p>
        </div>
        <button
          onClick={onClearCart}
          className="text-xs text-red-500 hover:text-red-700 font-bold uppercase tracking-wider focus:outline-none flex items-center gap-1.5"
        >
          <Trash2 className="w-3.5 h-3.5" />
          Clear All
        </button>
      </div>

      {/* Cart Items List */}
      <div className="flex flex-col gap-4 mb-6">
        {cart.map((item) => {
          const cat = categories.find((c) => c.id === item.product.category);
          const cleanEnglishName = item.product.name.toLowerCase().replace(/[^a-z0-9]/g, '');
          const fallbackEmoji = getImagePlaceholder(item.product.category);

          return (
            <motion.div
              key={item.product.id}
              layout
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, x: -10 }}
              className="bg-white rounded-2xl border border-[#F0EAD6] p-3 sm:p-4 flex gap-3 sm:gap-4 items-center shadow-xs"
            >
              {/* Product Thumbnail with basic fallback */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-[#FAF6EE] flex items-center justify-center overflow-hidden border border-[#F0EAD6]/50 shrink-0 relative">
                <img
                  src={getCandidateImageUrls(item.product, 1)[0]}
                  alt={item.product.name}
                  className="w-full h-full object-cover relative z-10"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = 'none';
                  }}
                />
                <span className="text-2xl select-none absolute" style={{ zIndex: 1 }}>
                  {fallbackEmoji}
                </span>
              </div>

              {/* Product Details */}
              <div className="flex-grow">
                <span className="text-[9px] font-black uppercase text-[#C5A059] tracking-wider">
                  {cat?.name || 'Dairy'} • {item.product.unit}
                </span>
                <h3 className="text-sm sm:text-base font-black text-[#3E2723] leading-tight mt-0.5">
                  {item.product.gujaratiName || item.product.name}
                </h3>
                <p className="text-xs font-bold text-[#C5A059] mt-0.5">
                  ₹{item.product.price} / {item.product.unit}
                </p>
              </div>

              {/* Quantity Adjuster & Total Price */}
              <div className="flex flex-col items-end gap-2.5 shrink-0">
                <div className="flex items-center bg-[#FAF6EE] border border-[#F0EAD6] rounded-xl overflow-hidden">
                  <button
                    onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                    className="p-1.5 sm:p-2 text-[#3E2723] hover:bg-[#F5EFE6] active:scale-95 transition-all focus:outline-none cursor-pointer"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="px-2.5 sm:px-3 text-xs font-black text-[#3E2723] font-mono">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                    className="p-1.5 sm:p-2 text-[#3E2723] hover:bg-[#F5EFE6] active:scale-95 transition-all focus:outline-none cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs sm:text-sm font-black text-[#3E2723] font-mono">
                    ₹{item.product.price * item.quantity}
                  </span>
                  <button
                    onClick={() => onRemoveFromCart(item.product.id)}
                    className="text-[#3E2723]/40 hover:text-red-500 p-1 rounded-lg hover:bg-red-50 transition-colors focus:outline-none cursor-pointer"
                    aria-label="Remove item"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Cart Summary & Checkout Trigger */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-3xl border border-[#F0EAD6] p-4 sm:p-6 shadow-sm flex flex-col gap-4"
      >
        <div className="flex justify-between items-baseline py-1">
          <span className="text-xs sm:text-sm text-[#C5A059] font-bold uppercase tracking-wider">Subtotal</span>
          <div className="flex items-baseline">
            <span className="text-sm font-bold text-[#3E2723] mr-0.5">₹</span>
            <span className="text-xl sm:text-2xl font-black text-[#3E2723] tracking-tight font-mono">
              {subtotal}
            </span>
          </div>
        </div>

        <p className="text-[11px] text-[#3E2723]/60 bg-[#FAF6EE] p-3 rounded-xl border border-[#F0EAD6] leading-relaxed">
          * Note: Delivery charges and taxes are calculated during WhatsApp communication based on your exact delivery address in Babra or surrounding areas.
        </p>

        <motion.button
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          onClick={() => navigate('/checkout')}
          className="w-full py-4 px-6 rounded-2xl bg-[#FF9933] hover:bg-[#E68A00] text-white text-sm font-black uppercase tracking-wider shadow-md shadow-[#FF9933]/15 transition-all flex items-center justify-center gap-2 cursor-pointer"
        >
          Proceed to Order
          <ArrowRight className="w-4 h-4" />
        </motion.button>
      </motion.div>
    </div>
  );
}
