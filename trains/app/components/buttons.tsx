import React from 'react'

const Buttons = () => {
  return (
    <div className='w-fit h-fit flex flex-col sm:flex-row justify-center items-center gap-3'>
        <button className="w-full btn btn-md bg-blue-500 text-white sm:btn-sm md:btn-md lg:btn-lg">Мои Билети</button>
        <button className="w-full btn btn-md bg-blue-500 text-white sm:btn-sm md:btn-md lg:btn-lg">Закупи</button>
    </div>
  )
}

export default Buttons