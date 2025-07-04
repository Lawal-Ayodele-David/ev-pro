import React from 'react';

const Footer = () => (
  <footer className="border-t-4" style={{ borderColor: '#78B947' }}>
    <div className="container mx-auto flex flex-col md:flex-row justify-center items-start py-12 px-4 md:px-0 gap-y-12 md:gap-y-0">
      {/* Logo */}
      <div className="flex-1 flex justify-center mb-8 md:mb-0">
        <div className="flex flex-col items-center">
          <span className="text-7xl font-bold" style={{ color: '#78B947', fontFamily: 'sans-serif' }}>eva</span>
          <span className="text-2xl font-medium" style={{ color: '#78B947', fontFamily: 'sans-serif' }}>ev.africa</span>
        </div>
      </div>
      {/* Links */}
      <div className="flex-1 flex flex-col items-start space-y-6 mb-8 md:mb-0 text-left">
        <a href="https://ev.africa/" className="text-black text-2xl hover:underline">Home</a>
        <a href="https://ev.africa/faqs/" className="text-black text-2xl hover:underline">FAQs</a>
        <a href="https://ev.africa/contact-us/" className="text-black text-2xl hover:underline">Contact Us</a>
      </div>
      {/* Social Icons */}
      <div className="flex-1 flex justify-center">
        <div className="flex space-x-8">
          {/* Replace with SVGs or images for real icons */}
          <a href="https://www.facebook.com/evafrica.cars" target="_blank" rel="noopener noreferrer" className="text-[#78B947] text-5xl font-bold">f</a>
          <a href="https://www.instagram.com/ev.africa/" target="_blank" rel="noopener noreferrer" className="text-[#78B947] text-5xl font-bold">i</a>
          <a href="https://www.linkedin.com/company/ev-africa/" target="_blank" rel="noopener noreferrer" className="text-[#78B947] text-5xl font-bold">in</a>
          <a href="https://www.tiktok.com/@ev.africa" target="_blank" rel="noopener noreferrer" className="text-[#78B947] text-5xl font-bold">t</a>
        </div>
      </div>
    </div>
    <hr className="my-4 border-gray-200" />
    <div className="container mx-auto text-center pb-8">
      <p className="text-xl text-black mb-4 tracking-wide">COPYRIGHT © 2025 EV AFRICA · ALL RIGHTS RESERVED · ALL LOGOS & TRADEMARK BELONGS TO THEIR RESPECTIVE OWNERS</p>
      {/* Agency logo placeholder */}
      <div className="flex justify-center">
        <div className="w-48 h-12 flex items-center justify-center">
          {/* Replace with actual agency logo image */}
          <span className="text-2xl font-bold text-gray-700">RO<span className="text-red-600">K</span>KIT</span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer; 