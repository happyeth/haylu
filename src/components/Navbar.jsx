import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if we've scrolled past the top header (approx 120px)
      setIsSticky(window.scrollY > 120);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Header Section - Always visible at top */}
      <div className="bg-gray-800 text-white relative z-50">
        <div className="flex flex-col items-center justify-center text-center p-4 border-b border-gray-700">
          <h1 className="text-lg sm:text-2xl font-extrabold tracking-wide uppercase">
            S.B.G GENERAL METAL ENGINEERING P.L.C
          </h1>
          <p className="text-xs sm:text-sm font-medium text-gray-300 mt-1">
            ኤ.ሲ.ቢ.ጂ. ጠቅላላ የብረት ስራ ኢንጂኔሪንግ ኃ/የተ/የግ/ማህበር
          </p>
          <div className="w-20 border-t-2 border-blue-400 my-2"></div>
          <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-1 sm:space-y-0 text-xs sm:text-sm font-light text-gray-400">
            <div className="flex items-center space-x-1">
              <span>📞</span>
              <span>+251-911-225-990</span>
            </div>
            <div className="flex items-center space-x-1">
              <span>📞</span>
              <span>+251-911-128-814</span>
            </div>
            <div className="flex items-center space-x-1">
              <span>📠</span>
              <span>Fax 0114-42 16 01</span>
            </div>
          </div>
          <p className="text-xs sm:text-sm font-light text-gray-400 pt-1">
            E-mail:{" "}
            <a
              href="mailto:ksmon369@gmail.com"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              ksmon369@gmail.com
            </a>
          </p>
        </div>
      </div>

      {/* Navbar Section - Becomes sticky after scrolling past header */}
      <nav
        className={`bg-gray-900 shadow-md transition-all duration-300 ${
          isSticky
            ? "fixed top-0 left-0 right-0 z-50 animate-fadeInDown"
            : "relative"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo/Name with enhanced styling */}
            <div className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold tracking-wide text-blue-400">
                SBG Metal
              </span>
            </div>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex space-x-8 text-sm font-medium">
              {[
                { name: "Home", href: "#home" },
                { name: "About Us", href: "#about" },
                { name: "Products", href: "#products" },
                { name: "Sustainability", href: "#sustainability" },
                { name: "Contact", href: "#contact" },
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-blue-400 transition-colors relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all group-hover:w-full"></span>
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-300 hover:text-blue-400 focus:outline-none p-2 rounded-md bg-gray-800"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-2 bg-gray-800 rounded-lg shadow-lg py-2 animate-fadeIn">
              {[
                { name: "Home", href: "#home" },
                { name: "About Us", href: "#about" },
                { name: "Products", href: "#products" },
                { name: "Sustainability", href: "#sustainability" },
                { name: "Contact", href: "#contact" },
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 text-sm font-medium text-gray-200 hover:bg-gray-700 hover:text-blue-400 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Add some custom animation styles */}
      <style jsx>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInDown {
          animation: fadeInDown 0.5s ease-out;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default Navbar;