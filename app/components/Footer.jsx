import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaGlobe, FaInstagram } from "react-icons/fa";
import FooterModal from "./FooterModal";

const Footer = () => {
    return (
        <footer id="footer" className="footer footer-center p-10 bg-base-200 text-base-content rounded">
          <nav className="grid grid-flow-col gap-4">
            <FooterModal title="About Us" />
            <FooterModal title="Contact" />
            <FooterModal title="Jobs" />
            <FooterModal title="Press Kit" />
          </nav> 

        <nav>
          <div className="grid grid-flow-col gap-4">
            <Link href='//www.facebook.com/bivensblueprint' target="_blank" rel="noopener" className="content-center">
              <FaFacebookF className="w-6 h-auto text-[#1877f2] hover:fill-white" />
            </Link>
            
            <Link href='//www.instagram.com/bivensjeremy' target="_blank" rel="noopener" className="content-center">
              <FaInstagram className="w-6 h-auto text-[#c32aa3] hover:fill-white" />
            </Link>

            <Link href='//www.blueprintwebdev.com' target="_blank" rel="noopener" className="content-center">
              <FaGlobe className="w-6 h-auto text-[#1E3A8A] hover:fill-white" />
            </Link>

            <Link href='//www.bivensblueprint.com' target="_blank" rel="noopener" className="content-center hover:bg-white rounded-md">
              <Image
                src='/images/BP_logo.png'
                // layout="intrinsic"
                height={38}
                width={38}
                alt="Blueprint Logo"
                className="stroke-red-500"
            />
              {/* <FaGlobe className="w-6 h-auto hover:text-[#1E3A8A]" /> */}
            </Link>
          </div>
        </nav> 
        <aside>
          <p>Copyright &copy; {new Date().getFullYear()} - All right reserved by Bivens Blueprint, LLC</p>
        </aside>
      </footer>
    );
}

export default Footer;