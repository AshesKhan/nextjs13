////////////////// Video 20 Use Client Component with Server Component //////////////////////////////////

import Link from "next/link";
import Product from "./product";

async function productLists() {
  let data = await fetch("https://dummyjson.com/products");
  data = await data.json();
  return data.products;
}

export default async function ProductList() {
  let products = await productLists();
  return (
    <div>
      <h1>Product List</h1>
      <h4>Use Client Component with Server Component</h4>
      <br />
      <Link href="/">Go to Home Page</Link>

      {products.map((item) => (
        <>
          <h3>Name: {item.title}</h3>
          {/* <Product price={item.price}/> */}
        </>
      ))}
    </div>
  );
}

////////////////// Video 18 Fetch Data in Client Component //////////////////////////////////
// "use client";
// import Link from "next/link";
// import { useEffect, useState } from "react";

// export default function ProductList() {
//   const [product, setProduct] = useState([]);

//   const dataFetching = async () => {
//     let data = await fetch("https://dummyjson.com/products");
//     data = await data.json();
//     setProduct(data.products);
//   };

//   useEffect(() => {
//     dataFetching();
//   }, []);

//   return (
//     <div>
//       <h1>Product List</h1>
//       <h4>Fetch Data in Client Component</h4>
//       <br />
//       <Link href="/">Go to Home Page</Link>
//       {product.map((item) => (
//         <h3>
//           Name: {item.title}, price: {item.price}, Brand: {item.brand}
//         </h3>
//       ))}
//     </div>
//   );
// }

// ////////////////// Video 19 Fetch Data in Server Component;//////////////////////////////////

// import Link from "next/link";

// async function productLists() {
//   let data = await fetch("https://dummyjson.com/products");
//   data = await data.json();
//   return data.products;
// }

// export default async function ProductList() {
//   let products = await productLists();
//   return (
//     <div>
//       <h1>Product List</h1>
//       <h4>Fetch Data in Server Component</h4>
//       <br />
//       <Link href="/">Go to Home Page</Link>

//       {products.map((item) => (
//         <div>
//           <h3>
//             Name: {item.title}, price: {item.price}, Brand: {item.brand}
//           </h3>
//         </div>
//       ))}
//     </div>
//   );
// }
