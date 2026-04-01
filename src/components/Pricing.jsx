import React from 'react';

const plans = [
  { 
    name: 'Starter', 
    price: 0, 
    desc: 'Perfect for getting started', 
    features: ['Access to 10 free tools', 'Basic templates', 'Community support', '1 project per month'], 
    btnText: 'Get Started Free', 
    isPopular: false 
  },
  { 
    name: 'Pro', 
    price: 29, 
    desc: 'Best for professionals', 
    features: ['Access to all premium tools', 'Unlimited templates', 'Priority support', 'Unlimited projects', 'Cloud sync', 'Advanced analytics'], 
    btnText: 'Start Pro Trial', 
    isPopular: true 
  },
  { 
    name: 'Enterprise', 
    price: 99, 
    desc: 'For teams and businesses', 
    features: ['Everything in Pro', 'Team collaboration', 'Custom integrations', 'Dedicated support', 'SLA guarantee', 'Custom branding'], 
    btnText: 'Contact Sales', 
    isPopular: false 
  },
];

const Pricing = () => (
  <section className="py-12 md:py-24 bg-[#F9F9F9] min-h-screen flex items-center font-sans antialiased">
    <div className="container mx-auto px-4 md:px-6 text-center">
      
      <h2 className="text-[2rem] md:text-[3rem] font-[600] mb-3 text-[#1A1D2B] tracking-[-0.03em] leading-tight px-2">
        Simple, Transparent Pricing
      </h2>
      
      <p className="text-[#64748B] mb-12 md:mb-20 max-w-xl mx-auto text-[0.9rem] md:text-[0.95rem] font-medium leading-relaxed px-4">
        Choose the plan that fits your needs. Upgrade or downgrade anytime.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-8 max-w-6xl mx-auto items-start">
        {plans.map((plan, i) => (
          <div 
            key={i} 
            style={{ WebkitBackfaceVisibility: 'hidden', backfaceVisibility: 'hidden' }}
            className={`p-8 md:p-10 pb-12 md:pb-16 rounded-[2rem] md:rounded-[2.5rem] transition-all duration-300 relative border transform-gpu ${
              plan.isPopular 
              ? 'bg-[#6320EE] text-white lg:scale-[1.03] shadow-[0_20px_50px_-15px_rgba(99,32,238,0.3)] border-none z-10 my-4 lg:my-0' 
              : 'bg-white border-[#F1F5F9] hover:border-[#F1F5F9]/50 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.06)]'
            }`}
          >
            
            {plan.isPopular && (
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FFD700] text-black px-5 py-1.5 rounded-full text-[10px] font-extrabold tracking-tight whitespace-nowrap">
                Most Popular
              </span>
            )}
            
            <h3 className="text-[1.4rem] md:text-[1.6rem] font-[700] mb-2 text-left tracking-tight">
              {plan.name}
            </h3>
            
            <p className={`text-[0.8rem] md:text-[0.85rem] mb-6 md:mb-9 font-medium text-left leading-relaxed ${plan.isPopular ? 'text-purple-100' : 'text-gray-400'}`}>
              {plan.desc}
            </p>
            
            <div className="flex items-baseline justify-start mb-8 md:mb-11">
              <span className="text-[2.5rem] md:text-[3rem] font-[900] tracking-tighter">${plan.price}</span>
              <span className={`text-[1rem] md:text-[1.1rem] ml-1.5 font-medium ${plan.isPopular ? 'text-purple-100' : 'text-gray-400'}`}>
                /Month
              </span>
            </div>
            
            <ul className="space-y-3 md:space-y-4 mb-10 md:mb-14 text-left">
              {plan.features.map((f, j) => (
                <li key={j} className="flex items-center gap-3 text-[0.85rem] md:text-[0.9rem] font-medium">
                  {plan.isPopular ? (
                    <span className="w-5 h-5 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                      <span className="text-white text-[10px]">✓</span>
                    </span>
                  ) : (
                    <span className="text-green-500 font-bold text-lg leading-none shrink-0">✓</span>
                  )}
                  {f}
                </li>
              ))}
            </ul>
            
            <button className={`w-full rounded-full h-12 md:h-14 font-extrabold text-[0.85rem] md:text-[0.9rem] transition-all hover:shadow-lg active:scale-95 ${
              plan.isPopular 
              ? 'bg-white text-[#6320EE] shadow-lg' 
              : 'bg-[#6320EE] text-white'
            }`}>
              {plan.btnText}
            </button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Pricing;