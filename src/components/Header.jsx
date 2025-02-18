import React from 'react';
import { assets } from '../assets/assets';

const Header = () => {
  return (
    <div 
      className="flex flex-col md:flex-row items-center justify-between bg-blue-500 text-white px-6 md:px-10 lg:px-20 py-10 md:py-20" 
      style={{ background: 'linear-gradient(90deg, #4a90e2 0%, #5674d3 100%)' }}
    >
      
      {/* --------- Left Side: Text and Profiles --------- */}
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 md:gap-6">
        <h1 className="text-4xl md:text-5xl font-bold leading-snug md:leading-tight">
          Book Appointment <br /> With Trusted Doctors
        </h1>
        <div className="flex items-center gap-4">
          <img src={assets.group_profiles} alt="Profiles" className="w-16 h-16 rounded-full" />
          <p className="text-base md:text-lg">
            Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.
          </p>
        </div>
        <a href="#" className="flex items-center text-base font-semibold underline mt-4">
          Book Appointment 
          <img src={assets.arrow_icon} alt="Arrow" className="ml-2 w-5 h-5" />
        </a>
      </div>

      {/* --------- Right Side: Doctor Image --------- */}
      <div className="md:w-1/2 flex justify-end mt-10 md:mt-0 relative">
        <img src={assets.header_img} alt="Doctor" className="max-w-full h-auto object-contain relative z-10 justify-end" style={{ maxHeight: '500px' }} />
      </div>
      
    </div>
  );
};

export default Header;
