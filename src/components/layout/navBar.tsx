import { AnimatePresence, motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'


const listItems = [
    {
        name: 'Home',
        href: '/'
    },
    {
        name: 'About',
        href: 'about'
    },
]


export const NavBar = () => {
    const [windowWidth, setWindowWidth] = useState(window.outerWidth)
    useEffect(() => {
        const handleResize = () => setWindowWidth(window.outerWidth)
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const [navBarFits, setNavBarFits] = useState(false)
    useEffect(() => {
        if (windowWidth < 768) {
            setNavBarFits(false)
        } else {
            setNavBarFits(true)
        }
    }, [windowWidth])

    const [dropdownMenuShow, setDropdownMenuShow] = useState(false)
    useEffect(() => {
        console.log(dropdownMenuShow)
    }, [dropdownMenuShow])

    return (
        <div className='bg-black text-white relative flex p-4 justify-between'>
            <div className='flex'>
                <a href='/' className=''>
                    <h1 className=''>{'<ElMalditoBlog/>'}</h1>
                </a>
            </div>


            <ul className={(navBarFits ? 'flex' : 'hidden') + ' inline-block space-x-3'}>
                {listItems.map((item, index) => (
                    <li key={index}>
                        <a href={item.href}>{item.name}</a>
                    </li>
                ))}
            </ul>


            <div className={(navBarFits ? 'hidden' : 'flex') + ' absolute top-0 right-0 p-4'}>
                <button onClick={() => setDropdownMenuShow(!dropdownMenuShow)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </div>
            <AnimatePresence>
                {dropdownMenuShow && (
                    <motion.div
                        initial={{ right: "-100%" }}
                        animate={{ right: "0%" }}
                        exit={{ right: "-100%" }}
                        transition={{ duration: 0.4 }}
                        className='lg:hidden h-screen bg-gray-800 text-white absolute w-[50%] top-[3.7rem] right-0 z-50'
                    >
                        <ul className='text-center first:pt-2'>
                            {listItems.map((item, index) => (
                                <li key={index}>
                                    <a href={item.href}>{item.name}</a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </div >
    )
}