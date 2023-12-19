import React from 'react';
import { useParams } from 'react-router-dom';

const FullPostContent = ({ blogPosts }) => {
  const { id } = useParams();

  // Find the blog post with the matching id
  const blogPost = blogPosts.find((post) => post.id.toString() === id);
  console.log(blogPost);

  if (!blogPost) {
    return <div>Blog post not found</div>;
  }

  return (
    <div className="full-post-content">
      <h2>{blogPost.title}</h2>
      <img src={blogPost.image} alt={blogPost.title} className="post-image" />
      <p>{blogPost.content}</p>
    </div>
  );
};

export default FullPostContent;
