import React from 'react';

const Navbar = ({ cartCount }) => {
  return (
    <nav className="navbar bg-white px-4 md:px-16 py-4 md:py-5 sticky top-0 z-50 transition-all duration-300 border-b border-gray-50">
      <div className="navbar-start">
        {/* Mobile menu trigger could be added here if needed, keeping your exact structure for now */}
        <h1 className="text-[22px] md:text-[26px] font-[800] bg-gradient-to-r from-[#6320EE] to-[#9254FF] bg-clip-text text-transparent cursor-pointer tracking-tight whitespace-nowrap">
          DigiTools
        </h1>
      </div>

      {/* Desktop Menu - Hidden on tablets and phones */}
      <div className="navbar-center hidden lg:flex">
        <ul className="flex items-center gap-8 xl:gap-10 text-[#64748B] text-[15px] font-semibold">
          <li className="hover:text-[#6320EE] cursor-pointer transition-colors">Products</li>
          <li className="hover:text-[#6320EE] cursor-pointer transition-colors">Features</li>
          <li className="hover:text-[#6320EE] cursor-pointer transition-colors">Pricing</li>
          <li className="hover:text-[#6320EE] cursor-pointer transition-colors">Testimonials</li>
          <li className="hover:text-[#6320EE] cursor-pointer transition-colors">FAQ</li>
        </ul>
      </div>

      <div className="navbar-end flex items-center gap-3 md:gap-6">
        {/* Cart Icon - Slightly smaller on mobile */}
        <div className="relative cursor-pointer group p-1.5 md:p-2">
          <span className="text-[20px] md:text-[22px] group-hover:scale-110 transition-transform inline-block">🛒</span>
          {cartCount > 0 && (
            <span className="absolute top-0 right-0 bg-[#6320EE] text-white text-[9px] md:text-[10px] font-bold w-4 h-4 md:w-5 md:h-5 rounded-full flex items-center justify-center border-2 border-white">
              {cartCount}
            </span>
          )}
        </div>
        
        {/* Login - Hidden on mobile and small tablets */}
        <button className="hidden md:block text-[#1A1D2B] font-bold text-[14px] md:text-[15px] hover:opacity-70 transition-opacity">
          Login
        </button>
        
        {/* CTA Button - Adjusted padding for mobile */}
        <button className="bg-[#6320EE] hover:bg-[#4F16C8] text-white font-bold text-[13px] md:text-[15px] px-5 py-2.5 md:px-8 md:py-3 rounded-full transition-all shadow-lg shadow-indigo-100 active:scale-95 whitespace-nowrap">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;