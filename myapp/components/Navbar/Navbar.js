'use client'
import React, { useState, useEffect } from "react";
import Box from "../Box/Box";
import Link from "next/link";
import { AiOutlineUser, AiOutlineShoppingCart } from 'react-icons/ai'


const Navbar = () => {
    const [mobileMenu, setMobileMenu] = useState(false);
    const [show, setShow] = useState("translate-y-0");
    const [lastScrollY, setLastScrollY] = useState(0);

       const controlNavbar = () => {
        if (window.scrollY > 200) {
            if (window.scrollY > lastScrollY) {
                setShow("-translate-y-[80px]");
            } else {
                setShow("shadow-sm");
            }
        } else {
            setShow("translate-y-0");
        }
        setLastScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", controlNavbar);
        return () => {
            window.removeEventListener("scroll", controlNavbar);
        };
    }, [lastScrollY]);

    useEffect(() => {
        window.addEventListener("scroll", controlNavbar)
        return () => {
            window.removeEventListener("scroll", controlNavbar)
        }
    }, [])
  return (
    <header className={`w-full h-[100px] md:h-[150px] bg-white flex items-center justify-between z-20 stucky top-0 transition-transofmr duration-300 
    border-b border-gray-200
    ${show}`}>
        <Box className='h-[60px] flex justify-between items-center'>
            <Link href={'/'}>
                <img
                src="/logo.png"
                className="w-[120px] md:w-[160px]"
                />
            </Link>
            <div className="flex gap-4 w-8 md:w-12 h-8 md:h-12 rounded-full justify-center items-center
            hover:bg-black/[0.05] cursor-pointer relative
            ">
            <Link 
            href={'/cart'}>
                <AiOutlineShoppingCart className="text-[25px] md:text-[30px]" />
            </Link>
            <Link 
            href={'/cart'}>
                <AiOutlineUser className="text-[25px] md:text-[30px]" />
            </Link>
            <button>Logout</button>
            </div>
        </Box>
    </header>
  )
}

export default Navbar