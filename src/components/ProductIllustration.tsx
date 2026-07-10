import React from 'react';

interface ProductIllustrationProps {
  type: 'milk' | 'ghee' | 'paneer' | 'shrikhand' | 'sweet' | 'buttermilk' | 'dahi' | 'pedha' | 'kaju-katri' | string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function ProductIllustration({ type, className = '', size = 'md' }: ProductIllustrationProps) {
  // Size classes
  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-full h-40 md:h-48',
    lg: 'w-full h-56 md:h-64'
  };

  const containerClass = `relative overflow-hidden bg-gradient-to-br from-[#FFFDF9] via-[#FAF6EE] to-[#F1E8D9] border border-[#F2E5D0] flex items-center justify-center rounded-xl ${sizeClasses[size]} ${className}`;

  // Decorative traditional background pattern
  const BackgroundMandala = () => (
    <svg className="absolute inset-0 w-full h-full opacity-[0.04] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="mandala" width="40" height="40" patternUnits="userSpaceOnUse">
          <circle cx="20" cy="20" r="1" fill="#D97706" />
          <path d="M 20 0 L 20 40 M 0 20 L 40 20" stroke="#D97706" strokeWidth="0.5" />
          <circle cx="20" cy="20" r="8" stroke="#D97706" strokeWidth="0.5" fill="none" />
          <path d="M 12 12 L 28 28 M 12 28 L 28 12" stroke="#D97706" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#mandala)" />
    </svg>
  );

  const GoldRing = () => (
    <div className="absolute inset-4 border border-[#D97706]/10 rounded-full pointer-events-none flex items-center justify-center">
      <div className="w-[85%] h-[85%] border border-dashed border-[#B45309]/15 rounded-full" />
    </div>
  );

  const renderVector = () => {
    switch (type) {
      case 'milk':
        return (
          <svg className="w-1/2 h-1/2 text-[#D97706] drop-shadow-md z-10" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Milk Bottle/Pot */}
            <path d="M35 15 C35 12, 65 12, 65 15 L60 30 C60 30, 75 35, 75 55 C75 75, 65 85, 50 85 C35 85, 25 75, 25 55 C25 35, 40 30, 40 30 Z" fill="url(#goldGradient)" />
            <path d="M38 18 L62 18" stroke="#3D2517" strokeWidth="3" strokeLinecap="round" />
            <ellipse cx="50" cy="15" rx="15" ry="4" fill="#FDFBF7" stroke="#3D2517" strokeWidth="3" />
            {/* Liquid wave */}
            <path d="M26.5 58 C 35 62, 45 54, 55 58 C 65 62, 70 58, 73.5 58 C 74.5 66, 70 80, 50 80 C 30 80, 25.5 66, 26.5 58 Z" fill="#FFFFFF" opacity="0.9" />
            {/* Traditional border decoration on bottle */}
            <path d="M35 40 Q50 45 65 40" stroke="#B45309" strokeWidth="2" fill="none" strokeDasharray="2 2" />
            {/* Splash Droplets */}
            <path d="M50 22 C51 22, 53 25, 50 28 C47 25, 49 22, 50 22 Z" fill="#D97706" />
            <path d="M20 40 C21 40, 22 42, 20 44 C18 42, 19 40, 20 40 Z" fill="#D97706" />
            <path d="M78 42 C79 42, 80 44, 78 46 C76 44, 77 42, 78 42 Z" fill="#D97706" />
          </svg>
        );

      case 'ghee':
        return (
          <svg className="w-1/2 h-1/2 text-[#D97706] drop-shadow-md z-10" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Golden Pot / Kalash */}
            <path d="M22 45 C22 30, 32 25, 50 25 C68 25, 78 30, 78 45 C78 68, 68 82, 50 82 C32 82, 22 68, 22 45 Z" fill="url(#goldGradient)" />
            {/* Pot Rim */}
            <path d="M32 25 C32 20, 68 20, 68 25 Z" fill="#B45309" />
            <ellipse cx="50" cy="25" rx="18" ry="4" fill="#FCD34D" stroke="#3D2517" strokeWidth="2.5" />
            {/* Butter heap */}
            <path d="M35 25 C35 15, 65 15, 65 25 Z" fill="#FFFFFF" stroke="#3D2517" strokeWidth="2.5" />
            {/* Mandala decoration on Ghee pot */}
            <circle cx="50" cy="55" r="12" stroke="#3D2517" strokeWidth="1.5" fill="none" strokeDasharray="3 2" />
            <circle cx="50" cy="55" r="6" fill="#B45309" />
            {/* Golden radiance flame representing clarification/Sajavan */}
            <path d="M50 5 C54 12, 46 16, 50 22 C54 16, 46 12, 50 5 Z" fill="#F59E0B" />
          </svg>
        );

      case 'paneer':
        return (
          <svg className="w-1/2 h-1/2 text-[#D97706] drop-shadow-md z-10" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Wooden Platter */}
            <ellipse cx="50" cy="72" rx="42" ry="12" fill="#B45309" stroke="#3D2517" strokeWidth="2.5" />
            <ellipse cx="50" cy="69" rx="38" ry="10" fill="#E65100" />
            
            {/* Paneer Blocks */}
            {/* Block 1 */}
            <path d="M25 45 L50 35 L70 42 L45 52 Z" fill="#FFFFFF" stroke="#3D2517" strokeWidth="2.5" />
            <path d="M25 45 L45 52 L45 62 L25 55 Z" fill="#F3F4F6" stroke="#3D2517" strokeWidth="2.5" />
            <path d="M45 52 L70 42 L70 52 L45 62 Z" fill="#E5E7EB" stroke="#3D2517" strokeWidth="2.5" />
            
            {/* Block 2 (Cubic overlay) */}
            <path d="M42 30 L60 22 L75 28 L57 36 Z" fill="#FAFBFB" stroke="#3D2517" strokeWidth="2" />
            <path d="M42 30 L57 36 L57 44 L42 38 Z" fill="#EAECEE" stroke="#3D2517" strokeWidth="2" />
            
            {/* Coriander leaf accent */}
            <path d="M72 58 Q78 52 82 56 Q80 62 72 58" fill="#10B981" />
            <path d="M22 64 Q16 68 18 62 Q24 60 22 64" fill="#10B981" />
          </svg>
        );

      case 'shrikhand':
        return (
          <svg className="w-1/2 h-1/2 text-[#D97706] drop-shadow-md z-10" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Royal Bowl */}
            <path d="M15 45 C15 70, 85 70, 85 45 Z" fill="url(#goldGradient)" stroke="#3D2517" strokeWidth="2.5" />
            <path d="M40 64 L35 75 L65 75 L60 64 Z" fill="#B45309" stroke="#3D2517" strokeWidth="2.5" />
            <line x1="30" y1="75" x2="70" y2="75" stroke="#3D2517" strokeWidth="3" strokeLinecap="round" />
            
            {/* Overflowing Shrikhand */}
            <path d="M16 45 C16 30, 30 20, 50 20 C70 20, 84 30, 84 45 Z" fill="#FEF3C7" stroke="#3D2517" strokeWidth="2" />
            {/* Shrikhand swirls */}
            <path d="M30 35 C40 28, 60 28, 70 35 C65 30, 35 30, 30 35 Z" fill="#FBBF24" opacity="0.6" />
            
            {/* Pista / Almond garnishing */}
            {/* Almond slivers (Gold) */}
            <path d="M40 25 Q44 21 46 25 Q42 29 40 25" fill="#F59E0B" />
            <path d="M58 24 Q62 20 64 24 Q60 28 58 24" fill="#F59E0B" />
            {/* Pistachio slivers (Green) */}
            <path d="M48 28 Q52 25 54 29 Q50 33 48 28" fill="#10B981" />
            <path d="M32 32 Q36 29 38 33 Q34 37 32 32" fill="#10B981" />
            <path d="M64 30 Q68 27 70 31 Q66 35 64 30" fill="#10B981" />
            
            {/* Saffron Strands (Kesar) */}
            <path d="M50 18 Q52 14 51 10" stroke="#EF4444" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M54 20 Q57 16 58 13" stroke="#EF4444" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M45 22 Q43 18 42 15" stroke="#EF4444" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        );

      case 'sweet':
        return (
          <svg className="w-1/2 h-1/2 text-[#D97706] drop-shadow-md z-10" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Golden Platter / Thal */}
            <ellipse cx="50" cy="72" rx="44" ry="12" fill="url(#goldGradient)" stroke="#3D2517" strokeWidth="2.5" />
            <ellipse cx="50" cy="69" rx="39" ry="9" fill="#FFFBEB" />
            
            {/* Stack of Sweets (Laddus/Peda) */}
            {/* Row 1 (Bottom) */}
            <circle cx="28" cy="60" r="10" fill="#F59E0B" stroke="#3D2517" strokeWidth="2" />
            <circle cx="50" cy="60" r="11" fill="#D97706" stroke="#3D2517" strokeWidth="2" />
            <circle cx="72" cy="60" r="10" fill="#F59E0B" stroke="#3D2517" strokeWidth="2" />
            {/* Row 2 (Middle) */}
            <circle cx="39" cy="46" r="10" fill="#D97706" stroke="#3D2517" strokeWidth="2" />
            <circle cx="61" cy="46" r="10" fill="#F59E0B" stroke="#3D2517" strokeWidth="2" />
            {/* Row 3 (Top) */}
            <circle cx="50" cy="32" r="10" fill="#B45309" stroke="#3D2517" strokeWidth="2" />
            
            {/* Dry Fruit toppings */}
            <circle cx="50" cy="30" r="2" fill="#10B981" />
            <circle cx="39" cy="44" r="2" fill="#10B981" />
            <circle cx="61" cy="44" r="2" fill="#EF4444" />
          </svg>
        );

      case 'buttermilk':
        return (
          <svg className="w-1/2 h-1/2 text-[#D97706] drop-shadow-md z-10" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Earthen Clay Glass (Kulhad) */}
            <path d="M30 25 L34 75 C34 82, 66 82, 66 75 L70 25 Z" fill="#D97706" stroke="#3D2517" strokeWidth="2.5" />
            <ellipse cx="50" cy="25" rx="20" ry="5" fill="#FFFDF9" stroke="#3D2517" strokeWidth="2.5" />
            
            {/* Frothy Buttermilk top */}
            <ellipse cx="50" cy="24" rx="18" ry="4" fill="#FFFFFF" />
            
            {/* Mint garnish */}
            <path d="M48 22 Q52 14 55 21" fill="#10B981" />
            <path d="M52 23 Q45 15 42 22" fill="#10B981" />
            
            {/* Spice sprinkle dots (cumin) */}
            <circle cx="48" cy="24" r="1" fill="#78350F" />
            <circle cx="54" cy="23" r="1" fill="#78350F" />
            <circle cx="43" cy="25" r="1" fill="#78350F" />
            <circle cx="51" cy="25" r="0.8" fill="#78350F" />
            
            {/* Earthen lines on Kulhad */}
            <path d="M32 40 C40 43, 60 43, 68 40" stroke="#78350F" strokeWidth="2" fill="none" />
            <path d="M33 55 C40 58, 60 58, 67 55" stroke="#78350F" strokeWidth="1.5" fill="none" />
          </svg>
        );

      case 'dahi':
        return (
          <svg className="w-1/2 h-1/2 text-[#D97706] drop-shadow-md z-10" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Earthen Matka */}
            <path d="M22 50 C22 35, 32 30, 50 30 C68 30, 78 35, 78 50 C78 72, 68 82, 50 82 C32 82, 22 72, 22 50 Z" fill="#B45309" stroke="#3D2517" strokeWidth="2.5" />
            <ellipse cx="50" cy="30" rx="22" ry="5" fill="#FFFFFF" stroke="#3D2517" strokeWidth="2.5" />
            {/* Thick milk skin rim */}
            <ellipse cx="50" cy="30" rx="19" ry="3.5" fill="#FFFDF9" />
            <path d="M18 50 Q50 55 82 50" stroke="#78350F" strokeWidth="2" fill="none" strokeDasharray="4 3" />
            <path d="M35 75 Q50 78 65 75" stroke="#78350F" strokeWidth="1.5" fill="none" />
          </svg>
        );

      case 'pedha':
        return (
          <svg className="w-1/2 h-1/2 text-[#D97706] drop-shadow-md z-10" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Gold Plate background */}
            <ellipse cx="50" cy="74" rx="38" ry="10" fill="#E65100" opacity="0.3" />
            
            {/* Single luxury Babra Pedha */}
            <path d="M22 50 C22 32, 78 32, 78 50 C78 68, 22 68, 22 50 Z" fill="#D97706" stroke="#3D2517" strokeWidth="3" />
            {/* Peda top indentation */}
            <ellipse cx="50" cy="46" rx="20" ry="10" fill="#B45309" stroke="#3D2517" strokeWidth="2" opacity="0.8" />
            
            {/* Pistachio slice embedded in center */}
            <path d="M50 40 C55 40, 58 46, 50 52 C42 46, 45 40, 50 40 Z" fill="#10B981" stroke="#047857" strokeWidth="1" />
            <circle cx="50" cy="46" r="2" fill="#FCD34D" />
            
            {/* Cracks and authentic rustic texture lines */}
            <path d="M28 45 Q35 48 40 44" stroke="#78350F" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            <path d="M72 46 Q64 48 60 43" stroke="#78350F" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            <path d="M48 60 Q52 58 56 61" stroke="#78350F" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          </svg>
        );

      case 'kaju-katri':
        return (
          <svg className="w-1/2 h-1/2 text-[#D97706] drop-shadow-md z-10" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Traditional brass plate */}
            <ellipse cx="50" cy="74" rx="42" ry="11" fill="url(#goldGradient)" stroke="#3D2517" strokeWidth="2.5" />
            <ellipse cx="50" cy="71" rx="38" ry="8" fill="#FDFBF7" />
            
            {/* Diamond Kaju Katli stacked */}
            {/* Piece 1 */}
            <path d="M20 54 L38 38 L56 54 L38 70 Z" fill="#E5E7EB" stroke="#3D2517" strokeWidth="2" />
            <path d="M20 54 L38 38 L56 54 L38 70 Z" fill="#FFFFFF" opacity="0.6" /> {/* Silver sheen */}
            
            {/* Piece 2 */}
            <path d="M44 42 L62 26 L80 42 L62 58 Z" fill="#D1D5DB" stroke="#3D2517" strokeWidth="2" />
            <path d="M44 42 L62 26 L80 42 L62 58 Z" fill="#FFFFFF" opacity="0.75" /> {/* Silver sheen */}
            
            {/* Piece 3 (On top) */}
            <path d="M32 46 L50 30 L68 46 L50 62 Z" fill="#F3F4F6" stroke="#3D2517" strokeWidth="2.5" />
            <path d="M32 46 L50 30 L68 46 L50 62 Z" fill="#FFFFFF" opacity="0.9" /> {/* Silver sheen */}
            
            {/* Silver Vark texture lines */}
            <path d="M42 38 L48 44 M40 50 L50 40" stroke="#9CA3AF" strokeWidth="1" strokeLinecap="round" />
            <path d="M54 36 L58 40 M52 46 L56 42" stroke="#9CA3AF" strokeWidth="1" strokeLinecap="round" />
          </svg>
        );

      default:
        // Default elegant mandala logo placeholder
        return (
          <svg className="w-1/3 h-1/3 text-[#D97706] z-10 animate-pulse" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="40" stroke="#D97706" strokeWidth="2" fill="none" />
            <circle cx="50" cy="50" r="35" stroke="#B45309" strokeWidth="1" strokeDasharray="4 2" fill="none" />
            <path d="M50 20 L50 80 M20 50 L80 50 M29 29 L71 71 M29 71 L71 29" stroke="#D97706" strokeWidth="1" opacity="0.5" />
            <circle cx="50" cy="50" r="15" fill="url(#goldGradient)" />
            <circle cx="50" cy="50" r="6" fill="#3D2517" />
          </svg>
        );
    }
  };

  return (
    <div className={containerClass}>
      <BackgroundMandala />
      <GoldRing />
      {renderVector()}
      
      {/* Golden gradient definitions for pristine vector rendering */}
      <svg className="w-0 h-0 absolute" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FCD34D" /> {/* amber 300 */}
            <stop offset="50%" stopColor="#F59E0B" /> {/* amber 500 */}
            <stop offset="100%" stopColor="#D97706" /> {/* amber 600 */}
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
