import React from 'react'
import Image from 'next/image'

function Header() {
    return (
        <header className="">
            <h1>this is the header</h1>
            <Image
                className="object-contain"
                src="https://i.stack.imgur.com/ZdC3w.png"
                width={2000}
                height={1000}
            />
        </header>
    )
}

export default Header
