
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800/50 backdrop-blur-sm sticky top-0 z-10 p-4 border-b border-gray-700 shadow-lg">
      <div className="container mx-auto flex items-center gap-3">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 3.104l7.5 1.25m-7.5 1.25v16.372m7.5-17.622l-7.5 1.25m7.5 1.25v15.122m-7.5-16.372l-6.375 1.063m6.375-1.063l6.375-1.063m0 0l6.375 1.063m-6.375-1.063v17.622m6.375-17.622l-6.375 1.063m0 0l-6.375-1.063m12.75 0l6.375 1.063" />
        </svg>
        <h1 className="text-2xl font-bold text-white tracking-wider">
          AI Image <span className="text-indigo-400">Studio</span>
        </h1>
      </div>
    </header>
  );
};

export default Header;
