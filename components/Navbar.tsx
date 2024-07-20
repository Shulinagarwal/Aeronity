import React from 'react'
import Image from 'next/image';
import next from 'next'
import Link from 'next/link';
import Authlink from './authlink/Authlink';


const Navbar = () => {
  return (
    <div className='flex justify-between items-center my-4 mx-4 h-[5rem] relative z-10'>
        <div className="hidden md:flex gap-4 md:gap-10 flex-1 mx-2 md:mx-5">
            <Image src="/facebook.png" alt="facebook" width={26} height={24}/>
            <Image src="/youtube.png" alt="youtube" width={26} height={24}/>
            <Image src="/instagram.png" alt="instagram" width={26} height={24}/>
            <Image src="/github.png" alt="instagram" width={26} height={35}/>

          </div>

            <div className='text-lg mr-7 -ml-6 md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold flex-1'>Aeronity</div>
        <div className='text-xs flex md:text-lg gap-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-blue-200  font-sans font-medium flex-1'>
                <Link href="/join-now">
                Homepage
                </Link>
                <Link href="/join-now">
                Contact
                </Link>
                <Link href="/join-now">
                About
                </Link>
                <Authlink/>
         </div>
      </div>
  )
}

export default Navbar