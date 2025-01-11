'use client'

import { useSession, signOut } from "next-auth/react"
import { useRouter } from "next/navigation";
import Image from "next/image";

const Dashboard = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return <p>Loading....</p>
  }

  if(!session){
   router.push("/signin");
   return null;
  }

  return (
    <>
    <div className="pt-2">
      <section className="mx-4 space-y-4">
        <div className="flex justify-evenly">
          <span className="flex flex-col">
            <span >Role: {session.user.role || 'Contact Support'}</span>
            <span>Subscription: {session.user.subscription || 'Contact Support'}</span>
          </span>
          <div>
            <Image src={session.user.image} />
            IMAGE
          </div>
        </div>
        <div className="flex w-full gap-8 justify-center">
          <button className="bg-blue-500 rounded-3xl p-2 ">Edit Profile</button>
          <button className="bg-red-300 rounded-3xl p-2" onClick={() => signOut()}>Sign out</button> 
        </div>
      </section>
      <section className="p-4 flex flex-col justify-center md:flex-row gap-4 md:gap-12">
        <div className="shadow-3xl p-4">
          <h1>Welcome, {session.user.name || "N/A" }</h1>
          <p>Your role: {session.user.role || "N/A"}</p>
          <button onClick={() => signOut()}>Sign Out</button>
        </div>
        <div>
        <div className="bg-blue-500">
          <h1>Your About, {session.user.name || "N/A" }</h1>
        </div>
        </div>
      </section>
    </div>
    </>
  )
}

export default Dashboard