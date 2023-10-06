import Link from "next/link";
import React from "react";

async function userList() {
  let data = await fetch("https://dummyjson.com/users");
  data = await data.json();
  return
}

const Loader = () => {
  return (
    <div>
      <h1>Loader</h1>
      <Link href="/">Go to Home Page</Link>
      <br />
      <h4>User Name List</h4>
      <br />
      <br />
    </div>
  );
};

export default Loader;
