'use client'
import { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log({ name, email, message });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-4">
      <div className="mb-4">
        <label htmlFor="name" className="block mb-2">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full border border-gray-300 rounded-2xl outline-none px-4 py-2"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block mb-2">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full border border-gray-300 rounded-2xl outline-none px-4 py-2"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block mb-2">Message:</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className="w-full border border-gray-300 rounded-2xl outline-none px-4 py-2"
        />
      </div>
      <button type="submit" className="bg-slate-900 text-white px-8 py-2 rounded hover:bg-slate-800">Submit</button>
    </form>
  );
};

export default ContactForm;
