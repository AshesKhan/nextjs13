'use client'
import React from 'react'

export default function Product({price}) {
    console.log(price);
  return (
    <div>
        <button on onClick={()=>alert(price)}>Check price</button>
    </div>
  )
}