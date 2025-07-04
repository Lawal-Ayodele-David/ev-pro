import React from 'react';

const Header = () => (
  <header className="bg-white">
    {/* Top bar: logo, social icons, phone */}
    <div className="container mx-auto flex flex-col md:flex-row justify-between items-center py-4 px-4 md:px-20">
      <div className="flex items-center">
        {/* Logo */}
        <div className="flex flex-col items-center">
          {/* Replace with actual logo image if available */}
          <span className="text-5xl font-bold" style={{ color: '#78B947', fontFamily: 'sans-serif' }}>eva</span>
          <span className="text-lg font-medium" style={{ color: '#78B947', fontFamily: 'sans-serif' }}>ev.africa</span>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 mt-4 md:mt-0">
        {/* Social Icons */}
        <div className="flex space-x-3">
          {/* Replace with SVGs or images for real icons */}
          <a href="https://www.facebook.com/evafrica.cars" target="_blank" rel="noopener noreferrer" className="text-[#78B947] text-2xl">f</a>
          <a href="https://www.instagram.com/ev.africa/" target="_blank" rel="noopener noreferrer" className="text-[#78B947] text-2xl">i</a>
          <a href="https://www.linkedin.com/company/ev-africa/" target="_blank" rel="noopener noreferrer" className="text-[#78B947] text-2xl">in</a>
          <a href="https://www.tiktok.com/@ev.africa" target="_blank" rel="noopener noreferrer" className="text-[#78B947] text-2xl">t</a>
        </div>
        {/* Phone Number */}
        <a href="tel:+27310017011" className="text-[#78B947] text-lg font-semibold">031 001 7011</a>
      </div>
    </div>
    {/* Nav bar */}
    <nav className="w-full bg-[#002642]" aria-label="Main navigation" role="navigation">
      <div className="container mx-auto px-4 md:px-20">
        <ul className="flex justify-between items-center py-3 gap-x-4 md:gap-x-8">
          <li><a href="https://ev.africa/" className="text-white font-semibold text-lg transition-colors hover:border-b-2 hover:border-[#78B947] pb-1">Home</a></li>
          <li><a href="#" className="text-white font-semibold text-lg transition-colors hover:border-b-2 hover:border-[#78B947] pb-1">Models</a></li>
          <li><a href="https://ev.africa/latest-news/" className="text-white font-semibold text-lg transition-colors hover:border-b-2 hover:border-[#78B947] pb-1">News</a></li>
          <li><a href="https://ev.africa/faqs/" className="text-white font-semibold text-lg transition-colors hover:border-b-2 hover:border-[#78B947] pb-1">FAQs</a></li>
          <li><a href="https://ev.africa/contact-us/" className="text-white font-semibold text-lg transition-colors hover:border-b-2 hover:border-[#78B947] pb-1">Contact Us</a></li>
          <li><a href="https://ev.africa/find-a-dealer/" className="text-white font-semibold text-lg transition-colors hover:border-b-2 hover:border-[#78B947] pb-1">Find a dealer</a></li>
        </ul>
      </div>
    </nav>
  </header>
);

export default Header;
