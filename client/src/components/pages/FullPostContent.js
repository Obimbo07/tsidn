import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/FullPostContent.css';

const FullPostContent = ({ blogPosts }) => {
  const { id } = useParams();

  const blogPost = blogPosts.filter((post) => (
    post.id === parseInt(id)
    ))
  console.log(blogPost, "post")
  const currentPost = blogPost[0]
  
  if (!currentPost) {
    return <div className='err-content'>Blog Content Doesn't Exist</div>;
  }

  


  return (
    <div className="full-post-content">
      <div className="blog-content" >
      <h2>{currentPost.title}</h2>
      <img src={currentPost.image} alt={currentPost.title} className="post-image" />
      <p>{currentPost.content}</p></div>
    </div>
   
  );
};

export default FullPostContent;

