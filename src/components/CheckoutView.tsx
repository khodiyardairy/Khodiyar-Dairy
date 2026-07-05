import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CartItem } from '../types';
import { ShoppingBag, ArrowLeft, Send } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../data/dairyData';

interface CheckoutViewProps {
  cart: CartItem[];
  onClearCart: () => void;
  setActiveTab: (tab: string) => void;
}

export default function CheckoutView({
  cart,
  onClearCart,
  setActiveTab
}: CheckoutViewProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    note: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const subtotal = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.address) {
      alert('Please fill out all required fields.');
      return;
    }

    setIsSubmitting(true);

    // Build WhatsApp order text
    let orderDetails = '';
    cart.forEach((item, index) => {
      const pName = item.product.gujaratiName || item.product.name;
      const itemSubtotal = item.product.price * item.quantity;
      orderDetails += `${index + 1}. *${pName}*\n   જથ્થો: ${item.quantity} x (₹${item.product.price} / ${item.product.unit}) = *₹${itemSubtotal}*\n`;
    });

    const waMessage = 
`*શ્રી ખોડિયાર ડેરી (બાબરા) — નવો ઓર્ડર* 🥣🥛

• *ગ્રાહકનું નામ:* ${formData.name}
• *ફોન નંબર:* ${formData.phone}
• *સરનામું:* ${formData.address}
${formData.note ? `• *વિશેષ નોંધ:* ${formData.note}\n` : ''}
*ઓર્ડર વિગતો:*
--------------------------------
${orderDetails}--------------------------------
*કુલ આઇટમ્સ:* ${totalItems}
*કુલ રકમ (Subtotal):* *₹${subtotal}*

કૃપા કરીને મારો ઓર્ડર કન્ફર્મ કરવા અને ડિલિવરી સમય જણાવવા વિનંતી છે. આભાર!`;

    const encodedText = encodeURIComponent(waMessage);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`;

    // Redirect to WhatsApp
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    // Clear cart and go back home after checkout
    setTimeout(() => {
      onClearCart();
      setActiveTab('home');
      setIsSubmitting(false);
    }, 1500);
  };

  if (cart.length === 0) {
    return (
      <div className="py-16 px-4 max-w-lg mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-3xl border border-[#F0EAD6] p-8 sm:p-12 shadow-xs"
        >
          <div className="w-20 h-20 rounded-full bg-[#FFF8E1] flex items-center justify-center mx-auto mb-6 text-4xl">
            🥣
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-[#3E2723] mb-2">
            ઓર્ડર આપવા માટે કાર્ટ ખાલી છે
          </h2>
          <p className="text-xs sm:text-sm text-[#3E2723]/60 mb-8 max-w-xs mx-auto leading-relaxed">
            Please add some products to your cart before proceeding to checkout.
          </p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setActiveTab('products')}
            className="w-full py-3.5 px-6 rounded-2xl bg-[#FF9933] hover:bg-[#E68A00] text-white text-sm font-black uppercase tracking-wider shadow-md shadow-[#FF9933]/15 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <ShoppingBag className="w-4 h-4" />
            Shop Premium Dairy
          </motion.button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="py-6 px-4 max-w-4xl mx-auto pb-24">
      {/* Back to Cart Action */}
      <button
        onClick={() => setActiveTab('cart')}
        className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#C5A059] hover:text-[#FF9933] mb-6 transition-colors focus:outline-none"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Cart / કાર્ટ પર પાછા જાઓ
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Form Input Card - Left Column */}
        <div className="lg:col-span-7 bg-white rounded-3xl border border-[#F0EAD6] p-5 sm:p-6 shadow-xs">
          <h2 className="text-lg sm:text-xl font-black text-[#3E2723] mb-1">ઓર્ડર અને ડિલિવરી વિગતો</h2>
          <p className="text-xs text-[#C5A059] font-bold uppercase tracking-wider mb-6">
            Delivery & Contact Details
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* Customer Name */}
            <div className="flex flex-col gap-1">
              <label htmlFor="name" className="text-xs font-black text-[#3E2723] uppercase tracking-wide flex justify-between">
                <span>Customer Name / નામ <span className="text-red-500">*</span></span>
              </label>
              <input
                id="name"
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="એન્ટર કરો ગ્રાહકનું નામ (e.g. Ramesh Patel)"
                className="w-full px-4 py-3 rounded-xl border border-[#F0EAD6] bg-[#FAF6EE]/30 text-sm font-medium text-[#3E2723] placeholder-[#C5A059]/40 focus:outline-none focus:border-[#FF9933] focus:bg-white transition-all"
              />
            </div>

            {/* Phone Number */}
            <div className="flex flex-col gap-1">
              <label htmlFor="phone" className="text-xs font-black text-[#3E2723] uppercase tracking-wide flex justify-between">
                <span>Phone Number / મોબાઈલ નંબર <span className="text-red-500">*</span></span>
              </label>
              <input
                id="phone"
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="નંબર દાખલ કરો (e.g. 9876543210)"
                className="w-full px-4 py-3 rounded-xl border border-[#F0EAD6] bg-[#FAF6EE]/30 text-sm font-medium text-[#3E2723] placeholder-[#C5A059]/40 focus:outline-none focus:border-[#FF9933] focus:bg-white transition-all"
              />
            </div>

            {/* Delivery/Pickup Address */}
            <div className="flex flex-col gap-1">
              <label htmlFor="address" className="text-xs font-black text-[#3E2723] uppercase tracking-wide flex justify-between">
                <span>Delivery or Pickup Address / પૂરું સરનામું <span className="text-red-500">*</span></span>
              </label>
              <textarea
                id="address"
                name="address"
                required
                rows={3}
                value={formData.address}
                onChange={handleChange}
                placeholder="તમારું ઘર નંબર, સોસાયટી, ગામ/વિસ્તાર, બાબરા (e.g. Opp. Bus Station, Babra)"
                className="w-full px-4 py-3 rounded-xl border border-[#F0EAD6] bg-[#FAF6EE]/30 text-sm font-medium text-[#3E2723] placeholder-[#C5A059]/40 focus:outline-none focus:border-[#FF9933] focus:bg-white transition-all resize-none"
              />
            </div>

            {/* Optional Note */}
            <div className="flex flex-col gap-1">
              <label htmlFor="note" className="text-xs font-black text-[#3E2723] uppercase tracking-wide">
                Optional Note / વિશેષ નોંધ (optional)
              </label>
              <input
                id="note"
                type="text"
                name="note"
                value={formData.note}
                onChange={handleChange}
                placeholder="કોઈ ખાસ સૂચના (e.g. 'ઓછી ખાંડવાળું', 'ડિલિવરી સાંજે ૫ વાગ્યે')"
                className="w-full px-4 py-3 rounded-xl border border-[#F0EAD6] bg-[#FAF6EE]/30 text-sm font-medium text-[#3E2723] placeholder-[#C5A059]/40 focus:outline-none focus:border-[#FF9933] focus:bg-white transition-all"
              />
            </div>

            {/* Submit / Checkout Button */}
            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-4 px-6 rounded-2xl bg-[#25D366] hover:bg-[#128C7E] disabled:bg-[#25D366]/60 text-white text-sm font-black uppercase tracking-wider shadow-md shadow-[#25D366]/15 transition-all flex items-center justify-center gap-2 mt-4 cursor-pointer`}
            >
              <Send className="w-4 h-4 shrink-0" />
              {isSubmitting ? 'Sending Order via WhatsApp...' : 'ઑર્ડર મોકલો (WhatsApp)'}
            </motion.button>
          </form>
        </div>

        {/* Order Review List - Right Column */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <div className="bg-white rounded-3xl border border-[#F0EAD6] p-5 shadow-xs">
            <h3 className="text-base font-black text-[#3E2723] mb-1">તમારો ઓર્ડર સમરી</h3>
            <p className="text-[10px] text-[#C5A059] font-bold uppercase tracking-wider mb-4">
              Review Your Selected Products
            </p>

            <div className="max-h-[260px] overflow-y-auto divide-y divide-[#F0EAD6]/60 pr-1 flex flex-col gap-3">
              {cart.map((item) => (
                <div key={item.product.id} className="flex justify-between items-center py-2.5 first:pt-0">
                  <div className="max-w-[70%]">
                    <h4 className="text-xs sm:text-sm font-black text-[#3E2723] leading-snug">
                      {item.product.gujaratiName || item.product.name}
                    </h4>
                    <p className="text-[10px] text-[#C5A059] font-bold font-mono">
                      ₹{item.product.price} / {item.product.unit} • Qty: {item.quantity}
                    </p>
                  </div>
                  <span className="text-xs sm:text-sm font-black text-[#3E2723] font-mono shrink-0">
                    ₹{item.product.price * item.quantity}
                  </span>
                </div>
              ))}
            </div>

            <div className="border-t border-[#F0EAD6] pt-4 mt-4 flex justify-between items-baseline">
              <span className="text-xs text-[#C5A059] font-bold uppercase tracking-wider">Grand Total</span>
              <div className="flex items-baseline">
                <span className="text-xs font-bold text-[#3E2723] mr-0.5">₹</span>
                <span className="text-lg sm:text-xl font-black text-[#3E2723] tracking-tight font-mono">
                  {subtotal}
                </span>
              </div>
            </div>
          </div>

          {/* Secure / Authentic Store Details Panel */}
          <div className="bg-[#FAF6EE] rounded-2xl border border-[#F0EAD6] p-4 text-center">
            <span className="text-xl">✨</span>
            <p className="text-[11px] font-black text-[#3E2723] uppercase tracking-wide mt-1">
              Shree Khodiyar Dairy & Products
            </p>
            <p className="text-[10px] font-medium text-[#C5A059] mt-0.5 leading-relaxed">
              Serving purest taste and traditional hygiene standards since 1996 in Babra, Gujarat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
