import Image from "next/image";
import StormtrooperLogo from "@/public/images/academyLogo-removebg.png"
import { navLinks } from "../data/navLinks";
import Link from "next/link";
import { font_DelaGothic } from "../utils/fonts";
import HeaderDropdown from "./HeaderDropdown";

const Header = () => {
    return (
        <nav id="header" className="navbar bg-transparent text-base-100">
            <div className="flex-1">
                <Image 
                    src={StormtrooperLogo} 
                    alt="Stormtrooper Logo" 
                    width={48} 
                    height={48} className="bg-secondary rounded-lg"
                />
                <h1 className={`${font_DelaGothic.className} uppercase text-md md:text-xl ml-3`}>Stormtrooper - <span className="text-primary">U</span></h1>
            </div>

            
            <div className="flex-none">
                <ul className="menu menu-horizontal hidden md:flex">
                    {navLinks.map(({ title, url}) => (
                        <li key={title}>
                            <Link href={url} className="btn btn-ghost">
                            {title}
                                {/* <button className="btn btn-ghost btn-sm">{title}</button> */}
                            </Link>
                            
                        </li>
                    ))}
                </ul>
                <HeaderDropdown />
            </div>
        </nav>
    );
}

export default Header;