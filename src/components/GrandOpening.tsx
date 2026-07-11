import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface GrandOpeningProps {
  initialCutsRemaining: number;
  onComplete: () => void;
}

export default function GrandOpening({ initialCutsRemaining, onComplete }: GrandOpeningProps) {
  const [isClicked, setIsClicked] = useState(false);
  const [isSplit, setIsSplit] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [scissorsState, setScissorsState] = useState<'idle' | 'entering' | 'cutting' | 'exiting'>('idle');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    // Lock scrolling on mount to prevent scrolling behind the invitation
    document.body.style.overflow = 'hidden';
    document.body.style.height = '100vh';

    return () => {
      // Restore scrolling on unmount
      document.body.style.overflow = '';
      document.body.style.height = '';
    };
  }, []);

  // Web Audio API snip sound synthesis for realistic ribbon cutting sound
  const playSnipSound = () => {
    try {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioContextClass) return;
      const ctx = new AudioContextClass();
      
      // 1. Triangle click for metal blade impact contact
      const osc = ctx.createOscillator();
      const gainNode = ctx.createGain();
      
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(950, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(110, ctx.currentTime + 0.08);
      
      gainNode.gain.setValueAtTime(0.25, ctx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.005, ctx.currentTime + 0.08);
      
      osc.connect(gainNode);
      gainNode.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.08);

      // 2. White noise friction for shear cutting effect
      const bufferSize = ctx.sampleRate * 0.11; // 110ms friction
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }
      
      const noise = ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = ctx.createBiquadFilter();
      filter.type = 'highpass';
      filter.frequency.setValueAtTime(2600, ctx.currentTime);
      filter.frequency.exponentialRampToValueAtTime(1300, ctx.currentTime + 0.11);

      const noiseGain = ctx.createGain();
      noiseGain.gain.setValueAtTime(0.1, ctx.currentTime);
      noiseGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.11);

      noise.connect(filter);
      filter.connect(noiseGain);
      noiseGain.connect(ctx.destination);
      
      noise.start();
      noise.stop(ctx.currentTime + 0.11);
    } catch (e) {
      console.warn('Audio context blocked or unsupported:', e);
    }
  };

  const handleRibbonClick = () => {
    if (isClicked || isSubmitting) return;
    setIsSubmitting(true);
    setErrorMessage(null);

    // Call the cut-ribbon API endpoint
    fetch('/api/cut-ribbon', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('API error or limit exceeded');
        }
        return res.json();
      })
      .then((data) => {
        if (data.success) {
          // Success! Play scissors animation and proceed.
          setIsClicked(true);
          try {
            localStorage.setItem('khodiyar-intro-played', 'true');
          } catch (e) {
            console.warn('localStorage not available:', e);
          }

          const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
          if (prefersReducedMotion) {
            onComplete();
            return;
          }

          // Snappy and precise animation phases
          // Phase 1: Scissors Enter
          setScissorsState('entering');

          // Phase 2: Start Cutting
          setTimeout(() => {
            setScissorsState('cutting');
          }, 450);

          // Phase 3: Trigger ribbon split, play sound, explode confetti
          setTimeout(() => {
            playSnipSound();
            setIsSplit(true);
            setShowConfetti(true);
          }, 700);

          // Phase 4: Scissors exit
          setTimeout(() => {
            setScissorsState('exiting');
          }, 1100);

          // Phase 5: Complete animation and unmount
          setTimeout(() => {
            onComplete();
          }, 1800);
        } else {
          // The ribbon has already been cut or opened
          setErrorMessage('Ribbon has already been cut!');
          setIsSubmitting(false);
          // Skip to the main website after 1.5 seconds so user is not blocked
          setTimeout(() => {
            onComplete();
          }, 1500);
        }
      })
      .catch((err) => {
        console.error('Error reserving ribbon cut:', err);
        // If API is down or fails, skip directly to prevent blocking the website
        onComplete();
      });
  };

  // Generate lightweight gold & red celebration particles
  const colors = ['#B91C1C', '#D4AF37', '#FFF8E1', '#AA7C11', '#EF4444', '#C5A059'];
  const confettiParticles = Array.from({ length: 32 }).map((_, i) => {
    const angle = (i * (360 / 32) * Math.PI) / 180 + (Math.random() * 0.2 - 0.1);
    const distance = Math.random() * 150 + 70;
    const targetX = Math.cos(angle) * distance;
    const targetY = Math.sin(angle) * distance - 30;
    return {
      id: i,
      color: colors[i % colors.length],
      x: targetX,
      y: targetY,
      size: Math.random() * 8 + 5,
      delay: Math.random() * 0.08
    };
  });

  // Scissors blade rotation angles for natural snipping motion
  const bladeARotation = scissorsState === 'cutting' ? -4 : 14;
  const bladeBRotation = scissorsState === 'cutting' ? 4 : -14;

  return (
    <div className="fixed inset-0 z-[99999] bg-[#0A0908] flex items-center justify-center overflow-hidden font-sans select-none">
      
      {/* Tall Premium Invitation Card (Fades/Slides away on ribbon split) */}
      <motion.div
        initial={{ opacity: 1, scale: 1, y: 0 }}
        animate={isSplit ? { opacity: 0, scale: 0.96, y: -20 } : { opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative rounded-[2.5rem] p-6 sm:p-10 bg-gradient-to-b from-[#FAF6EE] to-[#FFFDF9] border-4 border-[#D4AF37] shadow-[0_25px_60px_-12px_rgba(0,0,0,0.85)] flex flex-col items-center justify-between min-h-[570px] sm:min-h-[640px] max-w-[420px] w-[calc(100%-36px)] mx-auto overflow-hidden"
      >
        {/* Absolute Elegant Double Border Lines inside Card */}
        <div className="absolute inset-3 border border-[#D4AF37]/35 rounded-[2rem] pointer-events-none" />
        <div className="absolute inset-4 border border-[#D4AF37]/15 rounded-[1.8rem] pointer-events-none" />

        {/* Card Header text */}
        <div className="flex flex-col items-center text-center mt-2 z-10 w-full">
          <h1 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-[0.12em] text-[#3E2723] leading-none font-serif">
            Khodiyar Dairy
            <span className="block text-2xl sm:text-3xl font-bold tracking-[0.08em] text-[#C5A059] mt-1.5 font-serif">
              & Products
            </span>
          </h1>
          <p className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.22em] text-[#C5A059] mt-4 bg-[#FFF8E1] px-4 py-1.5 rounded-full border border-[#F0EAD6] shadow-xs">
            PURE • TRADITIONAL • HANDCRAFTED
          </p>
          
          {/* Global Cuts Remaining Premium Label */}
          <div className="mt-3.5 px-4 py-1.5 bg-[#FFF5F5] border border-[#FEB2B2]/40 rounded-full text-[9px] sm:text-[10px] font-extrabold tracking-wider text-[#B91C1C] uppercase animate-pulse">
            Exclusive opening access — {initialCutsRemaining} ribbon cut{initialCutsRemaining > 1 ? 's' : ''} remaining
          </div>
        </div>

        {/* Card Middle Invite Styling with exact space/gap for the red ribbon */}
        <div className="my-auto py-4 sm:py-6 flex flex-col items-center z-10 text-center relative w-full">
          <p className="text-xs sm:text-sm italic font-serif text-[#C5A059] mb-1 sm:mb-2">
            You're invited to the
          </p>
          <h2 className="text-4xl sm:text-6xl font-black tracking-[0.06em] text-[#B91C1C] leading-none mb-1 drop-shadow-xs font-serif uppercase">
            GRAND
          </h2>
          
          {/* Sizable gap for the red ribbon height (approx. 50px) */}
          <div className="h-12 sm:h-16 w-full" />
          
          <h2 className="text-4xl sm:text-6xl font-black tracking-[0.06em] text-[#B91C1C] leading-none mb-2 sm:mb-3 drop-shadow-xs font-serif uppercase">
            OPENING
          </h2>
          <p className="text-xs sm:text-sm font-extrabold tracking-[0.15em] text-[#3E2723] uppercase mb-4 sm:mb-6">
            Of Khodiyar Dairy
          </p>

          {/* Premium Gold Gradient Pill CTA Button (Width: 195px, Height: 48/52px, Fully Rounded) */}
          <div className="h-14 flex items-center justify-center w-full z-20">
            <AnimatePresence>
              {!isClicked && (
                <motion.button
                  key="grand-cta-button"
                  onClick={handleRibbonClick}
                  disabled={isSubmitting}
                  initial={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.85, y: 15 }}
                  animate={{ scale: [1, 1.03, 1] }}
                  transition={{
                    scale: { repeat: Infinity, duration: 3, ease: "easeInOut" },
                    opacity: { duration: 0.35 },
                    y: { duration: 0.35 }
                  }}
                  whileHover={{ scale: 1.03 }}
                  className={`w-[195px] h-[48px] sm:h-[52px] rounded-full bg-gradient-to-r from-[#DFBA73] via-[#F5D798] to-[#C5A059] text-[#3E2723] font-black text-xs sm:text-sm uppercase tracking-wider shadow-md shadow-[#C5A059]/25 hover:shadow-lg transition-all flex items-center justify-center gap-1.5 border border-[#FAF6EE]/50 select-none focus:outline-none z-50 ${isSubmitting ? 'opacity-80 cursor-wait pointer-events-none' : 'cursor-pointer pointer-events-auto'}`}
                >
                  {isSubmitting ? (
                    <span className="animate-spin mr-1">⌛</span>
                  ) : (
                    <span>✂</span>
                  )}
                  <span>{isSubmitting ? 'Connecting...' : 'Tap Ribbon to Enter'}</span>
                </motion.button>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Card Footer Message text */}
        <div className="flex flex-col items-center text-center mb-2 z-10 w-full">
          <div className="space-y-1.5 max-w-[280px] sm:max-w-[340px] mx-auto mb-5">
            <p className="text-[10px] sm:text-xs text-[#3E2723]/80 font-bold leading-relaxed">
              Your presence is the sweetest gift to our grand opening.
            </p>
            <p className="text-[10px] sm:text-xs text-[#3E2723]/80 font-bold leading-relaxed">
              Thank you for celebrating this special milestone with us.
            </p>
          </div>
          <p className="text-[9px] sm:text-[10px] font-black tracking-[0.18em] text-[#C5A059] uppercase">
            Happiness Is Just One Bite Away.
          </p>
        </div>
      </motion.div>

      {/* Satin Ribbon Visual Elements across the screen (Centered perfectly at 52% to overlap card gap) */}
      <div className="absolute inset-x-0 top-[52%] -translate-y-1/2 h-14 sm:h-16 flex items-center justify-center z-40 pointer-events-none">
        
        {/* Left Half of Ribbon - splits, rotates downwards, and drops naturally off-screen */}
        <motion.div
          initial={{ x: 0, y: 0, rotate: 0 }}
          animate={isSplit ? { x: '-110%', y: '40vh', rotate: -30 } : { x: 0, y: 0, rotate: 0 }}
          transition={{ duration: 1.3, ease: [0.25, 1, 0.5, 1] }}
          className="absolute left-0 w-1/2 h-11 sm:h-13 bg-gradient-to-r from-[#7F1D1D] via-[#B91C1C] to-[#EF4444] shadow-[0_8px_20px_rgba(0,0,0,0.45)] flex items-center justify-end"
        >
          {/* Speckled Satin highlights & shadow line */}
          <div className="w-full h-full bg-gradient-to-b from-white/15 via-transparent to-black/30" />
          <div className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D4AF37]/45 to-[#D4AF37]/50" />
        </motion.div>

        {/* Right Half of Ribbon - splits, rotates downwards, and drops naturally off-screen */}
        <motion.div
          initial={{ x: 0, y: 0, rotate: 0 }}
          animate={isSplit ? { x: '110%', y: '40vh', rotate: 30 } : { x: 0, y: 0, rotate: 0 }}
          transition={{ duration: 1.3, ease: [0.25, 1, 0.5, 1] }}
          className="absolute right-0 w-1/2 h-11 sm:h-13 bg-gradient-to-l from-[#7F1D1D] via-[#B91C1C] to-[#EF4444] shadow-[0_8px_20px_rgba(0,0,0,0.45)] flex items-center justify-start"
        >
          <div className="w-full h-full bg-gradient-to-b from-white/15 via-transparent to-black/30" />
          <div className="absolute left-0 right-0 h-1 bg-gradient-to-l from-transparent via-[#D4AF37]/45 to-[#D4AF37]/50" />
        </motion.div>

        {/* Central Clickable Bow and Ribbon tails */}
        <motion.div
          initial={{ scale: 1, opacity: 1, rotate: 0, y: 0 }}
          animate={isSplit ? { y: '60vh', rotate: 45, scale: 0.8, opacity: 0 } : { scale: 1, opacity: 1, rotate: 0, y: 0 }}
          transition={isSplit ? { duration: 1.3, ease: 'easeIn' } : {}}
          className="absolute z-40 flex items-center justify-center"
        >
          {/* Main click button wrapper */}
          <button
            onClick={handleRibbonClick}
            disabled={isClicked || isSubmitting}
            className={`group flex flex-col items-center justify-center p-4 focus:outline-none rounded-full active:scale-95 transition-transform ${isSubmitting ? 'cursor-wait pointer-events-none' : 'cursor-pointer pointer-events-auto'}`}
          >
            {/* Shimmer backing glow indicator */}
            {!isClicked && (
              <div className="absolute w-28 h-28 bg-[#D4AF37]/15 rounded-full filter blur-xl group-hover:scale-125 group-hover:bg-[#D4AF37]/25 transition-all duration-300 animate-pulse" />
            )}

            {/* Realistic Detailed SVG Gold/Red Ribbon Bow */}
            <svg
              width="200"
              height="200"
              viewBox="0 0 180 180"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`filter drop-shadow-2xl transition-transform duration-500 ${!isClicked ? 'group-hover:scale-110 group-hover:rotate-3' : ''}`}
            >
              {/* Left loop ribbon layer */}
              <path
                d="M90 90 C 35 30, 5 55, 15 90 C 25 125, 55 115, 90 90 Z"
                fill="url(#goldGrad)"
                stroke="#A17210"
                strokeWidth="1.5"
              />
              <path
                d="M90 90 C 45 50, 25 65, 35 90 C 45 110, 65 105, 90 90 Z"
                fill="url(#redGrad)"
                stroke="#6B1212"
                strokeWidth="1"
              />

              {/* Right loop ribbon layer */}
              <path
                d="M90 90 C 145 30, 175 55, 165 90 C 155 125, 125 115, 90 90 Z"
                fill="url(#goldGrad)"
                stroke="#A17210"
                strokeWidth="1.5"
              />
              <path
                d="M90 90 C 135 50, 155 65, 145 90 C 135 110, 115 105, 90 90 Z"
                fill="url(#redGrad)"
                stroke="#6B1212"
                strokeWidth="1"
              />

              {/* Hanging Left ribbon tail */}
              <path
                d="M84 94 C 70 120, 45 152, 35 174 C 52 168, 74 163, 84 142 Z"
                fill="url(#goldGrad)"
                stroke="#A17210"
                strokeWidth="1"
              />
              {/* Hanging Right ribbon tail */}
              <path
                d="M96 94 C 110 120, 135 152, 145 174 C 128 168, 106 163, 96 142 Z"
                fill="url(#goldGrad)"
                stroke="#A17210"
                strokeWidth="1"
              />

              {/* Center Bow Knot */}
              <circle
                cx="90"
                cy="90"
                r="19"
                fill="url(#goldGrad)"
                stroke="#A17210"
                strokeWidth="2"
              />
              <circle
                cx="90"
                cy="90"
                r="13"
                fill="url(#redGrad)"
                stroke="#6B1212"
                strokeWidth="1"
              />

              <defs>
                <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#9F7312" />
                  <stop offset="25%" stopColor="#FFF2AF" />
                  <stop offset="50%" stopColor="#D4AF37" />
                  <stop offset="75%" stopColor="#FFF2AF" />
                  <stop offset="100%" stopColor="#9F7312" />
                </linearGradient>
                <linearGradient id="redGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#7F1D1D" />
                  <stop offset="50%" stopColor="#B91C1C" />
                  <stop offset="100%" stopColor="#EF4444" />
                </linearGradient>
              </defs>
            </svg>
          </button>
        </motion.div>
      </div>

      {/* Floating Interactive Instruction Label (Only shown before ribbon tap) */}
      <AnimatePresence>
        {!isClicked && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: [0.6, 1, 0.6], y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{
              opacity: { repeat: Infinity, duration: 2, ease: 'easeInOut' },
              y: { duration: 0.5 }
            }}
            className="absolute left-1/2 -translate-x-1/2 text-center pointer-events-none z-40 select-none px-5 py-2.5 rounded-full bg-[#1C120C]/95 border border-[#D4AF37]/35 shadow-xl backdrop-blur-xs text-[10px] sm:text-xs font-black uppercase tracking-[0.25em] text-[#D4AF37]"
            style={{ top: '65%' }}
          >
            {errorMessage ? (
              <span className="text-[#EF4444]">{errorMessage}</span>
            ) : isSubmitting ? (
              <span>Reserving your cut...</span>
            ) : (
              <span>Tap the ribbon to cut & enter</span>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Celebratory Gold/Red Confetti System */}
      {showConfetti &&
        confettiParticles.map((particle) => (
          <motion.div
            key={particle.id}
            initial={{ x: 0, y: 0, scale: 1.2, opacity: 1, rotate: 0 }}
            animate={{
              x: particle.x,
              y: particle.y + 160,
              scale: 0.3,
              opacity: 0,
              rotate: Math.random() * 540 - 270
            }}
            transition={{
              delay: particle.delay,
              duration: 1.8,
              ease: 'easeOut'
            }}
            className="absolute z-[45] rounded-xs shadow-xs pointer-events-none"
            style={{
              backgroundColor: particle.color,
              width: particle.size,
              height: particle.size * (Math.random() > 0.5 ? 1.5 : 1),
              left: '50%',
              top: '52%'
            }}
          />
        ))}

      {/* Interactive Scissors cutting animation */}
      <AnimatePresence>
        {isClicked && scissorsState !== 'exiting' && (
          <motion.div
            initial={{ x: '50vw', y: '50vh', rotate: 45, opacity: 0 }}
            animate={
              scissorsState === 'entering'
                ? { x: 35, y: 0, rotate: -25, opacity: 1 }
                : scissorsState === 'cutting'
                ? { x: 5, y: 0, rotate: -18, opacity: 1 }
                : {}
            }
            exit={{ x: '60vw', y: '60vh', rotate: 20, opacity: 0 }}
            transition={{
              default: { duration: 0.5, ease: 'easeOut' },
              exit: { duration: 0.4, ease: 'easeIn' }
            }}
            className="absolute left-1/2 top-[52%] z-50 pointer-events-none"
            style={{ marginLeft: '-60px', marginTop: '-60px' }}
          >
            <div className="relative w-[120px] h-[120px]">
              
              {/* Blade A (Top rotating blade + Bottom ring handle) */}
              <motion.div
                animate={{ rotate: bladeARotation }}
                transition={{ duration: 0.22, ease: 'easeInOut' }}
                style={{ transformOrigin: '60px 60px' }}
                className="absolute inset-0"
              >
                <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Gold Gradient handle and sharp blade */}
                  <path
                    d="M 60 60 L 15 50 C 22 53, 40 58, 60 60 Z"
                    fill="url(#scissorsGold)"
                    stroke="#8B6508"
                    strokeWidth="1"
                  />
                  <path
                    d="M 60 60 C 65 65, 75 78, 92 78 C 105 78, 105 65, 92 56 C 82 51, 70 55, 60 60 Z"
                    fill="none"
                    stroke="url(#scissorsGold)"
                    strokeWidth="5"
                  />
                  <defs>
                    <linearGradient id="scissorsGold" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#AA7C11" />
                      <stop offset="30%" stopColor="#FBF5B7" />
                      <stop offset="70%" stopColor="#D4AF37" />
                      <stop offset="100%" stopColor="#AA7C11" />
                    </linearGradient>
                  </defs>
                </svg>
              </motion.div>

              {/* Blade B (Bottom rotating blade + Top ring handle) */}
              <motion.div
                animate={{ rotate: bladeBRotation }}
                transition={{ duration: 0.22, ease: 'easeInOut' }}
                style={{ transformOrigin: '60px 60px' }}
                className="absolute inset-0"
              >
                <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Gold Blade and Loop */}
                  <path
                    d="M 60 60 L 15 70 C 22 67, 40 62, 60 60 Z"
                    fill="url(#scissorsGold)"
                    stroke="#8B6508"
                    strokeWidth="1"
                  />
                  <path
                    d="M 60 60 C 65 55, 75 42, 92 42 C 105 42, 105 55, 92 64 C 82 69, 70 65, 60 60 Z"
                    fill="none"
                    stroke="url(#scissorsGold)"
                    strokeWidth="5"
                  />
                </svg>
              </motion.div>

              {/* Gold center connecting hinge pin */}
              <div className="absolute left-[57px] top-[57px] w-1.5 h-1.5 bg-[#8B6508] border border-[#FFF2AF] rounded-full z-10 shadow-xs" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
