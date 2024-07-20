import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col md:flex-row justify-between gap-6 md:gap-12 lg:gap-24 p-6 md:p-12 bg-gray-950'>
        <div className='flex flex-1 flex-col gap-4'>
            <div className='flex items-center gap-2'>
                <Image src='/log.png' alt='' width={50} height={50}/>
                <h1 className='text-2xl'>Aeronity</h1>
            </div>
            <p className='font-extralight'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente commodi velit enim voluptate, ipsum id sunt ea quod praesentium nemo alias! Eos corrupti excepturi quis laudantium atque nam! Magni, placeat!
            </p>
        </div>
        <div className='flex-1 flex flex-end md:flex-row justify-between gap-6 md:gap-12'>
            <div className='flex flex-col gap-3 font-extralight'>
                <span className='font-medium'>Links</span>
                <Link href="/join-now">Homepage</Link>
                <Link href="/join-now">Blog</Link>
                <Link href="/join-now">About</Link>
                <Link href="/join-now">Contact</Link>
            </div>
            <div className='flex flex-col gap-3 font-extralight'>
                <span className='font-medium'>Tags</span>
                <Link href="/join-now">Tag 1</Link>
                <Link href="/join-now">Tag 2</Link>
                <Link href="/join-now">Tag 3</Link>
                <Link href="/join-now">Tag 4</Link>
            </div>
            <div className='flex flex-col gap-3 font-extralight'>
                <span className='font-medium'>Social</span>
                <Link href="/join-now">Facebook</Link>
                <Link href="/join-now">Twitter</Link>
                <Link href="/join-now">Instagram</Link>
                <Link href="/join-now">LinkedIn</Link>
            </div>
        </div>
    </div>
  )
}

export default Footer
