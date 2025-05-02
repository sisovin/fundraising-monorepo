import { useState } from 'react';

const ErrorPage = () => {
  const [errorMessage, setErrorMessage] = useState('');

  const handleRetry = async () => {
    const response = await fetch('/api/retry', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    setErrorMessage(data.message);
  };

  return (
    <div className="container">
      <h1 className="text-3xl font-bold mb-4">Error Recovery System</h1>
      <div className="mb-4">
        <p className="text-red-500">{errorMessage}</p>
      </div>
      <button
        onClick={handleRetry}
        className="btn"
      >
        Retry
      </button>
    </div>
  );
};

export default ErrorPage;
