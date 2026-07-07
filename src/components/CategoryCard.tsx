import React from 'react';
import { motion } from 'motion/react';
import { Category } from '../types';
import ProductIllustration from './ProductIllustration';
import * as LucideIcons from 'lucide-react';

interface CategoryCardProps {
  category: Category;
  productCount: number;
  onClick: () => void;
  key?: string | number;
  delayIndex?: number;
}

export default function CategoryCard({ category, productCount, onClick, delayIndex = 0 }: CategoryCardProps) {
  // Dynamically resolve Lucide icons if available
  const IconComponent = (LucideIcons as any)[category.iconName] || LucideIcons.Sparkles;

  return (
    <motion.button
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      whileHover={{ y: -6, boxShadow: "0 12px 30px rgba(62, 39, 35, 0.08)" }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="group text-left bg-white rounded-2xl border border-[#F0EAD6] p-3 sm:p-4 flex flex-col justify-between transition-shadow duration-300 focus:outline-none focus:ring-2 focus:ring-[#FF9933]/40 cursor-pointer w-full"
    >
      <div className="w-full">
        {/* Category Visual */}
        <div 
          className="relative mb-3 rounded-xl overflow-hidden animate-float-subtle"
          style={{ animationDelay: `${delayIndex * 0.4}s` }}
        >
          <ProductIllustration type={category.illustrationType} size="sm" className="h-24 md:h-28 w-full animate-fade-in" />
          <div className="absolute bottom-2 right-2 p-1.5 rounded-lg bg-white/90 shadow-sm backdrop-blur-xs">
            <IconComponent className="w-4 h-4 text-[#FF9933]" />
          </div>
        </div>

        {/* English & Gujarati Names */}
        <h3 className="text-sm sm:text-base font-bold text-[#3E2723] leading-tight group-hover:text-[#FF9933] transition-colors duration-200">
          {category.name}
        </h3>

      </div>

      {/* Product Count Footer */}
      <div className="mt-4 pt-2 border-t border-[#F0EAD6] w-full flex items-center justify-between text-[11px] text-[#C5A059]">
        <span>{productCount} Products</span>
        <span className="font-bold text-[#FF9933] group-hover:translate-x-1 transition-transform duration-200 flex items-center gap-0.5">
          View All <LucideIcons.ChevronRight className="w-3 h-3" />
        </span>
      </div>
    </motion.button>
  );
}
