'use client';
import GetTokenCalls from '@/components/GetTokenCalls'
import React from 'react'
import dynamic from "next/dynamic";

const DynamicGetTokenCalls = dynamic(
  () => import("../../components/GetTokenCalls"),
  { loading: () => <div>Loading...</div> }
);
const page = () => {
  return (
    <div><GetTokenCalls/></div>
    // <div><DynamicGetTokenCalls/></div>
  )
}

export default page