import Image from 'next/image'
import React from 'react'

const Partners = () => {
  return (
    <>
     <h2 className='text-5xl font-bold text-center mb-4'>Our Partners</h2>
      <div className='flex justify-center gap-8 p-4'>
        <Image src='/vital.jpg' width={100} height={100} />
        <Image src='/ntsa.png' width={100} height={100} />
      </div>
    </>
  )
}

export default Partners;