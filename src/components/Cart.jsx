import React from 'react';

const Cart = ({ cart, onRemove, onCheckout }) => {
  const totalAmount = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="max-w-[800px] mx-auto bg-white border border-[#F1F5F9] p-6 md:p-16 rounded-[24px] md:rounded-[40px] shadow-[0_30px_70px_-20px_rgba(0,0,0,0.05)]">
      <h3 className="text-[20px] md:text-[24px] font-[700] text-[#111827] mb-8 md:mb-10 tracking-tight text-center md:text-left">Your Cart</h3>
      
      {cart.length === 0 ? (
        <div className="py-16 md:py-24 text-center text-[#94A3B8] font-semibold text-[15px] md:text-[17px] border-2 border-dashed border-[#F1F5F9] rounded-2xl md:rounded-3xl">
          Your cart is currently empty.
        </div>
      ) : (
        <>
          <div className="space-y-4 md:space-y-6 mb-10 md:mb-14">
            {cart.map((item) => (
              <div key={item.id} className="flex flex-col sm:flex-row justify-between items-center p-4 md:p-6 bg-[#F8FAFC] border border-[#F1F5F9] rounded-[20px] md:rounded-[24px] transition-all hover:bg-white hover:shadow-md gap-4">
                <div className="flex items-center gap-4 md:gap-6 w-full sm:w-auto">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-white p-2 md:p-2.5 rounded-xl md:rounded-2xl shadow-sm border border-[#F1F5F9] shrink-0">
                    <img src={item.image} alt="" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <p className="font-[800] text-[#111827] text-[16px] md:text-[18px] tracking-tight">{item.name}</p>
                    <p className="text-[#6320EE] font-[600] text-[15px] md:text-[17px] tracking-tighter">${item.price}</p>
                  </div>
                </div>
                <button 
                  onClick={() => onRemove(item.id)} 
                  className="text-[#EF4444] font-[600] text-[13px] md:text-sm hover:underline px-4 py-2 w-full sm:w-auto text-center"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          
          <div className="flex justify-between items-center border-t border-[#F1F5F9] pt-8 md:pt-10 mb-10 md:mb-12">
            <span className="text-[13px] md:text-[15px] text-[#94A3B8] font-[600] uppercase tracking-[0.1em]">Total Payment</span>
            <span className="text-[32px] md:text-[42px] font-[900] text-[#111827] tracking-tighter leading-none">
              ${totalAmount}
            </span>
          </div>
          
          <button 
            onClick={onCheckout} 
            className="w-full py-4 md:py-5 bg-[#6320EE] hover:bg-[#4F16C8] text-white font-[600] rounded-[16px] md:rounded-[20px] text-[16px] md:text-[18px] shadow-2xl shadow-indigo-100 transition-all active:scale-95"
          >
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;