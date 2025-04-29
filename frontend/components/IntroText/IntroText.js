import React from 'react'

const IntroText = () => {
  return (
    <div className='text-center bg-inherit text-xl'>
    <h2 className='p-6 md:p-0 font-bold text-5xl'>Who are we</h2>
    <div className='md:mx-10 md:my-10 md:flex md:flex-col gap-4 md:flex-wrap md:py-20 text-center items-center bg-inherit'>
        <p className='p-4 md:px-4 text-wrap md:w-1/2 bg-inherit text-center text-3xl italic '>
          We focus on Promoting Safe, Sustainable, inclusive and Profitable Transport in Kenya and in the Region through targeted interventions and collaborative efforts
        </p>
        <button className='p-8 bg-yellow-500 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 text-2xl font-bold hover:scale-110 hover:bg-gray-900 hover:text-white rounded-full shadow-xl' type='button'>Our Themes</button>
    </div>
    </div>
  )
}

export default IntroText;