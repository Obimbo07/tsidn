'use server'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { pricingdata } from "@/components/Data";

async function PricingComponent() {
  return (
    <>
    <div>
        <p className="p-2 font-extrabold text-3xl text-center">Pricing Component</p>
    </div>
    <div className="flex flex-col md:flex-row p-4 gap-4" >
        {pricingdata.map((pricing) => (
            <Card className="bg-blue-800 text-white flex flex-col w-full md:w-1/3 md:h-vh text-center justify-center" key={pricing.id}>
            <CardHeader>
            <CardTitle className="font-extrabold text-center">{pricing.tier}</CardTitle>
            <CardDescription>{pricing.price}</CardDescription>
            </CardHeader>
            <CardContent>
            <p>{pricing.timeline}</p>
            </CardContent>
            <CardFooter className="flex flex-col">
              <p>{pricing.discount}</p>
              <button className="bg-yellow-500 p-2 rounded-full hover:bg-yellow-700 font-bold">Subscribe</button>
            </CardFooter>
            </Card>
        ))}
    
    </div>
    </>
  )
}

export default PricingComponent;

