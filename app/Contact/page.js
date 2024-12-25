import React from 'react'

const page = () => {
  return (
    <div className='pt-20'>
      <div className='binary-code z-0'></div>

      <div className='z-10'>
        <h1 className='md:text-5xl text-4xl my-4'>Your Gateway to Cybersecurity Expertise</h1>
        <p className='md:text-xl trxt-lg'>Get in touch for collaboration, consultation, or to explore my journey in cybersecurity.</p>
      </div>

      <div className='z-10 w-full flex justify-center items-center my-8'>
        <form className="space-y-4 md:w-[45%] w-[90%] p-8 md:py-12 md:px-16 text-left flex flex-col justify-center rounded-xl bg-white/5 backdrop-blur-md">
          {/* Name Field */}
          <div className='my-2'>
            <label className="block text-lg font-medium text-white" htmlFor="name">Your Name</label>
            <input type="text" name="user_name" id="name" className="focus:outline-none border-none mt-1 w-full p-3 border rounded-lg bg-gray-100/5" placeholder="Enter your name" required/>
          </div>

          {/* Email Field */}
          <div className='my-2'>
            <label className="block text-lg font-medium text-white" htmlFor="email">Your Email</label>
            <input type="email" name="user_email" id="email" className="focus:outline-none border-none mt-1 w-full p-3 border rounded-lg bg-gray-100/5" placeholder="Enter your email" required/>
          </div>

          {/* Query Section */}
          <div className='my-2'>
            <label className="block text-lg font-medium text-white" htmlFor="query">Your Query</label>
            <textarea name="message" id="query" className="focus:outline-none border-none mt-1 w-full p-3 border rounded-lg bg-gray-100/5" placeholder="Write your query here" rows="4" required></textarea>
          </div>

          {/* Submit Button */}
          <div className="my-6 text-center flex justify-start">
            <button type="submit" value="send" className="button text-white py-2 px-4 rounded-md shadow-lg">Send Query</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default page
