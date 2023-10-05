// "use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const Login = () => {
  // const router = useRouter();
  const navigate = (page) => {
    router.push("/login" + page);
  };

  return (
    <div>
      <h1 className="heading">Login Page</h1>
      <Link href="/">Go to Home Page</Link>
      <br />
      <br />
      {/* <button onClick={() => navigate("/loginstudent")}>
        Go To Student Login Page
      </button>
      <br />
      <br />
      <button onClick={() => navigate("/loginteacher")}>
        Go To Teacher Login Page
      </button> */}
    </div>
  );
};

export default Login;

// export function generatedMetadata({params}){
//   return{
//     title:"Login Page",
//     description:"Login Page Description",
//   }
// }
export const metadata = {
  title: "Login Page",
  description: "About us Page",
};
