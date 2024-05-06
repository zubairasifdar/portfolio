import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { IoMdDownload } from "react-icons/io";

const Hero = () => {
  return (
    <div className='text-center mt-28'>
        <div className='flex flex-col items-center gap-1'>
            <div className='border border-slate-300 p-4 rounded-full mb-6'>
                <Link href='/services' className='flex items-center gap-2'><span className='font-semibold'>&#128293;  Limited Offer</span>50% discount on first client</Link>
            </div>
            <Image
            width={300}
            height={300}
            alt="zubair_dev_profile_picture"
            src="/zubair_dev.png"
            className='rounded-full border-2'
            />
            <span className='font-medium text-slate-600 mt-6'>Front-End Web Developer</span>
            <h1 className='text-6xl text-slate-800 font-black'>
                Zubair Dev
            </h1>
            <p className='max-w-xl mt-1'>
                1 Year Experienced Web Developer with knowledge of building responsive, fast & mobile-friendly 
                applications
            </p>

            <div className='flex items-center justify-between gap-6 mt-2'>
                <Link id="about" href='/contact' className='bg-slate-800 font-medium rounded-xl text-white px-4 py-3'>
                    Contact Now
                </Link>
                <Link href='https://drive.google.com/file/d/1sh2o7B1ZwofoewQJjy9Alzw8xZEuEgkW/view' className='border border-slate-800 font-medium rounded-xl px-4 py-3 
                flex items-center gap-2 justify-between'>
                    <IoMdDownload size={23} color='#1e293b' />
                    Download Resume
                </Link>
                <Link href='https://github.com/zubairasifdar'>
                    <FaGithub size={34} color='#1e293b' />
                </Link>
                <Link href='https://m.facebook.com/p/Zubair-Dev-61556278371334/?mibextid=LQQJ4d&wtsid=rdr_0N6ZAvKDVdW63gO1L'>
                    <FaFacebook size={34} color='#1e293b' />
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Hero