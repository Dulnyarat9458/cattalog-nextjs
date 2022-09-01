import React from "react";
import Link from "next/link";
export default function navber() {
  return ( 
    <nav className="py-4 sticky top-0 left-0 bg-layout-body z-40 drop-shadow-xl text-white ">
      <div className="container mx-auto flex justify-center">
        <div className="font-bold  text-center text-2xl"><Link href="/">CATTALOG</Link></div>
      </div>
    </nav>
  );
}
