import React from 'react';
import IntoVideo from '../Banners/IntoVideo';

const subjects = [
  "Safety for all road users",
  "Sustainability",
  "Innovation",
  "Collaboration",
  "Accountability",
  "Inclusivity",
];


// Duplicate the subjects array to create a seamless loop
const doubledSubjects = [...subjects, ...subjects];

const TextSlider = () => {
  return (
    <div className="p-8 w-full overflow-hidden">
      <h1 className='font-bold text-center text-4xl'>Our Core Values</h1>
      <div className="w-full h-0.5 bg-green-600 mb-2"></div>
      <div className="overflow-hidden whitespace-nowrap">
        <div
          className="inline-flex animate-slide"
          style={{
            animationDuration: '30s',
          }}
        >
          {doubledSubjects.map((subject, index) => (
            <span
              key={index}
              className="inline-block mx-4 text-green-800 font-serif text-5xl hover:underline"
            >
              {subject}
            </span>
          ))}
        </div>
      </div>
      <IntoVideo />
    </div>
  );
};

export default TextSlider;

// const TextSlider = () => {
//   return (
//     <div className="p-4 text-center">
//       <h1 className='text-4xl font-bold'>Our Core Values</h1>
//       <div className="w-full h-0.5 bg-green-600 mb-2"></div>
//       <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-green-800 font-serif text-4xl">
//         {subjects.map((subject, index) => (
//           <span key={index} className="inline-block p-2 hover:underline">
//             {subject}
//           </span>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TextSlider;