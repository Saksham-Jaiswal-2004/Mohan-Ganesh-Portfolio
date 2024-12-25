import React from 'react'
import Link from 'next/link';

const page = () => {
  return (
    <div className='pt-28 flex flex-col'>
      <div className='binary-code z-0'></div>

      <div className='z-10'>
        <h1 className='md:text-5xl text-4xl my-4'>Exploring the Digital Frontier</h1>
        <p className='md:text-xl trxt-lg'>Insights, strategies, and stories from the cutting edge of cybersecurity and technology.</p>
      </div>

      <div className='z-10 flex flex-wrap justify-center items-center my-12 py-4'>
        <div className='lg:w-[22%] md:w-[45%] w-[90%] h-[330px] p-4 m-2 bg-[rgba(255,255,255,0.05)] backdrop-blur-sm rounded-xl'>
            <h1 className='text-2xl my-4'>Understanding SQL Injection Attacks</h1>
            <p className='text-sm my-1'>15 Aug, 2023</p>
            <p className='text-base'>An in-depth look at SQL injection vulnerabilities and how to prevent them in your applications.</p>

            <div className='my-6'>
                <Link href="/" className='button py-2 px-4 rounded-xl'>Read More</Link>
            </div>
        </div>

        <div className='lg:w-[22%] md:w-[45%] w-[90%] h-[330px] p-4 m-2 bg-[rgba(255,255,255,0.05)] backdrop-blur-sm rounded-xl'>
            <h1 className='text-2xl my-4'>The Importance of Multifactor Authentication</h1>
            <p className='text-sm my-1'>28 July, 2023</p>
            <p className='text-base'>Exploring the benefits of MFA and its role in enhancing overall security posture.</p>

            <div className='my-6'>
                <Link href="/" className='button py-2 px-4 rounded-xl'>Read More</Link>
            </div>
        </div>

        <div className='lg:w-[22%] md:w-[45%] w-[90%] h-[330px] p-4 m-2 bg-[rgba(255,255,255,0.05)] backdrop-blur-sm rounded-xl'>
            <h1 className='text-2xl my-4'>Cybersecurity Best Practices for Remote Work</h1>
            <p className='text-sm my-1'>10 July, 2023</p>
            <p className='text-base'>Essential tips for maintaining security while working from home or other remote locations.</p>

            <div className='my-6'>
                <Link href="/" className='button py-2 px-4 rounded-xl'>Read More</Link>
            </div>
        </div>

        <div className='lg:w-[22%] md:w-[45%] w-[90%] h-[330px] p-4 m-2 bg-[rgba(255,255,255,0.05)] backdrop-blur-sm rounded-xl'>
            <h1 className='text-2xl my-4'>Understanding SQL Injection Attacks</h1>
            <p className='text-sm my-1'>15 Aug, 2023</p>
            <p className='text-base'>An in-depth look at SQL injection vulnerabilities and how to prevent them in your applications.</p>

            <div className='my-6'>
                <Link href="/" className='button py-2 px-4 rounded-xl'>Read More</Link>
            </div>
        </div>
      </div>

      <div className='z-10 fixed bottom-8 right-12'>
        <Link href='/' className='button text-base p-3 rounded-full'>New Post</Link>
      </div>
    </div>
  )
}

export default page
