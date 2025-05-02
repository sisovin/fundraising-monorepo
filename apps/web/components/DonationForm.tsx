import React, { useState } from 'react';

const DonationForm = () => {
  const [amount, setAmount] = useState('');
  const [frequency, setFrequency] = useState('one-time');
  const [urgency, setUrgency] = useState('');

  const handleFrequencyChange = (event) => {
    setFrequency(event.target.value);
  };

  const handleUrgencyChange = (event) => {
    setUrgency(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Integrate payment processing here
    console.log('Donation submitted:', { amount, frequency, urgency });
  };

  return (
    <form onSubmit={handleSubmit} className="donation-form">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="amount">
          Donation Amount
        </label>
        <input
          id="amount"
          type="text"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="frequency">
          Donation Frequency
        </label>
        <select
          id="frequency"
          value={frequency}
          onChange={handleFrequencyChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="one-time">One-time</option>
          <option value="monthly">Monthly</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="urgency">
          Urgency Indicator
        </label>
        <input
          id="urgency"
          type="text"
          value={urgency}
          onChange={handleUrgencyChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <button
        type="submit"
        className="btn"
      >
        Donate
      </button>
    </form>
  );
};

export default DonationForm;
