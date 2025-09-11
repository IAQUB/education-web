export default function App() {
  return (
    <>

    {/* nav bar */}
    <section className="bg-[url(https://i.ibb.co/nMdF1kWy/Rectangle-1.png)] bg-no-repeat bg-cover bg-center relative mb-40">
      <div className="flex items-center justify-around">

      <div className="flex items-center justify-center gap-3 my-10 py-5">
        <img className="" src="https://i.ibb.co/n2GCC73/Frame-19.png" alt="" />
        <img className="" src="https://i.ibb.co/d4DTKxQj/Vidhalaya.png" alt="" />
      </div>

      <div className="">
        <ul className="flex justify-center items-center gap-5 raleway font-bold">
          <li className="text-[#FD661F] hover:bg-slate-300 duration-300 ease-in rounded px-3 py-2 cursor-pointer">Home</li>
          <li className=" hover:bg-slate-300 duration-300 ease-in rounded px-3 py-2 cursor-pointer">Careers</li>
          <li className=" hover:bg-slate-300 duration-300 ease-in rounded px-3 py-2 cursor-pointer">Blog</li>
          <li className=" hover:bg-slate-300 duration-300 ease-in rounded px-3 py-2 cursor-pointer">About Us</li>
        </ul>
      </div>

      <div className="space-x-7">
        <button className="border rounded-lg bg-white raleway text-[16px] text-[#0B7077] font-semibold py-5 px-10 hover:bg-[#0B7077] hover:text-[#FFFFFF]">
          LOG IN
        </button>

        <button className="border rounded-lg bg-[#0B7077] raleway text-[16px] text-[#FFFFFF] font-semibold py-5 px-10 hover:bg-white hover:text-black">
          SIGN UP
        </button>
      </div>
      </div>



        <section className="grid grid-cols-2 items-center">
     {/* left  side */}
      <div className="justify-center">
       <p className="bg-white border rounded-md w-fit py-3 px-5 ml-20 railway font-semibold">Never stop learning</p>

      <p className="ml-20 text-6xl md:text-5xl 2xl:text-6xl font-bold text-[#0B7077] Raleway">Grow up your skills by <br /> online courses with <br />
      Onlearning</p>

      
        <div className="flex items-center gap-5">
          <button className="border rounded-lg bg-[#FD661F] Raleway text-[16px] text-[#FFFFFF] font-semibold py-5 px-10 hover:bg-white hover:text-black ml-20 mt-6">
          explore path
        </button>

        <div className="flex items-center justify-center pt-6">
        <img className="relative z-40 -ml-0" src="https://i.ibb.co/rfT89pVL/Ellipse-67.png" alt="" />
        <img className="relative z-30 -ml-4" src="https://i.ibb.co/wrYcJXGP/Ellipse-68.png" alt="" />
        <img className="relative z-20 -ml-4" src="https://i.ibb.co/cSfXR0Rr/Ellipse-69.png" alt="" /> 
        <img src="https://i.ibb.co/DsBv1p3/rate.png" alt="" />
        </div>

        </div>
      </div>
     

        {/* right side */}
        <div className="">
          <img src="https://i.ibb.co/nqTwxdJZ/image-u-M5-ZOTW7-R-transformed-1.png" alt="" />
        </div>


          <div className="">
          <img className="absolute  right-40 top-80" src="https://i.ibb.co/NgYhqG1B/Group-9.png" alt="" />
          </div>


          {/* Info Card */}
          <div className="flex items-center w-fit p-4 space-x-4 rounded-xl border border-white/20 bg-white/30 shadow-2xl backdrop-blur-sm absolute left-2/4 top-2/3">
           <svg className="w-8 bg-[#23BDEE] p-1 rounded" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
           <path fill="#ffffff" d="M216 64C229.3 64 240 74.7 240 88L240 128L400 128L400 88C400 74.7 410.7 64 424 64C437.3 64 448 74.7 448 88L448 128L480 128C515.3 128 544 156.7 544 192L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 192C96 156.7 124.7 128 160 128L192 128L192 88C192 74.7 202.7 64 216 64zM480 496C488.8 496 496 488.8 496 480L496 416L408 416L408 496L480 496zM496 368L496 288L408 288L408 368L496 368zM360 368L360 288L280 288L280 368L360 368zM232 368L232 288L144 288L144 368L232 368zM144 416L144 480C144 488.8 151.2 496 160 496L232 496L232 416L144 416zM280 416L280 496L360 496L360 416L280 416zM216 176L160 176C151.2 176 144 183.2 144 192L144 240L496 240L496 192C496 183.2 488.8 176 480 176L216 176z"/></svg>
           <div>
            <p className="Nunito Sans font-bold text-[#595959]">250k</p>
            <p className="Nunito Sans text-sm text-[#545567]">Assisted Student</p>
           </div>
          </div>

          {/* Bottom Button */}
          <div className="flex items-center">
            <img className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2" src="https://i.ibb.co/G4dqHwjc/Ellipse-3.png" alt="" />
            <img className="absolute 2xl:left-1/2 -translate-x-1/2 -bottom-4 translate-y-1/2" src="https://i.ibb.co/pv0SDH4N/Group-10.png" alt="" />
          </div>
        </section>
    </section>


    {/* popular courses */}
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


    {/* Benefits */}
    <section className="grid grid-cols-2 p-14">

      {/* left side */}
      <div className="pl-10">
        <button className="bg-[#F5F5F5] border-0 rounded py-3 px-16 shadow text-[#0B7077] my-4">
            Benefits
          </button>

          
          <p className="Inter font-bold text-[48px] text-[#0B7077]">Get Student ID card</p>

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
          <p className="text-[#696984]">TA’s and presenters can be moved to the front of the class.
</p>
          </div>

          <div className="flex items-center justify-start gap-4 my-5">
            <div className="bg-[#fafafa] rounded-full p-3 w-fit shadow-xl">
            <img className="" src="https://i.ibb.co/cK3GtSMR/Vector.png" alt="" />
          </div>
          <p className="text-[#696984]">Teachers can easily see all students and class data at one time.</p>
          </div>
      </div>

      {/* Right side */}
      <div className="pr-10">
        <div className="flex items-center justify-center bg-[#D2E6E4] py-7 gap-5 rounded-xl">
        <img src="https://i.ibb.co/1Jh4vH76/Group-1.png" alt="" />
        <img src="https://i.ibb.co/vCF3kXFz/Group-2.png" alt="" />
      </div>
      </div>
      01025321801
      01105198455
      rtayoubur@gmail.com
      

    </section>

</>
  )
}