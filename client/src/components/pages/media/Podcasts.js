import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from '../../../redux/posts/postSlice';

const Podcasts = () => {
  const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchPosts())
    }, [dispatch]);
  return (

      <div>Podcasts</div>

      
    )
}

export default Podcasts;