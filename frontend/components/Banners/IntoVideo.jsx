import React from 'react'

const IntoVideo = () => {
  return (
    <div>
        <div className="featured-videos">
            <h3>FEATURED VIDEOS</h3>
            <div className="w-full video-container">
              <iframe
                width="354"
                height="315"
                src="https://www.youtube.com/embed/T--aotYDL0g?si=GPC24-McY4EBB1uJ"
                title="YouTube Video 2"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
    </div>
  )
}

export default IntoVideo