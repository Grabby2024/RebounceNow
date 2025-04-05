import React from 'react';
import ModuleCard from '../components/ModuleCard';

const Home = () => {
  const modules = [
    { title: 'Number Concept', description: 'Learn the basics of numbers.' },
    { title: 'Basic Facts', description: 'Master addition, subtraction, etc.' },
    { title: 'Geometry', description: 'Explore shapes and their properties.' },
    { title: 'Measurement', description: 'Understand units and measurements.' },
    { title: 'Number Sense', description: 'Develop intuition for numbers.' },
  ];

  return (
    <div className="container mx-auto p-4 bg-background min-h-screen">
      <h1 className="text-3xl font-bold text-center text-primary mb-8">
        Welcome to ReBouncenow
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {modules.map((module, index) => (
          <ModuleCard key={index} {...module} />
        ))}
      </div>
    </div>
  );
};

export default Home;