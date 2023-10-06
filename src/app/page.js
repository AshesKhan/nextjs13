"use client";
import Link from "next/link";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Profile from "../../public/vercel.svg";

export default function Home() {
  console.log(Profile);
  const router = useRouter();
  const navigate = (name) => {
    router.push(name);
  };

  return (
    // <main className={styles.main}>
    <main>
      <h1>Basic Routing | Make New Page</h1>
      <Link href="/login">Go to Lgin page</Link>
      <br />
      <br />
      <Link href="/about">Go to About Page</Link>
      <br />
      <br />
      <button onClick={() => navigate("/login")}>Go to Login Page</button>
      <br />
      <br />
      <button onClick={() => navigate("/about")}>Go to About Page</button>
      <br />
      <br />
      <button onClick={() => navigate("/productlist")}>
        Go to Product List
      </button>
      <br />
      <br />
      <button onClick={() => navigate("/accordion")}>
        Go To Global Accordion
      </button>
      <br/>
      <br/>
      <button onClick={() => navigate("/loader")}>
        Go To Loader Page
      </button>
      <br/>
      <br/>
      <button onClick={() => navigate("/user-location")}>
        Go To User Location
      </button>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Image src={Profile} width={100} height={100}/>
      {/* <img src={Profile.src}/> */}
    </main>
  );
}

////////////////////video 4/////////////////////////

// "use client";
// import { useState } from "react";
// import styles from "./page.module.css";

// export default function Home() {
//   const [name, setName] = useState("ashes");

//   const apple = () => {
//     setName("khan")
//   };

//   return (
//     <main className={styles.main}>
//       <h1>Event , Function and State --{name}--</h1>
//       <button onClick={() => apple()}>Click Me</button>
//     </main>
//   );
// }

///////////////video 3///////////////////////
// import styles from './page.module.css'

// export default function Home() {
//   return (
//     <main className={styles.main}>
//       <h1>Home Page</h1>
//       <User name="Khattak"/>
//       <User name="shahbaz"/>
//     </main>
//   )
// }

// const User =(props) =>{
//   return(
//     <div>
//       <h1>Ashes Khan {props.name}</h1>
//     </div>
//   )
// }
