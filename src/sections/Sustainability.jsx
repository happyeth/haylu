export default function Sustainability() {
  const services = [
    {
      id: 1,
      title: "Eco-Friendly Quarrying",
      desc: "We minimize environmental disruption by using advanced quarrying techniques that reduce waste and conserve resources.",
      image: "https://res.cloudinary.com/dopolikju/image/upload/v1737357611/xbcd0xpxjjwhu8snltsl.jpg",
      link: "/sustainability/eco-friendly-quarrying",
    },
    {
      id: 2,
      title: "Water Recycling",
      desc: "Our facilities recycle up to 80% of the water used in stone cutting and polishing processes.",
      image: "https://res.cloudinary.com/dopolikju/image/upload/v1737357611/xbcd0xpxjjwhu8snltsl.jpg",
      link: "/sustainability/water-recycling",
    },
    {
      id: 3,
      title: "Energy Efficiency",
      desc: "We invest in energy-efficient machinery to lower carbon emissions across all production stages.",
      image: "https://res.cloudinary.com/dopolikju/image/upload/v1737357611/xbcd0xpxjjwhu8snltsl.jpg",
      link: "/sustainability/energy-efficiency",
    },
    {
      id: 4,
      title: "Recycling By-products",
      desc: "Stone dust and fragments are repurposed into aggregates and eco-friendly construction materials.",
      image: "https://res.cloudinary.com/dopolikju/image/upload/v1737357611/xbcd0xpxjjwhu8snltsl.jpg",
      link: "/sustainability/recycling-byproducts",
    },
    {
      id: 5,
      title: "Sustainable Logistics",
      desc: "We optimize transportation routes to reduce fuel consumption and environmental footprint.",
      image: "https://res.cloudinary.com/dopolikju/image/upload/v1737357611/xbcd0xpxjjwhu8snltsl.jpg",
      link: "/sustainability/sustainable-logistics",
    },
  ];

  return (
    <section className="bg-gray-100 lg:px-20 md:px-10 px-5 py-16">
      <div className="mx-auto flex flex-col items-center text-center max-w-7xl">
        {/* Section Title */}
        <h2 className="text-4xl font-bold tracking-tight text-gray-800 sm:text-5xl lg:text-6xl">
          Sustainability
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-gray-600">
          Building a greener future through responsible stone manufacturing practices.
        </p>

        {/* Card Grid */}
        <div className="grid gap-8 pt-14 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
          {services.map((service) => (
            <a
              key={service.id}
              href={service.link}
              className="group flex justify-center [perspective:1000px]"
            >
              <div className="relative lg:h-[420px] lg:w-72 md:h-[380px] sm:h-[360px] sm:w-64 h-[450px] w-[300px] rounded-2xl shadow-2xl bg-white overflow-hidden transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front Face */}
                <div className="absolute inset-0 h-full w-full rounded-2xl [backface-visibility:hidden]">
                  <img
                    className="object-cover h-full w-full rounded-2xl"
                    src={service.image}
                    alt={service.title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/70 rounded-2xl"></div>
                  <div className="absolute bottom-6 inset-x-0 text-center">
                    <p className="text-xl font-bold text-white drop-shadow-md">
                      {service.title}
                    </p>
                  </div>
                </div>

                {/* Back Face */}
                <div className="absolute inset-0 h-full w-full rounded-2xl bg-gray-900 px-6 text-center text-gray-100 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <div className="flex min-h-full flex-col items-center justify-center">
                    <h3 className="text-xl font-bold mb-4 text-yellow-400">{service.title}</h3>
                    <p className="text-sm text-gray-300 mb-6">
                      {service.desc}
                    </p>
                    <button className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-5 rounded-full transition">
                      Read More →
                    </button>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
