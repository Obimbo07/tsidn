"use client"

import { useParams } from 'next/navigation';
import { directors } from '@/components/Data';
import Image from 'next/image';


const DirectorPage = () => {
  const params = useParams();
  const id = params.director;
 

  const directorData = directors.find(d => d.id == id);


  // // If no director found, you can show a 404 or some fallback UI
  if (!directorData) {
    return <p>Director not found</p>;
  }

  return (
    <div>
      <h1>{directorData.title}</h1>
      <h2>{directorData.name}</h2>
      <Image src={directorData.imgPath} alt={directorData.name} width={150} height={150} />
      <p>{directorData.intro}</p>
      <a href={directorData.linkedin}>LinkedIn</a>
      <a href={directorData.twitter}>Twitter</a>
      <a href={directorData.email}>Email</a>
    </div>
  );
};

export default DirectorPage;
