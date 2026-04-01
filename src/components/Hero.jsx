import React from 'react';
import bannerImg from '../assets/banner.png';

const Hero = () => {
  return (
    <>
      <section className="bg-white px-4 md:px-20 py-12 md:py-24 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 overflow-hidden">
        {/* Content Side */}
        <div className="flex-1 space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 bg-[#F3F0FF] text-[#4F39F6] px-4 py-1.5 rounded-full text-[12px] md:text-[13px] font-bold border border-purple-100 shadow-sm">
            <span className="w-2 h-2 bg-[#4F39F6] rounded-full animate-pulse"></span>
            New: AI-Powered Tools Available
          </div>

          <h1 className="text-[32px] sm:text-[42px] md:text-[56px] font-[650] text-[#1A1D2B] leading-[1.1] tracking-[-0.03em]">
            Supercharge Your <br className="hidden sm:block" />
            <span className="text-[#6320EE]">Digital Workflow</span>
          </h1>

          <div className="space-y-6">
            <p className="text-[#64748B] text-[16px] md:text-[18px] max-w-lg leading-relaxed font-medium">
              Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.
            </p>
        
            <a href="#" className="hidden lg:block text-[#6320EE] font-bold text-[15px] hover:underline">
              Explore Products
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-4">
            <button className="bg-[#6320EE] hover:bg-[#4F16C8] text-white font-[800] py-4 px-10 rounded-full text-[15px] shadow-lg shadow-indigo-100 transition-all active:scale-95 w-full sm:w-auto">
              Explore Products
            </button>
            
            <button className="flex items-center justify-center gap-2 border-2 border-gray-100 hover:border-[#6320EE]/30 hover:bg-slate-50 text-[#1A1D2B] font-[800] py-4 px-10 rounded-full text-[15px] transition-all w-full sm:w-auto">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 6L17 12L7 18V6Z" fill="#6320EE" stroke="#6320EE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Watch Demo
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="flex-1 flex justify-center lg:justify-end order-1 lg:order-2 w-full">
          <img 
            src={bannerImg} 
            alt="Dashboard" 
            className="w-full max-w-[400px] md:max-w-[560px] rounded-[32px] object-contain shadow-2xl shadow-indigo-50/50" 
          />
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#6320EE] py-16 px-6 md:px-20 text-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-center gap-12 md:gap-24 text-center">
          <div className="flex flex-col items-center">
            <h2 className="text-[42px] md:text-[52px] font-[900] leading-none tracking-tighter">50K+</h2>
            <p className="text-[14px] md:text-[16px] text-purple-100 mt-3 font-semibold uppercase tracking-wider">Active Users</p>
          </div>

          <div className="hidden md:block h-16 w-[1px] bg-white/20"></div>

          <div className="flex flex-col items-center">
            <h2 className="text-[42px] md:text-[52px] font-[900] leading-none tracking-tighter">200+</h2>
            <p className="text-[14px] md:text-[16px] text-purple-100 mt-3 font-semibold uppercase tracking-wider">Premium Tools</p>
          </div>

          <div className="hidden md:block h-16 w-[1px] bg-white/20"></div>

          <div className="flex flex-col items-center">
            <h2 className="text-[42px] md:text-[52px] font-[900] leading-none tracking-tighter">4.9</h2>
            <p className="text-[14px] md:text-[16px] text-purple-100 mt-3 font-semibold uppercase tracking-wider">User Rating</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;