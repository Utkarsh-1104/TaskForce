import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gray-100'>
        <h1 className='text-9xl font-bold text-gray-400'>404</h1>
        <p className='text-xl text-gray-500'>Page not found</p>
        <Link href="/" className='mt-4 text-blue-500 hover:underline'>Go back home</Link>
    </div>
  )
}

export default NotFound