import Link from "next/link";

async function getUsers(id) {
  let data = await fetch(`http://localhost:3001/api/users/${id}`);
  data = await data.json();
  return data.result;
}

export default async function Page({params}) {
  // console.log(params);
  const user = await getUsers(params.userid);
  // console.log("aaaaaaaaaaaaaaaaaaaaaa",user);
  return (
    <>
      <h2>Users Detail</h2>
      <Link href="/users-client">Go to User List</Link>
      <br/>
      <br/>
      <Link href="/">Go to Home Page</Link>
      <br/>
      <br/>
      <h4>ID: {user.id}</h4>
      <h4>Name: {user.name}</h4>
      <h4>Age: {user.age}</h4>
      <h4>Email: {user.email}</h4>
      </>
  );
}
