"use client"

import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { useSession, signOut } from "next-auth/react";

  
const Themes = () => {
  const { data: session, status } = useSession();
  console.log(session);

  if (status === "loading") {
    return <p>Loading....</p>
  }

  if(!session) {
    return <p>You are not signed in yet.</p>
  }
  return (
    <>
    <div>
      <h1>Welcome, {session.user.name || "N/A" }</h1>
      <p>Your role: {session.user.role || "N/A"}</p>
      <button onClick={() => signOut()}>Sign Out</button>
    </div>
    <Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card Description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card Content</p>
  </CardContent>
  <CardFooter>
    <p>Card Footer</p>
  </CardFooter>
</Card>
</>
  )
}

export default Themes