import React from 'react'
import logo from "@/public/Logo.png"
import Image from 'next/image'
import Buttons from './buttons'

const Hero = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <Image
                    src={logo.src}
                    alt="logo"
                    width={500}
                    height={500}
                    />
                <div>
                    <h1 className="text-5xl font-bold">Добре дошли!</h1>
                    <p className="py-6">
                        Точенен влак е вашият онлайн помощник за пътуване из България с влак.
                    </p>
                    <div>
                        <Buttons/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero