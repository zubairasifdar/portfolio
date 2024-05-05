import React from 'react'
import Link from 'next/link'

import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const About = () => {
  return (
    <section className='flex items-start justify-between mt-32 p-16'>
        <div className='flex flex-col gap-6'>
            <div>
                <h2 className='text-4xl font-black text-slate-800'>
                    <span className='text-2xl font-light'>Services</span> ZubairDev
                </h2>
                <div className='grid grid-cols-3 gap-6 text-center mt-16'>
                    <div className='max-w-fit min-h-[300px] border border-slate-300 rounded-2xl p-16'>
                        <h3 className='text-2xl font-semibold'>
                            Landing Page Development
                        </h3>
                        <p className='max-w-lg mt-3'>
                            Highly suitable for small businesses with 3 pages, responsive design and 3 revisions.
                        </p>
                        <span className='text-green-600 font-medium text-md'>with hosting</span>
                        <h2 className='text-2xl mt-3'>
                            as low as <span className='font-semibold text-3xl'>$11.99</span>
                        </h2>
                        <Link href='/' className='text-2xl border border-slate-300 p-4'>
                            Request Package
                        </Link>
                    </div>
                    <div className='max-w-fit min-h-[300px] border border-slate-300 rounded-2xl p-16'>
                        <h3 className='text-2xl font-semibold'>
                            Business Website Development
                        </h3>
                        <p className='max-w-lg mt-3'>
                            Professional website with 5 pages, contact form & responsive design.
                        </p>
                        <span className='text-green-600 font-medium text-md'>with hosting</span>
                        <h2 className='text-2xl mt-2'>
                            Fixed at <span className='font-semibold text-3xl'>$24.99</span>
                        </h2>
                        <Link href='/' className='text-2xl border border-slate-300 p-4'>
                            Request Package
                        </Link>
                    </div>
                    <div className='max-w-fit min-h-[300px] border border-slate-300 rounded-2xl p-16'>
                        <h3 className='text-2xl font-semibold'>
                            Dynamic Website Development
                        </h3>
                        <p className='max-w-lg mt-3'>
                            Professional website with unlimited revisions, 7 pages, contact form, API implementation, 3 months support.
                        </p>
                        <span className='text-green-600 font-medium text-md'>with hosting</span>
                        <h2 className='text-2xl mt-2'>
                            Fixed at <span className='font-semibold text-3xl'>$50.00</span>
                        </h2>
                        <Link href='/' className='text-2xl border border-slate-300 p-4'>
                            Request Package
                        </Link>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
  )
}

export default About