'use client'
import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const impactItems = [
    {
        id: 1,
        label: 'Road Safety Awareness Campaigns',
        value: 50,
        suffix: '+',
    },
    {
        id: 2,
        label: "Supported review Kenya's Traffic Act strengthening road safety regulations",
        value: 1,
        suffix: '',

    },
    {
        id: 3,
        label: 'Drivers and Enforcement Officers Trained',
        value: 5000,
        suffix: '+',
    },
    {
        id: 4,
        label: 'Facilitated Dialogue & Collaboration among Regional and International organizations',
        value: 1,
    },
];

const Impact = () => {
    const { ref, inView, entry } = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });

    return (
        <div className="py-12 px-4">
            <h2 className="text-5xl font-bold text-center mb-4">Our Impact</h2>
            <p className="text-center text-3xl mb-8">Since our <span className='text-blue-600 font-bold'>establishment</span>, TSDN has:</p>
            <div ref={ref} className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {impactItems.map((item) => (
                    <div
                        key={item.id}
                        className="flex flex-col items-center bg-gray-100 p-6 rounded-xl shadow-md"
                    >
                        <div className="text-3xl font-bold text-blue-600">
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
                        </div>
                        <div className="mt-4 text-3xl text-center">{item.label}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Impact;