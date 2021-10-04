import React from 'react'
import Image from 'next/image'
import logo from '../public/logo.png'

function Header() {
    return (
        <header className="sticky top-0 z-50">
            {/* Left */}
            <div className="relative flex item-center h-10 cursor-pointer my-auto">
                <Image
                    className="object-contain"
                    layout="fill"
                    objectFit="contain"
                    objectPosition="left"
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
