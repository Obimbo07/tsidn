import React from 'react'


const engangingData = [
  {
    engagement: "Partner with us to implement impactful road safety initiatives."
  },
  {
    engagement: "Support our programs through funding, expertise, or resources."
  },
  {
    engagement: "Collaborate in policy advocacy and research efforts"
  }

]
const Engage = () => {
  return (
    <div>
    {engangingData.map((data) => {
       <p>{data.engagement}</p>
    })}
    </div>
  )
}

export default Engage