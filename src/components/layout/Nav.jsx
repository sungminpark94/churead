import React from 'react'
import { FaRegUser } from 'react-icons/fa'
import { RiEditBoxLine, RiHome5Line } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='fixed bottom-0 bg-churead-gray-800 w-full max-w-[572px]'>
        <ul className='flex justify-center'>
            <li>
                <Link to="/" className='block p-6'>
                <RiHome5Line size={"28px"}/>
                </Link>
            </li>
            <li>
                <Link to="/" className='block p-6'>
                <RiEditBoxLine size={"28px"}/>
                </Link>
            </li>
            <li>
                <Link to="/" className='block p-6'>
                <FaRegUser size={"24px"}/>
                </Link>
            </li>
        </ul>

    </nav>
    )
}

export default Nav