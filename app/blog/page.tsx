import CardList from '@/components/CardList'
import Footer from '@/components/Footer'
import Menu from '@/components/menu/Menu'
import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
    <div>
        <Navbar/>
        <h1 className='bg-green-900 p-2 px-6 text-center font-bold text-3xl '>Style Blog</h1>
        <div className='flex gap-14'>
            <CardList/>
            <Menu/> 
        </div>
        <Footer/>
    </div>
  )
}

export default page