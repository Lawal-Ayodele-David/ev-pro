import React from 'react';

const MainContent = () => (
  <main className="container mx-auto p-4">
    {/* Hero Section Placeholder */}
    <div className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-md mb-12" style={{ minHeight: '350px' }}>
      {/* Placeholder for hero image */}
      <div className="flex-1 flex justify-center items-center p-6">
        {/* Replace this div with your image later */}
        <div className="w-72 h-56 bg-gray-200 flex items-center justify-center rounded-lg">
          <span className="text-gray-500">Main Hero Image Here</span>
        </div>
      </div>
      <div className="flex-1 p-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">City Blitz 4-Seater</h1>
        <p className="text-lg text-gray-700">The City Blitz 4-seater electric passenger vehicle is powered by a maintenance-free lithium battery, providing hours of travel time with only a 4 or 6-hour charge.</p>
      </div>
    </div>

    {/* Economical Section */}
    <section className="flex flex-col md:flex-row items-center bg-[#f5f7fa] rounded-lg shadow mb-10">
      <div className="flex-1 flex justify-center items-center p-6">
        <img src="/wp-content/uploads/2023/04/EV-Africa-All-Electric-Vehicles-Economical-1.webp" alt="Economical Vehicles" className="w-72 h-56 object-cover rounded-lg" />
      </div>
      <div className="flex-1 p-6">
        <h2 className="text-2xl font-bold mb-2 text-gray-800">Economical</h2>
        <p className="text-gray-700">EV Africa offers affordable environmentally friendly electric cars and scooters...</p>
      </div>
    </section>

    {/* Durable and Reliable Section */}
    <section className="flex flex-col md:flex-row items-center bg-[#e6f0f7] rounded-lg shadow mb-10">
      <div className="flex-1 flex justify-center items-center p-6">
        <img src="/wp-content/uploads/2023/04/EV-Africa-All-Electric-Vehicles-Durable-and-Reliable-1.webp" alt="Durable Vehicles" className="w-72 h-56 object-cover rounded-lg" />
      </div>
      <div className="flex-1 p-6">
        <h2 className="text-2xl font-bold mb-2 text-gray-800">Durable and Reliable</h2>
        <p className="text-gray-700">EV Africa offers all-electric vehicles that are durable and reliable...</p>
      </div>
    </section>

    {/* Performance Section */}
    <section className="flex flex-col md:flex-row items-center bg-[#f5f7fa] rounded-lg shadow mb-10">
      <div className="flex-1 flex justify-center items-center p-6">
        {/* Placeholder for performance image */}
        <div className="w-72 h-56 bg-gray-200 flex items-center justify-center rounded-lg">
          <span className="text-gray-500">Performance Image</span>
        </div>
      </div>
      <div className="flex-1 p-6">
        <h2 className="text-2xl font-bold mb-2 text-gray-800">Performance</h2>
        <p className="text-gray-700">Our electric vehicles boast a range of 150km with a top speed of 80km/h...</p>
      </div>
    </section>

    {/* Features Section */}
    <section className="flex flex-col md:flex-row items-center bg-[#e6f0f7] rounded-lg shadow mb-10">
      <div className="flex-1 flex justify-center items-center p-6">
        {/* Placeholder for features image */}
        <div className="w-72 h-56 bg-gray-200 flex items-center justify-center rounded-lg">
          <span className="text-gray-500">Features Image</span>
        </div>
      </div>
      <div className="flex-1 p-6">
        <h2 className="text-2xl font-bold mb-2 text-gray-800">Features</h2>
        <p className="text-gray-700">All EV Africa vehicles are designed for durability, safety, and reliability...</p>
      </div>
    </section>
  </main>
);

export default MainContent; 