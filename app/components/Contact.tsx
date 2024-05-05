import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Contact = () => {
  return (
    <section className='flex items-start justify-between my-16 rounded-3xl p-16 border border-slate-400'>
        <div className='flex flex-col gap-4'>
            <div>
                <h2 className='text-4xl font-black text-slate-800'>
                    <span className='text-2xl font-light'>Projects</span> ZubairDev
                </h2>
            </div>

            <div className='flex flex-col justify-between gap-12'>
            <div className=''>
                <div className='flex justify-between items-center my-3'>
                <h2 className='text-4xl font-black text-slate-800'>
                    <span className='text-2xl font-light'>Recent Projects</span>
                </h2>
                <Link href='/projects' className='border-slate-300 border p-4 rounded-2xl'>
                    View More
                </Link>
                </div>
                <div className='mt-5 grid grid-cols-3 gap-6'>
                    <div className='border border-slate-400 rounded-xl p-6 hover:scale-105 hover:mx-1 transition-[0.3s] cursor-pointer'>
                        <Image 
                        width={400}
                        height={250}
                        src="/todo_list.png"
                        className='mx-auto max-h-[250px]'
                        alt="todo_list_project"
                        />
                        <h5 className='text-xl font-semibold mt-3'>
                            Basic Todo List
                        </h5>
                        <p className='max-w-xl'>
                            Made using Next js for front end with state management using react useState.
                        </p>
                    </div>
                    <div className='border border-slate-400 rounded-xl p-6 hover:scale-105 transition-[0.3s] cursor-pointer'>
                        <Image 
                        width={400}
                        height={250}
                        src="/nike_landing_page.png"
                        className='mx-auto rounded-xl max-h-[250px]'
                        alt="nike_landing_page"
                        />
                        <h5 className='text-xl font-semibold mt-3'>
                            Nike Landing Page
                        </h5>
                        <p className='max-w-xl'>
                            Made using React js for front-end development and UI designed using Figma
                        </p>
                    </div>
                    <div className='border border-slate-400 rounded-xl p-6 hover:scale-105 hover:mx-1 transition-[0.3s] cursor-pointer'>
                        <Image 
                        width={400}
                        height={250}
                        src="/landing_page.png"
                        className='mx-auto rounded-xl max-h-[250px]'
                        alt="landing_page"
                        />
                        <h5 className='text-xl font-semibold mt-3'>
                            Dark Landing Page
                        </h5>
                        <p className='max-w-xl'>
                            Made using React js & Tailwind CSS for faster development process.
                        </p>
                    </div>
                </div>
            </div>

            <div>
                <h2 className='text-4xl font-black text-slate-800'>
                    <span className='text-2xl font-light'>Best Projects</span>
                </h2>
                <div className='mt-5 flex flex-wrap items-center gap-4'>
                    <h4 className='border border-slate-400 rounded-full p-4 font-semibold text-slate-700'>Hoobank Website</h4>
                    <h4 className='border border-slate-400 rounded-full p-4 font-semibold text-slate-700'>Portfolio</h4>
                    <h4 className='border border-slate-400 rounded-full p-4 font-semibold text-slate-700'>Nike Website</h4>
                </div>
            </div>
        </div>
        </div>
        
    </section>
  )
}

export default Contact