import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from '../../../redux/posts/postSlice';

const Podcasts = () => {
  const podcasts = useSelector((state) => state.posts.data);
  const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchPosts())
    }, [dispatch]);
  return (

      <div>Podcasts</div>

      
    )
}

export default Podcasts;