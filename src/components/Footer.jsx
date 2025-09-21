import React from 'react';

const Footer = () => {
  return (
    <>
       <section className="mt-20">
      <div className="w-full h-[447px] bg-cover bg-[url('https://i.ibb.co/vC8Y4b9Z/Rectangle-2689.png')] bg-no-repeat ">
      
      <div className="flex items-center justify-around h-full px-28 py-10">
        {/* 1st Colum */}
        <div className="">
        <div className="flex items-center justify-center gap-3 my-10 py-5 -ml-24 -mb-1">
        <img className="" src="https://i.ibb.co/n2GCC73/Frame-19.png" alt="" />
        <img className="" src="https://i.ibb.co/d4DTKxQj/Vidhalaya.png" alt="" />
        </div>

        <div className="">
        <div className="flex items-center gap-3">
          <svg className="w-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="#0b7077" d="M128 252.6C128 148.4 214 64 320 64C426 64 512 148.4 512 252.6C512 371.9 391.8 514.9 341.6 569.4C329.8 582.2 310.1 582.2 298.3 569.4C248.1 514.9 127.9 371.9 127.9 252.6zM320 320C355.3 320 384 291.3 384 256C384 220.7 355.3 192 320 192C284.7 192 256 220.7 256 256C256 291.3 284.7 320 320 320z"/></svg>
          <p className="text-[#0B7077]">Address:</p>
        </div>
        <p className="text-[#0B7077] py-1">Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit,</p>
        </div>

        <div className="flex items-center gap-3 py-3">
         <svg className="w-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
         <path fill="#0b7077" d="M376 32C504.1 32 608 135.9 608 264C608 277.3 597.3 288 584 288C570.7 288 560 277.3 560 264C560 162.4 477.6 80 376 80C362.7 80 352 69.3 352 56C352 42.7 362.7 32 376 32zM384 224C401.7 224 416 238.3 416 256C416 273.7 401.7 288 384 288C366.3 288 352 273.7 352 256C352 238.3 366.3 224 384 224zM352 152C352 138.7 362.7 128 376 128C451.1 128 512 188.9 512 264C512 277.3 501.3 288 488 288C474.7 288 464 277.3 464 264C464 215.4 424.6 176 376 176C362.7 176 352 165.3 352 152zM176.1 65.4C195.8 60 216.4 70.1 224.2 88.9L264.7 186.2C271.6 202.7 266.8 221.8 252.9 233.2L208.8 269.3C241.3 340.9 297.8 399.3 368.1 434.2L406.7 387C418 373.1 437.1 368.4 453.7 375.2L551 415.8C569.8 423.6 579.9 444.2 574.5 463.9L573 469.4C555.4 534.1 492.9 589.3 416.6 573.2C241.6 536.1 103.9 398.4 66.8 223.4C50.7 147.1 105.9 84.6 170.5 66.9L176 65.4z"/></svg>
          <p className="text-[#0B7077]">Tel :+9229341037</p>
        </div>
        <div className="flex items-center gap-3">
           
          <svg className="w-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="#83b7b9" d="M320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576C178.6 576 64 461.4 64 320C64 178.6 178.6 64 320 64zM296 184L296 320C296 328 300 335.5 306.7 340L402.7 404C413.7 411.4 428.6 408.4 436 397.3C443.4 386.2 440.4 371.4 429.3 364L344 307.2L344 184C344 170.7 333.3 160 320 160C306.7 160 296 170.7 296 184z"/></svg>
          <p className="text-[#0B7077]">Response hours: 8 to 20</p>
        </div>
        <div className="flex items-center gap-3 py-3">
           
          <svg className="w-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
          <path fill="#0b7077" d="M112 128C85.5 128 64 149.5 64 176C64 191.1 71.1 205.3 83.2 214.4L291.2 370.4C308.3 383.2 331.7 383.2 348.8 370.4L556.8 214.4C568.9 205.3 576 191.1 576 176C576 149.5 554.5 128 528 128L112 128zM64 260L64 448C64 483.3 92.7 512 128 512L512 512C547.3 512 576 483.3 576 448L576 260L377.6 408.8C343.5 434.4 296.5 434.4 262.4 408.8L64 260z"/></svg>
          <p className="text-[#0B7077]">Email: info@onlearn.com</p>
        </div>

        </div>


      {/* Col-2 */}
      <div className="grid items-center grid-cols-2 gap-8 pl-20 ">
        <div className="gap-y-6">
        <p className="text-[#0A033C] py-3 font-bold">Categories</p>
        <p className="text-[#0B7077]">Counseling</p>
        <p className="text-[#0B7077] py-2">Health and fitness</p>
        <p className="text-[#0B7077]">Individual development</p>
        <p className="text-[#0B7077] py-2">more</p>
        </div>

        <div className="-mt-20">
          <p className="text-[#0A033C] py-3 font-bold">Links</p>
        <p className="text-[#0B7077]">About us</p>
        <p className="text-[#0B7077]">blog</p>
        
        </div>
        
        
      </div>


      {/* Col- 3 */}

      <div className="flex items-center justify-center flex-col relative">
        <p className="text-[#0A033C] py-3 text-center ">Stay up to date with the latest courses</p>
        <input className="w-96 rounded-xl py-5 px-4 text-[#0B7077] outline-none" type="email" name="Email" id="" placeholder= "Email" />
        <button className=" py-2 px-8 bg-[#0B7077] text-white rounded-xl absolute bottom-3 right-3">Send</button>
      </div>
      </div>

     </div>

    </section>
    </>
  );
};

export default Footer;