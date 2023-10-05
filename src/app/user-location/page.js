'use client'
import Link from "next/link";
import Script from "next/script";
import React from "react";

const UserLocation = () => {
  return (
    <div>
      <h1>Get User's Geo Location By Java Script</h1>
      <br/>
      <br/>
      <Link href="/">Go to Home Page</Link>
      <br/>
      <br/>
      <Script 
      src="/location.js"
      onLoad={()=>{
        console.log("File Loaded");
      }}
      />
    </div>
  );
};

export default UserLocation;
