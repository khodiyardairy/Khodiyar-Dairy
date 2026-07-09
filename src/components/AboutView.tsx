import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Award, ShieldAlert, Heart, Calendar, Users, ShoppingBag } from 'lucide-react';
import ProductIllustration from './ProductIllustration';
import Logo from './Logo';

export default function AboutView() {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();
  const yearsActive = currentYear - 1996;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-12 pb-24">
      
      {/* Page Header */}
      <div className="text-left space-y-1">
        <h2 className="text-2xl sm:text-3xl font-black text-[#3E2723]">
          Our 1996 Story
        </h2>
        <p className="text-xs sm:text-sm text-[#C5A059] font-medium">
          Decades of pure dedication to quality milk products, sweets, and local trust in Babra.
        </p>
      </div>

      {/* Main Story Hero Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-3xl border border-[#F0EAD6] p-6 sm:p-10">
        
        {/* Left: Beautiful vector of ghee/pedha & Our Logo */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="w-full max-w-[320px] bg-gradient-to-br from-[#FFF8E1] to-[#FDFBF7] p-5 rounded-2xl border border-[#F0EAD6] shadow-xs flex flex-col items-center gap-4">
            <Logo size={140} className="hover:scale-105 transition-transform duration-300" />
           {/* <ProductIllustration type="pedha" size="md" /> */}
            <div className="text-center">
              <span className="text-xs font-black text-[#FF9933] tracking-widest uppercase">
                ★ 30+ YEARS TRUSTED ★
              </span>
            </div>
          </div>
        </div>

        {/* Right: Written Story text */}
        <div className="lg:col-span-7 space-y-4">
          <span className="inline-flex items-center gap-1 bg-[#FFF8E1] text-[#FF9933] text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded-full border border-[#F0EAD6]">
            SINCE 1996 • BABRA
          </span>
          
          <h3 className="text-xl sm:text-2xl font-black text-[#3E2723] leading-tight">
            Preserving Gujarati Taste & Dairy Purity for {yearsActive} Years
          </h3>

          <div className="text-xs sm:text-sm text-[#3E2723]/90 space-y-4 leading-relaxed font-medium">
            <p>
              In <span className="text-[#3E2723] font-extrabold">1996</span>,Khodiyar Dairy opened its very first small milk-collection outlet in the historic town of <span className="text-[#3E2723] font-extrabold">Babra, Amreli district</span>. Founded with a single mission: to provide the local families with 100% untampered, high-fat cow and buffalo milk directly from healthy village farms.
            </p>
            <p>
              As families tasted the natural density and sweetness of our milk, word spread. We expanded our kitchen to create traditional milk solids (<span className="text-[#FF9933] font-extrabold">Mawa / Khoya</span>), leading to our legendary <span className="text-[#FF9933] font-extrabold">Special Khodiyar Milk Pedha</span>. Today, we stand proud as a hallmark of premium Gujarati dairy products.
            </p>
            <p>
              Under strict family surveillance, we slow-cook our recipes without chemical preservatives or starch fillers. For us, dairy isn't just a business—it is a sacred service of health and festival joy to our loving community.
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#F0EAD6]">
            <div>
              <p className="text-lg sm:text-xl font-black text-[#FF9933] font-mono">1996</p>
              <p className="text-[10px] text-[#C5A059]">Inception Year</p>
            </div>
            <div>
              <p className="text-lg sm:text-xl font-black text-[#FF9933] font-mono">100%</p>
              <p className="text-[10px] text-[#C5A059]">Natural Farming</p>
            </div>
            <div>
              <p className="text-lg sm:text-xl font-black text-[#FF9933] font-mono">100%</p>
              <p className="text-[10px] text-[#C5A059]">Happinees</p>
            </div>
          </div>

        </div>

      </div>

      {/* Bento Grid: Core Values */}
      <div className="space-y-6">
        <div className="text-center space-y-1">
          <h4 className="text-base sm:text-lg font-black text-[#3E2723]">Our Core Commitments</h4>
          <p className="text-xs text-[#C5A059]">What keeps us Babra's absolute favorite dairy for three decades.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: 100% Pure Sourcing */}
          {/* Card 1: Fresh Daily Batches */}
<div className="bg-white p-6 rounded-2xl border border-[#F0EAD6] space-y-3.5 hover:shadow-md transition-all">
  <div className="flex items-center gap-3">
    <div className="w-10 h-10 rounded-xl bg-[#FFF8E1] border border-[#F0EAD6] flex items-center justify-center text-[#FF9933] shrink-0">
      <Calendar className="w-5 h-5" />
    </div>
    <h5 className="text-sm font-black text-[#3E2723]">Fresh Daily Batches</h5>
  </div>
  <p className="text-xs text-[#3E2723]/90 leading-relaxed">
    We never stock stale products. Our Live Paneer and thick Dahi are set fresh twice everyday—at 6 AM and 5 PM—aligned with milk arrival schedules.
  </p>
</div>

{/* Card 2: No Adulteration */}
<div className="bg-white p-6 rounded-2xl border border-[#F0EAD6] space-y-3.5 hover:shadow-md transition-all">
  <div className="flex items-center gap-3">
    <div className="w-10 h-10 rounded-xl bg-[#FFF8E1] border border-[#F0EAD6] flex items-center justify-center text-[#FF9933] shrink-0">
      <ShieldAlert className="w-5 h-5" />
    </div>
    <h5 className="text-sm font-black text-[#3E2723]">Zero Preservatives</h5>
  </div>
  <p className="text-xs text-[#3E2723]/90 leading-relaxed">
    We reject synthetic milk thickeners, artificial souring acids, and flavor boosters. Our buttermilk and shrikhand contain only organic spices and real saffron.
  </p>
</div>

{/* Card 3: Empowering Local Farmers */}
<div className="bg-white p-6 rounded-2xl border border-[#F0EAD6] space-y-3.5 hover:shadow-md transition-all">
  <div className="flex items-center gap-3">
    <div className="w-10 h-10 rounded-xl bg-[#FFF8E1] border border-[#F0EAD6] flex items-center justify-center text-[#FF9933] shrink-0">
      <Users className="w-5 h-5" />
    </div>
    <h5 className="text-sm font-black text-[#3E2723]">Local Farm Partnerships</h5>
  </div>
  <p className="text-xs text-[#3E2723]/90 leading-relaxed">
    We purchase raw milk directly from more than 80 independent dairy farmers around Babra, ensuring fair payout rates and support for rural agriculture.
  </p>
</div>
        </div>
      </div>

      {/* Sweet invitation block */}
      <div className="bg-[#3E2723] text-[#FAF6EE] p-6 sm:p-10 rounded-3xl text-center space-y-4">
        <Heart className="w-8 h-8 text-rose-400 mx-auto fill-rose-400 animate-pulse" />
        <h4 className="text-xl sm:text-2xl font-black">Taste the Purity Yourself</h4>
        <p className="text-xs sm:text-sm text-[#FAF6EE]/80 max-w-lg mx-auto leading-relaxed">
          Celebrate your family festivals, weddings, and daily health with the golden taste of Khodiyar Dairy. Open our product catalog and send your order via WhatsApp.
        </p>
        <button
          onClick={() => {
            navigate('/products');
          }}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#FF9933] text-white text-xs font-black hover:bg-[#E68A00] transition-all shadow-md shadow-[#FF9933]/10"
        >
          <ShoppingBag className="w-4 h-4" />
          View Products Catalogue
        </button>
      </div>

    </div>
  );
}
