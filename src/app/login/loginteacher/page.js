import Link from "next/link";
import React from "react";

const LoginTeacher = () => {
  return (
    <div>
      <h1 className="heading">Login Teacher</h1>
      <br />
      <Link href="/">Go to Home Page</Link>
      <br />
      <br />
      <Link href="/login">Go to Login Page</Link>
    </div>
  );
};

export default LoginTeacher;
