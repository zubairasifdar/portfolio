import React from 'react'
import Link from 'next/link'

import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const About = () => {
  return (
    <section className='flex items-start flex-wrap justify-between gap-y-8 my-16 rounded-3xl p-16 border border-slate-400 text-center md:text-start'>
        <div className='flex flex-col gap-6'>
            <div>
                <h2 className='text-4xl font-black text-slate-800'>
                    <span className='text-2xl font-light'>About</span> ZubairDev
                </h2>
                <p className='max-w-lg mt-4'>
                    I am a Front end Web Developer with many projects completed, I like self-learning and I specialize in building 
                    React JS, Next JS & Tailwind CSS web applications which are responsive of design.
                    <br />
                    <br />
                    With 1 Year of Experience in web development, I love to satisfy my clients with a complete 100% satisfaction rate.
                </p>
            </div>
            <Link href='/' className='bg-slate-800 font-medium rounded-xl text-white px-4 py-3 flex items-center justify-between'>
                    Contact Now <MdOutlineKeyboardArrowRight size={34} />
            </Link>
        </div>
        <div className='flex flex-col justify-between gap-12'>
            <div>
                <h2 className='text-4xl font-black text-slate-800'>
                    <span className='text-2xl font-light'>My Skills</span>
                </h2>
                <div className='mt-3 flex flex-wrap md:justify-start justify-center items-center gap-4'>
                    <h4 className='border-2 border-blue-600 rounded-full p-2 text-blue-600'>HTML</h4>
                    <h4 className='border-2 border-purple-600 rounded-full p-2 text-purple-600'>React JS</h4>
                    <h4 className='border-2 border-yellow-600 rounded-full p-2 text-yellow-600'>Tailwind CSS</h4>
                    <h4 className='border-2 border-green-600 rounded-full p-2 text-green-600'>MongoDB</h4>
                    <h4 className='border-2 border-orange-600 rounded-full p-2 text-orange-600'>CSS3</h4>
                    <h4 className='border-2 border-red-600 rounded-full p-2 text-red-600'>JavaScript</h4>
                </div>
            </div>

            <div>
                <h2 className='text-4xl font-black text-slate-800'>
                    <span className='text-2xl font-light'>My Projects</span>
                </h2>
                <div className='mt-3 flex flex-wrap md:justify-start justify-center items-center gap-4'>
                    <h4 className='border border-slate-400 rounded-full p-4 font-semibold text-slate-700'>Todo List</h4>
                    <h4 className='border border-slate-400 rounded-full p-4 font-semibold text-slate-700'>Mileons Website</h4>
                    <h4 className='border border-slate-400 rounded-full p-4 font-semibold text-slate-700'>Portfolio</h4>
                    <h4 className='border border-slate-400 rounded-full p-4 font-semibold text-slate-700'>Nike Website</h4>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About