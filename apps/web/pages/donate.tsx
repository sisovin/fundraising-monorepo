import { useState } from 'react';

const DonationPage = () => {
  const [amount, setAmount] = useState('');
  const [optimizationResult, setOptimizationResult] = useState('');

  const handleOptimize = async () => {
    const response = await fetch('/api/optimize', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount }),
    });

    const data = await response.json();
    setOptimizationResult(data.result);
  };

  return (
    <div className="container">
      <h1 className="text-3xl font-bold mb-4">Donation Optimization Analyzer</h1>
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
      <button
        onClick={handleOptimize}
        className="btn"
      >
        Optimize
      </button>
      {optimizationResult && (
        <div className="mt-4">
          <h2 className="text-2xl font-bold mb-2">Optimization Result</h2>
          <p>{optimizationResult}</p>
        </div>
      )}
    </div>
  );
};

export default DonationPage;
