import React from 'react'
import Link from 'next/link'

import { MdOutlineKeyboardArrowRight } from 'react-icons/md'

const ContactMe = () => {
  return (
    <section className='flex items-start justify-between my-16 rounded-3xl p-16 border border-slate-400'>
        <div className='flex flex-col gap-6'>
            <div>
                <h2 className='text-4xl font-black text-slate-800'>
                    <span className='text-2xl font-light'>Contact</span> ZubairDev
                </h2>
                <p className='max-w-lg mt-4'>
                    Feel free to contact me for any queries or quotes regarding website development, specializing in front-end or static websites.
                    <br />
                    <br />
                    &#x28;Prices may vary with the requirements of the project&#x29;
                </p>
            </div>
            <Link href='/' className='bg-slate-800 font-medium rounded-xl text-white px-4 py-3 flex items-center justify-between'>
                    Contact Now <MdOutlineKeyboardArrowRight size={34} />
            </Link>
        </div>
    </section>
  )
}

export default ContactMe