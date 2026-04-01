import React from 'react';

const steps = [
  { 
    id: '01', 
    title: 'Create Account', 
    desc: 'Sign up for free in seconds. No credit card required to get started.', 
    icon: '👤'
  },
  { 
    id: '02', 
    title: 'Choose Products', 
    desc: 'Browse our catalog and select the tools that fit your needs.', 
    icon: '📦'
  },
  { 
    id: '03', 
    title: 'Start Creating', 
    desc: 'Download and start using your premium tools immediately.', 
    icon: '🚀'
  }
];

const StepProcess = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        .custom-jakarta { font-family: 'Plus Jakarta Sans', sans-serif; }
      `}</style>

      <section className="py-16 md:py-24 bg-[#F9F9F9] min-h-screen flex items-center justify-center custom-jakarta antialiased">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          
          <h2 className="text-[32px] md:text-[48px] font-[600] text-[#1A1D2B] tracking-[-0.04em] leading-[1.2] md:leading-[1.1] mb-4">
            Get Started In 3 Steps
          </h2>
          
          <p className="text-[#64748B] text-[15px] md:text-[17px] font-medium max-w-lg mx-auto mb-12 md:mb-20 leading-relaxed">
            Start using premium digital tools in minutes, not hours.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 max-w-[1140px] mx-auto">
            {steps.map((step) => (
              <div 
                key={step.id} 
                className="relative bg-white pt-12 md:pt-16 pb-10 md:pb-14 px-6 md:px-10 rounded-[35px] md:rounded-[45px] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.04)] border border-[#F1F5F9]"
              >
                <div className="absolute top-6 md:top-8 right-6 md:right-10 w-8 h-8 md:w-9 md:h-9 bg-[#6320EE] rounded-full flex items-center justify-center shadow-lg shadow-indigo-100">
                  <span className="text-white text-[10px] md:text-[11px] font-[800] tracking-tighter">
                    {step.id}
                  </span>
                </div>
                
                <div className="w-20 h-20 md:w-28 md:h-28 bg-[#F3EEFF] rounded-full flex items-center justify-center mx-auto mb-6 md:mb-10">
                  <span className="text-[40px] md:text-[54px] leading-none select-none">
                    {step.icon}
                  </span>
                </div>
                
                <h3 className="text-[22px] md:text-[26px] font-[750] text-[#1A1D2B] mb-3 md:mb-4 tracking-[-0.02em]">
                  {step.title}
                </h3>
                
                <p className="text-[#64748B] leading-[1.6] text-[14px] md:text-[15px] font-normal px-2">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default StepProcess;