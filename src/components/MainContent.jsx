import React, { useState } from 'react';
import { productsData } from '../Data/Products';
import Cart from './Cart';

const MainContent = ({ cart, onAdd, onRemove, onCheckout }) => {
  const [view, setView] = useState('products');

  return (
    <section className="py-12 md:py-24 bg-[#F9FAFB] min-h-screen antialiased">
      <div className="container mx-auto px-4 md:px-16">
        
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-[32px] md:text-[48px] font-[500] text-[#111827] mb-4 tracking-[-0.04em] leading-tight px-2">
            Premium Digital Tools
          </h2>
          <p className="text-[#64748B] text-[15px] md:text-[17px] font-medium max-w-lg mx-auto leading-relaxed mb-10 md:mb-12 px-4">
            Choose from our curated collection of premium digital products designed 
            to boost your productivity and creativity.
          </p>
          
          <div className="inline-flex items-center bg-white border border-[#E5E7EB] p-1.5 rounded-full shadow-sm w-full max-w-[340px] sm:w-auto mx-auto">
            <button 
              onClick={() => setView('products')}
              className={`flex-1 sm:flex-none px-8 md:px-12 py-3 rounded-full text-[14px] md:text-[15px] font-[750] transition-all duration-300 ${
                view === 'products' ? 'bg-[#6320EE] text-white shadow-lg shadow-indigo-100' : 'text-[#64748B] hover:text-[#111827]'
              }`}
            >
              Products
            </button>
            <button 
              onClick={() => setView('cart')}
              className={`flex-1 sm:flex-none px-8 md:px-12 py-3 rounded-full text-[14px] md:text-[15px] font-[600] transition-all duration-300 ${
                view === 'cart' ? 'bg-[#6320EE] text-white shadow-lg shadow-indigo-100' : 'text-[#64748B] hover:text-[#111827]'
              }`}
            >
              Cart ({cart.length})
            </button>
          </div>
        </div>

        {view === 'products' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 max-w-7xl mx-auto">
            {productsData.map((product) => (
              <div key={product.id} className="relative bg-white border border-[#F1F5F9] rounded-[24px] md:rounded-[32px] p-8 md:p-10 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.04)] hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)] transition-all duration-500 flex flex-col h-full group">
                
                {product.tag && (
                  <div className={`absolute top-6 md:top-8 right-6 md:right-8 px-4 md:px-5 py-1.5 rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-wider ${
                    product.tagType === 'warning' ? 'bg-[#FFFBEB] text-[#D97706]' : 
                    product.tagType === 'secondary' ? 'bg-[#F5F1FF] text-[#6320EE]' : 'bg-[#F0FDF4] text-[#16A34A]'
                  }`}>
                    {product.tag}
                  </div>
                )}

                <div className="w-20 h-20 md:w-24 md:h-24 mb-8 md:mb-10 flex items-center justify-center bg-[#F8FAFC] rounded-[20px] md:rounded-[24px] p-2 group-hover:scale-105 transition-transform duration-500">
                  <img src={product.image} alt="" className="w-full h-full object-contain" />
                </div>

                <h3 className="text-[22px] md:text-[26px] font-[650] text-[#111827] mb-4 tracking-tight leading-tight">{product.name}</h3>
                <p className="text-[#64748B] text-[14px] md:text-[15px] leading-[1.7] mb-8 md:mb-10 flex-grow font-medium">
                  {product.description}
                </p>

                <div className="mb-8 md:mb-10 flex items-baseline">
                  <span className="text-[30px] md:text-[36px] font-[900] text-[#111827] tracking-tighter">${product.price}</span>
                  <span className="text-[#94A3B8] text-[14px] md:text-[16px] font-semibold ml-2">/{product.period}</span>
                </div>

                <ul className="space-y-3 md:space-y-4 mb-10 md:mb-12 pt-8 md:pt-10 border-t border-[#F1F5F9]">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3 text-[13.5px] md:text-[14.5px] text-[#475569] font-semibold">
                      <span className="text-[#10B981] font-bold text-lg leading-none">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={() => onAdd(product)} 
                  className="w-full py-4 md:py-5 bg-[#6320EE] hover:bg-[#4F16C8] text-white font-[600] rounded-full text-[15px] md:text-[16px] transition-all duration-300 shadow-xl shadow-indigo-50 active:scale-95"
                >
                  Buy Now
                </button>
              </div>
            ))}
          </div>
        ) : (
          <Cart cart={cart} onRemove={onRemove} onCheckout={onCheckout} />
        )}
      </div>
    </section>
  );
};

