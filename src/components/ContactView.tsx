import React, { useState, useEffect, useRef } from 'react';
import { STORE_ADDRESS, STORE_PHONE, STORE_EMAIL, WHATSAPP_NUMBER } from '../data/dairyData';
import { MapPin, Phone, Mail, Clock, Send, AlertCircle } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export default function ContactView() {
  const [name, setName] = useState('');
  const [topic, setTopic] = useState('Product Sourcing');
  const [message, setMessage] = useState('');

  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    // Prevent double initialization
    if (mapInstance.current) {
      mapInstance.current.remove();
      mapInstance.current = null;
    }

    const position: [number, number] = [21.8461802, 71.3048567];

    const map = L.map(mapRef.current, {
      zoomControl: true,
      scrollWheelZoom: false,
      dragging: !L.Browser.mobile,
    }).setView(position, 17);

    mapInstance.current = map;

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap</a> contributors',
      maxZoom: 19,
    }).addTo(map);

    // Premium Red Pin Marker Icon
    const redPinIcon = L.divIcon({
      html: `
        <div class="relative -top-3 -left-3 flex items-center justify-center">
          <div class="relative">
            <div class="absolute -top-7 -left-3.5 bg-[#FF3333] text-white rounded-full w-7 h-7 shadow-md flex items-center justify-center border-2 border-white animate-bounce">
              <svg class="w-4 h-4 fill-current text-white" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
            </div>
            <div class="absolute -top-1 -left-1 w-2 h-2 bg-[#3E2723] rounded-full opacity-40" />
          </div>
        </div>
      `,
      className: 'custom-leaflet-pin',
      iconSize: [24, 24],
      iconAnchor: [12, 12],
      popupAnchor: [0, -28]
    });

    const marker = L.marker(position, { icon: redPinIcon }).addTo(map);

    const popupContent = `
      <div class="p-1.5 text-center font-sans space-y-1">
        <h4 class="font-black text-[#3E2723] text-xs m-0 leading-tight">Shree Khodiyar Dairy</h4>
        <p class="text-[10px] text-[#C5A059] font-bold m-0 leading-tight">Babra, Gujarat, India</p>
        <p class="text-[11px] text-[#FF9933] font-black m-0 leading-tight">બાબરા, ગુજરાત</p>
      </div>
    `;

    marker.bindPopup(popupContent).openPopup();

    const resizeObserver = new ResizeObserver(() => {
      map.invalidateSize();
    });
    resizeObserver.observe(mapRef.current);

    return () => {
      resizeObserver.disconnect();
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    // Prefill custom enquiry WhatsApp link
    const baseText = `*Khodiyar Dairy (Enquiry)*\n\nHello, I have an enquiry regarding:\n\n• *Name:* ${name}\n• *Topic:* ${topic}\n• *Message:* ${message}\n\nThank you!`;
    const encodedText = encodeURIComponent(baseText);
    const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`;

    // Redirect to WhatsApp
    window.open(whatsappLink, '_blank', 'noreferrer,noopener');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-10 pb-24">
      
      {/* Page Title */}
      <div className="text-left space-y-1">
        <h2 className="text-2xl sm:text-3xl font-black text-[#3E2723]">
          Contact Us
        </h2>
        <p className="text-xs sm:text-sm text-[#C5A059] font-medium">
          Have questions or planning a festival order? Reach out or visit us in Babra.
        </p>
      </div>

      {/* Main Grid: Contact Details & Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        
        {/* Left Col: Details & Maps (Lg: col-span-5) */}
        <div className="lg:col-span-5 space-y-6">
          
          <div className="bg-white rounded-2xl border border-[#F0EAD6] p-5 sm:p-6 space-y-6">
            <h3 className="text-base sm:text-lg font-black text-[#3E2723] border-b border-[#F0EAD6] pb-2">
              Babra Outlet Desk
            </h3>

            <div className="space-y-4">
              {/* Address */}
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#FFF8E1] border border-[#F0EAD6] flex items-center justify-center text-[#FF9933] shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="space-y-0.5">
                  <p className="text-xs text-[#C5A059] font-bold">Physical Address</p>
                  <p className="text-xs sm:text-sm text-[#3E2723] font-semibold leading-relaxed">
                    {STORE_ADDRESS}
                  </p>
                </div>
              </div>

              {/* Call */}
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#FFF8E1] border border-[#F0EAD6] flex items-center justify-center text-[#FF9933] shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="space-y-0.5">
                  <p className="text-xs text-[#C5A059] font-bold">Helpline Number</p>
                  <a href={`tel:${STORE_PHONE}`} className="text-xs sm:text-sm text-[#3E2723] font-black hover:underline font-mono">
                    {STORE_PHONE}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#FFF8E1] border border-[#F0EAD6] flex items-center justify-center text-[#FF9933] shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="space-y-0.5">
                  <p className="text-xs text-[#C5A059] font-bold">Email Inbox</p>
                  <a href={`mailto:${STORE_EMAIL}`} className="text-xs sm:text-sm text-[#3E2723] font-semibold hover:underline font-mono block truncate">
                    {STORE_EMAIL}
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#FFF8E1] border border-[#F0EAD6] flex items-center justify-center text-[#FF9933] shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div className="space-y-0.5">
                  <p className="text-xs text-[#C5A059] font-bold">Store Hours</p>
                  <p className="text-xs sm:text-sm text-[#3E2723] font-semibold">
                    Mon - Sun: 8:00 AM - 9:00 PM
                  </p>
                </div>
              </div>

            </div>

            {/* Quick warning */}
            <div className="p-3 bg-[#FFF8E1] border border-[#F0EAD6] rounded-xl flex gap-2">
              <AlertCircle className="w-4 h-4 text-[#FF9933] shrink-0 mt-0.5" />
              <p className="text-[10px] text-[#FF9933] leading-relaxed font-semibold">
                For wedding buffet and high-volume festival sweets catering, please enquire at least 3 days in advance to ensure fresh batch preparation.
              </p>
            </div>
          </div>

        </div>

        {/* Right Col: Contact Form (Lg: col-span-7) */}
        <div className="lg:col-span-7 bg-white rounded-2xl border border-[#F0EAD6] p-5 sm:p-6 space-y-5">
          <h3 className="text-base sm:text-lg font-black text-[#3E2723] border-b border-[#F0EAD6] pb-2">
            Send a Direct Message
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Name Input */}
            <div className="space-y-1">
              <label className="block text-xs font-bold text-[#C5A059]">Your Name</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Rameshbhai Savaliya"
                className="w-full px-4 py-2.5 rounded-xl border border-[#F0EAD6] bg-[#FDFBF7] text-xs font-bold text-[#3E2723] focus:outline-none focus:ring-2 focus:ring-[#FF9933]/30"
              />
            </div>

            {/* Topic Select */}
            <div className="space-y-1">
              <label className="block text-xs font-bold text-[#C5A059]">What are you looking for?</label>
              <select
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-[#F0EAD6] bg-[#FDFBF7] text-xs font-bold text-[#3E2723] focus:outline-none focus:ring-2 focus:ring-[#FF9933]/30"
              >
                <option value="Product Sourcing">Fresh Dairy Milk Supply</option>
                <option value="Sweets Order">Festival Sweets Ordering</option>
                <option value="Wedding Order">Marriage / Event Catering</option>
                <option value="Business Franchise">Retail Partnership</option>
                <option value="General Feedback">Store Feedback / Complaint</option>
              </select>
            </div>

            {/* Message Textarea */}
            <div className="space-y-1">
              <label className="block text-xs font-bold text-[#C5A059]">Message</label>
              <textarea
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your requirement details here..."
                className="w-full px-4 py-2.5 rounded-xl border border-[#F0EAD6] bg-[#FDFBF7] text-xs font-bold text-[#3E2723] focus:outline-none focus:ring-2 focus:ring-[#FF9933]/30"
              />
            </div>

            {/* Submit CTA */}
            <button
              type="submit"
              className="w-full py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#128C7E] text-white text-xs font-black transition-all flex items-center justify-center gap-2 shadow-xs cursor-pointer"
            >
              <WhatsAppIcon className="w-4 h-4 text-white fill-current" />
              Send via WhatsApp Message
            </button>

          </form>
        </div>

      </div>

      {/* Interactive Map Section */}
      <div className="bg-white rounded-2xl border border-[#F0EAD6] p-4 sm:p-6 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#F0EAD6] pb-3">
          <div>
            <span className="text-[10px] font-black uppercase tracking-wider text-[#FF9933] block mb-0.5">
              📍 Find Khodiyar Dairy
            </span>
            <h3 className="text-base sm:text-lg font-black text-[#3E2723]">
              Babra Outlet Location Map
            </h3>
          </div>
          <p className="text-xs text-[#C5A059] font-semibold">
            Babra-Amreli Highway, Babra, Gujarat
          </p>
        </div>

        {/* Leaflet Map Div */}
        <div 
          ref={mapRef} 
          className="w-full rounded-xl overflow-hidden border border-[#F0EAD6] shadow-inner bg-[#FDFBF7] relative z-10 h-[260px] md:h-[340px]"
          style={{ touchAction: 'pan-y' }}
        />

        {/* Get Directions Button Below */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
          <div className="text-center sm:text-left">
            <h4 className="text-sm font-black text-[#3E2723]">Shree Khodiyar Dairy</h4>
            <p className="text-xs text-[#C5A059] font-bold">Babra, Gujarat, India (બાબરા, ગુજરાત)</p>
          </div>
          <a
            href="https://maps.app.goo.gl/djx6BBY5tRPJ5hoQ6"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex flex-col items-center justify-center px-6 py-2.5 rounded-xl bg-[#FF9933] hover:bg-[#E08520] active:scale-95 text-white transition-all shadow-xs group cursor-pointer text-center"
            id="get-directions-btn"
          >
            <div className="flex items-center gap-2 justify-center">
              <MapPin className="w-4 h-4 text-white group-hover:animate-bounce" />
              <span className="text-sm font-black tracking-wide">Get Directions</span>
            </div>
            <span className="text-[11px] font-bold opacity-90 mt-0.5">દિશા મેળવો</span>
          </a>
        </div>
      </div>

    </div>
  );
}
