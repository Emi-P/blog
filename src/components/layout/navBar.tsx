import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'


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
        <div className='NavBarBase relative flex p-3 justify-between m-2 rounded-lg shadow-lg pl-6 pr-6'>
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
                <button onClick={() => setDropdownMenuShow(!dropdownMenuShow)} className=''>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-7 mr-2 pb-1" fill="none" viewBox="0 0 24 24" stroke="var(--mocha-mauve)">
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
                        className='lg:hidden min-h-[fit-content] rounded-lg mb-5 absolute w-[70%] top-[4rem] right-0 z-50'
                    >
                        <ul className='text-center NavBarDropDown rounded-lg'>
                            {listItems.map((item, index) => (
                                <li key={index} className='first:pt-2 last:pb-2 text-lg'>
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