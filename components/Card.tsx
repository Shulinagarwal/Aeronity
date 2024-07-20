import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Card = () => {
  return (
    <div className='mb-[50px] flex flex-col md:flex-row items-center gap-6 w-fit'>
      <div className='relative w-full md:w-1/2 h-64 sm:h-76 md:h-80 lg:h-[300px]'>
        <Image src="/p1.jpeg" alt='' layout='fill' objectFit='cover' />
      </div>
      <div className='flex-1 md:w-1/2'>
        <div className='flex space-x-4'>
          <span className='text-gray-400'>11.02.2023</span>
          <span className='text-red-700'>CULTURE</span>
        </div>
        <h1 className='mt-4 text-xl font-semibold text-blue-200'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit
        </h1>
        <p className='mt-2 text-sm mb-6 font-extralight'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus voluptate esse reprehenderit accusamus voluptatem, voluptas eum, veniam voluptatibus, molestias molestiae obcaecati alias. Molestiae iusto, inventore libero provident asperiores minus alias.
        </p>
        <Link href="/join-now" className=' border-[1px] border-solid border-b-red-900 p-1 rounded-md'>Read More</Link>
      </div>
    </div>
  )
}

export default Card
