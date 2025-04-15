import Image from 'next/image';
import React from 'react'

const MissionCard = () => {
  return (
    <div className='flex flex-col justify-center w-50 p-4 text-center m-4 bg-gray-900 text-xl text-white rounded-xl shadow-lg'>
       <div className="relative w-full h-56">
               <Image 
                 src="/worldmap.png" 
                 alt="vision" 
                 layout="fill" 
                 objectFit="cover" 
                 className="object-cover" 
               />
             </div>
        <h2 className='p-4 font-bold text-5xl'>Our Mission</h2>
        <p className='p-2 bg-inherit text-center text-3xl italic '>
           To promote safe, sustainable, inclusive and profitable transport 
          through strategic collaboration, knowledge sharing, and advocacy in Kenya and the African region
        </p>
    </div>
  )
}

export default MissionCard;