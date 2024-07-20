import Link from 'next/link'
import React from 'react'

const Authlink = () => {

    const status="nonauthenticated"
  return (
    <>
    <div className='cursor-pointer relative z-10 text-blue-200' >
    {status==="nonauthenticated"?(
        <Link href='/login'>Login</Link>
    ):(
        <>
        <Link href='/write'>Write</Link>
        <span className=''>LogOut</span>
        </>
    )}
      </div>
    </>
  )
}

export default Authlink