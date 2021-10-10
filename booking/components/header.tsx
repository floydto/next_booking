import React from 'react';
import Image from 'next/image';
import logo from '../public/logo.png';
import { GlobeAltIcon, MenuIcon, UserCircleIcon, UsersIcon, SearchIcon } from '@heroicons/react/solid/';

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
            <div className="flex items-center
            md:border-2 rounded-full py-2
            md:shadow-sm">
                <input className="flex-grow pl-5
                bg-transparent outline-none text-sm
                text-gray-600 placeholder-gray-400"
                    type="text"
                    placeholder="Start your Search" />
                <SearchIcon className="h-8 bg-gray-700
                text-white rounded-full p-2
                cursor-pointer md:mx-2" />
            </div>

            {/* Right */}
            <div className="flex items-center space-x-4 justify-end text-gray-500">
                <p className="hidden md:inline cursor-pointer">Become a host</p>
                <GlobeAltIcon className="h-6 cursor-pointer" />
                <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
                    <MenuIcon className="h-6 cursor-pointer" />
                    <UserCircleIcon className="h-6 cursor-pointer" />
                </div>
            </div>

        </header>
    )
}

export default Header
