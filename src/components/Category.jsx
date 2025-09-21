import React from 'react';

const Category = () => {
  return (
    <>
       {/* Courses Category */}

    <section className="mb-20 mt-10">
      <div>
        <div className="flex items-center justify-center flex-col pt-10">
        <p className="text-[#0B7077] text-5xl font-bold text-center">Courses Category</p>
        <img className="" src="https://i.ibb.co/zh2CQ59w/Vector-1.png" alt="" />
           </div>
        <p className="inter flex items-center justify-center text-[#696984] text-center py-10">Onlearing  is one powerful online software suite that combines all the tools <br /> needed to run a successful school or office.</p>
      </div>


      <div className="flex justify-center gap-x-14 my-12">

        {/* Beauty */}
        <div className="border-0 rounded-md w-fit flex flex-col items-center justify-center gap-y-5 px-5 py-8">
          <div className=" bg-[#A3D3FF] rounded-full">
            <img className="w-12" src="https://i.ibb.co/kVgfsFcT/Group-813.png" alt="" />
          </div>
          
          <p className="text-[#0B7077] font-semibold text-[27px]">Beauty</p>
          <p className="text-[#696984] text-center">One powerful online software <br /> suite that combines</p>
          <button className=" border-0 rounded py-3 px-16 shadow text-[#0B7077] my-4">
            more
          </button>
        </div>

        {/* medical */}
        <div className="border-0 rounded-md w-fit flex flex-col items-center justify-center gap-y-5 px-5 py-8">
          <div className=" bg-[#df93e9] rounded-full">
            <img className="w-12" src="https://i.ibb.co/3y8Ngr13/Vaccine.png" alt="" />
          </div>
          
          <p className="text-[#0B7077] font-semibold text-[27px]">medical</p>
          <p className="text-[#696984] text-center">One powerful online software <br /> suite that combines</p>
          <button className=" border-0 rounded py-3 px-16 shadow text-[#0B7077] my-4">
            more
          </button>
        </div>

        {/* sports */}
        <div className="border-0 rounded-md w-fit flex flex-col items-center justify-center gap-y-5 px-5 py-8 shadow">
          <div className="">
            <img className="w-[50px]" src="https://i.ibb.co/pj7v5X7j/Group.png" alt="" />
          </div>
          
          <p className="text-[#0B7077] font-semibold text-[27px]">Sports</p>
          <p className="text-[#696984] text-center">One powerful online software <br /> suite that combines</p>
          <button className="border-0 rounded-md p-2 bg-[#FD661F] text-white font-semibold Raleway py-2 px-5 text-sm shadow hover:bg-slate-100 hover:text-black">Explore courses </button>
        </div>

        {/* Nutrition */}
        <div className="border-0 rounded-md w-fit flex flex-col items-center justify-center gap-y-5 px-5 py-8">
          <div className=" rounded-full">
            <img className="w-12" src="https://i.ibb.co/4Z26PLFH/031-4.png" alt="" />
          </div>
          
          <p className="text-[#0B7077] font-semibold text-[27px]">Nutrition</p>
          <p className="text-[#696984] text-center">One powerful online software <br /> suite that combines</p>
          <button className=" border-0 rounded py-3 px-16 shadow text-[#0B7077] my-4">
            more
          </button>
        </div>
      </div>

      <div className="flex items-center justify-center my-4">
        <button className="border border-[#0B7077] rounded-md py-3 px-16 shadow text-[#0B7077]  Railway">
            View all
          </button>
      </div>
      
    </section>

    </>
  );
};

export default Category;