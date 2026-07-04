import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { emailjsConfig, personalInfo, socialLinks } from '../data/portfolioData';

const Contact = () => {
  const ref = useRef(null);
  const formRef = useRef(null);
  const [status, setStatus] = useState('idle'); // idle, sending, success, error
  const [showToast, setShowToast] = useState(false);

  const handleEmailClick = (e) => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(personalInfo.emails.primary);
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = personalInfo.emails.primary;
        textArea.style.position = "fixed";
        textArea.style.opacity = "0";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
    } catch (err) {
      console.warn("Could not copy email to clipboard: ", err);
    }
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  // Parallax translation for the big text
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "30%"]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === 'sending') return; // Prevent duplicate submissions

    setStatus('sending');

    const form = formRef.current;
    const firstName = form.querySelector('#firstName')?.value || '';
    const lastName = form.querySelector('#lastName')?.value || '';
    const email = form.querySelector('#email')?.value || '';
    const message = form.querySelector('#message')?.value || '';

    // Validate inputs
    if (!firstName.trim() || !email.trim() || !message.trim()) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
      return;
    }

    // Check if Web3Forms is configured
    const web3FormsKey = (import.meta.env.VITE_WEB3FORMS_ACCESS_KEY && import.meta.env.VITE_WEB3FORMS_ACCESS_KEY !== 'YOUR_WEB3FORMS_ACCESS_KEY')
      ? import.meta.env.VITE_WEB3FORMS_ACCESS_KEY 
      : 'b152ecf6-25c6-4fbc-b55c-9879e9d4281a';
    const isWeb3FormsConfigured = web3FormsKey && web3FormsKey.trim() !== '';

    // Check if EmailJS is configured (checking both placeholder values and falsy states)
    const isEmailJSConfigured = 
      emailjsConfig.serviceId && 
      emailjsConfig.serviceId !== 'YOUR_EMAILJS_SERVICE_ID' &&
      emailjsConfig.templateId && 
      emailjsConfig.templateId !== 'YOUR_EMAILJS_TEMPLATE_ID' &&
      emailjsConfig.publicKey && 
      emailjsConfig.publicKey !== 'YOUR_EMAILJS_PUBLIC_KEY';

    if (isWeb3FormsConfigured) {
      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: JSON.stringify({
            access_key: web3FormsKey,
            name: `${firstName} ${lastName}`,
            email: email,
            message: message,
            subject: `Portfolio Contact from ${firstName} ${lastName}`
          })
        });
        const result = await response.json();
        if (result.success) {
          setStatus('success');
          formRef.current.reset();
          setTimeout(() => setStatus('idle'), 4000);
        } else {
          console.error('Web3Forms Error:', result);
          setStatus('error');
          setTimeout(() => setStatus('idle'), 20000);
        }
      } catch (error) {
        console.error('Web3Forms Error:', error);
        setStatus('error');
        setTimeout(() => setStatus('idle'), 20000);
      }
      return;
    }

    if (isEmailJSConfigured) {
      // EmailJS integration
      try {
        const emailjs = await import('@emailjs/browser');
        await emailjs.sendForm(
          emailjsConfig.serviceId,
          emailjsConfig.templateId,
          formRef.current,
          emailjsConfig.publicKey
        );
        setStatus('success');
        formRef.current.reset();
        setTimeout(() => setStatus('idle'), 4000);
      } catch (error) {
        console.error('EmailJS Error:', error);
        setStatus('error');
        setTimeout(() => setStatus('idle'), 20000);
      }
      return;
    }

    // Default Fallback: Prefilled Gmail link
    const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.emails.primary}&su=${encodeURIComponent(`Portfolio Contact from ${firstName} ${lastName}`)}&body=${encodeURIComponent(`From: ${firstName} ${lastName}\nEmail: ${email}\n\n${message}`)}`;
    window.open(mailtoLink, '_blank');
    setStatus('success');
    formRef.current.reset();
    setTimeout(() => setStatus('idle'), 3000);
  };

  return (
    <section ref={ref} id="contact" className="bg-[#0a0a0a] w-full min-h-screen relative overflow-hidden flex items-end pt-32 pb-0 md:pb-0 border-t border-gray-900">
      {/* Huge Background Text */}
      <motion.div 
        style={{ y }}
        className="absolute top-0 left-0 w-full h-full flex flex-col justify-start items-center overflow-hidden pointer-events-none z-0 pt-16 md:pt-12"
      >
        <h1 
          className="text-[25vw] leading-[0.75] font-black text-white uppercase tracking-tighter select-none scale-y-[1.6] origin-top opacity-5"
          style={{ fontFamily: "'Impact', 'Arial Black', sans-serif" }}
        >
          Contact
        </h1>
      </motion.div>

      {/* Form Card Overlay */}
      <div className="relative z-10 w-full flex justify-end items-end">
        <div 
          data-aos="fade-up"
          className="bg-gradient-to-br from-[#ff2a2a] via-[#e51d1d] to-[#c21818] w-full md:w-[85%] lg:w-[75%] p-6 md:p-16 text-white flex flex-col justify-between rounded-tl-[1.5rem] md:rounded-tl-[3rem] lg:rounded-tl-[5rem] shadow-[-10px_-10px_50px_rgba(0,0,0,0.5)] border-t border-l border-white/10"
        >
          <div className="flex flex-col sm:flex-row justify-between items-start gap-8 mb-12">
            <div className="flex flex-col gap-1">
              <div className="text-xs font-bold tracking-[0.2em] uppercase opacity-80">
                Get In Touch
              </div>
              <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight">
                Let's Build Something Great
              </h3>
            </div>
            {/* Instagram Quick Link */}
            {socialLinks.instagram && (
              <a 
                href={socialLinks.instagram} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 text-xs font-black uppercase tracking-wider bg-white/10 backdrop-blur-md hover:bg-white hover:text-[#ff2a2a] border border-white/20 px-5 py-2.5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                DM on Instagram
              </a>
            )}
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-12 md:gap-16 w-full">
            <div className="flex flex-col md:flex-row gap-12 md:gap-20 w-full">
              {/* Left Column */}
              <div className="flex-1 flex flex-col gap-10">
                <div className="relative group">
                  <span className="absolute left-0 bottom-3 text-white/50 group-focus-within:text-white transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
                  </span>
                  <input 
                    type="text" 
                    id="firstName" 
                    name="first_name"
                    placeholder="First Name" 
                    required
                    className="w-full bg-transparent border-b border-white/30 pl-8 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white/60 font-semibold rounded-none"
                  />
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-focus-within:w-full"></span>
                </div>
                <div className="relative group">
                  <span className="absolute left-0 bottom-3 text-white/50 group-focus-within:text-white transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
                  </span>
                  <input 
                    type="text" 
                    id="lastName" 
                    name="last_name"
                    placeholder="Last Name" 
                    className="w-full bg-transparent border-b border-white/30 pl-8 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white/60 font-semibold rounded-none"
                  />
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-focus-within:w-full"></span>
                </div>
                <div className="relative group">
                  <a 
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.emails.primary}`}
                    onClick={handleEmailClick}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute left-0 bottom-3 text-white/50 hover:text-white transition-colors z-20 cursor-pointer"
                    title="Send an email"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                  </a>
                  <input 
                    type="email" 
                    id="email" 
                    name="user_email"
                    placeholder="Email" 
                    required
                    className="w-full bg-transparent border-b border-white/30 pl-8 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white/60 font-semibold rounded-none"
                  />
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-focus-within:w-full"></span>
                </div>
              </div>

              {/* Right Column */}
              <div className="flex-1 flex flex-col">
                <div className="relative h-full flex flex-col group">
                  <span className="absolute left-0 top-1 text-white/50 group-focus-within:text-white transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>
                  </span>
                  <textarea 
                    id="message" 
                    name="message"
                    placeholder="Type your message here" 
                    required
                    className="w-full h-full min-h-[140px] bg-transparent border-b border-white/30 pl-8 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white/60 font-semibold resize-none rounded-none"
                  ></textarea>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-focus-within:w-full"></span>
                </div>
              </div>
            </div>

            {status === 'error' && (
              <div className="bg-black/40 border border-white/20 rounded-2xl p-6 text-white text-sm font-sans flex flex-col gap-3 mt-4 mb-4 animate-fade-in">
                <div className="flex items-center gap-2 text-yellow-400 font-bold uppercase tracking-wider text-xs">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
                  Direct form submission failed
                </div>
                <p className="opacity-90 font-medium leading-relaxed">
                  No worries! You can still email me directly by following these simple steps:
                </p>
                <ol className="list-decimal pl-5 space-y-2 opacity-85 font-medium leading-relaxed">
                  <li>
                    Copy my email address: <span className="font-bold underline cursor-pointer hover:text-red-300 transition-colors" onClick={handleEmailClick}>{personalInfo.emails.primary}</span> (Click to copy)
                  </li>
                  <li>
                    Open your email application (Gmail, Outlook, Brave mail, etc.)
                  </li>
                  <li>
                    Create a new email, paste my address in the <strong>To</strong> field, write your message, and hit send!
                  </li>
                </ol>
              </div>
            )}

            {/* Bottom Section */}
            <div className="flex flex-col md:flex-row gap-12 mt-4">
              {/* Left text */}
              <div className="flex-1 flex items-start gap-4 text-sm font-medium text-white/90">
                <input 
                  type="checkbox" 
                  id="permission" 
                  className="mt-1 w-4 h-4 rounded-sm border-white/40 bg-transparent text-white focus:ring-white focus:ring-offset-0 focus:ring-offset-transparent cursor-pointer" 
                  style={{ accentColor: "white" }}
                />
                <label htmlFor="permission" className="cursor-pointer max-w-[280px] leading-snug select-none">
                  I give permission to contact me at this email address.
                </label>
              </div>

              {/* Right text & button */}
              <div className="flex-1 flex flex-col gap-8 text-xs text-white/80 font-medium">
                <p className="leading-relaxed max-w-[400px]">
                  Your message will be sent directly to my inbox. I typically respond within 24-48 hours.
                </p>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-6">
                  <p className="max-w-[250px] leading-relaxed">
                    For urgent inquiries, reach me at <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.emails.primary}`} onClick={handleEmailClick} target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors">{personalInfo.emails.primary}</a>
                  </p>
                  
                  <button 
                    type="submit" 
                    disabled={status === 'sending'}
                    className={`px-8 py-3.5 rounded-full border border-white/40 text-white font-bold flex items-center justify-center gap-3 transition-all duration-300 group whitespace-nowrap self-start sm:self-auto shadow-md hover:shadow-lg ${
                      status === 'sending' 
                        ? 'opacity-50 cursor-not-allowed bg-white/10' 
                        : status === 'success'
                        ? 'bg-green-600 border-green-500 text-white shadow-[0_0_20px_rgba(22,163,74,0.4)]'
                        : status === 'error'
                        ? 'bg-red-800 border-red-700 text-white'
                        : 'bg-transparent hover:bg-white hover:text-black hover:border-white transform hover:-translate-y-0.5'
                    }`}
                  >
                    {status === 'sending' ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending...
                      </span>
                    ) : status === 'success' ? (
                      <span className="flex items-center gap-2">
                        Sent Successfully ✓
                      </span>
                    ) : status === 'error' ? (
                      <span className="flex items-center gap-2">
                        Failed — Try Again
                      </span>
                    ) : 'Send Message'}
                    
                    {status === 'idle' && (
                      <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </form>

        </div>
      </div>
      {/* Clipboard Toast Notification */}
      {showToast && (
        <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 bg-[#ff2a2a] text-white font-sans font-bold text-sm px-6 py-3.5 rounded-full shadow-2xl z-50 flex items-center gap-2 border border-white/20 animate-fade-in">
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
          </svg>
          Email copied to clipboard! ({personalInfo.emails.primary})
        </div>
      )}
    </section>
  );
};

export default Contact;
