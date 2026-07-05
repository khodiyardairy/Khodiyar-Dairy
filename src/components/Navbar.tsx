import React, { useState } from 'react';
import { Menu, X, Phone, MapPin, ShoppingCart } from 'lucide-react';
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
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (tabId: string) => {
    setActiveTab(tabId);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-[#FDFBF7]/95 backdrop-blur-md border-b border-[#F0EAD6] shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand Info */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 focus:outline-none text-left cursor-pointer"
          >
            {/* Elegant Golden Logo Icon */}
            <Logo size={54} className="hover:scale-105 transition-transform duration-300" />

            {/* Title & Subtitle */}
            <div>
              <h1 className="text-base sm:text-lg md:text-xl font-black text-[#3E2723] leading-none tracking-tight">
                Shree Khodiyar Dairy
              </h1>
              <p className="text-[10px] sm:text-xs text-[#C5A059] font-bold mt-1 tracking-wide">
                બાબરા નું ગૌરવ • <span className="text-[#3E2723]/70 font-mono font-medium">Since 1996</span>
              </p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                  activeTab === item.id
                    ? 'bg-[#FF9933] text-white shadow-xs shadow-[#FF9933]/10'
                    : 'text-[#3E2723] hover:bg-[#F5EFE6] hover:text-[#3E2723]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right Action Icons & Helpline */}
          <div className="flex items-center gap-2.5 sm:gap-4">
            {/* Interactive Shopping Cart Icon */}
            <button
              onClick={() => handleNavClick('cart')}
              className={`relative p-2.5 rounded-xl border transition-all duration-200 cursor-pointer flex items-center justify-center ${
                activeTab === 'cart'
                  ? 'bg-[#FF9933] text-white border-[#FF9933] shadow-xs'
                  : 'bg-white text-[#3E2723] border-[#F0EAD6] hover:bg-[#FAF6EE]'
              }`}
              aria-label="View Cart"
            >
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 min-w-[20px] h-5 px-1.5 rounded-full bg-red-500 text-white text-[10px] font-black font-mono flex items-center justify-center border-2 border-[#FDFBF7] animate-pulse">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Quick Contact Right Side (Desktop) */}
            <div className="hidden lg:flex items-center shrink-0">
              <a
                href="tel:+916354691080"
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#F0EAD6] bg-white text-xs font-bold text-[#3E2723] hover:bg-[#F5EFE6] transition-colors duration-200"
              >
                <Phone className="w-3.5 h-3.5 text-[#FF9933]" />
                +91 63546 91080
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2.5 rounded-xl text-[#3E2723] hover:bg-[#F5EFE6] active:scale-95 transition-all focus:outline-none cursor-pointer"
                aria-label="Toggle Menu"
              >
                {isOpen ? <X className="w-5.5 h-5.5" /> : <Menu className="w-5.5 h-5.5" />}
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Mobile Fullscreen Menu (Slide down/fade) */}
      {isOpen && (
        <div className="fixed inset-0 top-20 z-40 bg-[#FDFBF7] flex flex-col justify-between p-6 overflow-y-auto animate-fade-in md:hidden border-t border-[#F0EAD6]">
          {/* Top pattern overlay background */}
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(#FF9933_1.5px,transparent_1.5px)] [background-size:16px_16px]" />

          {/* Navigation Links */}
          <div className="flex flex-col gap-3 relative z-10 my-auto">
            <p className="text-[10px] font-bold uppercase tracking-wider text-[#FF9933]/60 px-4 mb-1">
              Main Menu
            </p>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-5 py-3.5 rounded-2xl text-sm font-black tracking-wide transition-all cursor-pointer ${
                  activeTab === item.id
                    ? 'bg-[#FF9933] text-white shadow-md shadow-[#FF9933]/15'
                    : 'text-[#3E2723] hover:bg-[#F5EFE6] bg-white border border-[#F0EAD6]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span>{item.label}</span>
                  {activeTab === item.id && <span className="w-2 h-2 rounded-full bg-white animate-ping" />}
                </div>
              </button>
            ))}
          </div>

          {/* Bottom Info Details inside Menu */}
          <div className="relative z-10 pt-6 border-t border-[#F0EAD6] flex flex-col gap-3.5 mt-auto">
            <div className="flex items-center gap-3 text-xs text-[#3E2723]/80">
              <MapPin className="w-4 h-4 text-[#FF9933] shrink-0" />
              <span>Opp. Bus Station, Babra, Gujarat</span>
            </div>
            
            <a
              href="tel:+916354691080"
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-white border border-[#F0EAD6] text-[#3E2723] text-sm font-bold shadow-xs hover:bg-[#F5EFE6]"
            >
              <Phone className="w-4 h-4 text-[#FF9933]" />
              Call Customer Helpline
            </a>
          </div>

        </div>
      )}
    </header>
  );
}
