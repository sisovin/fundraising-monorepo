import React from 'react';
import DonationForm from '../../../components/DonationForm';

const DonationPage = () => {
  return (
    <div className="container">
      <h1 className="text-3xl font-bold mb-4">Make a Donation</h1>
      <DonationForm />
    </div>
  );
};

export default DonationPage;
