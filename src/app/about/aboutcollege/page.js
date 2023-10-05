import Link from "next/link";
import React from "react";

const AboutCollege = () => {
  return (
    <div>
      <h1>About page for AboutCollege</h1>
      <br />
      <Link href="/">Go to Home Page</Link>
      <br />
      <br />
      <Link href="/about">Go to About Page</Link>
    </div>
  );
};

export default AboutCollege;
