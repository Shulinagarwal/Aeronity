import Image from 'next/image'
import React from 'react'

const Featured = () => {
  return (
    <div className='mt-20 mx-3 sm:mx-8 lg:mx-16' style={{ width: '85%' }}>
        <h1 className='text-center mx-3 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl'>
        <b>Hey, Shulin Agarwal here.</b>
        Discover my stories and creative ideas.
                </h1>

        <div className='flex flex-col gap-8 mt-8 sm:mt-12 lg:mt-16 lg:flex-row lg:gap-12'>
        <div className='relative w-full h-64 sm:h-76 md:h-80 lg:h-[500px] flex-1'>
                <Image src='/p1.jpeg' alt='Featured image' layout='fill' className='object-cover ml-4 w-auto h-auto' />
            </div>
            <div className='flex-1 flex flex-col gap-4'>
                <h2 className='text-xl sm:text-2xl mx-3 lg:text-3xl uppercase font-medium text-blue-200'>             
The most beautiful in the world is, of course, the world itself.
                </h2>
                <p className=' text-base mx-3 sm:text-lg lg:text-xl font-extralight'>
                When we think of beauty, our minds often drift to images of exquisite paintings, stunning architecture, or mesmerizing works of art created by human hands. However, the most breathtaking masterpiece is one that surrounds us daily, often taken for granted: our planet Earth. The world itself, in its vast and varied glory, offers an unparalleled tapestry of beauty, intricately woven with natural wonders, diverse cultures, and profound experiences.
                </p>
                <button className='border rounded-lg px-4 py-2 w-max text-base sm:text-lg lg:text-xl'>
                    Read More
                </button>
            </div>
        </div>
    </div>
  )
}

export default Featured
