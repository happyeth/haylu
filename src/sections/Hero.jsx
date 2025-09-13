import React from "react";

export default function Hero() {
  return (
    <section className="relative text-white overflow-hidden">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')",
          filter: "brightness(0.45)",
        }}
      ></div>

      {/* Content */}
      <div className="container mx-auto lg:px-12 px-5 py-24 md:py-32 relative z-10 lg:h-[90vh]">
        <div className="flex flex-col md:flex-row items-center justify-around">
          {/* Left side - text */}
          <div className="w-full md:w-1/2 mb-12 md:mb-0 relative">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Hayilu Birhanu
              <br />
              <span className="bg-gradient-to-r from-gray-600 via-gray-400 to-gray-200 inline-block text-transparent bg-clip-text">
                Stone Products PLC
              </span>
            </h1>

            <p className="text-xl mb-5 text-gray-200 max-w-xl">
              Crafted by Earth, Perfected by Us — delivering high-quality stone
              products and innovative construction design solutions for a
              sustainable future.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="group relative w-full sm:w-auto px-6 py-3 min-w-[160px]">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-500 rounded-lg"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-500 rounded-lg lg:blur-md blur-0 group-hover:opacity-60 transition-opacity duration-500"></div>
                <div className="relative flex items-center justify-center gap-2">
                  <span className="text-white font-medium">Get Quote</span>
                  <svg
                    className="w-5 h-5 text-white transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </div>
              </button>

              <button className="w-full sm:w-auto px-6 py-3 rounded-lg border border-white/10 bg-white/5 backdrop-blur-lg text-white/70 hover:bg-white/10 hover:text-white transition-all min-w-[160px]">
                Contact Us
              </button>
            </div>
          </div>

          {/* Right side - card */}
          <div className="w-full md:w-2/5 md:pl-12">
            
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
