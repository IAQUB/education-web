import React from 'react';

const Navbar = () => {
  return (

    <nav className="flex items-center justify-around py-5">

      {/* Logo */}
      <div className="flex items-center gap-3">
        <img src="https://i.ibb.co/n2GCC73/Frame-19.png" alt="Onlearning Logo" />
        <img src="https://i.ibb.co/d4DTKxQj/Vidhalaya.png" alt="Vidhalaya" />
      </div>

      {/* Menu */}
      <ul className="flex items-center gap-5 font-raleway font-bold">
        <li className="text-[#FD661F] hover:bg-slate-300 rounded px-3 py-2 cursor-pointer">Home</li>
        <li className="hover:bg-slate-300 rounded px-3 py-2 cursor-pointer">Careers</li>
        <li className="hover:bg-slate-300 rounded px-3 py-2 cursor-pointer">Blog</li>
        <li className="hover:bg-slate-300 rounded px-3 py-2 cursor-pointer">About Us</li>
      </ul>

      {/* Buttons */}
      <div className="space-x-7">
        <button className="border rounded-lg bg-white font-raleway text-[#0B7077] font-semibold py-3 px-6 hover:bg-[#0B7077] hover:text-white">
          LOG IN
        </button>
        <button className="border rounded-lg bg-[#0B7077] font-raleway text-white font-semibold py-3 px-6 hover:bg-white hover:text-black">
          SIGN UP
        </button>
      </div>
    </nav>

  );
};

export default Navbar;