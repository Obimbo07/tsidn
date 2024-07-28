
import Image from "next/image";
import { pressReleases } from "./Data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import '../component_css/image.css'

const PressRelease = () => {
  return (
    <>
    <div className="m-4 h-fit rounded-xl shadow-6xl skii shadow-gray-500/50 p-4">
      <h2 className="underline decoration-blue-700 decoration-width-full decoration-2 underline-offset-4">PRESS RELEASES</h2>
      {pressReleases.map((release) => (
        <Accordion key={release.id} type="single" collapsible className="mb-4 text-3xl">
          <AccordionItem value="item-`${release.id}`" className=" w-full">
            <AccordionTrigger className="flex justify-between">
               <div className="flex">
                 <Image src="/trafficLights.jpg" className="rounded-full" priority width={100} height={100} />
               </div>
                <div className='flex-col'>
                  <h5 className="text-2xl">{release.post_title}</h5>
                  <span className="text-xl text-blue-600">{release.Date}</span>
                </div>
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-2xl">{release.content}</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
    </div>
    </>
  )
}

export default PressRelease;