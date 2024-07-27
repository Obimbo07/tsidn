
import { pressReleases } from "./Data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const PressRelease = () => {
  return (
    <>
    <div className="m-4 shadow-2xl shadow-inner ">
      <h2 className="underline decoration-blue-700 decoration-width-full decoration-2 underline-offset-4">PRESS RELEASES</h2>
      {pressReleases.map((release) => (
        <Accordion key={release.id} type="single" collapsible className="height-40 text-3xl">
          <AccordionItem value="item-`${release.id}`" className=" w-full">
            <AccordionTrigger className="flex justify-between">
               <h5 className="text-2xl">{release.post_title}</h5>
               <span className="text-blue-600">{release.Date}</span>
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