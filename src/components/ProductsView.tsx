import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { products, categories } from '../data/dairyData';
import { Product } from '../types';
import ProductCard from './ProductCard';
import { Search, X } from 'lucide-react';

interface ProductsViewProps {
  selectedCategory: string;
  setSelectedCategory: (catId: string) => void;
  onAddToCart?: (product: Product) => void;
  onViewDetail?: (product: Product) => void;
}

export default function ProductsView({
  selectedCategory,
  setSelectedCategory,
  onAddToCart,
  onViewDetail
}: ProductsViewProps) {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter products based on category and search query
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        selectedCategory === 'all' || product.category === selectedCategory;

      const searchLower = searchQuery.toLowerCase();
      const matchesSearch =
        product.name.toLowerCase().includes(searchLower) ||
        product.gujaratiName.toLowerCase().includes(searchLower) ||
        product.description.toLowerCase().includes(searchLower);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6 pb-24">
      
      {/* Title block */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-left space-y-1"
      >
        <h2 className="text-2xl sm:text-3xl font-black text-[#3E2723]">
          Product Catalog
        </h2>
        <p className="text-xs sm:text-sm text-[#C5A059] font-medium">
          Select pure products to order instantly via pre-filled WhatsApp message.
        </p>
      </motion.div>

      {/* Filter and Search Bar Container */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.05 }}
        className="bg-white rounded-2xl border border-[#F0EAD6] p-4 flex flex-col md:flex-row gap-4 items-center justify-between shadow-xs"
      >
        
        {/* Real-time Search Input */}
        <div className="relative w-full md:max-w-sm">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#C5A059]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search sweets, ghee, paneer..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#F0EAD6] bg-[#FDFBF7] text-xs font-bold text-[#3E2723] placeholder-[#C5A059]/70 focus:outline-none focus:ring-2 focus:ring-[#FF9933]/30"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#C5A059] hover:text-[#3E2723] cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Category quick selectors (horizontal scroll list on mobile) */}
        <div className="w-full flex items-center gap-1.5 overflow-x-auto pb-1.5 md:pb-0 scrollbar-none">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setSelectedCategory('all')}
            className={`px-3.5 py-2 rounded-xl text-xs font-black whitespace-nowrap transition-colors cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-[#FF9933] text-white shadow-xs'
                : 'bg-[#FDFBF7] text-[#3E2723] border border-[#F0EAD6] hover:bg-[#FAF6EE]'
            }`}
          >
            All Products ({products.length})
          </motion.button>

          {categories.map((cat) => {
            const count = products.filter(p => p.category === cat.id).length;
            return (
              <motion.button
                key={cat.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-black whitespace-nowrap transition-colors cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#FF9933] text-white shadow-xs'
                    : 'bg-[#FDFBF7] text-[#3E2723] border border-[#F0EAD6] hover:bg-[#FAF6EE]'
                }`}
              >
                {cat.name} ({count})
              </motion.button>
            );
          })}
        </div>

      </motion.div>

      {/* active filter indicator */}
      <AnimatePresence>
        {selectedCategory !== 'all' && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="flex items-center gap-2"
          >
            <span className="text-[11px] text-[#C5A059]">Active Category:</span>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#FFF8E1] text-[#FF9933] text-xs font-extrabold border border-[#F0EAD6]">
              {categories.find(c => c.id === selectedCategory)?.name}
              <button onClick={() => setSelectedCategory('all')} className="hover:text-red-600 ml-0.5 cursor-pointer">
                <X className="w-3 h-3" />
              </button>
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Catalogue Cards Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} onViewDetail={onViewDetail} />
          ))}
        </div>
      ) : (
        /* Empty State */
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-white rounded-2xl border border-[#F0EAD6] p-12 text-center max-w-md mx-auto space-y-4"
        >
          <div className="w-16 h-16 rounded-full bg-[#FFF8E1] flex items-center justify-center mx-auto text-[#FF9933]">
            <Search className="w-8 h-8" />
          </div>
          <div className="space-y-1">
            <h3 className="text-base font-black text-[#3E2723]">No products found</h3>
            <p className="text-xs text-[#C5A059]">
              We couldn't find any products matching your search term. Try checking for spelling errors or clear the category filter.
            </p>
          </div>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
            }}
            className="px-5 py-2 rounded-xl bg-[#FF9933] text-white text-xs font-bold cursor-pointer"
          >
            Reset Filters
          </button>
        </motion.div>
      )}
    </div>
  );
}
