// "use client"
// import React from "react";
// import { useState } from 'react';
// import Link from 'next/link';

// const Navbar = () => {

//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className='fixed h-fit bg-transparent w-screen p-3 z-50'>
//       <nav className="flex justify-between mx-6">
//         <div className="flex justify-center items-center">
//           <Link href="/" className="logo md:text-4xl text-2xl">Mohan</Link>
//         </div>

//         <div className="flex justify-center items-center">
//           <ul className="flex gap-8 mx-8">
//             <li><Link href="/" className="text-base">Home</Link></li>
//             <li><Link href="/Certifications" className="text-base">Certifications</Link></li>
//             <li><Link href="/Experience" className="text-base">Experience</Link></li>
//             <li><Link href="/Gallery" className="text-base">Gallery</Link></li>
//             <li><Link href="/Blog" className="text-base">Blog</Link></li>
//             <li><Link href="/Contact" className="text-base">Contact</Link></li>
//           </ul>
  
//           <div className="flex mx-6 gap-8">
//             <Link href="https://github.com" target="_blank" className="button text-base border px-4 py-2 rounded-xl">Resume</Link>
//             <Link href="https://github.com" target="_blank" className="button text-base border px-4 py-2 rounded-xl">Github</Link>
//           </div>
//           <button className="text-2xl sm:hidden focus:outline-none"onClick={() => setIsOpen(!isOpen)}aria-label="Toggle Menu">{isOpen ? "✖" : "☰"}</button>
//         </div>
//       </nav>

//       {/* Overlay Menu */}
//       <div className={`fixed top-0 left-0 w-full h-full backdrop-blur-md text-white flex flex-col items-center justify-center space-y-8 text-2xl transition-transform duration-300 z-40 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
//         <button className="absolute top-4 right-4 text-3xl focus:outline-none"onClick={() => setIsOpen(false)}aria-label="Close Menu">✖</button>
    
//           <ul className="flex gap-8 mx-8">
//             <li><Link href="/" className="text-base">Home</Link></li>
//             <li><Link href="/Certifications" className="text-base">Certifications</Link></li>
//             <li><Link href="/Experience" className="text-base">Experience</Link></li>
//             <li><Link href="/Gallery" className="text-base">Gallery</Link></li>
//             <li><Link href="/Blog" className="text-base">Blog</Link></li>
//             <li><Link href="/Contact" className="text-base">Contact</Link></li>
//           </ul>
  
//           <div className="flex mx-6 gap-8">
//             <Link href="https://github.com" target="_blank" className="button text-base border px-4 py-2 rounded-xl">Resume</Link>
//             <Link href="https://github.com" target="_blank" className="button text-base border px-4 py-2 rounded-xl">Github</Link>
//           </div>
//       </div>
//     </div>
//   )
// }

// export default Navbar

"use client";
import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed h-fit bg-transparent w-screen p-3 z-50">
      <nav className="flex justify-between mx-6">
        {/* Logo */}
        <div className="flex justify-center items-center">
          <Link href="/" className="logo md:text-4xl text-2xl">
            Mohan
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden sm:flex justify-center items-center">
          <ul className="flex gap-8 mx-8">
            <li>
              <Link href="/" className="text-base">
                Home
              </Link>
            </li>
            <li>
              <Link href="/Certifications" className="text-base">
                Certifications
              </Link>
            </li>
            <li>
              <Link href="/Experience" className="text-base">
                Experience
              </Link>
            </li>
            <li>
              <Link href="/Gallery" className="text-base">
                Gallery
              </Link>
            </li>
            <li>
              <Link href="/Blog" className="text-base">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/Contact" className="text-base">
                Contact
              </Link>
            </li>
          </ul>

          <div className="flex mx-6 gap-8">
            <Link
              href="https://github.com"
              target="_blank"
              className="button text-base border px-4 py-2 rounded-xl"
            >
              Resume
            </Link>
            <Link
              href="https://github.com"
              target="_blank"
              className="button text-base border px-4 py-2 rounded-xl"
            >
              Github
            </Link>
          </div>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="text-2xl sm:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </nav>

      {/* Overlay Menu for Mobile */}
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full backdrop-blur-md text-white flex flex-col items-center justify-center space-y-8 text-2xl z-40 bg-black bg-opacity-50">
          <button
            className="absolute top-4 right-4 text-3xl focus:outline-none"
            onClick={() => setIsOpen(false)}
            aria-label="Close Menu"
          >
            ✖
          </button>
          <ul className="flex flex-col gap-8 items-center">
            <li>
              <Link href="/" className="text-base" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/Certifications"
                className="text-base"
                onClick={() => setIsOpen(false)}
              >
                Certifications
              </Link>
            </li>
            <li>
              <Link href="/Experience" className="text-base" onClick={() => setIsOpen(false)}>
                Experience
              </Link>
            </li>
            <li>
              <Link href="/Gallery" className="text-base" onClick={() => setIsOpen(false)}>
                Gallery
              </Link>
            </li>
            <li>
              <Link href="/Blog" className="text-base" onClick={() => setIsOpen(false)}>
                Blog
              </Link>
            </li>
            <li>
              <Link href="/Contact" className="text-base" onClick={() => setIsOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>

          <div className="flex flex-col gap-4">
            <Link
              href="https://github.com"
              target="_blank"
              className="button text-base border px-4 py-2 rounded-xl"
            >
              Resume
            </Link>
            <Link
              href="https://github.com"
              target="_blank"
              className="button text-base border px-4 py-2 rounded-xl"
            >
              Github
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
