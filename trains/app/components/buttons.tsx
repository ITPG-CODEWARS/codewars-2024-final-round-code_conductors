import React from 'react'
import Link from 'next/link'

const Buttons = () => {
  return (
    <div className='w-full h-fit flex justify-center items-center gap-3'>
        <div className='w-full'>
            <Link href='/ticket'>
            <button className="w-full btn btn-md bg-blue-500 text-white sm:btn-sm md:btn-md lg:btn-lg">Мои Билети</button>
            </Link>
        </div>
        <div className='w-full'>
        <Link href="/buy">
             <button className="w-full btn btn-md bg-blue-500 text-white sm:btn-sm md:btn-md lg:btn-lg">Закупи</button>
        </Link>
        </div>
    </div>
  )
}

export default Buttons