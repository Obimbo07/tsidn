import React from 'react';
import { useParams } from 'react-router-dom';

const FullPostContent = ({ blogPosts }) => {
  const { id } = useParams();
  console.log(id);
  console.log(blogPosts)
  // Find the blog post with the matching id

  const blogPost = blogPosts.filter((post) => (
    post.id === parseInt(id)
    ))
  console.log(blogPost, "post")
  const currentPost = blogPost[0]
  
  if (!currentPost) {
    return <div>Blog post not found</div>;
  }

  


  return (
    <div className="full-post-content">
      <div >
      <h2>{currentPost.title}</h2>
      <img src={currentPost.image} alt={currentPost.title} className="post-image" />
      <p>{currentPost.content}</p></div>
      {/* <div className="full-post-content">
     {blogPosts.map((blog) => (
      <div keys={blog.id}>
      <h2>{blog.title}</h2>
      <img src={blog.image} alt={blog.title} className="post-image" />
      <p>{blog.content}</p></div>
     ))};
    </div> */}
    </div>
   
  );
};

export default FullPostContent;

