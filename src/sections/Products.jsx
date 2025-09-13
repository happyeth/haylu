import React, { useState } from "react";

export default function Products() {
  const [activeCategory, setActiveCategory] = useState(0);
  
  const productCategories = [
    {
      name: "Granite & Marble Slabs",
      description: "Premium slabs for flooring, countertops, and architectural finishes. Durable, elegant, and long-lasting.",
      image: "https://cdn.pixabay.com/photo/2017/06/20/20/46/granite-2428875_1280.jpg",
      process: "Large blocks are cut into precise slabs using diamond wire saws, then polished to perfection."
    },
    {
      name: "Stone Tiles",
      description: "Beautifully cut tiles for walls, pathways, and interiors. Crafted to add timeless character.",
      image: "https://cdn.pixabay.com/photo/2016/11/29/01/14/marble-1866217_1280.jpg",
      process: "Slabs are precision-cut into tiles, then finished with grinding, polishing, or texturing techniques."
    },
    {
      name: "Decorative Stone Pieces",
      description: "Handcrafted decorative pieces for homes, hotels, and cultural projects. Merging tradition with modern design.",
      image: "https://cdn.pixabay.com/photo/2015/04/13/13/13/stone-720760_1280.jpg",
      process: "Artisans carve and shape stone into decorative elements using traditional and modern techniques."
    },
    {
      name: "Landscaping Stones",
      description: "Custom landscaping stones for gardens, parks, and urban spaces. Naturally strong, naturally beautiful.",
      image: "https://cdn.pixabay.com/photo/2016/11/29/09/08/garden-1868667_1280.jpg",
      process: "Stones are split, drilled, or cut to size for various landscaping applications and surface treatments."
    },
    {
      name: "Custom Carvings & Engravings",
      description: "Personalized stone engravings and cultural carvings for monuments, signage, and special projects.",
      image: "https://cdn.pixabay.com/photo/2018/01/15/07/51/carving-3084180_1280.jpg",
      process: "Skilled craftsmen use hand tools and CNC technology to create precise carvings and engravings."
    },
    {
      name: "Crushed Stone & Aggregates",
      description: "Versatile stone products for construction, concrete, asphalt, and landscaping applications.",
      image: "https://cdn.pixabay.com/photo/2018/05/20/18/40/gravel-3416407_1280.jpg",
      process: "Leftover materials are crushed and sorted into various sizes for construction and landscaping uses."
    }
  ];

  return (
    <div className="bg-gradient-to-b from-stone-100 to-stone-200 dark:from-gray-900 dark:to-gray-800 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            Our <span className="text-amber-700">Stone</span> Products
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
          <p className="mt-4 text-lg text-stone-600 dark:text-stone-300 max-w-3xl mx-auto">
            "Crafted by Earth, perfected by us." Explore our range of natural stone products 
            engineered for strength, sustainability, and timeless beauty.
          </p>
        </div>

        {/* Process Overview */}
        <div className="bg-white dark:bg-stone-800 rounded-2xl shadow-xl p-6 mb-16">
          <h3 className="text-2xl font-semibold text-stone-800 dark:text-stone-100 mb-6 text-center">
            Our Manufacturing Process
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-8 left-10 right-10 h-0.5 bg-amber-500"></div>
            
            {[
              { step: "1", title: "Quarrying", desc: "Stone extraction from quarries" },
              { step: "2", title: "Cutting", desc: "Blocks cut into slabs" },
              { step: "3", title: "Shaping", desc: "Grinding & polishing" },
              { step: "4", title: "Finishing", desc: "Texturing & sizing" },
              { step: "5", title: "Packaging", desc: "Quality check & shipping" }
            ].map((process, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center 
                                border-4 border-white dark:border-stone-800 shadow-md relative z-10">
                  <span className="text-amber-700 dark:text-amber-400 font-bold text-xl">{process.step}</span>
                </div>
                <h4 className="font-semibold text-stone-800 dark:text-stone-200 mt-4">{process.title}</h4>
                <p className="text-sm text-stone-600 dark:text-stone-400 mt-1">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {productCategories.map((product, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-stone-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl 
                         transition-all duration-300 transform hover:-translate-y-2 relative"
              onMouseEnter={() => setActiveCategory(index)}
            >
              <div className="overflow-hidden relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-stone-800 dark:text-stone-100 mb-3 group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors">
                  {product.name}
                </h3>
                <p className="text-stone-600 dark:text-stone-300 leading-relaxed mb-4">
                  {product.description}
                </p>
                
                <div className="pt-4 border-t border-stone-100 dark:border-stone-700">
                  <p className="text-sm text-stone-500 dark:text-stone-400 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-6 0H5m4 0h4m-4 0V9m0 12v-4m0 4h4m-4 0H9m4 0V9m0 12v-4m0 4h4m-4 0h-4m4-12h4m-4 0V5m0 4V5m0 4h4m-4 0H9" />
                    </svg>
                    Manufacturing Process:
                  </p>
                  <p className="text-sm text-stone-600 dark:text-stone-300 mt-1">
                    {product.process}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button className="bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-8 rounded-full 
                            transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
            Request a Quote
          </button>
          <p className="text-stone-500 dark:text-stone-400 text-sm mt-4">
            Custom sizes and finishes available upon request
          </p>
        </div>
      </div>
    </div>
  );
}