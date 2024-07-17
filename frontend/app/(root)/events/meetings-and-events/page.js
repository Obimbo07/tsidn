import Image from 'next/image';
export async function getMeetings() {
    'use server'
    const res = await fetch( `${process.env.REACT_APP_DATABASE_API}/api/selectMeeting`);

  
    if (!res.ok) {
      throw new Error('Failed to fetch Meetings');
    }
  
    const result = await res.json();
    console.log(result.data)
    return result.data;
}

export default async function MeetingsAndEvents(){
    const events = await getMeetings()
    return (
        <>
            <div className="p-2">
            <h2 className="underline decoration-blue-700 decoration-width-full decoration-2 underline-offset-4">MEETINGS AND EVENTS</h2>
                {events.length > 0 ? (
                    events.map((event) => (
                    <div className="m-2 flex text-neutral-900 my-4 flex-row" key={event.index} >
                        <span className="text-2xl">
                            <p className="text-blue-600">{event.post_title}</p>
                            <span>{event.start_date} to {event.end_date} </span>
                        </span>
                        <Image className="h-auto w-52" src={'/LogoFinal.svg'} alt="tsdn logo svg" />
                    </div>
                   ))
                ) : (
                    <p className="font-bold text-4xl text-center text-red-700">Events not available</p>
                )}
            </div>
        </>
    )
}