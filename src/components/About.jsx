import React from 'react';
import stackImage from '../AmalFolder/Amal-avatar.png';
import { aboutContent } from '../data/portfolioData';

// Tech stack SVG icons rendered inline for crisp rendering
const PythonIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-12 h-12 md:w-16 md:h-16" viewBox="0 0 24 24" fill="none">
      <path d="M12.012 2C8.612 2 5.753 2.19 5.253 2.87c-.88.94-.88 2.81-.88 3.75v1.88h7.5v.94H4.373c-2.22 0-3.373.94-3.373 3.75 0 2.81 1.88 3.75 3.75 3.75h1.88v-2.81c0-2.22 1.153-3.75 3.373-3.75h7.5c2.22 0 3.373-1.53 3.373-3.75v-1.88c0-2.22-1.153-3.75-3.373-3.75H12.012zm-3.262 1.41c.52 0 .94.42.94.94s-.42.94-.94.94c-.52 0-.94-.42-.94-.94s.42-.94.94-.94z" fill="#306998" />
      <path d="M11.988 22c3.4 0 6.259-.19 6.759-.87.88-.94.88-2.81.88-3.75v-1.88h-7.5v-.94h7.5c2.22 0 3.373-.94 3.373-3.75 0-2.81-1.88-3.75-3.75-3.75h-1.88v2.81c0 2.22-1.153 3.75-3.373 3.75h-7.5c-2.22 0-3.373 1.53-3.373 3.75v1.88c0 2.22 1.153 3.75 3.373 3.75h3.75zm3.262-1.41c-.52 0-.94-.42-.94-.94s.42-.94.94-.94c.52 0 .94.42.94.94s-.42.94-.94.94z" fill="#FFD43B" />
    </svg>
    <span className="text-[10px] md:text-xs font-bold text-white/70 uppercase tracking-wider">Python</span>
  </div>
);

const ReactIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-12 h-12 md:w-16 md:h-16" viewBox="0 0 128 128">
      <g stroke="#00d8ff" strokeWidth="4.5" fill="none" transform="translate(10, 10)">
        <ellipse cx="54" cy="54" rx="16" ry="46" transform="rotate(30 54 54)" />
        <ellipse cx="54" cy="54" rx="16" ry="46" transform="rotate(90 54 54)" />
        <ellipse cx="54" cy="54" rx="16" ry="46" transform="rotate(150 54 54)" />
        <circle cx="54" cy="54" r="7" fill="#00d8ff" />
      </g>
    </svg>
    <span className="text-[10px] md:text-xs font-bold text-white/70 uppercase tracking-wider">React</span>
  </div>
);

const MongoIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-12 h-12 md:w-16 md:h-16" viewBox="0 0 24 24" fill="currentColor">
      <path fill="#47A248" d="M17.19 8.44c-.42-3.4-3.1-6.72-5.18-9.45c-.24-.31-.77-.31-1.01 0c-2.09 2.73-4.77 6.05-5.18 9.45c-.47 3.84.87 7.7 3.42 10.74c1.74 2.06 3.73 3.66 4.75 5.75c.08.17.25.27.43.27s.35-.1.43-.27c1.02-2.09 3.01-3.69 4.75-5.75c2.55-3.04 3.89-6.9 3.42-10.74zM12 21.85c-1.12-2-2.88-3.52-4.47-5.41c-2.22-2.65-3.23-5.85-2.82-9.06c.35-2.83 2.51-5.64 4.29-8c.45.67.92 1.37 1.38 2.08c-.73 2.11-.86 4.41-.33 6.6c.41 1.68 1.41 3.16 2.8 4.14c.34.24.81.08.93-.31c.14-.42-.03-.89-.42-1.1c-1.15-.65-1.95-1.78-2.22-3.1c-.4-1.92-.25-3.9.46-5.71c.71-.97 1.44-1.93 2.15-2.91c1.78 2.36 3.94 5.17 4.29 8c.41 3.21-.6 6.41-2.82 9.06c-1.59 1.89-3.35 3.41-4.47 5.41z"/>
    </svg>
    <span className="text-[10px] md:text-xs font-bold text-white/70 uppercase tracking-wider">MongoDB</span>
  </div>
);

const NodeIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-12 h-12 md:w-16 md:h-16" viewBox="0 0 24 24" fill="currentColor">
      <path fill="#339933" d="M12 24c-1.3 0-2.5-.7-3.2-1.8L1.6 10.6C1 9.5 1 8.2 1.6 7.1L8.8 1.8c.7-1.1 1.9-1.8 3.2-1.8s2.5.7 3.2 1.8l7.2 10.7c.6 1.1.6 2.4 0 3.5l-7.2 10.7c-.7 1.1-1.9 1.8-3.2 1.8zM12 2c-.7 0-1.3.4-1.7.9l-7.2 10.7c-.3.5-.3 1.2 0 1.7l7.2 10.7c.4.5 1 .9 1.7.9s1.3-.4 1.7-.9l7.2-10.7c.3-.5.3-1.2 0-1.7L13.7 2.9c-.4-.5-1-.9-1.7-.9z" />
      <path fill="#339933" d="M12 18.5c-3.6 0-6.5-2.9-6.5-6.5S8.4 5.5 12 5.5s6.5 2.9 6.5 6.5-2.9 6.5-6.5 6.5zm0-11c-2.5 0-4.5 2-4.5 4.5s2 4.5 4.5 4.5 4.5-2 4.5-4.5-2-4.5-4.5-4.5z" />
    </svg>
    <span className="text-[10px] md:text-xs font-bold text-white/70 uppercase tracking-wider">Node.js</span>
  </div>
);

const GitIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-12 h-12 md:w-16 md:h-16" viewBox="0 0 24 24" fill="currentColor">
      <path fill="#F05032" d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.186 0L8.74 2.593l3.02 3.02c.645-.215 1.378-.07 1.894.447.519.519.664 1.258.446 1.904l3.02 3.02c.646-.217 1.385-.073 1.904.446.724.724.724 1.9 0 2.625-.725.725-1.9.725-2.625 0-.52-.52-.663-1.26-.443-1.907l-3.02-3.02c-.215.07-.43.107-.645.107-.43 0-.86-.162-1.18-.48-.52-.52-.663-1.26-.443-1.907L8.783 5.862l-5.69 5.69c-.604.603-.604 1.582 0 2.185l10.478 10.478c.604.604 1.582.604 2.186 0l10.478-10.478c.604-.604.604-1.582 0-2.185z"/>
    </svg>
    <span className="text-[10px] md:text-xs font-bold text-white/70 uppercase tracking-wider">Git</span>
  </div>
);

const HtmlIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-12 h-12 md:w-16 md:h-16" viewBox="0 0 24 24" fill="currentColor">
      <path fill="#E34F26" d="M1.5 0h21l-1.9 21.2L12 24 3.4 21.2zM12 18.9l5-1.6.6-6.4H12v-2.8h8.6l-.3 3.4-5.9 1.9-5.9-1.9-.4-4.3H5.3l.8 8.8z"/>
    </svg>
    <span className="text-[10px] md:text-xs font-bold text-white/70 uppercase tracking-wider">HTML5</span>
  </div>
);

const CssIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-12 h-12 md:w-16 md:h-16" viewBox="0 0 24 24" fill="currentColor">
      <path fill="#1572B6" d="M1.5 0h21l-1.9 21.2L12 24 3.4 21.2zM12 18.9l5-1.6.8-8.2H6.6l-.3-2.8H18l.3-3.4H5.7l.9 9.8h8.6l-.3 3.4-3 1-3-1-.2-1.8H5.9l.4 4.2z"/>
    </svg>
    <span className="text-[10px] md:text-xs font-bold text-white/70 uppercase tracking-wider">CSS3</span>
  </div>
);

const JsIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-12 h-12 md:w-16 md:h-16 rounded-lg overflow-hidden" viewBox="0 0 24 24">
      <path fill="#F7DF1E" d="M0 0h24v24H0z"/>
      <path fill="#000" d="M12 18.5c.4.8 1.1 1.3 2.1 1.3 1 0 1.6-.5 1.6-1.2 0-2.4-3.7-2-3.7-6.2 0-1.8 1.3-3.4 3.5-3.4 1.8 0 3 1 3.7 2.4l-1.8 1.1c-.4-.8-1-1.3-1.8-1.3-.9 0-1.5.5-1.5 1.1 0 2.2 3.7 1.8 3.7 6.2 0 2.2-1.6 3.6-3.8 3.6-2.4 0-3.9-1.2-4.6-2.6zm-7-5.5h2.1v5.7c0 1.2.6 1.8 1.6 1.8.8 0 1.3-.4 1.3-1.1V13h2.1v5.8c0 2-1.3 3.2-3.4 3.2-2.1 0-3.6-1.1-3.6-3.3z"/>
    </svg>
    <span className="text-[10px] md:text-xs font-bold text-white/70 uppercase tracking-wider">JS</span>
  </div>
);

const About = () => {
  return (
    <section id="about" className="bg-[#ff2a2a] pt-20 pb-40 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start">
        
        {/* Left Side: ID Badge and Skills */}
        <div className="flex flex-col items-center w-full md:w-[350px] shrink-0 mt-12 md:mt-0">
          
          <div data-aos="drop-bounce" className="relative flex justify-center w-full">
            {/* Lanyard string */}
            <div className="absolute -top-32 left-1/2 w-3 h-40 bg-black transform -translate-x-1/2 shadow-inner z-0"></div>
            {/* Lanyard clip */}
            <div className="absolute -top-6 left-1/2 w-6 h-12 bg-gray-300 rounded border border-gray-400 transform -translate-x-1/2 z-10 shadow-[0_2px_10px_rgba(0,0,0,0.3)]"></div>
            
            {/* Badge Card */}
            <div className="bg-gray-900 w-full max-w-[280px] rounded-2xl p-3 shadow-[0_20px_40px_rgba(0,0,0,0.4)] relative z-20 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
              {/* Cutout Hole */}
              <div className="absolute -top-3 left-1/2 w-16 h-6 bg-gray-900 rounded-t-xl transform -translate-x-1/2 flex justify-center items-center">
                <div className="w-8 h-2 bg-black/30 rounded-full shadow-inner"></div>
              </div>
              {/* Image Container */}
              <div className="w-full aspect-[3/4] overflow-hidden rounded-xl bg-gray-800 border-2 border-transparent">
                <img 
                  src={stackImage} 
                  alt="Amal Srivastava — Full-Stack & AI Developer" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>

        </div>

        {/* Right Side: Info Content */}
        <div data-aos="fade-left" data-aos-delay="200" className="flex-1 text-white mt-8 md:mt-0 relative z-20">
          
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4">{aboutContent.heading}</h2>
          <p 
            className="text-lg font-bold mb-12 leading-relaxed max-w-3xl text-red-50"
            dangerouslySetInnerHTML={{ __html: aboutContent.bio }}
          />

          {/* Horizontal Skills Row */}
          <div className="flex flex-wrap items-center gap-5 md:gap-6 lg:gap-8 mt-8">
            <div data-aos="zoom-in" data-aos-delay="150" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <PythonIcon />
            </div>
            <div data-aos="zoom-in" data-aos-delay="200" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <ReactIcon />
            </div>
            <div data-aos="zoom-in" data-aos-delay="250" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <NodeIcon />
            </div>
            <div data-aos="zoom-in" data-aos-delay="300" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <MongoIcon />
            </div>
            <div data-aos="zoom-in" data-aos-delay="355" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <GitIcon />
            </div>
            <div data-aos="zoom-in" data-aos-delay="400" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <HtmlIcon />
            </div>
            <div data-aos="zoom-in" data-aos-delay="450" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <CssIcon />
            </div>
            <div data-aos="zoom-in" data-aos-delay="500" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <JsIcon />
            </div>
          </div>

        </div>
      </div>

      {/* Torn paper divider at bottom */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-30 transform translate-y-1">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      {/* Decorative stars */}
      <div className="absolute top-10 right-10 md:right-20 text-black opacity-30 animate-pulse">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
      <div className="absolute bottom-32 left-4 md:left-20 text-black opacity-30 animate-pulse" style={{ animationDelay: '1s' }}>
        <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
    </section>
  );
};

export default About;
