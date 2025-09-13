import React from "react";

export default function Footer() {
  return (
    <footer>
      {/* Main Footer */}
      <div className="bg-gray-900 py-10 text-gray-300">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap justify-between gap-8">
            {/* Logo + Description */}
            <div className="w-full xl:w-1/4">
              <h2 className="text-2xl font-bold text-white mb-4">
                Hayilu Birhanu Stone Products PLC
              </h2>
              <p className="text-sm leading-relaxed text-justify mb-2">
                Leading Ethiopian stone manufacturing company specializing in high-quality and sustainable stone products for construction and design. 
              </p>
              <p className="text-sm italic text-gray-400">
                “Crafted by Earth, perfected by us.”
              </p>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="text-lg font-semibold text-white border-b-4 border-gray-500 inline-block pb-2 mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="hover:text-gray-400 transition-colors">About Us</a>
                </li>
                <li>
                  <a href="#products" className="hover:text-gray-400 transition-colors">Products</a>
                </li>
                <li>
                  <a href="#sustainability" className="hover:text-gray-400 transition-colors">Sustainability</a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-gray-400 transition-colors">Contact</a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold text-white border-b-4 border-gray-500 inline-block pb-2 mb-4">
                Contact Info
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>📧 Email: <a href="mailto:Hayilu.birhanu.mfg@gmail.com" className="hover:text-gray-400">Hayilu.birhanu.mfg@gmail.com</a></li>
                <li>📞 Phones: +251923979899, +251913739888, +251911794125</li>
               
              </ul>
            </div>

            {/* Social Links */}
            <div className="xl:w-1/5">
              <h3 className="text-lg font-semibold text-white border-b-4 border-gray-500 inline-block pb-2 mb-4">
                Connect With Us
              </h3>
              <div className="flex space-x-3">
                <a href="#" className="flex items-center justify-center h-8 w-8 border border-gray-500 rounded-full hover:text-gray-400 hover:border-gray-400 transition">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="flex items-center justify-center h-8 w-8 border border-gray-500 rounded-full hover:text-gray-400 hover:border-gray-400 transition">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="flex items-center justify-center h-8 w-8 border border-gray-500 rounded-full hover:text-gray-400 hover:border-gray-400 transition">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="flex items-center justify-center h-8 w-8 border border-gray-500 rounded-full hover:text-gray-400 hover:border-gray-400 transition">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-800 py-4 text-gray-400">
        <div className="container mx-auto px-4 flex flex-wrap justify-between text-sm">
          <div>
            © {new Date().getFullYear()} Hayilu Birhanu Stone Products PLC. All Rights Reserved.
          </div>
          <div>Made with ❤️ in Ethiopia.</div>
        </div>
      </div>
    </footer>
  );
}
