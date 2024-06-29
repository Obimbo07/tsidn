import React from 'react';
import Navbar from '../Navbar';
import Footer from '../../Footer';

const Pricing = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-100 flex flex-col items-center py-12">
        <h2 className="text-3xl font-bold mb-8">Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
            <h3 className="text-2xl font-bold mb-4">Monthly Subscription</h3>
            <p className="text-5xl font-extrabold text-blue-600 mb-4">$10<span className="text-lg font-medium">/month</span></p>
            <ul className="mb-6">
              <li className="text-gray-700">Access to all features</li>
              <li className="text-gray-700">Free updates</li>
              <li className="text-gray-700">24/7 support</li>
            </ul>
            <button className="!bg-blue-600 text-black px-4 py-2 !rounded-lg hover:!bg-blue-700 transition">Subscribe</button>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
            <h3 className="text-2xl font-bold mb-4">Yearly Subscription</h3>
            <p className="text-5xl font-extrabold text-blue-600 mb-4">$100<span className="text-lg font-medium">/year</span></p>
            <ul className="mb-6">
              <li className="text-gray-700">Access to all features</li>
              <li className="text-gray-700">Free updates</li>
              <li className="text-gray-700">24/7 support</li>
            </ul>
            <button className="!bg-blue-600 text-black px-4 py-2 rounded-lg hover:!bg-blue-700 transition">Subscribe</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Pricing;
