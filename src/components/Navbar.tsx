import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ShoppingCart, Search } from 'lucide-react';
import Logo from './Logo';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  cartCount: number;
}

export default function Navbar({ activeTab, setActiveTab, cartCount }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'products', label: 'Products' },
    { id: 'categories', label: 'Categories' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact Us' }
  ];

  const handleNavClick = (tabId: string) => {
    setActiveTab(tabId);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearchClick = () => {
    setActiveTab('products');
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle escape key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <>
      {/* Sticky Premium Header Container */}
      <header className="animate-slide-down-header sticky top-0 z-[80] bg-[#FDFBF7] border-b border-[#F0EAD6]/60 shadow-xs h-[72px] sm:h-[78px] flex items-center">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Left Section: Menu (Mobile) & Logo/Title Group */}
            <div className="flex items-center gap-2.5 xs:gap-3.5">
              {/* Mobile Hamburger Icon */}
              <button
                onClick={() => setIsOpen(true)}
                className="md:hidden p-2 -ml-2 rounded-xl text-[#3E2723] hover:bg-[#F5EFE6] active:scale-95 transition-all focus:outline-none cursor-pointer flex items-center justify-center"
                aria-label="Open navigation menu"
              >
                <Menu className="w-6 h-6 text-[#3E2723]" />
              </button>

              {/* Brand Logo & Info (Clickable to Home) */}
              <button
                onClick={() => handleNavClick('home')}
                className="flex items-center gap-2 xs:gap-3 focus:outline-none text-left cursor-pointer"
              >
                <Logo className="h-[44px] w-[44px] xs:h-[46px] xs:w-[46px] md:h-[56px] md:w-[56px] hover:scale-105 transition-transform duration-300" />
                <div className="flex flex-col">
                  <h1 className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl font-extrabold text-[#3E2723] leading-none tracking-tight truncate max-w-[140px] xxs:max-w-[170px] xs:max-w-none font-sans">
                    Khodiyar Dairy & Products
                  </h1>
                  <p className="text-[9px] xs:text-[10px] sm:text-xs text-[#C5A059] font-bold mt-0.5 tracking-wide">
                    બાબરાનું ગૌરવ • <span className="font-mono font-medium">Since 1996</span>
                  </p>
                </div>
              </button>
            </div>

            {/* Center Section: Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                    activeTab === item.id
                      ? 'bg-[#FF9933] text-white shadow-xs'
                      : 'text-[#3E2723] hover:bg-[#F5EFE6] hover:text-[#3E2723]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Right Section: Action Icons & Helpline */}
            <div className="flex items-center gap-1.5 xs:gap-3">
              {/* Search Icon */}
              <button
                onClick={handleSearchClick}
                className={`p-2.5 rounded-xl border transition-all duration-200 cursor-pointer flex items-center justify-center ${
                  activeTab === 'products'
                    ? 'bg-[#FF9933] text-white border-[#FF9933] shadow-xs'
                    : 'bg-white text-[#3E2723] border-[#F0EAD6] hover:bg-[#FAF6EE] active:scale-95'
                }`}
                aria-label="Search Catalog"
              >
                <Search className="w-5 h-5 text-current" />
              </button>

              {/* Shopping Bag / Cart Icon with Live Circular Badge */}
              <button
                onClick={() => handleNavClick('cart')}
                className={`relative p-2.5 rounded-xl border transition-all duration-200 cursor-pointer flex items-center justify-center ${
                  activeTab === 'cart'
                    ? 'bg-[#FF9933] text-white border-[#FF9933] shadow-xs'
                    : 'bg-white text-[#3E2723] border-[#F0EAD6] hover:bg-[#FAF6EE] active:scale-95'
                }`}
                aria-label="View Cart"
              >
                <ShoppingCart className="w-5 h-5 text-current" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 rounded-full bg-[#FF9933] text-white text-[9px] font-black font-mono flex items-center justify-center border border-[#FDFBF7]">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Quick Contact Helpline (Desktop only) */}
              <div className="hidden lg:flex items-center shrink-0">
                <a
                  href="tel:+916354691080"
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#F0EAD6] bg-white text-xs font-bold text-[#3E2723] hover:bg-[#F5EFE6] transition-colors duration-200"
                >
                  <Phone className="w-3.5 h-3.5 text-[#FF9933]" />
                  +91 63546 91080
                </a>
              </div>
            </div>

          </div>
        </div>
      </header>

      {/* Slide Hamburger Drawer Backdrop Overlay */}
      <div
        className={`fixed inset-0 bg-[#3E2723]/35 backdrop-blur-[1px] transition-opacity duration-[250ms] ease-out z-[90] md:hidden ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Left-Side Slide Drawer */}
      <div
        className={`fixed top-0 bottom-[64px] md:bottom-0 left-0 w-[82vw] max-w-[410px] bg-[#FDFBF7] border-r border-[#F0EAD6]/50 shadow-[10px_0_40px_rgba(62,39,35,0.12)] flex flex-col transition-transform duration-[250ms] ease-out z-[95] md:hidden overflow-y-auto ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation drawer"
      >
        {/* Drawer Header Top Row */}
        <div className="flex items-center justify-between px-4 py-4 border-b border-[#F0EAD6]/60">
          <div className="flex items-center gap-2">
            {/* Large Square Close Button with X Icon */}
            <button
              onClick={() => setIsOpen(false)}
              className="p-2.5 rounded-xl text-[#3E2723] hover:bg-[#F5EFE6] active:scale-95 transition-all focus:outline-none cursor-pointer flex items-center justify-center border border-[#F0EAD6]/50 bg-white"
              aria-label="Close navigation menu"
            >
              <X className="w-5 h-5 text-[#3E2723]" />
            </button>

            {/* Existing Logo SVG inside Drawer */}
            <Logo size={44} className="shrink-0" />
            
            {/* Drawer Title & Gujarati Subtitle */}
            <div className="flex flex-col text-left">
              <h2 className="text-[11px] xs:text-xs font-black text-[#3E2723] leading-none tracking-tight truncate max-w-[100px] xxs:max-w-[125px] xs:max-w-none">
                Khodiyar Dairy & Products
              </h2>
              <p className="text-[9px] text-[#C5A059] font-bold mt-0.5 tracking-wide">
                બાબરાનું ગૌરવ • Since 1996
              </p>
            </div>
          </div>

          {/* Search Icon & Cart Icon with Live Badge inside Drawer */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={handleSearchClick}
              className="p-2 rounded-xl text-[#3E2723] hover:bg-[#F5EFE6] active:scale-95 transition-all focus:outline-none cursor-pointer flex items-center justify-center border border-[#F0EAD6]/50 bg-[#FDFBF7]"
              aria-label="Search Products"
            >
              <Search className="w-4 h-4 text-[#3E2723]" />
            </button>
            <button
              onClick={() => handleNavClick('cart')}
              className="relative p-2 rounded-xl text-[#3E2723] hover:bg-[#F5EFE6] active:scale-95 transition-all focus:outline-none cursor-pointer flex items-center justify-center border border-[#F0EAD6]/50 bg-[#FDFBF7]"
              aria-label="View Cart"
            >
              <ShoppingCart className="w-4 h-4 text-[#3E2723]" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 min-w-[16px] h-[16px] px-1 rounded-full bg-[#FF9933] text-white text-[8px] font-black font-mono flex items-center justify-center border border-[#FDFBF7]">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Drawer Menu Links - Exactly 27–30px elegant font */}
        <div className="flex flex-col flex-grow py-3">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-6 py-5 flex items-center justify-between border-b border-[#F0EAD6]/30 transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-[#FAF6EE] text-[#FF9933] font-bold'
                    : 'text-[#3E2723] font-medium hover:bg-[#FAF6EE]/50'
                }`}
              >
                <span className="text-[27px] xs:text-[30px] font-serif tracking-tight leading-none text-current">
                  {item.label}
                </span>
                {isActive && (
                  <span className="w-2 h-2 rounded-full bg-[#C5A059]" />
                )}
              </button>
            );
          })}
        </div>

        {/* Drawer Footer bottom brand accents */}
        <div className="mt-auto p-5 border-t border-[#F0EAD6]/40 flex flex-col items-center justify-center gap-1 text-center bg-[#FAF6EE]/30">
          <p className="text-sm font-extrabold text-[#C5A059] tracking-widest">
            બાબરાનું ગૌરવ
          </p>
          <p className="text-[10px] font-bold text-[#C5A059]/80 tracking-wide">
            Trusted since 1996 · Babra, Gujarat
          </p>
        </div>
      </div>
    </>
  );
}
