import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Category = () => {
  return (
    <div className='flex flex-col ml-4 md:ml-16' style={{ maxWidth: "1400px" }}>
      <h1 className='mt-8 md:mt-12 text-start md:text-lg'>Popular Categories</h1>
      <div className='flex flex-wrap gap-4 mt-4 justify-between'>
        <Link href='/blog?cat=style' className='flex items-center h-16 md:h-20 w-[45%] sm:w-[30%] md:w-[14%] lg:w-[12%] justify-center bg-[#212a27] rounded-lg capitalize'>
          <Image src="/style.png" alt='Style' width={20} height={20} className='mr-2 rounded-[75%]' />
          Style
        </Link>

        <Link href='/blog?cat=travel' className='flex items-center h-16 md:h-20 w-[45%] sm:w-[30%] md:w-[14%] lg:w-[12%] justify-center bg-[#613659] rounded-lg'>
          <Image src="/travel.png" alt='Travel' width={20} height={20} className='mr-2 rounded-[75%]' />
          Travel
        </Link>

        <Link href='/blog?cat=food' className='flex items-center h-16 md:h-20 w-[45%] sm:w-[30%] md:w-[14%] lg:w-[12%] justify-center bg-[#211522] rounded-lg'>
          <Image src="/food.png" alt='Food' width={20} height={20} className='mr-2 rounded-[75%]' />
          Food
        </Link>

        <Link href='/blog?cat=lifestyle' className='flex items-center h-16 md:h-20 w-[45%] sm:w-[30%] md:w-[14%] lg:w-[12%] justify-center bg-[#303437] rounded-lg'>
          <Image src="/culture.png" alt='Lifestyle' width={20} height={20} className='mr-2 rounded-[75%]' />
          Lifestyle
        </Link>

        <Link href='/blog?cat=tech' className='flex items-center h-16 md:h-20 w-[45%] sm:w-[30%] md:w-[14%] lg:w-[12%] justify-center bg-[#B68D40] rounded-lg'>
          <Image src="/coding.png" alt='Tech' width={20} height={20} className='mr-2 rounded-[75%]' />
          Tech
        </Link>

        <Link href='/blog?cat=fashion' className='flex items-center h-16 md:h-20 w-[45%] sm:w-[30%] md:w-[14%] lg:w-[12%] justify-center bg-[#1f4d3f] rounded-lg'>
          <Image src="/fashion.png" alt='Fashion' width={20} height={20} className='mr-2 rounded-[75%]' />
          Fashion
        </Link>
      </div>
    </div>
  )
}

export default Category
