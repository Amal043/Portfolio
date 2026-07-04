import React, { useState } from 'react';
import { contentCreation, socialLinks } from '../data/portfolioData';

/* ─── Detail Modal ─────────────────────────────────────────── */
const DetailModal = ({ category, onClose }) => {
  if (!category) return null;

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />

      {/* Modal Card */}
      <div
        className="relative z-10 bg-[#111111] border border-white/10 rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-[0_40px_100px_rgba(0,0,0,0.8)] p-8 md:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-white/60 hover:text-white transition-all duration-200"
          aria-label="Close"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Icon + Badge */}
        <div className="flex items-center gap-4 mb-6">
          <span className="text-5xl p-3 bg-white/5 rounded-2xl border border-white/10">
            {category.icon}
          </span>
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-white/40 border border-white/10 bg-white/5 px-3 py-1 rounded-full">
            {category.stats}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-2xl md:text-3xl font-black text-white mb-4 tracking-tight leading-tight">
          {category.title}
        </h3>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-[#ff2a2a]/50 via-white/10 to-transparent mb-6" />

        {/* Full Details */}
        <p className="text-white/70 text-sm md:text-base leading-relaxed mb-6 font-medium">
          {category.details || category.description}
        </p>

        {/* Tech Stack */}
        {category.techStack && (
          <div className="mb-8">
            <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-3">Tech Stack</p>
            <div className="flex flex-wrap gap-2">
              {category.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-bold text-white/70 bg-white/5 rounded-full border border-white/10 hover:bg-red-500/20 hover:border-red-500/30 hover:text-red-300 transition-all duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3">
          {/* Demo Link */}
          {category.demoLink && (
            <a
              href={category.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#ff2a2a] text-white text-sm font-bold hover:bg-red-600 hover:shadow-[0_0_20px_rgba(255,42,42,0.4)] transition-all duration-300"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Live Demo
            </a>
          )}

          {/* GitHub Link */}
          {category.githubLink && (
            <a
              href={category.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 border border-white/20 text-white text-sm font-bold hover:bg-white hover:text-black transition-all duration-300"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

/* ─── Creator Card ─────────────────────────────────────────── */
const CreatorCard = ({ category, index, onViewDetails }) => (
  <div
    data-aos="fade-up"
    data-aos-delay={index * 100}
    className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:scale-[1.02] hover:border-red-500/30 hover:shadow-[0_20px_50px_rgba(255,42,42,0.15)] transition-all duration-500 group flex flex-col justify-between"
  >
    <div>
      <div className="flex justify-between items-start mb-6">
        <span className="text-4xl p-3 bg-white/5 rounded-2xl group-hover:bg-[#ff2a2a]/10 group-hover:scale-110 transition-all duration-300">
          {category.icon}
        </span>
        <span className="text-white/30 text-xs font-mono font-bold tracking-widest uppercase py-1 px-2 border border-white/5 rounded-full">
          {category.stats}
        </span>
      </div>
      <h3 className="text-white text-xl md:text-2xl font-black mb-3 tracking-tight group-hover:text-[#ff2a2a] transition-colors">
        {category.title}
      </h3>
      <p className="text-white/60 text-sm md:text-base leading-relaxed mb-6 font-medium">
        {category.description}
      </p>
    </div>

    <button
      onClick={() => onViewDetails(category)}
      className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono tracking-wider font-bold text-white/40 group-hover:text-white transition-colors w-full text-left hover:text-[#ff2a2a] cursor-pointer"
    >
      <span>View Details</span>
      <svg className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
    </button>
  </div>
);

/* ─── Main Section ─────────────────────────────────────────── */
const ContentCreator = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <section id="creator" className="bg-[#0a0a0a] pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px]">

      {/* Visual background lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Header */}
        <div data-aos="fade-up" className="mb-16 md:mb-20">
          <div className="inline-block border border-white/20 rounded-full px-5 py-1.5 text-sm text-white/60 font-bold mb-6 shadow-sm bg-white/5 backdrop-blur-sm">
            {contentCreation.badge}
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6 tracking-tight">
            {contentCreation.heading}
          </h2>
          <p className="text-white/50 text-base md:text-lg max-w-xl font-medium leading-relaxed">
            {contentCreation.description}
          </p>
        </div>

        {/* Content Creation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {contentCreation.categories.map((category, index) => (
            <CreatorCard
              key={category.title}
              category={category}
              index={index}
              onViewDetails={setSelectedCategory}
            />
          ))}
        </div>

        {/* GitHub CTA */}
        <div data-aos="fade-up" data-aos-delay="400" className="mt-16 flex justify-center">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 md:gap-3 px-5 md:px-8 py-3 md:py-4 rounded-full bg-[#ff2a2a] text-white font-bold text-sm md:text-lg hover:bg-red-600 hover:shadow-[0_0_30px_rgba(255,42,42,0.4)] transition-all duration-500 group"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            <span className="hidden sm:inline">Explore My Repositories</span>
            <span className="sm:hidden">My GitHub</span>
            <svg className="w-4 h-4 md:w-5 md:h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

      </div>

      {/* Detail Modal */}
      {selectedCategory && (
        <DetailModal
          category={selectedCategory}
          onClose={() => setSelectedCategory(null)}
        />
      )}
    </section>
  );
};

export default ContentCreator;
