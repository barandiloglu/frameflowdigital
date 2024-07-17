import React, { useState } from 'react';
import transition from "../transition";

const ContactUs: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic
    console.log(email);
  };

  return (
    <div className='flex flex-col w-full items-center min-h-screen mx-auto bg-secondary'>
        <div className="bg-zinc-800 flex flex-col text-gray-200 font-mono p-4 rounded-lg xl:w-1/2 sm:w-full mx-auto mt-20 shadow-lg">
            <div className="flex flex-row justify-between items-center bg-">
                <div className='flex flex-row space-x-2'>
                    <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                    <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                    <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                </div>
                <span>contact@frameflow.ca</span>
                <span className="text-2xl">🔗</span>
            </div>
            <hr className="my-4 border-gray-700" />
            <p>Hey there! We're excited to link</p>
            <p className='mt-2'>-----------------------------------</p>
            <form onSubmit={handleSubmit} className="mt-2">
                <label htmlFor="email" className="block">
                    To start, could you give us <span className="text-blue-400">your email?</span>
                </label>
                <div className="flex items-center mt-2">
                    <div className='flex flex-row'>
                        <span className="mr-2 text-green-500">➜ ~</span>
                        <span className="mr-2 text-[#9CA3AF]">Enter email:</span>
                    </div>
                    <input
                        id="email"
                        type="email"    
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-zinc-800 text-gray-200 border-none focus:ring-2 focus:ring-zinc-800 focus:outline-none rounded px-2 py-1 flex-1"
                        placeholder=""
                    />
                </div>
            </form>
        </div>
    </div>

  );
};

export default transition(ContactUs);
