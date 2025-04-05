import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-primary text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">ReBouncenow</h1>
        <div className="space-x-4">
          <a href="/" className="hover:text-secondary">Home</a>
          <a href="/math" className="hover:text-secondary">Math Module</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;