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
      <h2>{currentPost.post_title}</h2>
      <img
          src={URL.createObjectURL(new Blob([new Uint8Array(currentPost.post_image.data)],{type: 'image/jpeg', }))}
          alt={currentPost.post_title}
          className="post-image"
        />
      <p>{currentPost.post_content}</p></div>
    </div>
   
  );
};

export default FullPostContent;

