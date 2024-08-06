import Link from 'next/link'
import React from 'react'

const About = () => {
  return (
    <div className="bg-gray-200" id='about'>
        <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        About Me
      </h1>
      <p className="mb-5 leading-relaxed">
      I&apos;m an aspiring web developer with a passion for entrepreneurship and a solid intermediate education. I specialize in creating dynamic and user centric web solutions using a range of technologies, including HTML, CSS, JavaScript, and frameworks like Tailwind & Next.js.
      </p>
      <p className="mb-5 leading-relaxed">
      My entrepreneurial spirit drives me to combine technical skills with innovative thinking to deliver impactful digital experiences. I&apos;m excited to connect and explore new opportunities to make a meaningful impact in the tech world.
      </p>
      <div className="flex justify-center">
      <Link
      href="/Assects/MyCV/myCv.pdf.pdf"
      className="py-2.5 px-6 me-2 mb-1 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-800"
      download
    >
      Download CV
    </Link>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default About