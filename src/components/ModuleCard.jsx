import React from 'react';

const ModuleCard = ({ title, description, onClick }) => {
  return (
    <div
      className="bg-background shadow-md rounded-lg overflow-hidden p-4 mb-4"
      onClick={onClick}
    >
      <h3 className="text-xl font-bold text-primary">{title}</h3>
      <p className="text-secondary mt-2">{description}</p>
      <button
        className="mt-4 px-4 py-2 bg-secondary text-white rounded hover:bg-primary"
      >
        Start
      </button>
    </div>
  );
};

export default ModuleCard;