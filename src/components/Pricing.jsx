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