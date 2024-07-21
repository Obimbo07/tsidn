// export async function getPressReleases() {
//     'use server'
//     const res = await fetch( `${process.env.REACT_APP_DATABASE_API}/api/selectPressRelease`);
  
//     if (!res.ok) {
//       throw new Error('Failed to fetch podcasts');
//     }
  
//     const result = await res.json();
//     return result.data;
// }
import { pressReleases } from "@/components/Data";

export default async function PressRelease(){
    const pressRelease = pressReleases
    console.log(pressRelease);
    return (
        <>
            <div>
               <div className="p-2">
               {pressRelease.length > 0 ? (
                  pressRelease.map((press) => (
                    <div className="flex" key={press.id}>
                      <h2>{press.post_title}</h2>
                  </div>
                ))) : (
                   <p className="font-bold text-4xl text-center text-red-700">No press releases available.</p>
                )}
        </div>
        </div>
        </>
    )
}