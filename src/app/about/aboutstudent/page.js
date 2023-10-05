import Link from "next/link";
import React from "react";

const AboutStudent = () => {
  return (
    <div>
      <h1>About page for Student</h1>
      <br />
      <Link href="/">Go to Home Page</Link>
      <br />
      <br />
      <Link href="/about">Go to About Page</Link>
    </div>
  );
};

export default AboutStudent;
