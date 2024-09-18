import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {

  useEffect(() => {
    // Scroll to the top of the page when the component is mounted
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="pt-20 max-w-4xl mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900">About Us</h1>
      </header>

      <section className="mb-12 flex flex-col lg:flex-row items-center relative">
        <div className="lg:w-1/2 lg:pr-8 relative">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">About Our Restaurant</h2>
          <p className="text-gray-700">
            Our restaurant is dedicated to providing the best dining experience. We focus on high-quality ingredients, exceptional service, and creating a welcoming atmosphere for all our guests. Whether you're here for a casual meal or a special celebration, our mission is to ensure you have a memorable experience.
          </p>
          
        </div>
        <div className="lg:w-1/2 lg:pl-8 mt-8 lg:mt-0 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-200 via-purple-300 to-purple-400 rounded-lg opacity-60 -z-10" style={{ clipPath: 'polygon(0 0, 100% 0, 80% 100%, 20% 100%)' }}></div>
          <div className="relative p-8 bg-purple-100 rounded-lg shadow-lg">
            <div className="w-24 h-24 bg-pink-300 absolute top-0 right-0 rounded-full opacity-70"></div>
            <div className="w-32 h-32 bg-yellow-300 absolute bottom-0 left-0 rounded-full opacity-50"></div>
          </div>
        </div>
      </section>

      <section className="mb-12 flex flex-col lg:flex-row items-center relative">
        <div className="lg:w-1/2 lg:pr-8 relative">
          
          <div className="relative p-8 bg-blue-100 rounded-lg shadow-lg">
            <div className="w-32 h-32 bg-yellow-200 absolute bottom-0 left-0 rounded-full opacity-60"></div>
            <div className="w-24 h-24 bg-purple-400 absolute top-0 right-0 rounded-full opacity-70"></div>
          </div>
        </div>
        <div className="lg:w-1/2 lg:pl-8 mt-8 lg:mt-0">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Choose Us</h2>
          <p className="text-gray-700">
            We stand out from the competition with our commitment to excellence. Our menu features a diverse range of dishes made from fresh, locally sourced ingredients. Our team is passionate about food and dedicated to making sure every visit is enjoyable. Choose us for our unparalleled quality, warm service, and inviting atmosphere.
          </p>
        </div>
      </section>

      <section className="relative">
        <div className="mb-12 flex flex-col lg:flex-row items-center relative">
          <div className="lg:w-1/2 lg:pr-8 relative">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Staff</h2>
            <p className="text-gray-700">
              Meet our talented team who work tirelessly to bring you the best dining experience. From our chefs who craft each dish with care to our front-of-house staff who ensure your comfort, every member of our team plays a crucial role in our success. Learn more about their roles and the expertise they bring to our restaurant by visiting us .
            </p>
          </div>
          <div className="lg:w-1/2 lg:pl-8 mt-8 lg:mt-0 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-yellow-200 via-purple-400 to-pink-200 rounded-lg opacity-60 -z-10" style={{ clipPath: 'circle(120% at 80% 80%)' }}></div>
            <div className="relative p-8 bg-blue-300 rounded-lg shadow-lg">
              <div className="w-40 h-40 bg-pink-300 absolute bottom-0 right-0 rounded-full opacity-50"></div>
              <div className="w-32 h-32 bg-yellow-300 absolute top-0 left-0 rounded-full opacity-70"></div>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default AboutUs;
