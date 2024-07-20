import React from 'react'
import Card from './Card'
import Pagination from './Pagination'

const CardList = () => {
  return (
    <div className='flex flex-col ml-4 md:ml-16 w-2/3'>
        <h1 className='mt-8 md:mt-12 text-start md:text-lg'>Recent Posts</h1>
        <div className='items-start mt-8 md:mt-8 '>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
        <Pagination/>
    </div>
  )
}

export default CardList