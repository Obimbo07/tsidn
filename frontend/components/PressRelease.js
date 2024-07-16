'use client';

import { pressReleases } from "./Data";

const PressRelease = () => {
  return (
    <>
    <h2 className="font-mono underline underline-offset-8 decoration-sky-500 text-3xl mr-8 text-extrabold">Press release</h2>
    <div className="m-4 divide-y-2 shadow-2xl shadow-inner ">
      
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