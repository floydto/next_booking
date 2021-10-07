import React from 'react';
import Image from 'next/image';
import logo from '../public/logo.png';

function Header() {
    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-2">
            {/* Left */}
            <div className="relative flex-auto item-center h-10 cursor-pointer my-auto">
                <Image
                    src={logo}
                    className="object-contain"
                    layout="fill"
                    objectFit="contain"
                    objectPosition="left"
                />
            </div>

            {/* Middle */}
            <div>
                <input type="text" placeholder="Start your Search" />
            </div>

            {/* Right */}
            <div>

            </div>
        </header>
    )
}

export default Header
