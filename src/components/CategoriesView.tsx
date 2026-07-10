import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { categories, products } from '../data/dairyData';
import CategoryCard from './CategoryCard';
import { Product } from '../types';
import { getCandidateImageUrls } from '../utils/imageHelper';

interface CategoryProductCardProps {
  product: Product;
  onClick: () => void;
  key?: React.Key;
}

function CategoryProductCard({ product, onClick }: CategoryProductCardProps) {
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

  return (
    <div
      onClick={onClick}
      className="group bg-[#FDFBF7] hover:bg-white active:scale-[0.98] border border-[#F0EAD6] hover:border-[#FF9933]/60 rounded-xl p-2.5 flex flex-col justify-between transition-all duration-200 cursor-pointer shadow-2xs hover:shadow-md select-none h-full"
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
        <button className="w-full bg-[#FF9933]/10 hover:bg-[#FF9933] group-hover:bg-[#FF9933] text-[#FF9933] group-hover:text-white transition-all duration-150 py-1 rounded-lg text-[9px] sm:text-[10px] font-black uppercase tracking-wider border border-[#FF9933]/15 text-center block">
          View Product
        </button>
      </div>
    </div>
  );
}

export default function CategoriesView() {
  const navigate = useNavigate();

  const handleCategorySelect = (catId: string) => {
    navigate(`/products?category=${catId}`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-10 pb-24">
      
      {/* Page Header */}
      <div className="text-left space-y-1">
        <h2 className="text-2xl sm:text-3xl font-black text-[#3E2723]">
          Product Categories
        </h2>
        <p className="text-xs sm:text-sm text-[#C5A059] font-medium">
          Discover Babra's legendary taste categories. Sourced clean and served fresh.
        </p>
      </div>

      {/* Grid of Categories (exactly 2 columns on mobile) */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-6">
        {categories.map((category, idx) => {
          const productCount = products.filter(p => p.category === category.id).length;
          return (
            <CategoryCard
              key={category.id}
              category={category}
              productCount={productCount}
              delayIndex={idx}
              onClick={() => handleCategorySelect(category.id)}
            />
          );
        })}
      </div>

      {/* Structured Category Breakdown Cards for Premium visual density */}
      <div className="space-y-6 pt-4">
        <h3 className="text-lg font-extrabold text-[#3E2723] border-b border-[#F0EAD6] pb-2">
          Category Highlights & Details
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((cat) => {
            const catProducts = products.filter(p => p.category === cat.id);
            const displayProducts = catProducts.slice(0, 4);

            return (
              <div key={cat.id} className="bg-white rounded-2xl border border-[#F0EAD6] p-5 space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-base font-black text-[#3E2723]">{cat.name}</h4>
                    </div>
                    <span className="text-xs font-bold text-[#C5A059] bg-[#FDFBF7] border border-[#F0EAD6] px-2.5 py-1 rounded-lg">
                      {catProducts.length} Items
                    </span>
                  </div>

                  <p className="text-xs text-[#3E2723]/90 leading-relaxed">
                    {cat.description}
                  </p>

                  {/* Premium Product Directory Grid (2 columns on mobile/desktop, 3 on tablet for perfect layout balance) */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 gap-3.5 pt-2">
                    {displayProducts.map((p) => (
                      <CategoryProductCard
                        key={p.id}
                        product={p}
                        onClick={() => navigate(`/product/${p.id}`)}
                      />
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => handleCategorySelect(cat.id)}
                    className="w-full text-center py-2.5 rounded-xl bg-[#FAF6EE] hover:bg-[#FF9933] text-xs font-black text-[#FF9933] hover:text-white border border-[#F0EAD6] hover:border-[#FF9933] transition-all duration-200 uppercase tracking-wider"
                  >
                    View All Products &rarr;
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
