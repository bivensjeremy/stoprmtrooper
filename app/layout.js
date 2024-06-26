import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";
import { font_Poppins } from "./utils/fonts";



export const metadata = {
  title: "Stormtrooper University",
  description: "Sample one-page website designed for Bivens Blueprint, LLC.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="myTheme" className={`bg-[#0a0a16] scroll-smooth ${font_Poppins.className}`}>
      <body>
        <Header />
          {children}
        <Footer />  
      </body>
    </html>
  );
}
