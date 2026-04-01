import React from 'react';

const Footer = () => {
  return (
    <footer className="font-sans antialiased">
      
      <div className="bg-[#7C3AED] py-20 md:py-32 text-white text-center">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-[36px] md:text-[52px] font-[600] mb-6 tracking-[-0.04em] leading-tight">
            Ready To Transform Your Workflow?
          </h2>
          <p className="text-white/90 text-[16px] md:text-[18px] font-medium max-w-2xl mx-auto mb-10 leading-relaxed">
            Join thousands of professionals who are already using DigiTools to work smarter. Start your free trial today.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-8">
            <button className="bg-white text-[#7C3AED] px-12 py-4 rounded-full font-[800] text-[15px] hover:bg-slate-50 transition-all shadow-xl">
              Explore Products
            </button>
            <button className="border-2 border-white/40 text-white px-12 py-4 rounded-full font-[800] text-[15px] hover:bg-white hover:text-[#7C3AED] transition-all">
              View Pricing
            </button>
          </div>
          
          <p className="text-white/60 text-[13px] font-medium tracking-wide italic">
            14-day free trial • No credit card required • Cancel anytime
          </p>
        </div>
      </div>

      
      <div className="bg-[#0B1120] text-white pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
            <div className="lg:col-span-4">
              <h3 className="text-[32px] font-[800] mb-6 tracking-tighter">DigiTools</h3>
              <p className="text-[#94A3B8] text-[15.5px] leading-[1.8] font-medium max-w-sm">
                Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
              </p>
            </div>
            
            <div className="lg:col-span-2">
              <h4 className="text-[17px] font-[700] mb-8 text-white tracking-tight">Product</h4>
              <ul className="space-y-4 text-[#94A3B8] text-[15px] font-medium">
                <li className="hover:text-white cursor-pointer transition-colors">Features</li>
                <li className="hover:text-white cursor-pointer transition-colors">Pricing</li>
                <li className="hover:text-white cursor-pointer transition-colors">Templates</li>
                <li className="hover:text-white cursor-pointer transition-colors">Integrations</li>
              </ul>
            </div>

            <div className="lg:col-span-2">
              <h4 className="text-[17px] font-[700] mb-8 text-white tracking-tight">Company</h4>
              <ul className="space-y-4 text-[#94A3B8] text-[15px] font-medium">
                <li className="hover:text-white cursor-pointer transition-colors">About</li>
                <li className="hover:text-white cursor-pointer transition-colors">Blog</li>
                <li className="hover:text-white cursor-pointer transition-colors">Careers</li>
                <li className="hover:text-white cursor-pointer transition-colors">Press</li>
              </ul>
            </div>

            <div className="lg:col-span-2">
              <h4 className="text-[17px] font-[700] mb-8 text-white tracking-tight">Resources</h4>
              <ul className="space-y-4 text-[#94A3B8] text-[15px] font-medium">
                <li className="hover:text-white cursor-pointer transition-colors">Documentation</li>
                <li className="hover:text-white cursor-pointer transition-colors">Help Center</li>
                <li className="hover:text-white cursor-pointer transition-colors">Community</li>
                <li className="hover:text-white cursor-pointer transition-colors">Contact</li>
              </ul>
            </div>

            <div className="lg:col-span-2">
              <h4 className="text-[17px] font-[700] mb-8 text-white tracking-tight">Social Links</h4>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black cursor-pointer hover:scale-110 transition-transform">
                  <span className="text-xs">▶</span>
                </div>
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black cursor-pointer hover:scale-110 transition-transform">
                  <span className="text-sm font-bold">f</span>
                </div>
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black font-bold cursor-pointer hover:scale-110 transition-transform">
                  <span className="text-sm">X</span>
                </div>
              </div>
            </div>
          </div>

          
          <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center text-[#64748B] text-[14px] font-medium gap-6">
            <p>© 2026 Digitools. All rights reserved.</p>
            <div className="flex gap-8">
              <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
              <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
              <span className="hover:text-white cursor-pointer transition-colors">Cookies</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;