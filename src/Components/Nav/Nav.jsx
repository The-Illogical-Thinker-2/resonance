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

  // Disable background scrolling when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

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

        {/* Mobile Hamburger Menu Button */}
        <div className="md:hidden ml-4">
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative z-[10001] flex flex-col justify-center items-center w-8 h-8 transition-all duration-300"
          >
            <span className={`bg-white block h-0.5 w-6 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-1'}`}></span>
            <span className={`bg-white block h-0.5 w-6 transition-all duration-300 ${menuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`bg-white block h-0.5 w-6 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-1'}`}></span>
          </button>
        </div>
      </div>

      {/* Full-Screen Mobile Dropdown */}
      <div className={`md:hidden fixed inset-0 bg-black/95 backdrop-blur-md z-[10000] transition-all duration-500 ${menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className="flex flex-col justify-center items-center h-full text-center">
          <ul className="flex flex-col gap-8 text-2xl font-light">
            <li className="text-3xl font-black italic text-red-500 cursor-pointer font-mono">
              <Link to="/" onClick={() => setMenuOpen(false)}>REEV</Link>
            </li>
            <li className="text-2xl font-semibold transition cursor-pointer hover:text-red-500 transform hover:scale-110 duration-300">
              <a href="#SAEINDIA" onClick={() => setMenuOpen(false)}>SAEINDIA</a>
            </li>
            <li className="text-2xl font-semibold transition cursor-pointer hover:text-red-500 transform hover:scale-110 duration-300">
              <a href="#VISION" onClick={() => setMenuOpen(false)}>VISION</a>
            </li>
            <li className="text-2xl font-semibold transition cursor-pointer hover:text-red-500 transform hover:scale-110 duration-300">
              <Link to="/achievements" onClick={() => setMenuOpen(false)}>ACHIEVEMENTS</Link>
            </li>
            <li className="text-2xl font-semibold transition cursor-pointer hover:text-red-500 transform hover:scale-110 duration-300">
              <a href="#Contact" onClick={() => setMenuOpen(false)}>CONTACT</a>
            </li>
          </ul>

          <div className="flex gap-6 mt-12">
            <i className="transition cursor-pointer bi bi-instagram text-2xl hover:text-red-500 transform hover:scale-125 duration-300"></i>
            <i className="transition cursor-pointer bi bi-twitter-x text-2xl hover:text-red-500 transform hover:scale-125 duration-300"></i>
            <i className="transition cursor-pointer bi bi-github text-2xl hover:text-red-500 transform hover:scale-125 duration-300"></i>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
