import React from 'react'
import Navbar from './Navbar'
import '../styles/directors.css'
import '../styles/BoardOfDirectors.css';


const DirectorJohn = () => {
  return (
    <>
    <Navbar />
    <div className='body'><div className="board-of-directors-container">
          <div className="text-section">
                 <div className="intro">
                  <img src='../../../23rd.jpg ' alt="Company Logo" className="innovation-officer" />
                  <h2>Director for the Innovation, Technology, and Research Division</h2>
                  </div>

                  <div className="content-section">
                  <span>Austin serves as TSDN’s Innovation Officer and Executive Director of the Innovation, Technology, and Research Hub. 
                  In these roles, he oversees various agency mechanisms to promote the application of innovation, technology, and research for greater aid effectiveness within TSDN and the inter-agency,
                   and with our partners both locally and in the international development community, private sector, and civil society. </span>
                     
                    <em>We go down to implement solutions and provide technical result oriented support to the company this impacts growth and development,
                     the focus is to provide data driven decisions that help effectively enhance the company's technological vector improving the agency's flow. -- Austin Obimbo </em>
              </div>
          </div>
      </div> 
    </div>
    </>
  )
}

export default DirectorJohn;