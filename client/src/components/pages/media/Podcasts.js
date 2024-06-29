import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPodcasts } from '../../../redux/posts/postSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faFlickr,
  faSoundcloud,
  faYoutube,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';

const Podcasts = () => {
  const dispatch = useDispatch();
  const podcasts = useSelector((state) => state.posts.podcasts);
  console.log(podcasts);

  useEffect(() => {
    dispatch(fetchPodcasts());
  }, [dispatch]);

  return (
    <>
      <div className="bg-yellow-500 p-6">
        <h5 className="text-lg font-bold text-center mb-4">
          Listen to our Podcasts streams on all social platforms
          <br />
          Follow our channels and get to listen to our latest podcasts
        </h5>
        <ul className="flex justify-center space-x-4">
          <a className="text-black text-2xl" href="https://twitter.com/tsdn">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            className="text-black text-2xl"
            href="https://web.facebook.com/profile.php?id=61558983545764"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a className="text-black text-2xl" href="https://instagram.com/tsdn_network">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a className="text-black text-2xl" href="https://flickr.com">
            <FontAwesomeIcon icon={faFlickr} />
          </a>
          <a className="text-black text-2xl" href="https://on.soundcloud.com/V5dSLU2boZpzKjkD8">
            <FontAwesomeIcon icon={faSoundcloud} />
          </a>
          <a className="text-black text-2xl" href="https://www.youtube.com/@tsidn">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
          <a className="text-black text-2xl" href="https://whatsapp.com/channel/0029VaYwqsb6mYPIHhofLG37">
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
        </ul>
      </div>
      <div className="p-6">
        {podcasts.map((podcast) => (
          <div className="bg-white shadow-lg rounded-lg p-4 mb-6" key={podcast.id}>
            <h2 className="text-xl font-bold mb-2">{podcast.post_title}</h2>
            <div className="flex">
              <div className="w-1/3">
                <img
                  src={URL.createObjectURL(
                    new Blob([new Uint8Array(podcast.post_image.data)], { type: 'image/jpg' })
                  )}
                  alt={podcast.image_name}
                  className="w-full h-auto rounded"
                />
              </div>
              <div className="w-2/3 pl-4">
                <p className="text-gray-700">{podcast.post_tag}</p>
                <p className="text-gray-500">{podcast.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Podcasts;
