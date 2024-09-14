import Image from "next/image"
import Link from "next/link"
import { Button } from "./ui/button"
import Nav from "./Nav"
import MobileNav from "./MobileNav"

const Header = () => {
  return (
    <header className="sticky top-0 py-2 z-10 xl:py-4 text-black bg-white shadow-xl shadow-black/5">
        <div className="container mx-auto flex justify-between">
            <Link href="/" className="flex justify-center items-center">
                <Image 
                    src='/natasae-logo-2.png'
                    width={40}
                    height={40}
                    alt="natasae logo"
                />
            </Link>

            {/* desktop nav */}
            <div className="hidden xl:flex">
                <Nav />
            </div>
            
            <div className="hidden xl:flex items-center gap-6">
                <Link href="/contact-us">
                    <Button variant="outline"><span className="font-bold">Contact us</span></Button>
                </Link>
            </div>

            {/* Mobile Nav */}
            <div className="xl:hidden">
                <MobileNav />
            </div>
        </div>
    </header>
  )
}

export default Header