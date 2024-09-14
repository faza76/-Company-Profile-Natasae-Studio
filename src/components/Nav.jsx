"use client";

import Link from "next/link";  
import { usePathname } from "next/navigation";

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

const Nav = () => {
    const pathName = usePathname();
  
    return (
    <nav className="flex gap-8">
        {links.map((link, index) => {
            return (
                <Link href={link.path} key={index} className={`${
                    (link.path === pathName || (pathName.includes(link.path) && link.path === '/portfolio')) && "text-black border-b-2 border-black font-bold"
                } capitalize  hover:text-gray-700 transition-all mb-2`}>
                    {link.name}
                </Link>
            )
        })}
    </nav>
  )
}

export default Nav