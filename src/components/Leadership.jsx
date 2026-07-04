import React from 'react';
import { leadershipList } from '../data/portfolioData';

// Mobile Item: simple left-aligned layout
const MobileLeadershipItem = ({ item }) => (
  <div className="relative pl-10 pb-8 group last:pb-0">
    {/* Line dot */}
    <div className="absolute left-[3px] top-1.5 w-3.5 h-3.5 bg-[#ff2a2a] rounded-full border-2 border-black z-30 shadow-[0_0_10px_#ff2a2a]" />
    
    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 hover:border-red-500/30 transition-all duration-300">
      <span className="inline-block bg-[#ff2a2a]/20 text-[#ff2a2a] text-[9px] font-black tracking-widest uppercase py-0.5 px-2 rounded-full border border-[#ff2a2a]/30 mb-2">
        {item.badge}
      </span>
      <h3 className="text-white text-lg font-black mb-1 leading-tight">{item.title}</h3>
      <p className="text-red-400 text-xs font-bold font-mono tracking-wider uppercase mb-3">{item.role}</p>
      <p className="text-white/60 text-xs md:text-sm leading-relaxed font-medium">{item.description}</p>
    </div>
  </div>
);

// Desktop Column Card
const DesktopLeadershipCard = ({ item, isLeft }) => (
  <div className="relative group w-full mb-8 last:mb-0">
    {/* Dot placed exactly on the center line.
        The gap between columns is 80px (gap-20), so the center is exactly 40px away from the column edge.
    */}
    <div className={`absolute top-8 w-4 h-4 bg-[#ff2a2a] rounded-full border-4 border-black z-30 shadow-[0_0_15px_#ff2a2a] group-hover:scale-125 transition-transform duration-300 ${
      isLeft ? 'right-[-48px]' : 'left-[-48px]'
    }`} />

    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-red-500/30 hover:shadow-[0_15px_35px_rgba(255,42,42,0.1)] transition-all duration-500">
      <span className="inline-block bg-[#ff2a2a]/20 text-[#ff2a2a] text-[10px] font-black tracking-widest uppercase py-1 px-3 rounded-full border border-[#ff2a2a]/30 mb-3">
        {item.badge}
      </span>
      <h3 className="text-white text-xl font-black mb-1 tracking-tight group-hover:text-[#ff2a2a] transition-colors">{item.title}</h3>
      <p className="text-red-400 text-xs font-bold font-mono tracking-wider uppercase mb-4">{item.role}</p>
      <p className="text-white/60 text-sm leading-relaxed font-medium">{item.description}</p>
    </div>
  </div>
);

const Leadership = () => {
  // Split items for alternating columns
  const leftItems = leadershipList.filter((_, i) => i % 2 === 0);
  const rightItems = leadershipList.filter((_, i) => i % 2 !== 0);

  return (
    <section className="bg-[#0a0a0a] pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px]">
      
      {/* Torn paper divider at top */}
      <div className="absolute top-0 left-0 w-full pointer-events-none z-10 transform -translate-y-[1px] rotate-180">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-[#ff2a2a]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-20">
        
        {/* Header */}
        <div data-aos="fade-up" className="mb-20 text-center">
          <div className="inline-block border border-white/20 rounded-full px-5 py-1.5 text-sm text-white/60 font-bold mb-6 shadow-sm bg-white/5 backdrop-blur-sm">
            Activities
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4 uppercase">
            Leadership & Engagement
          </h2>
          <p className="text-white/50 text-base md:text-lg max-w-lg mx-auto leading-relaxed">
            Coordinating events, leading team operations, and participating in tech summits.
          </p>
        </div>

        {/* Timeline container */}
        <div className="relative w-full">
          
          {/* DESKTOP TIMELINE (Alternating columns, no vertical blank spaces) */}
          <div className="hidden md:grid grid-cols-2 gap-24 relative w-full">
            {/* Vertical central line */}
            <div className="absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-[#ff2a2a] via-red-500/50 to-white/10" />

            {/* Left Column (even indices) */}
            <div className="flex flex-col text-right items-end">
              {leftItems.map((item) => (
                <DesktopLeadershipCard key={item.title} item={item} isLeft={true} />
              ))}
            </div>

            {/* Right Column (odd indices) */}
            <div className="flex flex-col text-left items-start pt-16">
              {rightItems.map((item) => (
                <DesktopLeadershipCard key={item.title} item={item} isLeft={false} />
              ))}
            </div>
          </div>

          {/* MOBILE TIMELINE (Single column vertical list) */}
          <div className="md:hidden relative w-full pl-2">
            {/* Vertical line on the left */}
            <div className="absolute left-[9px] top-2 bottom-2 w-[1.5px] bg-[#ff2a2a]/30" />
            
            <div className="flex flex-col">
              {leadershipList.map((item) => (
                <MobileLeadershipItem key={item.title} item={item} />
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Leadership;
