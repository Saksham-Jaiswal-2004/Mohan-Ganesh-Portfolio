import React from 'react'
import Link from 'next/link';

const page = () => {
  return (
    <div className='flex flex-col pt-28'>
      <div className='binary-code z-0'></div>

      <div className='z-10'>
        <h1 className='md:text-5xl text-3xl'>Credentials that Speak for Themselves</h1>
      </div>

      <div className='flex flex-wrap flex-col mx-4 my-10 justify-center items-center z-10'>
        {/* Certificate 1 */}
        <div className='backdrop-blur-sm bg-[rgba(255,255,255,0.05)] flex flex-wrap justify-center items-center md:m-6 my-2 md:p-8 p-4 rounded-xl'>
          <div className='flex flex-col justify-center items-center md:p-4 p-2 h-[453px] md:w-1/2 w-full'>
              <img src="https://mohan-ganesh-babu-pothala.vercel.app/certification/OSCP%20BADGE.png" alt=""/>
              <div className='w-full flex justify-start'><Link href="/" className='button md:px-4 md:py-2 px-2 py-1 rounded-xl'>Show Credential</Link></div>
          </div>

          <div className='md:w-1/2 w-full'>
            <h1 className='text-2xl font-bold my-4 sec'>Offensive Security Certified Professional (OSCP)</h1>
            <p className='md:text-sm text-xs my-2'>Issued By: ABCDEFGH</p>
            <p className='md:text-sm text-xs my-2'>Date: DD/MM/YYYY</p>
            <p className='md:text-base text-sm my-2 md:w-[90%] w-full'>Description: The OSCP certification is a highly respected credential in the cybersecurity industry. It validates the skills of ethical hackers and penetration testers in identifying and exploiting vulnerabilities in real-world environments. The certification demonstrates practical knowledge in areas such as network penetration testing, vulnerability assessment, and exploiting weaknesses in operating systems, web applications, and networks. To earn the OSCP, candidates must complete a challenging 24-hour exam, involving the exploitation of various machines within a controlled environment, which tests their ability to think critically and solve complex security problems under time pressure.</p>
          </div>
        </div>
        
        {/* Certificate 2 */}
        <div className='backdrop-blur-sm bg-[rgba(255,255,255,0.05)] flex flex-wrap justify-center items-center md:m-6 my-2 md:p-8 p-4 rounded-xl md:flex-row-reverse flex-row'>
          <div className='flex flex-col justify-center items-center md:p-4 p-2 h-[453px] md:w-1/2 w-full'>
              <img src="https://mohan-ganesh-babu-pothala.vercel.app/certification/PJPT%20BADGE.png" alt=""/>
              <div className='w-full flex justify-start'><Link href="/" className='button md:px-4 md:py-2 px-2 py-1 rounded-xl'>Show Credential</Link></div>
          </div>

          <div className='md:w-1/2 w-full'>
            <h1 className='text-2xl font-bold my-4 sec'>Practical Junior Penetration Tester (PJPT)</h1>
            <p className='md:text-sm text-xs my-2'>Issued By: ABCDEFGH</p>
            <p className='md:text-sm text-xs my-2'>Date: DD/MM/YYYY</p>
            <p className='md:text-base text-sm my-2 md:w-[90%] w-full'>Description: The OSCP certification is a highly respected credential in the cybersecurity industry. It validates the skills of ethical hackers and penetration testers in identifying and exploiting vulnerabilities in real-world environments. The certification demonstrates practical knowledge in areas such as network penetration testing, vulnerability assessment, and exploiting weaknesses in operating systems, web applications, and networks. To earn the OSCP, candidates must complete a challenging 24-hour exam, involving the exploitation of various machines within a controlled environment, which tests their ability to think critically and solve complex security problems under time pressure.</p>
          </div>
        </div>
        
        {/* Certificate 3 */}
        <div className='backdrop-blur-sm bg-[rgba(255,255,255,0.05)] flex flex-wrap justify-center items-center md:m-6 my-2 md:p-8 p-4 rounded-xl'>
          <div className='flex flex-col justify-center items-center md:p-4 p-2 h-[453px] md:w-1/2 w-full'>
              <img src="https://mohan-ganesh-babu-pothala.vercel.app/certification/comptia_network-removebg-preview.png" alt=""/>
              <div className='w-full flex justify-start'><Link href="/" className='button md:px-4 md:py-2 px-2 py-1 rounded-xl'>Show Credential</Link></div>
          </div>

          <div className='md:w-1/2 w-full'>
            <h1 className='text-2xl font-bold my-4 sec'>CompTIA Network+</h1>
            <p className='md:text-sm text-xs my-2'>Issued By: ABCDEFGH</p>
            <p className='md:text-sm text-xs my-2'>Date: DD/MM/YYYY</p>
            <p className='md:text-base text-sm my-2 md:w-[90%] w-full'>Description: The OSCP certification is a highly respected credential in the cybersecurity industry. It validates the skills of ethical hackers and penetration testers in identifying and exploiting vulnerabilities in real-world environments. The certification demonstrates practical knowledge in areas such as network penetration testing, vulnerability assessment, and exploiting weaknesses in operating systems, web applications, and networks. To earn the OSCP, candidates must complete a challenging 24-hour exam, involving the exploitation of various machines within a controlled environment, which tests their ability to think critically and solve complex security problems under time pressure.</p>
          </div>
        </div>

        {/* Certificate 4 */}
        <div className='backdrop-blur-sm bg-[rgba(255,255,255,0.05)] flex flex-wrap justify-center items-center md:m-6 my-2 md:p-8 p-4 rounded-xl md:flex-row-reverse flex-row'>
          <div className='flex flex-col justify-center items-center md:p-4 p-2 h-[453px] md:w-1/2 w-full'>
              <img src="https://mohan-ganesh-babu-pothala.vercel.app/certification/Comptia_Security__1_-removebg-preview.png" alt=""/>
              <div className='w-full flex justify-start'><Link href="/" className='button md:px-4 md:py-2 px-2 py-1 rounded-xl'>Show Credential</Link></div>
          </div>

          <div className='md:w-1/2 w-full'>
            <h1 className='text-2xl font-bold my-4 sec'>CompTIA Security+</h1>
            <p className='md:text-sm text-xs my-2'>Issued By: ABCDEFGH</p>
            <p className='md:text-sm text-xs my-2'>Date: DD/MM/YYYY</p>
            <p className='md:text-base text-sm my-2 md:w-[90%] w-full'>Description: The OSCP certification is a highly respected credential in the cybersecurity industry. It validates the skills of ethical hackers and penetration testers in identifying and exploiting vulnerabilities in real-world environments. The certification demonstrates practical knowledge in areas such as network penetration testing, vulnerability assessment, and exploiting weaknesses in operating systems, web applications, and networks. To earn the OSCP, candidates must complete a challenging 24-hour exam, involving the exploitation of various machines within a controlled environment, which tests their ability to think critically and solve complex security problems under time pressure.</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default page
