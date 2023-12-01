"use Client"
import Link from "next/link";
import style from "./style.css";

export default function Page(){
    return(
        <div>
            <Link href="/">Go to Home Page</Link>
            <div>
            <h1>
                Add Product
            </h1>
            <input type="text" placeholder="Enter Product Name" className="input"/>
            <input type="text" placeholder="Enter Product Price" className="input"/>
            <input type="text" placeholder="Enter Product Company" className="input"/>
            <input type="text" placeholder="Enter Product Color" className="input"/>
            <input type="text" placeholder="Enter Product Category" className="input"/>
            <button className="btn">Add Product</button>
            </div>
        </div>
    )
}