"use client"
 
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { MagnifyingGlassIcon } from "@radix-ui/react-icons"
import Search from "./Search"

export default function SheetSide() {
   const SHEET_SIDES = ["left"]

  return (
    <div className="grid grid-cols-2 gap-2">
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild>            
            <MagnifyingGlassIcon  className="hover:font-yellow-300 hover:cursor-pointer w-10 h-auto"/>
          </SheetTrigger>
          <SheetContent className="flex justify-center" side={side}>
              <SheetHeader>
                <Search />
              </SheetHeader>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  )
}
