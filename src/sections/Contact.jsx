export default function Contact() {
  return (
    <section id="contact" className="bg-gray-100 dark:bg-slate-800">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        {/* Header */}
        <div className="mb-6 max-w-3xl text-center md:mx-auto md:mb-12">
          <p className="text-base font-semibold uppercase tracking-wide text-gray-600 dark:text-gray-300">
            Contact
          </p>
          <h2 className="font-heading mb-4 font-bold tracking-tight text-gray-900 dark:text-white text-3xl sm:text-5xl">
            Get in Touch
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-700 dark:text-slate-400">
            Crafted by Earth, perfected by us.  
            Let’s talk about how we can serve your stone product needs.
          </p>
        </div>

        {/* Content Grid */}
        <div className="flex items-stretch justify-center">
          <div className="grid md:grid-cols-2 gap-10">
            {/* Info Side */}
            <div className="h-full pr-6">
              <p className="mt-3 mb-12 text-lg text-gray-700 dark:text-slate-400">
                At <span className="font-semibold text-gray-900 dark:text-white">Hayilu Birhanu Stone Products Manufacturing PLC</span>,  
                we provide premium quality stone materials crafted with tradition, precision, and sustainability.  
                Reach out today to start building with us.
              </p>
              <ul className="space-y-6">
                {/* Address */}
                <li className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-gray-900 text-gray-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                      <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="mb-2 text-lg font-medium text-gray-900 dark:text-white">
                      Our Address
                    </h3>
                    <p className="text-gray-700 dark:text-slate-400">
                      Addis Ababa, Ethiopia
                    </p>
                    <p className="text-gray-700 dark:text-slate-400">
                      Industry Zone
                    </p>
                  </div>
                </li>

                {/* Phone */}
                <li className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-gray-900 text-gray-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                      <path d="M15 7a2 2 0 0 1 2 2"></path>
                      <path d="M15 3a6 6 0 0 1 6 6"></path>
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="mb-2 text-lg font-medium text-gray-900 dark:text-white">
                      Contact
                    </h3>
                    <p className="text-gray-700 dark:text-slate-400">
                      Mobile: +251 923 979 899
                    </p>
                    <p className="text-gray-700 dark:text-slate-400">
                      Mobile: +251 913 739 888
                    </p>
                    <p className="text-gray-700 dark:text-slate-400">
                      Mobile: +251 911 794 125
                    </p>
                    <p className="text-gray-700 dark:text-slate-400">
                      Email: Hayilu.birhanu.mfg@gmail.com
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Form Side */}
            <div className="card h-fit max-w-6xl p-5 md:p-12 bg-white dark:bg-slate-900 rounded-lg shadow-md">
              <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                Ready to Get Started?
              </h2>
              <form>
                <div className="mb-6">
                  <div className="mb-4">
                    <input
                      type="text"
                      id="name"
                      placeholder="Your name"
                      className="w-full rounded-md border border-gray-400 py-2 px-4 shadow-sm dark:text-gray-300 dark:bg-slate-800"
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="email"
                      id="email"
                      placeholder="Your email address"
                      className="w-full rounded-md border border-gray-400 py-2 px-4 shadow-sm dark:text-gray-300 dark:bg-slate-800"
                    />
                  </div>
                  <div>
                    <textarea
                      id="message"
                      rows="5"
                      placeholder="Write your message..."
                      className="w-full rounded-md border border-gray-400 py-2 px-4 shadow-sm dark:text-gray-300 dark:bg-slate-800"
                    ></textarea>
                  </div>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="w-full bg-gray-900 text-white px-6 py-3 font-xl rounded-md hover:bg-gray-700 transition"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
