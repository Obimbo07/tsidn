import Image from 'next/image';
import React from 'react';

const missionVision = [
    {
        title: 'Our Mission',
        text: 'To promote safe, sustainable, inclusive and profitable transport through strategic collaboration, knowledge sharing, and advocacy in Kenya and the African region',
        imgUrl: '/worldmap.png',
    },
    {
        title: 'Our Vision',
        text: 'A leading world class transport systems organization that ensures safe mobility for communities, goods, and services, contributing to economic growth, environmental sustainability, and social equity.',
        imgUrl: '/trafficLights.jpg',
    },
];

const Card = ({ item }) => {
    return (
        <div className="flex flex-col justify-center md:w-1/2 p-4 text-center m-4 text-xl text-white rounded-xl shadow-lg transition transform hover:scale-105">
            <div className="relative w-full h-56">
                <Image
                    src={item.imgUrl}
                    alt={item.title}
                    layout="fill"
                    objectFit="cover"
                    className="object-cover"
                />
            </div>
            <div className="p-6 text-center text-black">
                <h2 className="p-4 font-bold text-4xl">{item.title}</h2>
                <p className="p-2 text-center text-2xl italic">
                    {item.text}
                </p>
            </div>
        </div>
    );
};

const MissionVisionCards = () => {
    return (
        <div className="flex flex-col md:flex-row gap-4 justify-center">
            {missionVision.map((item, index) => (
                <Card key={index} item={item} />
            ))}
        </div>
    );
};

export default MissionVisionCards;