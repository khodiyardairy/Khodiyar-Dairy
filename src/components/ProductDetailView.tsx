import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { Product } from '../types';
import { ChevronLeft, Plus, Minus, ShoppingCart } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { getCandidateImageUrls } from '../utils/imageHelper';
import { categories, products } from '../data/dairyData';

// Let's declare the custom WhatsApp generator locally as well just in case, or import it if we add it to dairyData.ts.
// Let's define it inside this file so it is fully self-contained and robust!
import { WHATSAPP_NUMBER } from '../data/dairyData';

function getCustomWhatsAppUrl(productNameGu: string, price: number, unit: string, qty: number): string {
  const totalPrice = price * qty;
  const baseText = `*Khodiyar Dairy (Babra)*\n\nHello, I would like to order this product:\n\n• *Product:* ${productNameGu}\n• *Quantity:* ${qty}\n• *Packing:* ${unit}\n• *Total Price:* ₹${totalPrice}\n\nPlease confirm this order. Thank you!`;
  const encodedText = encodeURIComponent(baseText);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`;
}

interface ProductDetailViewProps {
  product: Product;
  onBack: () => void;
  onAddToCart: (product: Product, quantity: number) => void;
  cart: { product: Product; quantity: number }[];
  onUpdateQuantity?: (productId: string, quantity: number) => void;
}

interface RelatedProductCardProps {
  product: Product;
  onClick: () => void;
  key?: React.Key;
}

function RelatedProductCard({ product, onClick }: RelatedProductCardProps) {
  const [candidateUrls, setCandidateUrls] = useState<string[]>([]);
  const [urlIndex, setUrlIndex] = useState(0);
  const [isImageFallback, setIsImageFallback] = useState(false);

  useEffect(() => {
    const urls = getCandidateImageUrls(product, 1);
    setCandidateUrls(urls);
    setUrlIndex(0);
    setIsImageFallback(false);
  }, [product]);

  const handleImageError = () => {
    if (urlIndex < candidateUrls.length - 1) {
      setUrlIndex((prev) => prev + 1);
    } else {
      setIsImageFallback(true);
    }
  };

  const currentImageUrl = candidateUrls[urlIndex] || '';

  const cat = categories.find((c) => c.id === product.category);
  const badgeBg = cat ? cat.bgColor : 'bg-[#FFF8E1]';
  const badgeText = cat ? cat.textColor : 'text-[#FF9933]';

  return (
    <div
      onClick={onClick}
      className="group bg-[#FDFBF7] hover:bg-white active:scale-[0.98] border border-[#F0EAD6] hover:border-[#FF9933]/60 rounded-xl p-2.5 flex flex-col justify-between transition-all duration-200 cursor-pointer shadow-2xs hover:shadow-md select-none h-full text-left"
    >
      <div className="space-y-2">
        {/* Compact Image (1:1 aspect ratio) */}
        <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-white flex items-center justify-center border border-[#F0EAD6]/40 shrink-0">
          {!isImageFallback && currentImageUrl ? (
            <img
              src={currentImageUrl}
              alt={product.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              onError={handleImageError}
              loading="lazy"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-[#FFF8E1] to-[#FAF6EE] flex flex-col items-center justify-center p-2 text-center">
              <span className="text-[8px] sm:text-[9px] font-black tracking-wider text-[#FF9933] uppercase">
                KHODIYAR
              </span>
              <span className="text-[6px] sm:text-[7px] font-medium text-[#C5A059] uppercase tracking-widest mt-0.5">
                ESTD 1996
              </span>
            </div>
          )}
        </div>

        {/* Product Names (English & Gujarati) */}
        <div className="space-y-0.5 px-0.5">
          <span className={`inline-block text-[8px] font-extrabold px-1.5 py-0.5 rounded ${badgeBg} ${badgeText} uppercase tracking-wider mb-1`}>
            {cat?.name || 'Dairy'}
          </span>
          <h5 className="text-[11px] sm:text-xs font-black text-[#3E2723] line-clamp-2 leading-tight tracking-wide group-hover:text-[#FF9933] transition-colors duration-150">
            {product.name}
          </h5>
          {product.gujaratiName && (
            <span className="block text-[9px] sm:text-[10px] font-bold text-[#C5A059] truncate">
              {product.gujaratiName}
            </span>
          )}
        </div>
      </div>

      {/* Pricing & Call-to-action button */}
      <div className="mt-2.5 space-y-1.5 px-0.5">
        <div className="text-[10px] sm:text-xs text-[#3E2723]/85 font-semibold">
          Price: <span className="font-extrabold text-[#3E2723]">₹{product.price}</span> / {product.unit || 'kg'}
        </div>
        <button className="w-full bg-[#FF9933]/10 hover:bg-[#FF9933] group-hover:bg-[#FF9933] text-[#FF9933] group-hover:text-white transition-all duration-150 py-1.5 rounded-lg text-[9px] sm:text-[10px] font-black uppercase tracking-wider border border-[#FF9933]/15 text-center block">
          View Product
        </button>
      </div>
    </div>
  );
}

export default function ProductDetailView({
  product,
  onBack,
  onAddToCart,
  cart,
  onUpdateQuantity
}: ProductDetailViewProps) {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [activeImageIndex, setActiveImageIndex] = useState(1);
  const [mainImgUrl, setMainImgUrl] = useState('');
  const [isMainFallback, setIsMainFallback] = useState(false);

  // States to keep track of which multiple images failed to load
  const [failedImageIndices, setFailedImageIndices] = useState<Record<number, boolean>>({});
  
  // Track candidates for each index
  const [candidateUrlsMap, setCandidateUrlsMap] = useState<Record<number, string[]>>({});
  const [urlIndicesMap, setUrlIndicesMap] = useState<Record<number, number>>({});

  useEffect(() => {
    setQuantity(1);
    setActiveImageIndex(1);
    setIsMainFallback(false);
    setFailedImageIndices({});

    // Initialize candidates for images 1 and 2
    const initialUrlsMap: Record<number, string[]> = {
      1: getCandidateImageUrls(product, 1),
      2: getCandidateImageUrls(product, 2)
    };
    setCandidateUrlsMap(initialUrlsMap);

    const initialIndicesMap: Record<number, number> = { 1: 0, 2: 0 };
    setUrlIndicesMap(initialIndicesMap);

    setMainImgUrl(initialUrlsMap[1]?.[0] || '');
  }, [product]);

  // Handle active image index change
  useEffect(() => {
    const urls = candidateUrlsMap[activeImageIndex];
    const index = urlIndicesMap[activeImageIndex] || 0;
    if (urls && urls[index]) {
      setMainImgUrl(urls[index]);
      setIsMainFallback(false);
    } else {
      setIsMainFallback(true);
    }
  }, [activeImageIndex, candidateUrlsMap, urlIndicesMap]);

  const finalName = product.gujaratiName || product.name;
  const finalPrice = product.price;
  const finalCategory = product.category;
  const finalQuantity = product.unit || '';
  const finalDescription = product.description || '';

  const cat = categories.find((c) => c.id === finalCategory);
  const badgeBg = cat ? cat.bgColor : 'bg-[#FFF8E1]';
  const badgeText = cat ? cat.textColor : 'text-[#FF9933]';

  const handleMinus = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handlePlus = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleAddToCartClick = () => {
    onAddToCart(product, quantity);
    // Temporary confirmation overlay or message could be added, but keeping it simple and elegant
  };

  // Error handling for main image load
  const handleMainImageError = () => {
    const currentIndex = urlIndicesMap[activeImageIndex] || 0;
    const candidates = candidateUrlsMap[activeImageIndex] || [];
    
    if (currentIndex < candidates.length - 1) {
      const nextIndex = currentIndex + 1;
      setUrlIndicesMap((prev) => ({ ...prev, [activeImageIndex]: nextIndex }));
      setMainImgUrl(candidates[nextIndex]);
    } else {
      // Mark this index as failed
      setFailedImageIndices((prev) => ({ ...prev, [activeImageIndex]: true }));
      if (activeImageIndex === 1) {
        setIsMainFallback(true);
      }
    }
  };

  // Error handling for thumbnail images
  const handleThumbnailError = (imgNum: number) => {
    const currentIndex = urlIndicesMap[imgNum] || 0;
    const candidates = candidateUrlsMap[imgNum] || [];

    if (currentIndex < candidates.length - 1) {
      const nextIndex = currentIndex + 1;
      setUrlIndicesMap((prev) => ({ ...prev, [imgNum]: nextIndex }));
    } else {
      setFailedImageIndices((prev) => ({ ...prev, [imgNum]: true }));
    }
  };

  // WhatsApp order URL
  const whatsappUrl = getCustomWhatsAppUrl(finalName, finalPrice, finalQuantity, quantity);

  // We show thumbnails only if they are not marked as failed
  const showThumbnails = !failedImageIndices[2];

  // Find related products from same category or fallback to other popular sweets
  const relatedProducts = React.useMemo(() => {
    let related = products.filter(
      (p) => p.category === product.category && p.id !== product.id
    );

    if (related.length < 4) {
      const fallbackSweets = products.filter(
        (p) => p.category !== product.category && p.id !== product.id
      );
      const seenIds = new Set(related.map((p) => p.id));
      for (const p of fallbackSweets) {
        if (related.length >= 4) break;
        if (!seenIds.has(p.id)) {
          related.push(p);
          seenIds.add(p.id);
        }
      }
    }

    return related.slice(0, 4);
  }, [product]);

  return (
    <div className="max-w-md mx-auto bg-[#FDFBF7] min-h-screen pb-32">
      {/* Back Navigation Bar */}
      <div className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-[#F0EAD6] py-3 px-4 flex items-center gap-3">
        <button
          onClick={onBack}
          className="p-1.5 rounded-xl border border-[#F0EAD6] bg-[#FDFBF7] hover:bg-[#FAF6EE] text-[#3E2723] cursor-pointer"
          aria-label="Back to catalog"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <span className="text-xs font-black tracking-widest text-[#C5A059] uppercase">
          Product Details
        </span>
      </div>

      <div className="px-4 py-4 space-y-6">
        {/* Large Main Real Product Image */}
        <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-[#FAF6EE] border border-[#F0EAD6]/60 shadow-xs">
          {!isMainFallback && mainImgUrl ? (
            <img
              src={mainImgUrl}
              alt={product.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-contain"
              onError={handleMainImageError}
            />
          ) : (
            /* Branded Cream Placeholder (No broken-image icon, NO emoji) */
            <div className="absolute inset-0 bg-gradient-to-br from-[#FFF8E1] to-[#FAF6EE] flex flex-col items-center justify-center p-6 text-center">
              <span className="text-sm font-black tracking-widest text-[#FF9933] uppercase">
                 KHODIYAR DAIRY
              </span>
              <span className="text-xs font-bold text-[#C5A059] uppercase tracking-widest mt-1">
                BABRA • ESTD 1996
              </span>
              <div className="mt-6 px-4 py-2.5 rounded-lg bg-white/80 border border-[#F0EAD6] text-xs font-black text-[#C5A059] uppercase tracking-widest shadow-xs">
                Image coming soon
              </div>
            </div>
          )}
        </div>

        {/* Horizontal Image Thumbnails */}
        {showThumbnails && (
          <div className="flex gap-3 justify-center">
            {[1, 2].map((num) => {
              // Get current URL for this thumbnail
              const candidateList = candidateUrlsMap[num] || [];
              const urlIdx = urlIndicesMap[num] || 0;
              const thumbUrl = candidateList[urlIdx] || '';
              const isFailed = failedImageIndices[num];

              if (isFailed || !thumbUrl) return null;

              return (
                <button
                  key={num}
                  onClick={() => setActiveImageIndex(num)}
                  className={`w-14 h-14 rounded-xl overflow-hidden border-2 bg-[#FAF6EE] relative transition-all duration-200 cursor-pointer shrink-0 ${
                    activeImageIndex === num
                      ? 'border-[#FF9933] ring-2 ring-[#FF9933]/20 scale-105 shadow-sm'
                      : 'border-[#F0EAD6] hover:border-[#C5A059]'
                  }`}
                >
                  <img
                    src={thumbUrl}
                    alt={`${product.name} thumbnail ${num}`}
                    className="w-full h-full object-cover"
                    onError={() => handleThumbnailError(num)}
                  />
                </button>
              );
            })}
          </div>
        )}

        {/* Gujarati Product Name Only, Price, and Unit */}
        <div className="space-y-2 border-b border-[#F0EAD6] pb-4">
          <div className="flex items-center gap-2">
            <span className={`text-[9px] font-extrabold px-2.5 py-1 rounded bg-[#FFF8E1] ${badgeText} uppercase tracking-wider`}>
              {cat?.name || 'Dairy'}
            </span>
            {finalQuantity && (
              <span className="text-[10px] text-[#C5A059] font-extrabold font-mono bg-[#FAF6EE] px-2 py-0.5 rounded border border-[#F0EAD6]">
                {finalQuantity}
              </span>
            )}
          </div>

          <div className="flex flex-col">
            <h1 className="text-xl sm:text-2xl font-black text-[#3E2723] leading-tight font-sans">
              {product.name}
            </h1>
            {product.gujaratiName && (
              <p className="text-base sm:text-lg font-bold text-[#C5A059] leading-snug mt-1">
                {product.gujaratiName}
              </p>
            )}
          </div>

          <div className="flex items-baseline gap-1 pt-1">
            <span className="text-xs font-bold text-[#3E2723]">₹</span>
            <span className="text-2xl sm:text-3xl font-black text-[#3E2723] tracking-tight">
              {finalPrice}
            </span>
            <span className="text-xs font-bold text-[#C5A059] ml-1">
              per {finalQuantity || 'unit'}
            </span>
          </div>
        </div>

        {/* Quantity Selector */}
        <div className="flex items-center justify-between bg-white border border-[#F0EAD6] rounded-2xl p-4 shadow-xs">
          <span className="text-xs sm:text-sm font-black text-[#3E2723] uppercase tracking-wider">
            Quantity
          </span>
          <div className="flex items-center gap-4">
            <button
              onClick={handleMinus}
              disabled={quantity <= 1}
              className="w-9 h-9 rounded-xl border border-[#F0EAD6] bg-[#FDFBF7] hover:bg-[#FAF6EE] flex items-center justify-center text-[#3E2723] disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="text-sm font-black font-mono text-[#3E2723] min-w-[20px] text-center">
              {quantity}
            </span>
            <button
              onClick={handlePlus}
              className="w-9 h-9 rounded-xl border border-[#F0EAD6] bg-[#FDFBF7] hover:bg-[#FAF6EE] flex items-center justify-center text-[#3E2723] cursor-pointer"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Call to Actions */}
        <div className="flex flex-col gap-3 pt-2">
          {/* Add to Cart */}
          <motion.button
            whileTap={{ scale: 0.98 }}
            onClick={handleAddToCartClick}
            className="w-full py-3.5 px-4 rounded-xl bg-[#FF9933] hover:bg-[#E68A00] text-white text-xs sm:text-sm font-black tracking-wider uppercase flex items-center justify-center gap-2 shadow-md shadow-[#FF9933]/10 cursor-pointer"
          >
            <ShoppingCart className="w-4 h-4" />
            Add to Cart
          </motion.button>

          {/* Buy on WhatsApp */}
          <motion.a
            whileTap={{ scale: 0.98 }}
            href={whatsappUrl}
            target="_blank"
            referrerPolicy="no-referrer"
            rel="noopener noreferrer"
            className="w-full py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#128C7E] text-white text-xs sm:text-sm font-black tracking-wider uppercase flex items-center justify-center gap-2 shadow-md shadow-[#25D366]/10"
          >
            <WhatsAppIcon className="w-4 h-4 text-white fill-current" />
            Buy on WhatsApp
          </motion.a>
        </div>

        {/* Product Information Table and Description */}
        <div className="bg-white border border-[#F0EAD6] rounded-2xl p-4 sm:p-5 space-y-4 shadow-xs">
          <h2 className="text-xs sm:text-sm font-black text-[#3E2723] uppercase tracking-wider border-b border-[#F0EAD6] pb-2">
            Product Information
          </h2>

          {finalDescription && (
            <p className="text-xs sm:text-sm text-[#3E2723]/90 leading-relaxed">
              {finalDescription}
            </p>
          )}

          {/* High-Contrast Plain Table, No Emojis */}
          <table className="w-full text-xs font-bold border-collapse">
            <tbody>
              <tr className="border-b border-[#F0EAD6]/60">
                <td className="py-2.5 text-[#C5A059] uppercase tracking-wider w-1/3">Category</td>
                <td className="py-2.5 text-[#3E2723]">{cat?.name || 'Other Dairy'}</td>
              </tr>
              <tr className="border-b border-[#F0EAD6]/60">
                <td className="py-2.5 text-[#C5A059] uppercase tracking-wider">Store</td>
                <td className="py-2.5 text-[#3E2723]">Khodiyar Dairy, Babra</td>
              </tr>
              <tr className="border-b border-[#F0EAD6]/60">
                <td className="py-2.5 text-[#C5A059] uppercase tracking-wider">Status</td>
                <td className="py-2.5 text-[#3E2723]">Fresh Daily Batch</td>
              </tr>
              <tr>
                <td className="py-2.5 text-[#C5A059] uppercase tracking-wider">Packaging</td>
                <td className="py-2.5 text-[#3E2723]">{finalQuantity || 'Standard Pack'}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* You May Also Like Section */}
        <div className="pt-6 border-t border-[#F0EAD6]/60 mt-8 space-y-4">
          <div className="text-center space-y-1">
            <h3 className="text-base sm:text-lg font-black text-[#3E2723] uppercase tracking-wider">
              You May Also Like
            </h3>
            <p className="text-[10px] sm:text-xs font-medium text-[#C5A059]">
              More handmade favourites from Khodiyar Dairy
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 pt-2">
            {relatedProducts.map((p) => (
              <RelatedProductCard
                key={p.id}
                product={p}
                onClick={() => navigate(`/product/${p.id}`)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
