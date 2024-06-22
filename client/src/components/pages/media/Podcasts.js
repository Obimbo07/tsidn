import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPodcasts } from '../../../redux/posts/postSlice';
import '../../styles/podcasts.css';
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
      dispatch(fetchPodcasts())
    }, [dispatch]);
  return (
      <> 
        <div className='podcasts-streams'>
            <h5>Listen to our Podcasts streams on all social platforms
              <br/>
               Follow our channels and get the listen to our latest podcasts
             </h5>
            <ul className="podcast-link">
            <a className="text-black" href="https://twitter.com/tsdn">
                 <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a className="text-black" href="https://web.facebook.com/profile.php?id=61558983545764">
                 <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a className="text-black" href="https://instagram.com/tsdn_network">
                 <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a className="text-black" href="https://flickr.com">
                 <FontAwesomeIcon icon={faFlickr} />
            </a>
            <a className="text-black" href="https://on.soundcloud.com/V5dSLU2boZpzKjkD8">
                 <FontAwesomeIcon icon={faSoundcloud} />
            </a>
            <a className="text-black" href="https://www.youtube.com/@tsidn">
                 <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a className="text-black" href="https://whatsapp.com/channel/0029VaYwqsb6mYPIHhofLG37">
                 <FontAwesomeIcon icon={faWhatsapp} />
            </a>
          </ul>
        </div>      
         <div>
          {podcasts.map((podcast) => (
            <div className="podcasts-container" key={podcast.id}>
             <h2>{podcast.post_title}</h2>
             <div className="podlow-content">
               <div className="podcasts-image">
                <img src={URL.createObjectURL(new Blob([new Uint8Array(podcast.post_image.data)], {type: 'image/jpg'}))}
                    alt={podcast.image_name}
                  />
               </div>
               <div className='podcasts-content'>
                 <p>{podcast.post_tag}</p>
                 
                 <p>{podcast.date}</p>
                </div>
              </div>
            </div>
          ))}
         </div>

      </>
   

      
    )
}

export default Podcasts;
