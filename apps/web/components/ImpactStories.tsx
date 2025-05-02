import React from 'react';

const ImpactStories = () => {
  const stories = [
    {
      id: 1,
      title: 'Story 1',
      content: 'This is the content of story 1.',
    },
    {
      id: 2,
      title: 'Story 2',
      content: 'This is the content of story 2.',
    },
    {
      id: 3,
      title: 'Story 3',
      content: 'This is the content of story 3.',
    },
  ];

  return (
    <div>
      {stories.map((story) => (
        <div key={story.id} className="mb-4">
          <h2 className="text-2xl font-bold">{story.title}</h2>
          <p>{story.content}</p>
        </div>
      ))}
    </div>
  );
};

export default ImpactStories;
