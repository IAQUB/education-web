import React from 'react';

const Popular = () => {
  return (
    <>
      <section>
      <div className="flex items-center justify-center flex-col pt-10">
        <p className="text-[#FD661F] text-5xl font-bold text-center">Popular Courses</p>
        <img className="" src="https://i.ibb.co/zh2CQ59w/Vector-1.png" alt="" />
      </div>


      <div className="flex justify-center mt-10 my-7 space-x-6">
        <button className="border rounded p-2 bg-[#0B7077] text-white font-semibold Raleway py-2 px-5 text-sm hover:bg-slate-100 hover:text-black">All Program</button>
        <button className="border border-[#C4C4C4] rounded p-2 text-[#818C96] font-semibold Raleway py-2 px-5 text-sm hover:bg-slate-200">Ui/Ux design</button>
        <button className="border border-[#C4C4C4] rounded p-2 text-[#818C96] font-semibold Raleway py-2 px-5 text-sm hover:bg-slate-200">Program Design</button>
        <button className="border border-[#C4C4C4] rounded p-2 text-[#818C96] font-semibold Raleway py-2 px-5 text-sm hover:bg-slate-200">Program Design</button>
        <button className="border border-[#C4C4C4] rounded p-2 text-[#818C96] font-semibold Raleway py-2 px-5 text-sm hover:bg-slate-200">Program Design</button>
        <button className="border border-[#C4C4C4] rounded p-2 text-[#818C96] font-semibold Raleway py-2 px-5 text-sm hover:bg-slate-200">Program Design</button>
      </div>

      {/* course details */}
      <div className="grid grid-cols-4 p-14 space-x-7">

        {/* 1st course */}
        <div className="border-0 shadow-md rounded-2xl w-fit relative">
          <img className="w-full rounded-t-2xl " src="https://i.ibb.co/TMzJQGGs/Rectangle-2749.png" alt="" />

          <div className="flex items-center justify-center bg-[#FAFAFA] 2xl:bg-[#FAFAFA] border-1 rounded-full py-2 px-4 w-max absolute left-1/2 -translate-x-1/2 bottom-72 2xl:bottom-[275px] md:bottom-72">
            <img className="relative z-50 -ml-0" src="https://i.ibb.co/dsGjPGPb/Blink.png" alt="" />
            <img className="relative z-40 -ml-2" src="https://i.ibb.co/N2vF7syq/Ander.png" alt="" />
            <img className="relative z-30 -ml-2" src="https://i.ibb.co/pj8zdTmg/Big-Bird.png" alt="" />
            <img className="relative z-20 -ml-2" src="https://i.ibb.co/XNQrxRd/Bartender.png" alt="" />
            <img className="relative z-10 -ml-2" src="https://i.ibb.co/DDkxS6H6/Bill.png" alt="" />
            <p className="Raleway pl-2">+ 40 students</p>
          </div>
          <p className="Raleway text-sm text-[#777795] mx-4 mt-14"> 1 - 28 July 2022</p>
          <p className="text-[#0B7077] font-extrabold Raleway text-xl m-4">Product Management Basic - Course</p>
          <p className="text-sm text-[#4D4D4D] m-4">Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.</p>

          <div className="flex items-center justify-between px-4 pb-5">
            <div className="flex items-center space-x-2">
              <p className="text-[#FD661F] font-bold text-[17px]">$ 380</p>
              <p className="line-through">$ 500</p>
            </div>
            
            <button className="border rounded-md p-2 bg-[#0B7077] text-white font-semibold Raleway py-2 px-5 text-sm hover:bg-slate-100 hover:text-black">Enroll Now</button>
          </div>
        </div>

        {/* 2nd course */}
         <div className="border-0 shadow-md rounded-2xl w-fit relative">
          <img className="w-full rounded-t-2xl " src="https://i.ibb.co/sv5RXtDp/Rectangle-2749-1.png" alt="" />

          <div className="flex items-center justify-center bg-[#FAFAFA] 2xl:bg-[#FAFAFA] border-1 rounded-full py-2 px-4 w-max absolute left-1/2 -translate-x-1/2 bottom-72 2xl:bottom-[275px] md:bottom-72">
            <img className="relative z-50 -ml-0" src="https://i.ibb.co/dsGjPGPb/Blink.png" alt="" />
            <img className="relative z-40 -ml-2" src="https://i.ibb.co/N2vF7syq/Ander.png" alt="" />
            <img className="relative z-30 -ml-2" src="https://i.ibb.co/pj8zdTmg/Big-Bird.png" alt="" />
            <img className="relative z-20 -ml-2" src="https://i.ibb.co/XNQrxRd/Bartender.png" alt="" />
            <img className="relative z-10 -ml-2" src="https://i.ibb.co/DDkxS6H6/Bill.png" alt="" />
            <p className="Raleway pl-2">+ 11 students</p>
          </div>
          <p className="Raleway text-sm text-[#777795] mx-4 mt-14"> 1 - 28 July 2022</p>
          <p className="text-[#0B7077] font-extrabold Raleway text-xl m-4">BM Data Science Professional Certificate</p>
          <p className="text-sm text-[#4D4D4D] m-4">Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.</p>

          <div className="flex items-center justify-between px-4 pb-5">
            <div className="flex items-center space-x-2">
              <p className="text-[#FD661F] font-bold text-[17px]">$ 378</p>
              <p className="line-through">$ 500</p>
            </div>
            
            <button className="border rounded-md p-2 bg-[#0B7077] text-white font-semibold Raleway py-2 px-5 text-sm hover:bg-slate-100 hover:text-black">Enroll Now</button>
          </div>
        </div>

         {/* 3rd course */}
         <div className="border-0 shadow-md rounded-2xl w-fit relative">
          <img className="w-full rounded-t-2xl " src="https://i.ibb.co/h1sdsQSJ/Rectangle-2749-2.png" alt="" />

          <div className="flex items-center justify-center bg-[#FAFAFA] 2xl:bg-[#FAFAFA] border-1 rounded-full py-2 px-4 w-max absolute left-1/2 -translate-x-1/2 bottom-72 2xl:bottom-[275px] md:bottom-72">
            <img className="relative z-50 -ml-0" src="https://i.ibb.co/dsGjPGPb/Blink.png" alt="" />
            <img className="relative z-40 -ml-2" src="https://i.ibb.co/N2vF7syq/Ander.png" alt="" />
            <img className="relative z-30 -ml-2" src="https://i.ibb.co/pj8zdTmg/Big-Bird.png" alt="" />
            <img className="relative z-20 -ml-2" src="https://i.ibb.co/XNQrxRd/Bartender.png" alt="" />
            <img className="relative z-10 -ml-2" src="https://i.ibb.co/DDkxS6H6/Bill.png" alt="" />
            <p className="Raleway pl-2">+ 234 students</p>
          </div>
          <p className="Raleway text-sm text-[#777795] mx-4 mt-14"> 1 - 28 July 2022</p>
          <p className="text-[#0B7077] font-extrabold Raleway text-xl m-4">The Science of Well-Being</p>
          <p className="text-sm text-[#4D4D4D] m-4">Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.</p>

          <div className="flex items-center justify-between px-4 pb-5">
            <div className="flex items-center space-x-2">
              <p className="text-[#FD661F] font-bold text-[17px]">$ 123</p>
              <p className="line-through">$ 500</p>
            </div>
            
            <button className="border rounded-md p-2 bg-[#0B7077] text-white font-semibold Raleway py-2 px-5 text-sm hover:bg-slate-100 hover:text-black">Enroll Now</button>
          </div>
        </div>

         {/* 4th course */}
         <div className="border-0 shadow-md rounded-2xl w-fit relative">
          <img className="w-full rounded-t-2xl " src="https://i.ibb.co/gLjY83v7/Rectangle-2749-3.png" alt="" />

          <div className="flex items-center justify-center bg-[#FAFAFA] 2xl:bg-[#FAFAFA] border-1 rounded-full py-2 px-4 w-max absolute left-1/2 -translate-x-1/2 bottom-72 2xl:bottom-[275px] md:bottom-72">
            <img className="relative z-50 -ml-0" src="https://i.ibb.co/dsGjPGPb/Blink.png" alt="" />
            <img className="relative z-40 -ml-2" src="https://i.ibb.co/N2vF7syq/Ander.png" alt="" />
            <img className="relative z-30 -ml-2" src="https://i.ibb.co/pj8zdTmg/Big-Bird.png" alt="" />
            <img className="relative z-20 -ml-2" src="https://i.ibb.co/XNQrxRd/Bartender.png" alt="" />
            <img className="relative z-10 -ml-2" src="https://i.ibb.co/DDkxS6H6/Bill.png" alt="" />
            <p className="Raleway pl-2">+ 342 students</p>
          </div>
          <p className="Raleway text-sm text-[#777795] mx-4 mt-14"> 1 - 28 July 2022</p>
          <p className="text-[#0B7077] font-extrabold Raleway text-xl m-4">Python for Everybody Specialization</p>
          <p className="text-sm text-[#4D4D4D] m-4">Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.</p>

          <div className="flex items-center justify-between px-4 pb-5">
            <div className="flex items-center space-x-2">
              <p className="text-[#FD661F] font-bold text-[17px]">$ 467</p>
              <p className="line-through">$ 500</p>
            </div>
            
            <button className="border rounded-md p-2 bg-[#0B7077] text-white font-semibold Raleway py-2 px-5 text-sm hover:bg-slate-100 hover:text-black">Enroll Now</button>
          </div>
        </div>

      </div>
    </section>

    </>
  );
};

export default Popular;