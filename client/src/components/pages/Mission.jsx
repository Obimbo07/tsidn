import React, { useEffect } from 'react';
import { useSelector, useDispatch } from  'react-redux';
import { fetchPosts } from '../../redux/posts/postSlice';

const Mission = () => {
  const posts = useSelector((state) => state.data);
  const dispatch = useDispatch();
  console.log(posts);

  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch])

  return (
    <div className="mission-container">

      {/* <div>
        {posts.map(post => {
          <h4 key={post.id}>{post.post_title}</h4>
        })}
      </div> */}
      <h2>Our Mission</h2>
      <p>
        At Transposafety International Development Network (TSID-NET), our mission is to empower road transport safety and development in Kenya. We are dedicated to fostering collaboration among key stakeholders at national, regional, and international levels to enhance the safety and development of the transport sector. Our primary goal is to ensure the well-being of communities, facilitate the efficient movement of goods and services, and contribute to the overall growth of Kenya’s economy.
      </p>
      <p>
        TSID-NET achieves its mission through expert knowledge sharing sessions, training programs, and hosting national and regional road transport and safety technical seminars and conferences. Our quarterly magazine serves as a valuable resource for the latest updates and insights in the field. Additionally, we advocate for good governance in transport safety and development, catalyze financing for safety improvement programs, and support grassroots awareness activities within communities.
      </p>
      <p>
        With your support, we aim to lead in the exchange of knowledge regarding safe and sustainable road transport and safety policy and practice, ensuring a safer, more sustainable future for road transport in Kenya.
      </p>
      <h2>Terms of Reference (TOR)</h2>
      <p>
        To learn more about our organization's Terms of Reference (TOR), you can download the PDF document by clicking the link below:
      </p>
      <a href="/path-to-your-pdf-file/TOR.pdf" download="TOR.pdf">Download TOR PDF</a>
    </div>
  );
};

export default Mission;
