import React, { useState } from 'react';
import { Star, CheckCircle2, ArrowUpRight } from 'lucide-react';

interface GoogleReview {
  id: string;
  name: string;
  initials: string;
  avatarColor: string;
  rating: number;
  date: string;
  relativeTime: string;
  text: string;
  verified: boolean;
}

// Sorted Newest → Oldest as requested
const GOOGLE_REVIEWS_DATA: GoogleReview[] = [
  {
    id: 'gr1',
    name: 'Priyank Bhanderi',
    initials: 'PB',
    avatarColor: 'bg-[#1a73e8]', // Google Blue
    rating: 5,
    date: '2026-06-28',
    relativeTime: '3 days ago',
    text: 'Khodiyar Dairy is the pride of Babra! Buying Thabdi and Pure Ghee from here is an absolute necessity. Unmatchable traditional taste and pure quality.',
    verified: true
  },
  {
    id: 'gr2',
    name: 'Ramesh Savaliya',
    initials: 'RS',
    avatarColor: 'bg-[#ea4335]', // Google Red
    rating: 5,
    date: '2026-06-15',
    relativeTime: '2 weeks ago',
    text: 'Best Thabdi and Saffron Shrikhand in entire Gujarat! Sourced fresh and the taste is incredibly rich. The quality has remained unchanged for years.',
    verified: true
  },
  {
    id: 'gr3',
    name: 'Jignesh Nakrani',
    initials: 'JN',
    avatarColor: 'bg-[#34a853]', // Google Green
    rating: 5,
    date: '2026-06-10',
    relativeTime: '1 month ago',
    text: 'Absolute 5/5 stars for quality and purity. Best traditional sweets. Their Peda is classic. Babra\'s No.1 destination for pure milk products.',
    verified: true
  },
  {
    id: 'gr4',
    name: 'Dr. Amit Vora',
    initials: 'AV',
    avatarColor: 'bg-[#fbbc05]', // Google Yellow (Darker text)
    rating: 5,
    date: '2026-06-02',
    relativeTime: '1 month ago',
    text: 'Extremely hygienic dairy outlet. Their paneer is soft like butter, and sweet items are always fresh. Ordering on WhatsApp is quick and convenient.',
    verified: true
  },
  {
    id: 'gr5',
    name: 'Sejalben Moradiya',
    initials: 'SM',
    avatarColor: 'bg-[#a142f4]', // Google Purple
    rating: 5,
    date: '2026-05-20',
    relativeTime: '1 month ago',
    text: 'K&D Special Matho is out of this world! Perfect sweetness and absolutely loaded with premium dry fruits. The staff is always smiling and polite.',
    verified: true
  }
];

const GoogleGLogo = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      fill="#4285F4"
    />
    <path
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      fill="#34A853"
    />
    <path
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.85z"
      fill="#FBBC05"
    />
    <path
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.85c.87-2.6 3.3-4.53 6.16-4.53z"
      fill="#EA4335"
    />
  </svg>
);

export default function GoogleReviewsSection() {
  const [isPaused, setIsPaused] = useState(false);

  // We duplicate the list to provide seamless continuous marquee wrapping
  const doubleReviewsList = [...GOOGLE_REVIEWS_DATA, ...GOOGLE_REVIEWS_DATA, ...GOOGLE_REVIEWS_DATA];

  return (
    <section 
      id="testimonials" 
      className="relative bg-gradient-to-b from-[#FFFDF9] via-[#FAF6EE] to-[#FFFDF9] pt-10 pb-0 px-4 sm:px-6 lg:px-8 overflow-hidden select-none border-t border-b border-[#F0EAD6]/40"
    >
      {/* Dynamic Keyframes for seamless looping & premium animations */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.3333%);
          }
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee 30s linear infinite;
        }
        .marquee-track-paused {
          animation-play-state: paused !important;
        }
        @keyframes luxury-shine {
          0% {
            left: -150%;
          }
          50% {
            left: 150%;
          }
          100% {
            left: 150%;
          }
        }
        @keyframes luxury-pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(185, 28, 28, 0.45), 0 0 0 0 rgba(212, 175, 55, 0.45);
          }
          70% {
            box-shadow: 0 0 0 12px rgba(185, 28, 28, 0), 0 0 0 18px rgba(212, 175, 55, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(185, 28, 28, 0), 0 0 0 0 rgba(212, 175, 55, 0);
          }
        }
        .animate-luxury-shine {
          position: relative;
          overflow: hidden;
        }
        .animate-luxury-shine::after {
          content: '';
          position: absolute;
          top: 0;
          height: 100%;
          width: 200%;
          background: linear-gradient(to right, transparent, rgba(255,255,255,0.4) 50%, transparent);
          transform: skewX(-25deg);
          animation: luxury-shine 4s ease-in-out infinite;
        }
        .btn-luxury-pulse {
          animation: luxury-pulse 2s infinite;
        }
      `}} />

      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header Section */}
        <div className="text-center space-y-1.5 max-w-2xl mx-auto">
          <div className="flex justify-center gap-0.5 text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
            ))}
          </div>

          <div className="space-y-1">
            <h2 className="text-xl sm:text-3xl font-black text-[#3E2723] tracking-tight">
              What Our Customers Say
            </h2>
            <p className="text-xs sm:text-sm text-[#3E2723]/70 font-medium">
              Real reviews from our valued customers on Google.
            </p>
          </div>
          <div className="h-1 w-12 bg-[#FF9933] mx-auto rounded-full" />
        </div>

        {/* Continuous Horizontal Marquee Container */}
        <div 
          className="relative w-full overflow-hidden py-2"
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Subtle Golden gradient overlays for premium depth feel */}
          <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-20 bg-gradient-to-r from-[#FFFDF9] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-20 bg-gradient-to-l from-[#FFFDF9] to-transparent z-10 pointer-events-none" />

          {/* Marquee Track */}
          <div className={`marquee-track gap-4 sm:gap-6 ${isPaused ? 'marquee-track-paused' : ''}`}>
            {doubleReviewsList.map((review, idx) => (
              <div
                key={`${review.id}-${idx}`}
                className="w-[280px] xs:w-[310px] sm:w-[340px] md:w-[360px] bg-white rounded-2xl border border-[#F0EAD6]/70 p-5 shadow-xs hover:shadow-md transition-all duration-300 relative flex flex-col justify-between overflow-hidden group select-none shrink-0"
              >
                {/* Micro Google watermark in card background */}
                <div className="absolute top-3 right-3 opacity-[0.06] group-hover:scale-110 transition-transform duration-300 pointer-events-none">
                  <GoogleGLogo className="w-10 h-10" />
                </div>

                {/* Card Top section */}
                <div className="space-y-3">
                  {/* Google Profile avatar, name and badge */}
                  <div className="flex items-center gap-2.5">
                    {/* Google User Styled Profile Icon / Photo */}
                    <div className={`w-9 h-9 rounded-full ${review.avatarColor} border border-white/20 flex items-center justify-center font-black text-xs text-white shadow-xs`}>
                      {review.initials}
                    </div>

                    <div className="min-w-0">
                      <h4 className="text-xs sm:text-sm font-black text-[#3E2723] truncate leading-tight">
                        {review.name}
                      </h4>
                      
                      <div className="flex items-center gap-1 text-[9px] text-[#34A853] font-bold mt-0.5">
                        <CheckCircle2 className="w-2.5 h-2.5 text-[#34A853] fill-current" />
                        <span>Verified Google Review</span>
                      </div>
                    </div>
                  </div>

                  {/* Rating Stars and Relative Date */}
                  <div className="flex items-center justify-between border-b border-[#FAF6EE] pb-2 text-[10px]">
                    <div className="flex gap-0.5">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 text-amber-400 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-[#C5A059] font-semibold font-mono bg-[#FAF6EE] px-2 py-0.5 rounded-full border border-[#F0EAD6]/40">
                      {review.relativeTime}
                    </span>
                  </div>

                  {/* Review Text clamped to maximum 3 lines */}
                  <p className="text-xs sm:text-[13px] text-[#3E2723]/80 leading-relaxed italic line-clamp-3 min-h-[54px]">
                    "{review.text}"
                  </p>
                </div>

                {/* Footer sign-off inside card */}
                <div className="mt-4 border-t border-[#FAF6EE] pt-2 flex items-center justify-between text-[9px] text-[#C5A059] font-bold uppercase tracking-wider">
                  <div className="flex items-center gap-1">
                    <GoogleGLogo className="w-3 h-3" />
                    <span>Google Reviews</span>
                  </div>
                  <span className="text-[#34A853]">5.0 ★ Quality</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dynamic highlighted single CTA Button row below the Carousel */}
        <div className="flex flex-col items-center justify-center pt-6 pb-2 space-y-4">
          <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.25em] text-[#B91C1C] bg-[#FFF5F5] border border-[#FEB2B2]/40 px-4 py-1.5 rounded-full shadow-xs animate-pulse">
            ✨ Help Babra's Favorite Taste Grow ✨
          </span>
          <a
            href="https://g.page/r/CdtBTgw3wz7jEBI/review"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-luxury-pulse animate-luxury-shine inline-flex items-center justify-center gap-3.5 px-8 sm:px-10 py-4 rounded-full bg-gradient-to-r from-[#B91C1C] via-[#FF9933] to-[#C5A059] hover:from-[#9B1212] hover:via-[#E68A00] hover:to-[#AA7C11] text-white text-xs sm:text-sm font-black uppercase tracking-widest shadow-xl hover:-translate-y-1 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 cursor-pointer select-none border border-white/20 focus:outline-none"
          >
            <div className="bg-white p-1.5 rounded-full shadow-sm flex items-center justify-center shrink-0">
              <GoogleGLogo className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="flex flex-col items-start leading-none text-left">
              <div className="flex items-center gap-0.5 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-amber-300 text-amber-300" />
                ))}
              </div>
              <span className="text-white font-black text-xs sm:text-sm">Write a Google Review</span>
            </div>
            <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-white/90 shrink-0 ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <p className="text-[10px] sm:text-xs text-[#3E2723]/60 font-bold tracking-wider uppercase text-center max-w-xs">
            It takes only 30 seconds to support us!
          </p>
        </div>
      </div>
    </section>
  );
}
