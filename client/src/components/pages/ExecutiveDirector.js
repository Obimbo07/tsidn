import React from 'react';
import '../styles/ExecutiveDirector.css';

const ExecutiveDirector = () => {
  return (
    <div className="executive-director-container">
      <div className="intro-ed">
      <img  alt="Executive Director" src="/ED.jpg" className="executive-director-image" />
      <span>Executive Director</span>
      </div>

      <div className="executive-director-text">
        <p>
          The Executive director helps through the organization to transform road transport safety and development in Kenya.I am deeply committed to our mission, 
           which revolves around fostering collaboration among key stakeholders at national, regional, and 
           international levels. Our primary aim is to enhance the safety and development of the transport sector, 
           ensuring the well-being of communities, the efficient movement of goods and services, 
           and the overall growth of Kenya’s economy.
        </p>
        <p>
          TSID-NET is dedicated to improving road transport safety through various means.
           We provide expert knowledge sharing sessions, conduct training programs, 
           and host national and regional road transport and safety technical seminars and conferences. 
           Our quarterly magazine serves as a valuable resource for the latest updates and insights in the field.
            We also work tirelessly to advocate for good governance in transport safety and development, 
            catalyze financing for safety improvement programs, and support grassroots awareness activities within communities. 
             Our vision is to lead in the exchange of knowledge regarding safe and sustainable road transport
              and safety policy and practice. 
              With your continued support, we can achieve these goals and ensure a safer, more sustainable future for road transport in Kenya.
        </p>
        <p>
          Twitter | Linkedin | Email
        </p>
      </div>
    </div>
  );
};

export default ExecutiveDirector;
