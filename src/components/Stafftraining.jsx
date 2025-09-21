import React from 'react';

const Stafftraining = () => {
  return (
    <>
      <section className="grid grid-cols-2 p-14">


      {/* left side */}
         <div className="pr-10">
        <div className="flex items-center justify-center py-7 gap-5 rounded-xl">
        <img src="https://i.ibb.co/NgtcQtGW/pana.png" alt="" />
      </div>
      </div>

        {/* right side */}
      <div className="pl-10">
        <button className="bg-[#D4E1FF] border-0 rounded py-1 px-5 shadow text-[#0B7077] my-4">
            Training
          </button>
          
          <p className="Inter font-bold text-[48px] text-[#FD661F]">Staff training</p>

          <div className="flex items-center justify-start gap-4 my-5">
            <div className="bg-[#fafafa] rounded-full p-3 w-fit shadow-xl">
            <img className="" src="https://i.ibb.co/fzvZYzgY/Group-72.png" alt="" />
          </div>
          <p className="text-[#696984]">Teachers don’t get lost in the grid view and have a <br /> dedicated Podium space.</p>
          </div>

          <div className="flex items-center justify-start gap-4 my-5">
            <div className="bg-[#fafafa] rounded-full p-3 w-fit shadow-xl">
            <img className="" src="https://i.ibb.co/TM8THcdW/Group-73.png" alt="" />
          </div>
          <p className="text-[#696984]">TA’s and presenters can be moved to the front of the class.</p>
          </div>

          <div className="flex items-center justify-start gap-4 my-5">
            <div className="bg-[#fafafa] rounded-full p-3 w-fit shadow-xl">
            <img className="" src="https://i.ibb.co/cK3GtSMR/Vector.png" alt="" />
          </div>
          <p className="text-[#696984]">Teachers can easily see all students and class data at one time.</p>
          </div>
      </div>
    </section>
    </>
  );
};

export default Stafftraining;