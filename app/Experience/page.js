import React from 'react'

const page = () => {

  const events = [
    {
      year: "Jan, 2024 - Present",
      title: "Defcon Jalandhar",
      subtitle: "Lead",
      description: "Released a significant update with new features and improvements.",
      logo: "💻",
      cardLogo: "🖥️",
    },
    {
      year: "Oct, 2022 - Dec, 2024",
      title: "AWS Cloud Club at LPU",
      subtitle: "Operations Lead",
      description: "Officially launched the application to the public with great reception.",
      logo: "🎓",
      cardLogo: "📘",
    },
    {
      year: "Sep, 2022 - Aug, 2024",
      title: "Google Developer Student Club - LPU",
      subtitle: "Ex-Cyber Security Lead",
      description: "Successfully released the beta version to a select group of users.",
      logo: "💻",
      cardLogo: "🖥️",
    },
    {
      year: "Oct, 2021 - Jan, 2024",
      title: "NOOB 4rMY",
      subtitle: "Co-Lead",
      description: "Initiated the development of our groundbreaking application.",
      logo: "🎓",
      cardLogo: "📘",
    },
    {
      year: "Ddec, 2024 - Present",
      title: "FireCompass",
      subtitle: "Security Analyst Intern",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, reprehenderit.",
      logo: "💻",
      cardLogo: "🖥️",
    },
  ];

  return (
    <div className='h-fit pt-28'>
      <div className='binary-code z-0'></div>

      <div className='z-10 flex flex-col justify-center items-center'>
        <h1 className='md:text-5xl text-4xl my-4'>My Cybersecurity Journey</h1>
        <p className='md:text-xl trxt-lg'>Empowering Digital Safety with Passion and Precision</p>
      </div>

      <div className="relative max-w-6xl mx-auto my-28 z-10">
        
        {/* Vertical Line */}
        <div className="absolute left-1/2 top-0 h-full w-1 bg-neutral-400 transform -translate-x-1/2"></div>

        {/* Events */}
        {events.map((event, index) => {
          const isLeft = index % 2 === 0;
          return (
          
          <div key={index} className={`flex items-center justify-center mb-12 relative ${index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"}`}>

            {/* Logo on Timeline */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 flex items-center justify-center bg-[#4a9d9c] hover:bg-[#0d6e6e] hover:scale-110 text-white rounded-full text-2xl shadow-lg" style={{ top: `${(index+1) * 2}rem` }}>{event.logo}</div>

            {/* Card */}
            <div className={`relative backdrop-blur-md bg-white bg-opacity-5 text-left p-6 my-6 rounded-lg shadow-lg max-flex:max-w-md sm:max-w-lg hover:scale-105 ${index % 2 === 0 ? "sm:ml-4" : "sm:mr-4"}`}>

              {/* Logo in Card */}
              <div className="absolute top-2 right-2 w-10 h-10 flex items-center justify-center bg-gray-200 rounded-full text-xl">{event.cardLogo}</div>

              <div className="text-md text-neutral-400">{event.year}</div>
              <div className="text-lg font-bold text-purple-100">{event.title}</div>
              <div className="text-base mt-2 text-purple-50">{event.subtitle}</div>
              <p className="mt-2 text-neutral-400">{event.description}</p>
            </div>
          </div>
        );
      })}
      </div>
    </div>
  )
}

export default page
