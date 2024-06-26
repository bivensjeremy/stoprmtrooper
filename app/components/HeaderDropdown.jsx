import Link from "next/link";
import { navLinks } from "../data/navLinks";
import { FaBars } from "react-icons/fa";

const HeaderDropdown = () => {
    return (
        <details className="flex md:hidden dropdown dropdown-end">
            <summary className="btn m-1 btn-ghost"><FaBars className="w-6 h-auto"/></summary>
            <ul className="menu dropdown-content bg-base-100 rounded-box w-52 p-2 shadow text-secondary z-[1]">
                {navLinks.map(({ title, url}) => (
                    <li key={title}>
                        <Link href={url}>
                            {title}
                        </Link>
                    </li>
                    
                ))}
            </ul>
        </details>
    );
}

export default HeaderDropdown;