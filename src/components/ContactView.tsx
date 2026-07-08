import React, { useState } from 'react';
import { MAP_EMBED_URL, STORE_ADDRESS, STORE_PHONE, STORE_EMAIL, WHATSAPP_NUMBER } from '../data/dairyData';
import { MapPin, Phone, Mail, Clock, Send, AlertCircle } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function ContactView() {
  const [name, setName] = useState('');
  const [topic, setTopic] = useState('Product Sourcing');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    // Prefill custom enquiry WhatsApp link
    const baseText = `*Shree Khodiyar Dairy (Enquiry)*\n\nHello, I have an enquiry regarding:\n\n• *Name:* ${name}\n• *Topic:* ${topic}\n• *Message:* ${message}\n\nThank you!`;
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
                    Mon - Sun: 07:00 AM - 10:00 PM
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

      {/* Google Maps Embed Section */}
      <div className="bg-white rounded-2xl border border-[#F0EAD6] p-3 shadow-xs">
        <h3 className="text-xs font-bold text-[#C5A059] px-3 mb-2.5 uppercase tracking-wider flex items-center gap-1.5">
          <MapPin className="w-3.5 h-3.5 text-[#FF9933]" />
          Store Location Map
        </h3>
        <div className="rounded-xl overflow-hidden h-72 sm:h-96 relative border border-[#F0EAD6]">
          <iframe
            src={MAP_EMBED_URL}
            className="w-full h-full border-0 absolute inset-0"
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Shree Khodiyar Dairy Babra Location Map"
          />
        </div>
      </div>

    </div>
  );
}
