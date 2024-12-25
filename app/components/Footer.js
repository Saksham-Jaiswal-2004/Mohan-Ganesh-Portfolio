import React from 'react'
import Link from 'next/link';
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='h-fit flex flex-wrap gap-3 p-2 md:text-xl text-lg justify-center items-center fixed bottom-0 w-full bg-[#1c1c1c] z-50'>
      <Link href="/"><MdEmail className='rounded-xl hover:text-[#0d6e6e]'/></Link>
      <Link href="/"><FaLinkedin className='rounded-xl hover:text-[#0d6e6e]'/></Link>
      <Link href="/"><FaGithub className='rounded-xl hover:text-[#0d6e6e]'/></Link>
      <Link href="/"><FaFacebookSquare className='rounded-xl hover:text-[#0d6e6e]'/></Link>
      <Link href="/"><FaSquareInstagram className='rounded-xl hover:text-[#0d6e6e]'/></Link>
      <Link href="/"><FaSquareXTwitter className='rounded-xl hover:text-[#0d6e6e]'/></Link>
    </div>
  )
}

export default Footer
