
import React from 'react';

const ShoppingRack = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
            Your Digital Wardrobe
          </h2>
          <p className="max-w-[85%] text-lg text-gray-600 mb-8">
            Discover a new way to organize and share your fashion items with our virtual shopping rack system.
          </p>
          <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-lg shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1487252665478-49b61b47f302?auto=format&fit=crop&q=80" 
              alt="Clothing Rack" 
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <div className="text-white text-center px-6">
                <h3 className="text-2xl font-bold mb-2">Ready to Start Sharing</h3>
                <p className="text-lg mb-6">Upload your clothes and begin your sustainable fashion journey</p>
                <button className="px-6 py-3 text-white font-medium bg-emerald-600 hover:bg-emerald-700 rounded-md transition-colors">
                  Browse Collection
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShoppingRack;
