import { useState } from 'react';

const LandingPage = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [generatedContent, setGeneratedContent] = useState('');

  const handleGenerate = async () => {
    const response = await fetch('/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, description }),
    });

    const data = await response.json();
    setGeneratedContent(data.content);
  };

  return (
    <div className="container">
      <h1 className="text-3xl font-bold mb-4">Landing Page Generator</h1>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
          Title
        </label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
          Description
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <button
        onClick={handleGenerate}
        className="btn"
      >
        Generate
      </button>
      {generatedContent && (
        <div className="mt-4">
          <h2 className="text-2xl font-bold mb-2">Generated Content</h2>
          <p>{generatedContent}</p>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
