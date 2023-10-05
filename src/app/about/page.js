import Link from "next/link";
import React from "react";

export const metadata = {
  title: "About us",
  description: "About us Page",
};

const About = () => {
  return (
    <div>
      <h1>About Us</h1>
      <Link href="/">Go to Home page</Link>
      <br />
      <br />
      <Link href="/about/aboutstudent">Go to About Student page</Link>
      <br />
      <br />
      <Link href="/about/aboutcollege">Go to About College page</Link>
    </div>
  );
};

export default About;


