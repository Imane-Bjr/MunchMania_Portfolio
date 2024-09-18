import React from 'react';

const DishModal = ({ dish, isOpen, onClose }) => {
  if (!isOpen || !dish) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 backdrop-blur-sm z-30"
      style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
    >
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative z-40">
        <button
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
          onClick={onClose}
        >
          ✕
        </button>
        <h3 className="text-2xl font-semibold text-center mb-4">{dish.name}</h3>
        <img
          src={dish.image}
          alt={dish.name}
          className="w-auto h-48 mx-auto object-cover rounded-lg mb-4"
        />
        <p className="text-gray-700 mb-4 text-center">{dish.recipe}</p>
        <p className="text-xl font-semibold text-center">
          Price: <span className="text-red-500">${dish.price}</span>
        </p>
      </div>
    </div>
  );
};

export default DishModal;
