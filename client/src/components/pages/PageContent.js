import React from 'react';

const FullPostContent = ({ post }) => {
  if (!post) {
    return null;
  }

  const { title, content, image, ...otherDetails } = post; // Extract required data

  return (
    <div className="full-post-content">
      <h2>{title}</h2>
      {image && <img src={image} alt={title} className="post-image" />}
      <div className="post-content" dangerouslySetInnerHTML={{ __html: content }} />
      {Object.keys(otherDetails).length > 0 && ( // Display additional details if available
        <ul className="post-details">
          {Object.entries(otherDetails).map(([key, value]) => (
            <li key={key}>
              <strong>{key}:</strong> {value}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FullPostContent;
