'use client';
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const About = () => {
  const router  = useRouter();
  const navigate = (name:string)=>{
    router.push(name);
  }
  return (
    <div>About
      <Link href="/">Return Home</Link>
<button onClick={()=>navigate("/")}>Home</button>
    </div>
    
  )
}

export default About