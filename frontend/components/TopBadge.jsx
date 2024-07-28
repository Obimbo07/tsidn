import { Badge } from "@/components/ui/badge"

const TopBadge = () => {
    // Create a new Date object for the current date and time
    const currentDate = new Date();

    // Get the day of the week (0-6, where 0 is Sunday and 6 is Saturday)
    const dayOfWeek = currentDate.getDay();

    // Get the day of the month (1-31)
    const dayOfMonth = currentDate.getDate();

    // Get the full year (e.g., 2024)
    const year = currentDate.getFullYear();

    // Create an array of weekday names for easy reference
    const weekdayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    // Get the name of the current day of the week
    const dayName = weekdayNames[dayOfWeek];

    // Display the date, day, and year
    console.log(`Today is `);
  return (
    <Badge className='w-full m-2 text-xl p-2 text-center flex justify-between'>
        <h5 className="">This content consist of company adverts and promotions</h5>
        <h5>{dayName}, {dayOfMonth}, {year}</h5>
    </Badge>
  )
}

export default TopBadge