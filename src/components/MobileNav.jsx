"use client";
import React,{useEffect} from "react";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {CiMenuFries} from "react-icons/ci"
import Image from "next/image";
import 'aos/dist/aos.css';
import Aos from "aos";

const links = [
    {
        name: 'BERANDA',
        path: "/",
    },
    {
        name: 'TENTANG',
        path: "/about",
    },
    {
        name: 'PORTOFOLIO',
        path: "/portfolio",
    },
    {
        name: 'BLOG',
        path: "/blog",
    },
    {
        name: 'TAHAPAN KERJA',
        path: "/work-phase",
    },
]

const MobileNav = () => {
    const pathName = usePathname();
    useEffect(() =>{
        Aos.init();
    }, [])
  return (
    <Sheet>
        <SheetTrigger className="flex justify-center items-center">
            <CiMenuFries className="text-[32px] text-black" />
        </SheetTrigger>
        <SheetContent className="flex flex-col w-[320px] sm:w-[460px]">
            <div className="mb-16 text-left text-2xl text-black flex items-center">
                <Image 
                src='/natasae-logo-2.png'
                width={45}
                height={45}
                alt="natasae logo"
            />
            </div>
            <nav className="nav__list flex flex-col justify-center items-end gap-4 sm:gap-6 text-black text-2xl">
                

            {links.map((link, index) => {
                return (
                    <SheetClose asChild data-aos="fade-left" key={index} data-aos-delay={index * 100}>
                    <Link href={link.path} key={index} className={`${
                        (link.path === pathName || (pathName.includes(link.path) && link.path === '/portfolio')) && "text-black border-b-2 border-black font-bold"
                    } capitalize text-black transition-all`}>
                        {link.name}
                    </Link>
                    </SheetClose>
                )
            })}
            </nav>
        </SheetContent>
    </Sheet>
  )
}

export default MobileNav