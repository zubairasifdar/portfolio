import React from 'react'
import ContactMe from '../components/ContactMe'

import Link from 'next/link'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import ContactForm from '../components/ContactForm'

const page = () => {
  return (
    <section className='flex flex-col items-center h-[80vh] justify-center my-16 rounded-3xl p-16 border border-slate-400 text-center'>
        <div className='flex flex-col gap-6'>
            <div>
                <h2 className='text-5xl font-black text-slate-800'>
                    <span className='text-2xl font-light'>Contact</span> ZubairDev
                </h2>
                <p className='max-w-lg mt-4'>
                    Feel free to contact me for any queries or quotes regarding website development, specializing in front-end or static websites.
                </p>
            </div>
        </div>
        <ContactForm />
    </section>
  )
}

export default page