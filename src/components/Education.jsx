import React from 'react';
import { education } from '../data/portfolioData';

const Education = () => {
  return (
    <section id="education" className="bg-[#0a0a0a] pt-24 pb-28 px-6 md:px-12 w-full relative overflow-hidden font-sans bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px]">
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div data-aos="fade-up" className="mb-16 text-center">
          <div className="inline-block border border-white/20 rounded-full px-5 py-1.5 text-sm text-white/60 font-bold mb-6 shadow-sm bg-white/5 backdrop-blur-sm">
            Academic Journey
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4 uppercase">
            Education
          </h2>
          <p className="text-white/50 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            My educational background and academic milestones.
          </p>
        </div>

        {/* Education Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* NIT Jamshedpur */}
          <div 
            data-aos="fade-up" 
            data-aos-delay="100"
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:scale-[1.02] hover:border-red-500/30 hover:shadow-[0_20px_50px_rgba(255,42,42,0.1)] transition-all duration-500 flex flex-col justify-between min-h-[280px]"
          >
            <div>
              <span className="text-red-400 text-xs font-mono font-bold tracking-widest uppercase mb-4 block">
                {education.graduation} (Ongoing)
              </span>
              <h3 className="text-white text-xl md:text-2xl font-black mb-2 tracking-tight">
                {education.degree}
              </h3>
              <p className="text-red-200 text-sm font-bold tracking-wide mb-6 uppercase">
                {education.institution}
              </p>
            </div>
            <div className="pt-4 border-t border-white/10">
              <span className="text-white/60 text-xs font-bold uppercase tracking-wider block mb-1">Performance:</span>
              <span className="text-white text-lg font-mono font-bold">{education.cgpa} CGPA</span>
            </div>
          </div>

          {/* 12th Standard */}
          <div 
            data-aos="fade-up" 
            data-aos-delay="200"
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:scale-[1.02] hover:border-red-500/30 hover:shadow-[0_20px_50px_rgba(255,42,42,0.1)] transition-all duration-500 flex flex-col justify-between min-h-[280px]"
          >
            <div>
              <span className="text-red-400 text-xs font-mono font-bold tracking-widest uppercase mb-4 block">
                2021 – 2023
              </span>
              <h3 className="text-white text-xl md:text-2xl font-black mb-2 tracking-tight">
                Class XII (Senior Secondary)
              </h3>
              <p className="text-red-200 text-sm font-bold tracking-wide mb-6 uppercase">
                Vishnu Bhagwan Public School
              </p>
            </div>
            <div className="pt-4 border-t border-white/10">
              <span className="text-white/60 text-xs font-bold uppercase tracking-wider block mb-1">Result:</span>
              <span className="text-white text-lg font-mono font-bold">95.8% (CBSE)</span>
            </div>
          </div>

          {/* 10th Standard */}
          <div 
            data-aos="fade-up" 
            data-aos-delay="300"
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:scale-[1.02] hover:border-red-500/30 hover:shadow-[0_20px_50px_rgba(255,42,42,0.1)] transition-all duration-500 flex flex-col justify-between min-h-[280px]"
          >
            <div>
              <span className="text-red-400 text-xs font-mono font-bold tracking-widest uppercase mb-4 block">
                2019 – 2021
              </span>
              <h3 className="text-white text-xl md:text-2xl font-black mb-2 tracking-tight">
                Class X (Secondary)
              </h3>
              <p className="text-red-200 text-sm font-bold tracking-wide mb-6 uppercase">
                Vishnu Bhagwan Public School
              </p>
            </div>
            <div className="pt-4 border-t border-white/10">
              <span className="text-white/60 text-xs font-bold uppercase tracking-wider block mb-1">Result:</span>
              <span className="text-white text-lg font-mono font-bold">94.8% (CBSE)</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Education;
