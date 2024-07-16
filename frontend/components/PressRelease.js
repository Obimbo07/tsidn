'use client';

import { pressReleases } from "./Data";

const PressRelease = () => {
  return (
    <>
    
    <div className="m-4 divide-y-2 shadow-2xl shadow-inner ">
      <h2 className="underline decoration-blue-700 decoration-width-full decoration-2 underline-offset-4">PRESS RELEASES</h2>
      {pressReleases.map((release) => (
        <div className=" bg-gradient-to-tr text-yellow-500 from-neutral-900 to-neutral-600   p-2" key={release.id}>
          <h2 className='font-bold text-2xl '>{release.title}</h2>
          <p>{release.content}</p>
          <p>{release.Date}</p>
        </div>
      ))}
    </div>
    </>
  )
}

export default PressRelease;