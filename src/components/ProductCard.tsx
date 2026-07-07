import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Product } from '../types';
import { categories } from '../data/dairyData';
import { ShoppingCart } from 'lucide-react';
import { getCandidateImageUrls } from '../utils/imageHelper';

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
  onViewDetail?: (product: Product) => void;
  key?: React.Key;
}

export default function ProductCard({ product, onAddToCart, onViewDetail }: ProductCardProps) {
  const [isAdded, setIsAdded] = useState(false);
  const [candidateUrls, setCandidateUrls] = useState<string[]>([]);
  const [urlIndex, setUrlIndex] = useState(0);
  const [isImageFallback, setIsImageFallback] = useState(false);

  useEffect(() => {
    const urls = getCandidateImageUrls(product, 1);
    setCandidateUrls(urls);
    setUrlIndex(0);
    setIsImageFallback(false);
  }, [product]);

  const finalName = product.gujaratiName || product.name;
  const finalPrice = product.price;
  const finalCategory = product.category;
  const finalQuantity = product.unit || '';

  const cat = categories.find((c) => c.id === finalCategory);
  const badgeBg = cat ? cat.bgColor : 'bg-[#FFF8E1]';
  const badgeText = cat ? cat.textColor : 'text-[#FF9933]';
  const finalBadge = product.badge || '';

  const handleAddToCartClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent opening detail view when adding to cart
    if (onAddToCart) {
      onAddToCart(product);
      setIsAdded(true);
      setTimeout(() => setIsAdded(false), 1200);
    }
  };

  const handleCardClick = () => {
    if (onViewDetail) {
      onViewDetail(product);
    }
  };

  const handleImageError = () => {
    if (urlIndex < candidateUrls.length - 1) {
      setUrlIndex((prev) => prev + 1);
    } else {
      setIsImageFallback(true);
    }
  };

  const currentImageUrl = candidateUrls[urlIndex] || '';

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(62, 39, 35, 0.06)" }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      onClick={handleCardClick}
      className="product-card-hover group relative bg-white rounded-2xl border border-[#F0EAD6] p-3 sm:p-4 flex flex-col justify-between transition-all duration-200 cursor-pointer h-full select-none"
    >
      {/* Premium Badge */}
      {finalBadge && (
        <span className="absolute top-2.5 left-2.5 z-20 px-2 py-0.5 rounded-full text-[9px] font-black tracking-wider uppercase bg-[#FF9933] text-white shadow-xs">
          {finalBadge}
        </span>
      )}

      <div className="flex flex-col flex-grow">
        {/* Real Food Image (4:5 Ratio) */}
        <div className="relative w-full aspect-[4/5] mb-3 rounded-xl overflow-hidden bg-[#FAF6EE] flex items-center justify-center border border-[#F0EAD6]/50 shrink-0">
          {!isImageFallback && currentImageUrl ? (
            <img
              src={currentImageUrl}
              alt={product.name}
              referrerPolicy="no-referrer"
              className="product-image-hover w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              onError={handleImageError}
              loading="lazy"
            />
          ) : (
            /* Branded Cream Placeholder (No broken-image icon, NO emoji) */
            <div className="absolute inset-0 bg-gradient-to-br from-[#FFF8E1] to-[#FAF6EE] flex flex-col items-center justify-center p-3 text-center">
              <span className="text-[10px] font-black tracking-wider text-[#FF9933] uppercase">
                SHREE KHODIYAR
              </span>
              <span className="text-[8px] font-medium text-[#C5A059] uppercase tracking-widest mt-0.5">
                BABRA • ESTD 1996
              </span>
              <div className="mt-3 px-2 py-1 rounded bg-white/60 border border-[#F0EAD6] text-[9px] font-extrabold text-[#C5A059] uppercase tracking-wider">
                Image coming soon
              </div>
            </div>
          )}
        </div>

        {/* Category & Weight Tags */}
        <div className="flex items-center justify-between mb-2 shrink-0">
          <span className={`text-[9px] font-extrabold px-2 py-0.5 rounded-md uppercase tracking-wider ${badgeBg} ${badgeText}`}>
            {cat?.name || 'Other Dairy'}
          </span>
          {finalQuantity && (
            <span className="text-[10px] text-[#C5A059] font-extrabold font-mono bg-[#FAF6EE] px-1.5 py-0.5 rounded border border-[#F0EAD6]">
              {finalQuantity}
            </span>
          )}
        </div>

        {/* Gujarati Title Only (Strict Language Rule) */}
        <h3 className="text-sm sm:text-base font-black text-[#3E2723] leading-tight group-hover:text-[#FF9933] transition-colors duration-200 line-clamp-2 mb-3">
          {finalName}
        </h3>
      </div>

      {/* Price & CTA Section (Stays at the bottom of the card) */}
      <div className="mt-auto pt-2 border-t border-[#F0EAD6] flex flex-col gap-2 shrink-0">
        <div className="flex items-center justify-between">
          <span className="text-[10px] text-[#C5A059] font-bold uppercase tracking-wider">Price</span>
          <div className="flex items-baseline">
            <span className="text-[10px] font-bold text-[#3E2723] mr-0.5">₹</span>
            <span className="text-base sm:text-lg font-black text-[#3E2723] tracking-tight">
              {finalPrice}
            </span>
          </div>
        </div>

        {/* Compact Add to Cart Button */}
        <motion.button
          whileTap={{ scale: 0.96 }}
          onClick={handleAddToCartClick}
          className={`button-glow-hover w-full py-2 px-2.5 rounded-xl text-xs font-black tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer z-10 ${
            isAdded
              ? 'bg-[#10B981] text-white shadow-sm'
              : 'bg-[#FF9933] hover:bg-[#E68A00] text-white shadow-xs shadow-[#FF9933]/10'
          }`}
        >
          <ShoppingCart className="w-3.5 h-3.5 shrink-0" />
          <AnimatePresence mode="wait">
            {isAdded ? (
              <motion.span
                key="added"
                initial={{ opacity: 0, y: 3 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -3 }}
                transition={{ duration: 0.1 }}
              >
                ADDED ✓
              </motion.span>
            ) : (
              <motion.span
                key="add"
                initial={{ opacity: 0, y: 3 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -3 }}
                transition={{ duration: 0.1 }}
              >
                ADD TO CART
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </motion.div>
  );
}
