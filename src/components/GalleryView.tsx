import React, { useState, useMemo } from 'react';
import { galleryItems } from '../data/dairyData';
import ProductIllustration from './ProductIllustration';
import { Sparkles, ShieldCheck, Heart, Award } from 'lucide-react';

export default function GalleryView() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'production' | 'sweets' | 'store' | 'festivals'>('all');

  const filteredItems = useMemo(() => {
    if (activeFilter === 'all') return galleryItems;
    return galleryItems.filter(item => item.category === activeFilter);
  }, [activeFilter]);

  const filterTabs = [
    { id: 'all', label: 'All Photos' },
    { id: 'production', label: 'Kitchen & Dairy' },
    { id: 'sweets', label: 'Sweets Crafting' },
    { id: 'store', label: 'Babra Storefront' },
    { id: 'festivals', label: 'Festivals Special' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8 pb-24">
      
      {/* Title block */}
      <div className="text-left space-y-1">
        <h2 className="text-2xl sm:text-3xl font-black text-[#3E2723]">
          ફોટો ગેલેરી
        </h2>
        <p className="text-xs sm:text-sm text-[#C5A059] font-medium">
          Behind the scenes of our preparation process, store, and traditional sweet craft.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
        {filterTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveFilter(tab.id as any)}
            className={`px-4 py-2 rounded-xl text-xs font-black whitespace-nowrap transition-all ${
              activeFilter === tab.id
                ? 'bg-[#FF9933] text-white shadow-xs'
                : 'bg-white text-[#3E2723] border border-[#F0EAD6] hover:bg-[#FAF6EE]'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="group bg-white rounded-2xl border border-[#F0EAD6] p-3.5 flex flex-col justify-between hover:shadow-md transition-all duration-300 hover:-translate-y-1"
          >
            <div>
              {/* Illustration container */}
              <div className="relative rounded-xl overflow-hidden mb-3">
                <ProductIllustration type={item.illustrationType} size="md" />
                <span className="absolute bottom-2.5 left-2.5 px-2 py-0.5 rounded-md bg-[#3E2723]/80 text-white text-[9px] font-bold tracking-wider uppercase backdrop-blur-xs">
                  {item.category}
                </span>
              </div>

              {/* Text info */}
              <h3 className="text-xs sm:text-sm font-extrabold text-[#3E2723] leading-tight">
                {item.title}
              </h3>
              <p className="text-[11px] font-bold text-[#C5A059] mt-0.5">
                {item.gujaratiTitle}
              </p>
            </div>

            <p className="text-[10px] sm:text-xs text-[#3E2723]/70 leading-relaxed mt-2 pt-2 border-t border-[#F0EAD6]">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      {/* Purity Standards Highlights Section */}
      <div className="bg-gradient-to-br from-[#FFF8E1] to-[#FAF6EE] border border-[#F0EAD6] rounded-3xl p-6 sm:p-8 space-y-6">
        <div className="text-center space-y-1 max-w-lg mx-auto">
          <Sparkles className="w-5 h-5 text-[#FF9933] mx-auto animate-spin" style={{ animationDuration: '4s' }} />
          <h4 className="text-base sm:text-lg font-black text-[#3E2723]">Hygiene & Tradition Guidelines</h4>
          <p className="text-xs text-[#C5A059]">Every drop of milk and sweet bite follows our core standards since 1996.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-4.5 rounded-xl border border-[#F0EAD6] flex gap-3">
            <ShieldCheck className="w-5 h-5 text-[#10B981] shrink-0" />
            <div className="space-y-1">
              <h5 className="text-xs font-black text-[#3E2723]">Daily Laboratory Checks</h5>
              <p className="text-[11px] text-[#3E2723]/70 leading-relaxed">
                We test milk fat and solids density every single morning. Zero tolerance for adulteration or water dilution.
              </p>
            </div>
          </div>

          <div className="bg-white p-4.5 rounded-xl border border-[#F0EAD6] flex gap-3">
            <Heart className="w-5 h-5 text-rose-500 shrink-0 fill-rose-100" />
            <div className="space-y-1">
              <h5 className="text-xs font-black text-[#3E2723]">Brass Utensils ("કડાયા")</h5>
              <p className="text-[11px] text-[#3E2723]/70 leading-relaxed">
                Our pedhas and mawa are slow-cooked in traditional thick-bottomed copper and brass vessels for superior aroma.
              </p>
            </div>
          </div>

          <div className="bg-white p-4.5 rounded-xl border border-[#F0EAD6] flex gap-3">
            <Award className="w-5 h-5 text-[#FF9933] shrink-0" />
            <div className="space-y-1">
              <h5 className="text-xs font-black text-[#3E2723]">Hygienic Temperature Cold Room</h5>
              <p className="text-[11px] text-[#3E2723]/70 leading-relaxed">
                All Shrikhand and Curd are stored in custom temperature-controlled refrigeration chambers to maintain culture freshness.
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
