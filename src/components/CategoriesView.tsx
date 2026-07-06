import React from 'react';
import { categories, products } from '../data/dairyData';
import CategoryCard from './CategoryCard';

interface CategoriesViewProps {
  setActiveTab: (tab: string) => void;
  setSelectedCategory: (catId: string) => void;
}

export default function CategoriesView({ setActiveTab, setSelectedCategory }: CategoriesViewProps) {
  const handleCategorySelect = (catId: string) => {
    setSelectedCategory(catId);
    setActiveTab('products');
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
        {categories.map((category) => {
          const productCount = products.filter(p => p.category === category.id).length;
          return (
            <CategoryCard
              key={category.id}
              category={category}
              productCount={productCount}
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
            return (
              <div key={cat.id} className="bg-white rounded-2xl border border-[#F0EAD6] p-5 space-y-4">
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

                {/* Sub-product tags preview */}
                <div className="flex flex-wrap gap-1.5">
                  {catProducts.map((p) => (
                    <span key={p.id} className="text-[10px] font-bold px-2 py-1 rounded-md bg-[#FDFBF7] border border-[#F0EAD6] text-[#3E2723]">
                      {p.name}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => handleCategorySelect(cat.id)}
                  className="w-full text-center py-2 rounded-xl bg-[#FAF6EE] text-xs font-bold text-[#FF9933] border border-[#F0EAD6] hover:bg-[#FF9933] hover:text-white transition-all duration-200"
                >
                  Explore {cat.name} Catalogue &rarr;
                </button>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
