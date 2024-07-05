'use client';

import { pressReleases } from "./Data";

const PressRelease = () => {
  return (
    <>
   
    <div className="">
      <h2 className="font-mono underline text-3xl text-extrabold">Press release</h2>
      {pressReleases.map((release) => (
        <div key={release.id}>
          <p>{release.title}</p>
          <p>{release.content}</p>
          <p>{release.Date}</p>
        </div>
      ))}
    </div>
    </>
  )
}

export default PressRelease;