import React from 'react';

const ExclusiveBundles = () => {
  return (
    <>
      <section>
        <div>
        <div className="flex items-center justify-center flex-col pt-10">
        <p className="text-[#0B7077] text-5xl font-bold text-center">Exclusive Bundles</p>
        <img className="" src="https://i.ibb.co/zh2CQ59w/Vector-1.png" alt="" />
           </div>
        <p className="inter flex items-center justify-center text-[#696984] text-center py-8">Onlearing  is one powerful online software suite that combines all the tools <br /> needed to run a successful school or office.</p>
      </div>

      <div className="flex justify-between items-center">
        {/* 1st Colum */}
        <div className="">
          <img className="" src="https://i.ibb.co/mFc33N22/Frame-237693.png" alt="" />
        </div>

        {/* 2nd Colum */}
        <div className="flex border rounded-xl w-[820px] h-[302px] mr-20 relative">
          <img className="rounded-l-xl" src="https://i.ibb.co/XxMJQr9j/Rectangle-2750-1.png" alt="" />

          <div className="pl-6 pr-20 space-y-4 py-8">
          <p className="Raleway text-sm text-[#777795]"> 1 - 28 July 2022</p>
          <p className="text-[#0B7077] font-extrabold Raleway text-xl ">Product Management Basic - Course</p>
          <p className="text-sm text-[#4D4D4D]">Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.</p>
          </div>

           <div className="flex items-center space-x-2 bg-white border rounded-full absolute p-2 bottom-7 left-56 cursor-pointer">
              <p className="text-[#FD661F] font-bold text-[17px]">$ 467</p>
              <p className="line-through">$ 500</p>
            </div>


             <div className="flex items-center justify-center bg-[#FAFAFA] 2xl:bg-[#FAFAFA] border-1 rounded-full py-2 px-4 w-max absolute bottom-5 right-20">
            <img className="relative z-50 -ml-0" src="https://i.ibb.co/dsGjPGPb/Blink.png" alt="" />
            <img className="relative z-40 -ml-2" src="https://i.ibb.co/N2vF7syq/Ander.png" alt="" />
            <img className="relative z-30 -ml-2" src="https://i.ibb.co/pj8zdTmg/Big-Bird.png" alt="" />
            <img className="relative z-20 -ml-2" src="https://i.ibb.co/XNQrxRd/Bartender.png" alt="" />
            <img className="relative z-10 -ml-2" src="https://i.ibb.co/DDkxS6H6/Bill.png" alt="" />
            <p className="Raleway pl-2">+ 342 students</p>
          </div>
          
        </div>

        {/* 3rd Colum */}
        <div>
          <img className="blur" src="https://i.ibb.co/spYt0g7J/Rectangle-2750.png" alt="" />
        </div>
      </div>

      <div className="flex items-center justify-center -mt-16">
        <img src="https://i.ibb.co/FbFtjJXs/Frame-237699.png" alt="" />
      </div>

    </section>
    </>
  );
};

export default ExclusiveBundles;