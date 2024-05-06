'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import PackageModal from '../components/PackageModal';

const About = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState({
    price: '',
    description: ''
  });

  const handleRequestPackage = (price: string, description: string) => {
    setSelectedPackage({ price, description });
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <section className='flex items-start justify-between mt-32 p-16'>
      <div className='flex flex-col gap-6'>
        <div>
          <h2 className='text-4xl font-black text-slate-800'>
            <span className='text-2xl font-light'>Services</span> ZubairDev
          </h2>
          <div className='grid grid-cols-3 gap-6 text-center mt-16'>
            <PackageCard
              title="Landing Page Website"
              description="Highly suitable for small businesses with 3 pages, responsive design and 3 revisions."
              price="$11.99"
              onClick={() => handleRequestPackage('$11.99', 'Highly suitable for small businesses with 3 pages, responsive design and 3 revisions.')}
            />
            <PackageCard
              title="Business Website"
              description="Best for medium-sized businesses with 5 pages, contact form & unlimited revision."
              price="$19.99"
              onClick={() => handleRequestPackage('$19.99', 'Best for medium-sized businesses with 5 pages, contact form & unlimited revision.')}
            />
            <PackageCard
              title="Exclusive Package"
              description="Highly suitable for small businesses with 7 pages, responsive design, API integration, GitHub setup & unlimited revisions."
              price="$40"
              onClick={() => handleRequestPackage('$40', 'Highly suitable for small businesses with 7 pages, responsive design, API integration, GitHub setup & unlimited revisions.')}
            />
          </div>
        </div>
      </div>
      {modalOpen && (
        <PackageModal
          onClose={handleCloseModal}
          price={selectedPackage.price}
          description={selectedPackage.description}
        />
      )}
    </section>
  );
};

const PackageCard: React.FC<{
  title: string;
  description: string;
  price: string;
  onClick: () => void;
}> = ({ title, description, price, onClick }) => {
  return (
    <div className='max-w-fit min-h-[300px] border border-slate-300 rounded-2xl p-16'>
      <h3 className='text-2xl font-semibold'>{title}</h3>
      <p className='max-w-lg mt-3'>{description}</p>
      <span className='text-green-600 font-medium text-md'>with hosting</span>
      <h2 className='text-2xl mt-3 mb-8'>
        as low as <span className='font-semibold text-3xl'>{price}</span>
      </h2>
      <button
        onClick={onClick}
        className='text-xl bg-slate-800 text-white rounded-xl p-4 cursor-pointer'
      >
        Request Package
      </button>
    </div>
  );
};

export default About;
