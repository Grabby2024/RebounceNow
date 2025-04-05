import React from 'react';
import { useParams } from 'react-router-dom';
import NumberConcept from '../components/MathModule/NumberConcept';
import BasicFacts from '../components/MathModule/BasicFacts';
import Geometry from '../components/MathModule/Geometry';
import Measurement from '../components/MathModule/Measurement';
import NumberSense from '../components/MathModule/NumberSense';

const MathModulePage = () => {
  const { module } = useParams();

  const renderModule = () => {
    switch (module) {
      case 'number-concept':
        return <NumberConcept />;
      case 'basic-facts':
        return <BasicFacts />;
      case 'geometry':
        return <Geometry />;
      case 'measurement':
        return <Measurement />;
      case 'number-sense':
        return <NumberSense />;
      default:
        return <div className="text-center text-primary">Module not found</div>;
    }
  };

  return (
    <div className="container mx-auto p-4 bg-background min-h-screen">
      {renderModule()}
    </div>
  );
};

export default MathModulePage;