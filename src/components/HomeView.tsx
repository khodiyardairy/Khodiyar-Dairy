import React from 'react';
import { motion } from 'motion/react';
import { categories, products, testimonials, galleryItems, getGeneralWhatsAppUrl, getWhatsAppUrl } from '../data/dairyData';
import { ShoppingBag, MessageSquare, Award, ShieldCheck, Heart, ArrowRight, Star, Clock, MapPin, Mail, Phone } from 'lucide-react';
import CategoryCard from './CategoryCard';
import ProductCard from './ProductCard';
import ProductIllustration from './ProductIllustration';
import Logo from './Logo';

import { Product } from '../types';

interface HomeViewProps {
  setActiveTab: (tab: string) => void;
  setSelectedCategory: (catId: string) => void;
  onAddToCart?: (product: Product) => void;
}

export default function HomeView({ setActiveTab, setSelectedCategory, onAddToCart }: HomeViewProps) {
  // Filter featured products (e.g., first 4 marked as featured)
  const featuredProducts = products.filter(p => p.isFeatured).slice(0, 4);
  const bestSellerProduct = products.find(p => p.isBestSeller && p.id === 'p9') || products[4]; // Sajavan Ghee or Kesar Pista Shrikhand

  const generalWhatsappUrl = getGeneralWhatsAppUrl();

  const handleCategorySelect = (catId: string) => {
    setSelectedCategory(catId);
    setActiveTab('products');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();
  const yearsActive = currentYear - 1996;

  // Animation constants for fast and smooth fade-up
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <div className="space-y-16 pb-20 overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#FAF6EE] to-[#FDFBF7] pt-8 pb-12 sm:pb-16 px-4">
        {/* Subtle decorative background curves */}
        <div className="absolute top-10 right-[-10%] w-72 h-72 rounded-full bg-[#F0EAD6]/40 blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-[-10%] w-72 h-72 rounded-full bg-[#F5EFE6]/30 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Hero Text */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 text-center lg:text-left space-y-5"
          >
            {/* Tagline */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF8E1] border border-[#F0EAD6] text-[#FF9933] text-xs font-extrabold tracking-wider uppercase">
              <Award className="w-3.5 h-3.5" />
              Serving Purity Since 1996
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#3E2723] leading-tight tracking-tight">
              શુદ્ધતા અને સ્વાદનું અનોખું સંગમ <br className="hidden sm:inline" />
              <span className="text-[#FF9933] bg-gradient-to-r from-[#FF9933] to-[#C5A059] bg-clip-text text-transparent">
                Shree Khodiyar Dairy
              </span>
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base text-[#3E2723]/90 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
              Experience the absolute pinnacle of fresh dairy, velvety shrikhand, and authentic golden milk pedhas. Prepared daily in Babra using traditional techniques with 100% fresh, farm-sourced buffalo and cow milk.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <motion.button
                whileHover={{ y: -3, boxShadow: "0 8px 25px rgba(255, 153, 51, 0.25)" }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  setSelectedCategory('all');
                  setActiveTab('products');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#FF9933] hover:bg-[#E68A00] text-white font-black text-sm transition-all duration-200 cursor-pointer shadow-md shadow-[#FF9933]/10"
              >
                <ShoppingBag className="w-4 h-4" />
                Shop Products Catalog
              </motion.button>
              
              <motion.a
                whileHover={{ y: -3, boxShadow: "0 8px 25px rgba(62, 39, 35, 0.05)" }}
                whileTap={{ scale: 0.98 }}
                href={generalWhatsappUrl}
                target="_blank"
                referrerPolicy="no-referrer"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white border-2 border-[#F0EAD6] text-[#3E2723] hover:bg-[#F5EFE6] font-bold text-sm transition-all duration-200"
              >
                <MessageSquare className="w-4 h-4 text-[#25D366]" />
                WhatsApp Enquiry
              </motion.a>
            </div>

            {/* Quick Badges */}
            <div className="flex items-center justify-center lg:justify-start gap-6 pt-4 text-xs font-bold text-[#C5A059]">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#10B981]" />
                <span>100% Pure & Hygienic</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
                <span>Babra's Heritage Food</span>
              </div>
            </div>
          </motion.div>

          {/* Hero Illustration Block */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-[340px] sm:max-w-[400px]">
              {/* Golden circular glow backdrop */}
              <div className="absolute inset-0 bg-[#FF9933]/10 rounded-full filter blur-2xl animate-pulse" />
              
              <div className="relative bg-white p-4 sm:p-5 rounded-3xl border border-[#F0EAD6] shadow-lg shadow-[#3E2723]/5">
                {/* Float Card: Official 1996 Stamp Logo */}
                <div className="absolute -top-10 -left-6 sm:-top-14 sm:-left-14 bg-[#FAF6EE] border-4 border-white p-1 rounded-full shadow-lg -rotate-12 hover:rotate-0 transition-all duration-300 z-10">
                  <Logo size={100} className="w-[76px] h-[76px] sm:w-[105px] sm:h-[105px]" />
                </div>

                {/* Large visual illustration of Shrikhand or Ghee */}
                <ProductIllustration type="shrikhand" size="lg" className="rounded-2xl" />
                
                {/* Float Card 1: Best Seller tag */}
                <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 bg-[#FF9933] border-2 border-white px-3.5 py-1.5 rounded-2xl shadow-md rotate-6 flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 text-white fill-white" />
                  <span className="text-xs font-black text-white">TOP EXPORT RATING</span>
                </div>

                {/* Float Card 2: Freshness guarantee */}
                <div className="absolute bottom-4 -left-4 bg-white border border-[#F0EAD6] p-2.5 rounded-xl shadow-md flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-[#FFF8E1] flex items-center justify-center text-[#FF9933] font-bold text-sm">
                    ✓
                  </div>
                  <div>
                    <p className="text-[10px] text-[#C5A059] font-bold uppercase tracking-wider">Freshness</p>
                    <p className="text-xs font-black text-[#3E2723]">Live Daily Kitchen</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 2. CATEGORY GRID (Exactly 2 columns on mobile as requested) */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeUpVariants}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6"
      >
        <div className="text-center space-y-1.5">
          <p className="text-[11px] font-extrabold uppercase tracking-wider text-[#FF9933]">
            Explore by Category
          </p>
          <h2 className="text-2xl sm:text-3xl font-black text-[#3E2723]">
            અમારી વિશેષ પ્રોડક્ટ્સ
          </h2>
          <div className="h-1 w-12 bg-[#FF9933] mx-auto rounded-full" />
        </div>

        {/* 2 columns mobile grid, 3 col tablet, 5 col desktop */}
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
      </motion.section>

      {/* 3. TRUST STATISTICS */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeUpVariants}
        className="bg-gradient-to-br from-[#3E2723] to-[#251307] text-[#FAF6EE] py-12 px-4 rounded-3xl mx-4 max-w-7xl lg:mx-auto relative overflow-hidden"
      >
        {/* Subtle geometric overlay decoration */}
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#FAF6EE_1px,transparent_1px)] [background-size:12px_12px]" />
        
        <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          
          <div className="space-y-1">
            <p className="text-3xl sm:text-4xl font-black text-[#FF9933] font-mono">
              {yearsActive}+
            </p>
            <p className="text-xs sm:text-sm font-bold text-[#F5EFE6]/80">Years of Trusted Quality</p>
            <p className="text-[10px] text-[#FAF6EE]/50">Established in 1996</p>
          </div>

          <div className="space-y-1">
            <p className="text-3xl sm:text-4xl font-black text-[#FF9933] font-mono">
              100%
            </p>
            <p className="text-xs sm:text-sm font-bold text-[#F5EFE6]/80">Pure Cow & Buffalo Milk</p>
            <p className="text-[10px] text-[#FAF6EE]/50">Zero Chemical Additives</p>
          </div>

          <div className="space-y-1">
            <p className="text-3xl sm:text-4xl font-black text-[#FF9933] font-mono">
              15+
            </p>
            <p className="text-xs sm:text-sm font-bold text-[#F5EFE6]/80">Signature Sweet Varieties</p>
            <p className="text-[10px] text-[#FAF6EE]/50">Crafted by Traditional Halwais</p>
          </div>

          <div className="space-y-1">
            <p className="text-3xl sm:text-4xl font-black text-[#FF9933] font-mono">
              10K+
            </p>
            <p className="text-xs sm:text-sm font-bold text-[#F5EFE6]/80">Happy Local Families</p>
            <p className="text-[10px] text-[#FAF6EE]/50">In Babra and Surrounding Villages</p>
          </div>

        </div>
      </motion.section>

      {/* 4. FEATURED PRODUCTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUpVariants}
          className="flex items-end justify-between"
        >
          <div className="space-y-1.5 text-left">
            <p className="text-[11px] font-extrabold uppercase tracking-wider text-[#FF9933]">
              Handpicked Delicacies
            </p>
            <h2 className="text-2xl sm:text-3xl font-black text-[#3E2723]">
              આજના ખાસ આકર્ષણ
            </h2>
          </div>
          
          <motion.button
            whileHover={{ x: 3 }}
            onClick={() => {
              setSelectedCategory('all');
              setActiveTab('products');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-1 text-xs font-black text-[#FF9933] hover:text-[#E68A00] group transition-all"
          >
            See All Products 
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>

        {/* 2 columns mobile, 3 tablet, 4 desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
          ))}
        </div>
      </section>

      {/* 5. BEST SELLER BANNER */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeUpVariants}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="bg-gradient-to-br from-[#FFF8E1] to-[#FAF6EE] border-2 border-[#F0EAD6] rounded-3xl p-6 sm:p-10 flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-xs">
          
          {/* Saffron design corner flare */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF9933]/5 rounded-bl-full pointer-events-none" />

          <div className="space-y-4 max-w-xl text-center lg:text-left">
            <span className="inline-flex items-center gap-1 bg-[#FF9933] text-white text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded-full">
              ★ NO.1 BEST SELLER IN BABRA ★
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-[#3E2723] leading-tight">
              {bestSellerProduct.name} <br />
              <span className="text-[#FF9933] font-sans">{bestSellerProduct.gujaratiName}</span>
            </h3>
            <p className="text-xs sm:text-sm text-[#3E2723]/70 leading-relaxed">
              Our gold-standard Sajavan Ghee is prized for its rich, authentic, granular structure ("દાણાદાર ઘી") and unforgettable aromatic fragrance. Traditionally slow-boiled in small batches using pure hand-churned dairy butter.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <div className="bg-white px-3.5 py-1.5 rounded-xl border border-[#F0EAD6] flex items-baseline gap-1 shadow-xs">
                <span className="text-[11px] text-[#C5A059]">Packing:</span>
                <span className="text-xs font-bold text-[#3E2723]">{bestSellerProduct.unit}</span>
              </div>
              <div className="bg-white px-3.5 py-1.5 rounded-xl border border-[#F0EAD6] flex items-baseline gap-1 shadow-xs">
                <span className="text-[11px] text-[#C5A059]">Special Price:</span>
                <span className="text-sm font-black text-[#FF9933]">₹{bestSellerProduct.price}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 shrink-0 w-full lg:w-auto">
            {/* Elegant vector display */}
            <div className="w-44 h-44 rounded-2xl bg-white p-3 border border-[#F0EAD6] shadow-md">
              <ProductIllustration type="ghee" size="md" className="h-full" />
            </div>

            <motion.a
              whileHover={{ y: -3, boxShadow: "0 8px 25px rgba(37, 211, 102, 0.25)" }}
              whileTap={{ scale: 0.98 }}
              href={getWhatsAppUrl(bestSellerProduct.name, bestSellerProduct.price, bestSellerProduct.unit)}
              target="_blank"
              referrerPolicy="no-referrer"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#128C7E] text-white text-xs font-bold transition-all shadow-sm"
            >
              Order on WhatsApp (₹{bestSellerProduct.price})
            </motion.a>
          </div>

        </div>
      </motion.section>

      {/* 6. GALLERY TEASER */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeUpVariants}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6"
      >
        <div className="flex items-end justify-between">
          <div className="space-y-1.5 text-left">
            <p className="text-[11px] font-extrabold uppercase tracking-wider text-[#FF9933]">
              Behind the Scenes
            </p>
            <h2 className="text-2xl sm:text-3xl font-black text-[#3E2723]">
              અમારી ડેરી ની એક ઝલક
            </h2>
          </div>
          
          <motion.button
            whileHover={{ x: 3 }}
            onClick={() => {
              setActiveTab('gallery');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-1 text-xs font-black text-[#FF9933] hover:text-[#E68A00] group transition-all"
          >
            View Full Gallery 
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        {/* 3 columns gallery teaser */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3.5 sm:gap-6">
          {galleryItems.slice(0, 3).map((item) => (
            <motion.div 
              key={item.id}
              whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(62, 39, 35, 0.06)" }}
              className="group relative bg-white rounded-2xl border border-[#F0EAD6] p-3 overflow-hidden transition-all duration-300 w-full"
            >
              <ProductIllustration type={item.illustrationType} size="sm" className="h-32 sm:h-40 w-full rounded-xl" />
              <div className="mt-2 text-center">
                <p className="text-xs font-bold text-[#3E2723] leading-tight truncate">{item.title}</p>
                <p className="text-[10px] text-[#FF9933] font-medium mt-0.5 truncate">{item.gujaratiTitle}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* 7. TESTIMONIALS */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeUpVariants}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8"
      >
        <div className="text-center space-y-1.5">
          <p className="text-[11px] font-extrabold uppercase tracking-wider text-[#FF9933]">
            Customer Love
          </p>
          <h2 className="text-2xl sm:text-3xl font-black text-[#3E2723]">
            ગ્રાહકોના અભિપ્રાયો
          </h2>
          <div className="h-1 w-12 bg-[#FF9933] mx-auto rounded-full" />
        </div>

        {/* Testimonials stack/grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((test) => (
            <motion.div 
              key={test.id}
              whileHover={{ y: -4, boxShadow: "0 10px 25px rgba(62, 39, 35, 0.06)" }}
              className="bg-white rounded-2xl border border-[#F0EAD6] p-6 shadow-xs relative transition-all duration-200"
            >
              {/* Quote marks */}
              <span className="absolute top-4 right-6 text-5xl text-[#F0EAD6] font-serif leading-none select-none">“</span>
              
              {/* Star Rating */}
              <div className="flex gap-0.5 mb-3">
                {[...Array(test.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-xs sm:text-sm text-[#3E2723]/90 leading-relaxed mb-4 italic">
                "{test.text}"
              </p>

              {/* Reviewer */}
              <div className="border-t border-[#F0EAD6] pt-3 flex items-center justify-between">
                <div>
                  <h4 className="text-xs sm:text-sm font-extrabold text-[#3E2723]">
                    {test.name}
                  </h4>
                  <p className="text-[10px] text-[#FF9933] font-bold">
                    {test.gujaratiName}
                  </p>
                </div>
                <div className="text-right text-[10px] text-[#C5A059] font-medium font-mono">
                  <span>{test.location}</span>
                  <span className="block">{test.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* 8. PREMIUM FOOTER */}
      <footer className="border-t border-[#F0EAD6] bg-[#FAF6EE] pt-12 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Col 1: About Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <Logo size={42} />
              <span className="text-base font-black text-[#3E2723]">Shree Khodiyar Dairy</span>
            </div>
            
            <p className="text-xs text-[#3E2723]/90 leading-relaxed">
              Established in 1996, Shree Khodiyar Dairy is Babra's premier brand for authentic milk products, sweets, and fresh paneer. Keeping traditional flavor alive with modern hygiene.
            </p>

            <div className="text-xs font-bold text-[#FF9933] font-sans">
              બાબરા નું ગૌરવ • Since 1996
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-black uppercase tracking-wider text-[#3E2723] border-b border-[#F0EAD6] pb-2">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs font-bold text-[#3E2723]/90">
              <li>
                <button onClick={() => { setActiveTab('home'); window.scrollTo(0,0); }} className="hover:text-[#FF9933] transition-colors text-left cursor-pointer">Home Screen</button>
              </li>
              <li>
                <button onClick={() => { setSelectedCategory('all'); setActiveTab('products'); window.scrollTo(0,0); }} className="hover:text-[#FF9933] transition-colors text-left cursor-pointer">Products Catalog</button>
              </li>
              <li>
                <button onClick={() => { setActiveTab('categories'); window.scrollTo(0,0); }} className="hover:text-[#FF9933] transition-colors text-left cursor-pointer">All Categories</button>
              </li>
              <li>
                <button onClick={() => { setActiveTab('gallery'); window.scrollTo(0,0); }} className="hover:text-[#FF9933] transition-colors text-left cursor-pointer">Kitchen Gallery</button>
              </li>
              <li>
                <button onClick={() => { setActiveTab('about'); window.scrollTo(0,0); }} className="hover:text-[#FF9933] transition-colors text-left cursor-pointer">Our 1996 Story</button>
              </li>
            </ul>
          </div>

          {/* Col 3: Outlet Hours */}
          <div className="space-y-4">
            <h4 className="text-xs font-black uppercase tracking-wider text-[#3E2723] border-b border-[#F0EAD6] pb-2">
              Store Timings
            </h4>
            <div className="space-y-2.5 text-xs text-[#3E2723]/90">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#FF9933] shrink-0" />
                <div>
                  <p className="font-bold">Monday - Sunday</p>
                  <p className="text-[11px] text-[#C5A059]">07:00 AM - 10:00 PM</p>
                </div>
              </div>
              <div className="p-2.5 rounded-lg bg-[#FFF8E1] border border-[#F0EAD6] text-[11px] text-[#FF9933] font-medium">
                Note: Saffron Shrikhand and Live Paneer batches are prepared fresh every morning and evening.
              </div>
            </div>
          </div>

          {/* Col 4: Contact info */}
          <div className="space-y-4">
            <h4 className="text-xs font-black uppercase tracking-wider text-[#3E2723] border-b border-[#F0EAD6] pb-2">
              Contact Desk
            </h4>
            <ul className="space-y-2.5 text-xs text-[#3E2723]/90">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#FF9933] shrink-0 mt-0.5" />
                <span>Amreli Road, Opp. Bus Station, Babra, Gujarat 365421</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#FF9933] shrink-0" />
                <a href="tel:+916354691080" className="hover:underline font-mono font-bold">+91 63546 91080</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#FF9933] shrink-0" />
                <a href="mailto:khodiyardairybabra@gmail.com" className="hover:underline font-mono truncate">khodiyardairybabra@gmail.com</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer bottom bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-6 border-t border-[#F0EAD6] flex flex-col sm:flex-row items-center justify-between gap-4 text-center">
          <p className="text-xs text-[#C5A059] font-medium">
            &copy; {currentYear} Shree Khodiyar Dairy & Products. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5 text-xs text-[#C5A059]">
            <span>Designed Premium</span>
            <span className="text-[#FF9933]">★</span>
            <span>Babra's Quality Standard</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
