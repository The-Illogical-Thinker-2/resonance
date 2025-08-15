import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // Change background when scrolled past 100px (after video section)
      setIsScrolled(scrollPosition > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 z-50 px-[8%] py-4 text-white border-b border-[--thin-border] pointer-events-auto w-full transition-all duration-500 ${
      isScrolled 
        ? 'bg-black/95 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="flex items-center justify-between w-full">
        {/* Left Menu */}
        <ul className="hidden gap-6 text-sm font-light md:flex">
          <li className="text-lg font-black italic cursor-pointer transition hover:text-red-600 font-mono">
            <Link to="/">REEV</Link>
          </li>
          <li>
            <a
              href="#SAEINDIA"
              className="text-lg font-semibold cursor-pointer transition hover:text-red-600"
            >
              SAEINDIA
            </a>
          </li>
          <li>
            <a
              href="#VISION"
              className="text-lg font-semibold cursor-pointer transition hover:text-red-600"
            >
              VISION
            </a>
          </li>

          <li className="text-lg font-semibold cursor-pointer transition hover:text-red-600">
            <Link to="/achievements">ACHIEVEMENTS</Link>
          </li>

          <li>
            <a
              href="#Contact"
              className="text-lg font-semibold cursor-pointer transition hover:text-red-600"
            >
              CONTACT
            </a>
          </li>
        </ul>

        {/* Right Brand */}
        <div className="ml-auto text-4xl font-black italic tracking-wide cursor-pointer font-mono">
          <span className="text-red-500">REEV</span>- SAEINDIA
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden ml-4">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <i
              className={`bi ${menuOpen ? "bi-x-lg" : "bi-list"} text-2xl`}
            ></i>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 text-sm font-light z-[9999]">
          <ul className="flex flex-col gap-4">
            <li className="text-lg font-black italic text-red-500 cursor-pointer font-mono">
              REEV
            </li>
            <li className="text-lg font-semibold transition cursor-pointer hover:text-red-500">
              SAEINDIA
            </li>
            <li className="text-lg font-semibold transition cursor-pointer hover:text-red-500">
              VISION
            </li>
            <li className="text-lg font-semibold transition cursor-pointer hover:text-red-500">
              ACHIEVEMENTS
            </li>
            <li className="text-lg font-semibold transition cursor-pointer hover:text-red-500">
              CONTACT
            </li>
          </ul>

          <div className="flex gap-4 mt-4">
            <i className="transition cursor-pointer bi bi-instagram text-x1 hover:text-red-500"></i>
            <i className="transition cursor-pointer bi bi-twitter-x text-x1 hover:text-red-500"></i>
            <i className="transition cursor-pointer bi bi-github text-x1 hover:text-red-500"></i>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Nav;
