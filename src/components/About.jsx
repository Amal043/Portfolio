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

const MysqlIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-12 h-12 md:w-16 md:h-16" viewBox="0 0 24 24" fill="currentColor">
      <path fill="#00758f" d="M12.11 2.07c-.1 0-.19.01-.28.03v.01h.01c.06.1.15.18.21.27.06.11.1.22.16.32l.01-.01c.1-.07.15-.17.15-.34 0-.05-.01-.1-.04-.14-.05-.07-.13-.1-.19-.15-.02.01-.03.01-.04.01zM6.1 18.84H5.2c-.03-1.56-.12-3.03-.27-4.41h-.01l-1.41 4.41H2.7l-1.4-4.41h-.01c-.1 1.32-.17 2.79-.2 4.41H0c.06-1.97.19-3.81.41-5.53h1.15l1.34 4.06h.01L4.25 13.3h1.1c.24 2.02.38 3.86.43 5.54zm3.99-4.08c-.38 2.05-.88 3.53-1.49 4.46-.48.72-1.01 1.07-1.58 1.07-.15 0-.34-.05-.57-.14v-.49c.11.02.24.03.39.03.27 0 .48-.08.65-.22.2-.18.3-.38.3-.61 0-.15-.08-.47-.23-.94L6.55 14.76h.91l.73 2.36c.16.54.23.91.21 1.12.4-1.06.68-2.23.83-3.48h.88zm12.33 4.08h-2.63v-5.53h.89v4.85h1.74v.68zm-3.32.14l-1.02-.5c.09-.08.18-.16.26-.25.43-.51.65-1.26.65-2.25 0-1.83-.72-2.75-2.16-2.75-.7 0-1.25.23-1.65.7-.43.51-.65 1.26-.65 2.25 0 .97.19 1.69.57 2.14.35.41.88.62 1.58.62.26 0 .51-.03.73-.1l1.32.77.36-.62zm-3.3-1.28c-.22-.36-.34-.94-.34-1.74 0-1.39.42-2.09 1.27-2.09.44 0 .77.17.98.5.22.36.34.94.34 1.72 0 1.4-.42 2.11-1.27 2.11-.45 0-.77-.17-.98-.5zm-1.66-.42c0 .47-.17.86-.52 1.16-.34.3-.8.45-1.38.45-.54 0-1.06-.17-1.57-.51l.24-.48c.44.22.83.33 1.19.33.33 0 .59-.07.78-.22a.75.75 0 00.3-.62c0-.33-.23-.61-.65-.84-.39-.21-1.16-.66-1.16-.66-.42-.31-.63-.64-.63-1.18 0-.45.16-.81.47-1.08.32-.28.72-.42 1.22-.42.51 0 .98.14 1.4.41l-.21.48c-.36-.15-.72-.23-1.06-.23-.28 0-.5.07-.65.21-.16.14-.25.31-.25.52 0 .33.23.61.67.85.39.22 1.19.67 1.19.67.43.3.65.63.65 1.17z" />
    </svg>
    <span className="text-[10px] md:text-xs font-bold text-white/70 uppercase tracking-wider">MySQL</span>
  </div>
);

const VscodeIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-12 h-12 md:w-16 md:h-16" viewBox="0 0 24 24" fill="none">
      <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479l2.582 1.508a1 1 0 0 0 1.278-.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.94-2.377A1 1 0 0 0 24 20.06V3.939a1 1 0 0 0-.85-1.352zm-5.14 5.937L12.5 12l5.51 3.477V8.524z" fill="#007ACC" />
    </svg>
    <span className="text-[10px] md:text-xs font-bold text-white/70 uppercase tracking-wider">VS Code</span>
  </div>
);

const AntigravityIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-12 h-12 md:w-16 md:h-16" viewBox="0 0 24 24" fill="none">
      <defs>
        <linearGradient id="antigravity-grad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#ff2a2a" />
          <stop offset="50%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
      </defs>
      <circle cx="12" cy="12" r="10" stroke="url(#antigravity-grad)" strokeWidth="1.5" strokeDasharray="3 3" />
      <path d="M12 4L6 11H10V18H14V11H18L12 4Z" fill="url(#antigravity-grad)" />
      <ellipse cx="12" cy="13" rx="8" ry="2.5" stroke="url(#antigravity-grad)" strokeWidth="1.5" fill="none" transform="rotate(-15 12 13)" />
    </svg>
    <span className="text-[10px] md:text-xs font-bold text-white/70 uppercase tracking-wider">Antigravity</span>
  </div>
);

const AwsIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-12 h-12 md:w-16 md:h-16" viewBox="0 0 24 24" fill="none">
      <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3z" fill="#FF9900" />
      <text x="12" y="14.5" fill="#FF9900" fontSize="5.5" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">AWS</text>
    </svg>
    <span className="text-[10px] md:text-xs font-bold text-white/70 uppercase tracking-wider">AWS Cloud</span>
  </div>
);

const GoogleConsoleIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-12 h-12 md:w-16 md:h-16" viewBox="0 0 24 24" fill="none">
      <rect x="2" y="4" width="20" height="16" rx="2" stroke="#4285F4" strokeWidth="2" fill="#111" />
      <circle cx="5" cy="7" r="1" fill="#EA4335" />
      <circle cx="8" cy="7" r="1" fill="#FBBC05" />
      <circle cx="11" cy="7" r="1" fill="#34A853" />
      <path d="M6 11l3 3-3 3" stroke="#FBBC05" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="11" y1="17" x2="16" y2="17" stroke="#34A853" strokeWidth="2" strokeLinecap="round" />
    </svg>
    <span className="text-[10px] md:text-xs font-bold text-white/70 uppercase tracking-wider">G Console</span>
  </div>
);

const GoogleCloudIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-12 h-12 md:w-16 md:h-16" viewBox="0 0 24 24" fill="none">
      <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" fill="#4285F4" />
      <path d="M19.35 10.04A9.344 9.344 0 0 0 12 4c-2.62 0-4.88 1.86-5.39 4.43l-.3 1.5-1.53.11C3.22 10.14 2 11.39 2 13h10v7h7c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" fill="#34A853" />
      <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4v16h7c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" fill="#FBBC05" />
      <path d="M12 4c-3.64 0-6.67 2.59-7.35 6.04L2 13h10V4z" fill="#EA4335" />
    </svg>
    <span className="text-[10px] md:text-xs font-bold text-white/70 uppercase tracking-wider">G Cloud</span>
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
            <div data-aos="zoom-in" data-aos-delay="100" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <PythonIcon />
            </div>
            <div data-aos="zoom-in" data-aos-delay="150" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <ReactIcon />
            </div>
            <div data-aos="zoom-in" data-aos-delay="200" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <NodeIcon />
            </div>
            <div data-aos="zoom-in" data-aos-delay="250" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <MongoIcon />
            </div>
            <div data-aos="zoom-in" data-aos-delay="300" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <MysqlIcon />
            </div>
            <div data-aos="zoom-in" data-aos-delay="350" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <VscodeIcon />
            </div>
            <div data-aos="zoom-in" data-aos-delay="400" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <AntigravityIcon />
            </div>
            <div data-aos="zoom-in" data-aos-delay="450" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <AwsIcon />
            </div>
            <div data-aos="zoom-in" data-aos-delay="500" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <GoogleConsoleIcon />
            </div>
            <div data-aos="zoom-in" data-aos-delay="550" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <GoogleCloudIcon />
            </div>
            <div data-aos="zoom-in" data-aos-delay="600" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <GitIcon />
            </div>
            <div data-aos="zoom-in" data-aos-delay="650" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <HtmlIcon />
            </div>
            <div data-aos="zoom-in" data-aos-delay="700" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <CssIcon />
            </div>
            <div data-aos="zoom-in" data-aos-delay="750" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
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
