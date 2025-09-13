export default function About() {
  return (
    <section
      id="about"
      className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden mt-16 py-16"
    >
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-4 -left-4 w-72 h-72 bg-blue-200 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-200 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
        <div className="absolute top-40 -right-4 w-72 h-72 bg-yellow-200 dark:bg-yellow-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-30 animate-blob"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="relative z-10 pb-8 bg-transparent sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          {/* Decorative Shape with Animation */}
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-gray-50 dark:text-gray-900 transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100"></polygon>
          </svg>

          {/* Content */}
          <main className="mt-10 mx-auto max-w-7xl px-6 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              {/* Heading with Animation */}
              <h2 className="my-6 text-2xl tracking-tight font-extrabold text-gray-900 dark:text-gray-100 sm:text-3xl md:text-4xl animate-fade-in-up">
                About{" "}
                <span className="text-blue-600 dark:text-blue-400 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                  Hayilu Birhanu Stone Products Manufacturing PLC
                </span>
              </h2>

              {/* Description with Staggered Animation */}
              <div className="space-y-4">
                <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed animate-fade-in-up animation-delay-100">
                  At <span className="font-semibold text-blue-600 dark:text-blue-400">Hayilu Birhanu Stone Products Manufacturing PLC</span>, we are dedicated to producing top-quality stone products that embody Ethiopia's rich natural heritage. With a focus on durability, sustainability, and timeless design, we proudly serve both local and international markets.
                </p>

                <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed animate-fade-in-up animation-delay-200">
                  Our work blends traditional craftsmanship with advanced technology, ensuring every stone we craft is not only functional but also a work of art.
                </p>
              </div>

              {/* Quote with Animation */}
              <blockquote className="mt-6 italic text-lg font-semibold text-blue-700 dark:text-blue-400 p-4 border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-900/20 rounded-r-lg animate-pulse-slow">
                "Crafted by Earth, perfected by us."
              </blockquote>

              {/* Management with Card Animation */}
              <div className="mt-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 dark:border-gray-700 animate-fade-in-up animation-delay-300">
                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                  </svg>
                  Managment Team
                </h3>
                <ul className="grid sm:grid-cols-2 gap-y-3 text-sm text-gray-700 dark:text-gray-300">
                  <li className="flex items-center py-1">
                    <span className="font-semibold text-blue-600 dark:text-blue-400 w-32">General Manager:</span>
                    <span className="font-medium">Hailu Birhanu</span>
                  </li>
                  <li className="flex items-center py-1">
                    <span className="font-semibold text-blue-600 dark:text-blue-400 w-32">Vice Manager:</span>
                    <span className="font-medium">Bereket Hailu</span>
                  </li>
                  <li className="flex items-center py-1">
                    <span className="font-semibold text-blue-600 dark:text-blue-400 w-32">HR:</span>
                    <span className="font-medium">Zekariyas Worku</span>
                  </li>
                  <li className="flex items-center py-1">
                    <span className="font-semibold text-blue-600 dark:text-blue-400 w-32">Ashkabach (Back up):</span>
                    <span className="font-medium">Bizualem Hailu</span>
                  </li>
                </ul>
              </div>

              {/* Contact with Hover Effects */}
              <div className="mt-6 text-sm text-gray-700 dark:text-gray-300 space-y-2 animate-fade-in-up animation-delay-400">
                <p className="flex items-center group">
                  <span className="font-semibold text-blue-600 dark:text-blue-400 mr-2">📧 Email:</span>
                  <a
                    href="mailto:Hayilu.birhanu.mfg@gmail.com"
                    className="text-blue-600 dark:text-blue-400 hover:underline transition-all duration-300 group-hover:translate-x-1 inline-block"
                  >
                    Hayilu.birhanu.mfg@gmail.com
                  </a>
                </p>
                <p className="flex items-center group">
                  <span className="font-semibold text-blue-600 dark:text-blue-400 mr-2">📞 Phone:</span>
                  <span className="transition-all duration-300 group-hover:translate-x-1">
                    +251-923-979-899, +251-913-739-888, +251-911-794-125
                  </span>
                </p>
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* Image Side with Hover Effect */}
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 group">
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-transparent dark:from-blue-900/30 z-10"></div>
          <img
            className="h-56 w-full object-cover object-top sm:h-72 md:h-96 lg:w-full lg:h-full transform group-hover:scale-105 transition-transform duration-700"
            src="https://thumb.photo-ac.com/3e/3ec3f3cd7b0a2636a65ce2a46e015b5e_t.jpeg"
            alt="Stone products in Ethiopia"
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all duration-700"></div>
        </div>
      </div>
    </section>
  );
}
