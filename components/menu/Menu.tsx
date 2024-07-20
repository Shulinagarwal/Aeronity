import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Menu = () => {
  return (
    <div className='flex flex-col mt-16 w-full md:w-2/5 px-4 md:px-8'>
      <div className=''>
        <h2 className='text-gray-500 font-normal text-sm'>{"What's hot"}</h2>
        <h1 className='text-3xl font-semibold'>Most Popular</h1>
      </div>

      <div className='flex flex-col gap-5 mt-6 mb-16'>
        <Link href="/join-now" className='flex items-center gap-4 w-full md:w-3/4'>
          <div className='flex-1'>
            <span className='block text-gray-300 bg-green-800 w-fit rounded-lg px-0.5'>travel</span>
            <h3 className='text-lg font-semibold'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </h3>
            <div className='text-gray-500 text-sm mt-2'>
              <span>John Doe</span> <span className='ml-2'>10.03.2023</span>
            </div>
          </div>
        </Link>
        <Link href="/join-now" className='flex items-center gap-4 w-full md:w-3/4'>
          <div className='flex-1'>
            <span className='block text-gray-600'>travel</span>
            <h3 className='text-lg font-semibold'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </h3>
            <div className='text-gray-500 text-sm mt-2'>
              <span>John Doe</span> <span className='ml-2'>10.03.2023</span>
            </div>
          </div>
        </Link>
        <Link href="/join-now" className='flex items-center gap-4 w-full md:w-3/4'>
          <div className='flex-1'>
            <span className='block text-gray-600'>travel</span>
            <h3 className='text-lg font-semibold'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </h3>
            <div className='text-gray-500 text-sm mt-2'>
              <span>John Doe</span> <span className='ml-2'>10.03.2023</span>
            </div>
          </div>
        </Link>
        <Link href="/join-now" className='flex items-center gap-4 w-full md:w-3/4'>
          <div className='flex-1'>
            <span className='block text-gray-600'>travel</span>
            <h3 className='text-lg font-semibold'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </h3>
            <div className='text-gray-500 text-sm mt-2'>
              <span>John Doe</span> <span className='ml-2'>10.03.2023</span>
            </div>
          </div>
        </Link>
      </div>

      <div className=''>
        <h2 className='text-gray-500 font-normal text-sm'>{"Discover by topics"}</h2>
        <h1 className='text-3xl font-semibold'>Categories</h1>
      </div>

      <div className='flex flex-wrap gap-4 mt-9 mb-10 justify-center'>
        <Link href='/blog?cat=style' className='flex items-center h-16 md:h-20 w-[45%] sm:w-[30%] md:w-[22%] lg:w-[30%] justify-center bg-[#212a27] rounded-lg capitalize'>
          <Image src="/style.png" alt='Style' width={20} height={20} className='mr-2 rounded-[75%]' />
          Style
        </Link>

        <Link href='/blog?cat=travel' className='flex items-center h-16 md:h-20 w-[45%] sm:w-[30%] md:w-[22%] lg:w-[30%] justify-center bg-[#613659] rounded-lg'>
          <Image src="/travel.png" alt='Travel' width={20} height={20} className='mr-2 rounded-full' />
          Travel
        </Link>

        <Link href='/blog?cat=food' className='flex items-center h-16 md:h-20 w-[45%] sm:w-[30%] md:w-[22%] lg:w-[30%] justify-center bg-[#211522] rounded-lg'>
          <Image src="/food.png" alt='Food' width={20} height={20} className='mr-2 rounded-[75%]' />
          Food
        </Link>

        <Link href='/blog?cat=lifestyle' className='flex items-center h-16 md:h-20 w-[45%] sm:w-[30%] md:w-[22%] lg:w-[30%] justify-center bg-[#303437] rounded-lg'>
          <Image src="/culture.png" alt='Lifestyle' width={20} height={20} className='mr-2 rounded-[75%]' />
          Lifestyle
        </Link>

        <Link href='/blog?cat=tech' className='flex items-center h-16 md:h-20 w-[45%] sm:w-[30%] md:w-[22%] lg:w-[30%] justify-center bg-[#B68D40] rounded-lg'>
          <Image src="/coding.png" alt='Tech' width={20} height={20} className='mr-2 rounded-[75%]' />
          Tech
        </Link>

        <Link href='/blog?cat=fashion' className='flex items-center h-16 md:h-20 w-[45%] sm:w-[30%] md:w-[22%] lg:w-[30%] justify-center bg-[#1f4d3f] rounded-lg'>
          <Image src="/fashion.png" alt='Fashion' width={20} height={20} className='mr-2 rounded-[75%]' />
          Fashion
        </Link>
      </div>

      <div className=''>
        <h2 className='text-gray-500 font-normal text-sm'>{"Chosen by the Editor"}</h2>
        <h1 className='text-3xl font-semibold'>Editor's Pick</h1>
      </div>

      <div className='flex flex-col gap-5 mt-6 mb-16'>
        <Link href="/join-now" className='flex items-center gap-4 w-full md:w-3/4'>
          <div className='relative w-20 h-20 flex-shrink-0'>
            <Image src="/p1.jpeg" alt='Travel' layout='fill' objectFit='cover' className='rounded-full'/>
          </div>
          <div className='flex-1'>
            <span className='block text-gray-600'>travel</span>
            <h3 className='text-lg font-semibold'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </h3>
            <div className='text-gray-500 text-sm mt-2'>
              <span>John Doe</span> <span className='ml-2'>10.03.2023</span>
            </div>
          </div>
        </Link>
        <Link href="/join-now" className='flex items-center gap-4 w-full md:w-3/4'>
          <div className='relative w-20 h-20 flex-shrink-0'>
            <Image src="/p1.jpeg" alt='Travel' layout='fill' objectFit='cover' className='rounded-full'/>
          </div>
          <div className='flex-1'>
            <span className='block text-gray-600'>travel</span>
            <h3 className='text-lg font-semibold'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </h3>
            <div className='text-gray-500 text-sm mt-2'>
              <span>John Doe</span> <span className='ml-2'>10.03.2023</span>
            </div>
          </div>
        </Link>
        <Link href="/join-now" className='flex items-center gap-4 w-full md:w-3/4'>
          <div className='relative w-20 h-20 flex-shrink-0'>
            <Image src="/p1.jpeg" alt='Travel' layout='fill' objectFit='cover' className='rounded-full'/>
          </div>
          <div className='flex-1'>
            <span className='block text-gray-600'>travel</span>
            <h3 className='text-lg font-semibold'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </h3>
            <div className='text-gray-500 text-sm mt-2'>
              <span>John Doe</span> <span className='ml-2'>10.03.2023</span>
            </div>
          </div>
        </Link>
        <Link href="/join-now" className='flex items-center gap-4 w-full md:w-3/4'>
          <div className='relative w-20 h-20 flex-shrink-0'>
            <Image src="/p1.jpeg" alt='Travel' layout='fill' objectFit='cover' className='rounded-full'/>
          </div>
          <div className='flex-1'>
            <span className='block text-gray-600'>travel</span>
            <h3 className='text-lg font-semibold'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </h3>
            <div className='text-gray-500 text-sm mt-2'>
              <span>John Doe</span> <span className='ml-2'>10.03.2023</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Menu
