'use client'
import React from 'react';

interface PackageModalProps {
  onClose: () => void;
  price: string;
  description: string;
}

const PackageModal: React.FC<PackageModalProps> = ({ onClose, price, description }) => {

    const sendPackage = ({price, description}: {price: string, description: string}) => {
        alert(price)
    }

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto flex justify-center items-center bg-gray-500 bg-opacity-75">
      <div className="relative bg-white p-8 rounded-lg max-w-md">
        <button
          onClick={onClose}
          className="absolute top-0 right-0 m-4 text-gray-500 hover:text-gray-700"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <h2 className="text-2xl font-semibold">{price}</h2>
        <p className="mt-4">{description}</p>
        <button
        onClick={() => sendPackage({ price, description })}
        className='text-lg mt-6 bg-slate-800 text-white rounded-xl p-3 cursor-pointer'
      >
        Request Package
      </button>
      </div>
    </div>
  );
};

export default PackageModal;
