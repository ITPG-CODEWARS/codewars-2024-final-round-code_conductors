import React from 'react'
import Image from 'next/image'
import image from '@/public/Train_card.png'
import Navbar from '../components/Navbar'
import Link from 'next/link'

const Buy = () => {
    return (
        <div className='w-full h-dvh flex flex-col justify-start items-center'>
            <div className='w-full'>
                <Navbar />
            </div>
            <h1 className='w-3/4 h-fit font-black bg-blue-500 px-36 py-2 m-5 text-xl flex justify-center items-center text-center md:text-2xl text-white rounded-full'>
                Купи Билет
            </h1>
            <div className='w-full h-dvh flex flex-col md:flex-row justify-center items-center'>
                <div className='w-full flex flex-col justify-center items-center'>
                    <Image src={image.src} alt='image' width={500} height={500} />

                    <div className='w-2/3 text-white rounded-xl flex flex-col justify-center items-center bg-blue-500'>
                        <Link href="/ticket">
                            <h1 className='font-bold'>Билет за Влак</h1>
                            <h2>1-ва класа</h2>
                            <h3>25лв.</h3>
                        </Link>

                    </div>
                </div>
                <div className='w-full flex flex-col justify-center items-center'>
                    <Image src={image.src} alt='image' width={500} height={500} />
                    <div className='w-2/3 text-white rounded-xl flex flex-col justify-center items-center bg-blue-500'>
                        <Link href="/ticket">
                            <h1 className='font-bold'>Билет за Влак</h1>
                            <h2>2-ра класа</h2>
                            <h3>15лв.</h3>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Buy