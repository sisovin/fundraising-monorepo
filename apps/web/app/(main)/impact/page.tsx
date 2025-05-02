import React from 'react';
import ImpactStories from '../../../components/ImpactStories';

const ImpactPage = () => {
  return (
    <div className="container">
      <h1 className="text-3xl font-bold mb-4">Our Impact</h1>
      <p className="mb-4">
        We are committed to making a difference in the lives of those we serve. Here are some of the stories of the impact we have made.
      </p>
      <ImpactStories />
    </div>
  );
};

export default ImpactPage;
