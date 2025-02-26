import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

function NavbarWhite() {
  return (
    <nav className="bg-white py-4 px-14 shadow-lg">
        <div className="container mx-auto px-4 flex justify-between items-center">
            <Link to="/">
              <div className="flex items-center space-x-2">
                <img src="/images/ITAC_LOGO_BLACK.png" alt="NITA Logo" className="h-12" />
                <span className="text-black font-bold text-xl">ITAC 2025</span>
              </div>
            </Link>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex justify-between items-center space-x-8 w-[50%]">
                <Link to="/events" className="text-black hover:text-green-400 transition-colors text-lg font-semibold">EVENTS</Link>
                <Link to="/hackathon" className="text-black hover:text-green-400 transition-colors text-lg font-semibold">HACKATHON</Link>
                <Link to="/sponsors" className="text-black hover:text-green-400 transition-colors text-lg font-semibold">SPONSORS</Link>
                <Link to="/about" className="text-black hover:text-green-400 transition-colors text-lg font-semibold">ABOUST US</Link>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-white">
                <Menu size={24} />
            </button>
        </div>
    </nav>
  )
}

export default NavbarWhite;