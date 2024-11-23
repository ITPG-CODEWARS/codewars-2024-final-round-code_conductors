import React from 'react'
import Link from 'next/link'

const Buttons = () => {
  return (
    <div className='w-fit h-fit flex flex-col sm:flex-row justify-center items-center gap-3'>
        <Link href='/ticket'>
        <button className="w-full btn btn-md bg-blue-500 text-white sm:btn-sm md:btn-md lg:btn-lg">Мои Билети</button>
        </Link>
        <button className="w-full btn btn-md bg-blue-500 text-white sm:btn-sm md:btn-md lg:btn-lg">Закупи</button>
    </div>
  )
}

export default Buttons