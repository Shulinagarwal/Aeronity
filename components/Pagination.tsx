import React from 'react'

const Pagination = () => {
  return (
    <div className='flex justify-between w-full'>
        <button className='w-[100px] border-none p-4 bg-gray-700 rounded-lg'>Previous</button>
        <button className='w-[100px] border-none p-4 bg-gray-700 rounded-lg'>Next</button>
    </div>
  )
}

export default Pagination