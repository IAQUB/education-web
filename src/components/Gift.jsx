import React from 'react';

const Gift = () => {
  return (
    <>
       <section className="">
      <div className="bg-[url(https://i.ibb.co/8kbzH4Z/Rectangle-2748.png)] bg-no-repeat bg-cover bg-center border rounded-xl mx-20 my-28 relative px-16 pt-8">

      <h1 className="Inter font-bold text-[48px] text-white py-3">Why You should buy <br /> gift cards ?</h1>

         <div className="flex items-center justify-start gap-1 py-1">
          <img className="w-6" src="https://i.ibb.co/zHCGQf91/mdi-star-circle.png" alt="" />
          <p className="text-[#FFFFFF]">Teachers don’t get lost in the grid view and have a dedicated Podium space.</p>
          </div>

         <div className="flex items-center justify-start gap-1 py-1">
          <img className="w-6" src="https://i.ibb.co/zHCGQf91/mdi-star-circle.png" alt="" />
          <p className="text-[#FFFFFF]">Teachers don’t get lost in the grid view and have a dedicated Podium space.</p>
          </div>

         <div className="flex items-center justify-start gap-1 pt-1 pb-5">
          <img className="w-6" src="https://i.ibb.co/zHCGQf91/mdi-star-circle.png" alt="" />
          <p className="text-[#FFFFFF]">Teachers don’t get lost in the grid view and have a dedicated Podium space.</p>
          </div>
          <button className="border-0 rounded-md py-3 px-8 shadow bg-white text-[#0B7077] Railway mb-6 text-sm">
           BUY NOW
          </button>

          <img className="absolute -top-40 -right-10" src="https://i.ibb.co/6JHK3QB2/image-6.png" alt="" />
         </div>

    </section>

    </>
  );
};

export default Gift;