import React from 'react'
import Image from 'next/image'
import logo from '../public/logo.png'

function Header() {
    return (
        <header className="sticky top-0 z-50">
            {/* Left */}
            <div className="relative flex-auto item-center h-10 cursor-pointer my-auto">
                <Image
                    className="object-contain"
                    layout="fixed"
                    objectFit="contain"
                    objectPosition="left"
                    width={130}
                    height={80}
                    src={logo}
                />
            </div>
            {/* Middle */}
            <div></div>
            {/* Right */}
            <div></div>
        </header>
    )
}

export default Header
