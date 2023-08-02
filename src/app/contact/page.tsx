// import Link from 'next/link'
'use client';
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const Contact = () => {
  const router = useRouter();
  return (
    <div>
      <h1>Contact Page </h1>
      <Link href="/">Return Home</Link>
      <Link href="/about">Return Home</Link>
      <h1>Navigation</h1>
      <button onClick={()=>router.push("/about")}>Go To About</button>
      <br/>
      <button onClick={()=>router.push("/")}>Go To Home</button>
    </div>
  )
}

export default Contact;