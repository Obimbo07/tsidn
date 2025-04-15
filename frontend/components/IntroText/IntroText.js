import React from 'react'

const IntroText = () => {
  return (
    <div className='p-4 text-center bg-inherit text-xl'>
        <h2 className='p-4 font-bold text-5xl'>What we do</h2>
        <p className='p-2 bg-inherit text-center text-3xl italic '>
          Promoting Safe, Sustainable, inclusive and Profitable Transport in Kenya and in the Region through targeted interventions and collaborative efforts
        </p>
        <button className='p-8 bg-yellow-500 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 text-2xl font-bold hover:scale-110 hover:bg-gray-900 hover:text-white rounded-full shadow-xl' type='button'>Our Themes</button>
    </div>
  )
}

export default IntroText;