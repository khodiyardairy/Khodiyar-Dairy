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
            A Legacy of Purity, Crafted Since 1996
          </h3>

          <div className="text-xs sm:text-sm text-[#3E2723]/90 space-y-5 leading-relaxed font-medium">
            <div className="border-l-4 border-[#FF9933] pl-4 py-1 italic text-[#3E2723]/95 bg-[#FFF8E1]/40 rounded-r-lg font-semibold text-sm">
              "Some stories are built with investment. Ours was built with faith, hard work, and two brothers who dared to dream."
            </div>
            <p>
              In <span className="text-[#3E2723] font-extrabold">1996</span>, two young brothers laid the foundation of <span className="text-[#FF9933] font-extrabold">Khodiyar Dairy & Products</span> in Babra, Amreli district, with a simple yet powerful vision—to create authentic Indian sweets and dairy products that families could trust without hesitation. Every recipe was prepared with care, every ingredient was chosen with honesty, and every customer was welcomed like family.
            </p>
            <p>
              The journey was far from easy. There were moments of uncertainty, financial challenges, changing markets, and countless obstacles. Yet with unwavering determination, integrity, and the blessings of <span className="text-[#FF9933] font-extrabold">Maa Khodiyar</span>, they transformed every challenge into an opportunity to grow.
            </p>
            <p>
              Over the years, what began as a modest dream has become a name trusted by generations. Our commitment has never changed: to preserve the authentic taste of tradition while maintaining uncompromising standards of purity, freshness, and quality.
            </p>
            <p>
              Today, as we proudly celebrate <span className="text-[#FF9933] font-extrabold">30 years of excellence</span>, Khodiyar Dairy & Products is more than a business—it is a family legacy built on resilience, passion, and the trust of thousands of customers who have made us a part of their happiest moments and cherished celebrations.
            </p>
            <p>
              Every sweet we craft carries the richness of tradition. Every dairy product reflects our dedication to purity. Every smile from our customers reminds us why this journey began.
            </p>
            <div className="relative overflow-hidden bg-gradient-to-br from-[#FFFBF0] to-[#FDF6E2] border border-[#E5C158]/35 rounded-2xl p-5 shadow-2xs mt-6">
              {/* Elegant oversized quotation mark in background */}
              <div className="absolute -right-3 -bottom-5 text-[#FF9933]/10 font-serif text-[120px] select-none pointer-events-none leading-none">
                ”
              </div>
              <div className="relative space-y-2">
                <span className="text-[10px] font-black uppercase tracking-widest text-[#C5A059]">
                  Our Eternal Promise
                </span>
                <p className="text-[#3E2723] text-xs sm:text-sm font-medium leading-relaxed italic pr-4">
                  "As we look toward the future, our promise remains the same as it was on the very first day:
                  <span className="block mt-2 text-[#FF9933] font-black not-italic text-sm sm:text-base tracking-wide leading-tight">
                    To serve every family with authentic taste, uncompromising quality, and heartfelt hospitality."
                  </span>
                </p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl bg-[#3E2723] text-[#FAF6EE] p-5 text-center border border-[#C5A059]/40 shadow-sm mt-4">
              <div className="absolute -left-16 -top-16 w-32 h-32 bg-[#FF9933]/10 rounded-full blur-xl"></div>
              <div className="absolute -right-16 -bottom-16 w-32 h-32 bg-[#FF9933]/15 rounded-full blur-xl"></div>
              <div className="relative flex flex-col items-center justify-center space-y-2">
                <span className="text-[#FF9933] text-[9px] font-black tracking-widest uppercase bg-[#FF9933]/15 px-2.5 py-0.5 rounded-full border border-[#FF9933]/30">
                  ★ 1996 - 2026 ★
                </span>
                <h4 className="font-serif italic text-base sm:text-lg text-white font-black tracking-wide">
                  30 Years of Trust • 30 Years of Tradition
                </h4>
                <div className="h-[1px] w-1/3 bg-gradient-to-r from-transparent via-[#C5A059] to-transparent"></div>
                <p className="text-[10px] font-black tracking-widest text-[#FAF6EE]/90 uppercase">
                  A Lifetime of Sweet Memories
                </p>
              </div>
            </div>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-3 gap-3 pt-5 border-t border-[#F0EAD6]/60">
            <div className="bg-[#FFFBF0] border border-[#F0EAD6]/60 rounded-xl p-3 text-center shadow-3xs hover:shadow-2xs hover:border-[#FF9933]/35 transition-all">
              <div className="text-lg sm:text-xl font-black text-[#FF9933] font-mono tracking-tight">
                1996
              </div>
              <p className="text-[9px] font-black text-[#3E2723] uppercase tracking-wider mt-0.5">
                Est. Year
              </p>
              <span className="text-[8px] text-[#C5A059] block mt-0.5 font-bold">Babra, Gujarat</span>
            </div>
            
            <div className="bg-[#FFFBF0] border border-[#F0EAD6]/60 rounded-xl p-3 text-center shadow-3xs hover:shadow-2xs hover:border-[#FF9933]/35 transition-all">
              <div className="text-lg sm:text-xl font-black text-[#FF9933] font-mono tracking-tight">
                100%
              </div>
              <p className="text-[9px] font-black text-[#3E2723] uppercase tracking-wider mt-0.5">
                Pure Quality
              </p>
              <span className="text-[8px] text-[#C5A059] block mt-0.5 font-bold">No Preservatives</span>
            </div>

            <div className="bg-[#FFFBF0] border border-[#F0EAD6]/60 rounded-xl p-3 text-center shadow-3xs hover:shadow-2xs hover:border-[#FF9933]/35 transition-all">
              <div className="text-lg sm:text-xl font-black text-[#FF9933] font-mono tracking-tight">
                30K+
              </div>
              <p className="text-[9px] font-black text-[#3E2723] uppercase tracking-wider mt-0.5">
                Happy Families
              </p>
              <span className="text-[8px] text-[#C5A059] block mt-0.5 font-bold">Trusted Legacy</span>
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
