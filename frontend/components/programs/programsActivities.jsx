'use client'
import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const ProgramsActivitiesItems = [
    {
        id: 1,
        label: 'Community Sensitization Campaigns',
        description: 'Targerting vulnerable road users, pedestrians, cyclists and boda boda riders.'
    },
    {
        id: 2,
        label: "Driver Safety Initiatives",
        description: "Training and certifying drivers, including PSV and HCV operators."
    },
    {
        id: 3,
        label: 'Safe School Zones',
        description: "Convening stakeholders to dicuss and recommend policy improvements."
    },
    {
        id: 4,
        label: 'Research Publications',
        description: "Sharing findings on road safety trends, risks, and interventions."
    },
];

const ProgramsActivities = () => {
    const { ref, inView, entry } = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });

    return (
        <div className="py-12 px-4">
            <h2 className="text-5xl font-bold text-center mb-4">Our <span className='text-blue-600 font-bold'>Programmes</span> and Activities</h2>
            <div ref={ref} className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {ProgramsActivitiesItems.map((item) => (
                    <div
                        key={item.id}
                        className="flex flex-col items-center bg-gray-100 p-6 rounded-xl shadow-md"
                    >
                        {/* <div className="text-3xl font-bold text-blue-600">
                            {inView ? (
                                <CountUp
                                    start={0}
                                    end={item.value}
                                    duration={2}
                                    suffix={item.suffix ? item.suffix : ''}
                                />
                            ) : (
                                0
                            )}
                        </div> */}
                        <div className="mt-4 text-3xl text-center">
                          <h1 className='font-bold text-3xl serif p-2'>{item.label}</h1>
                          
                          <p className=''>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProgramsActivities;