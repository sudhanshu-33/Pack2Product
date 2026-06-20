import React from "react";
import Descriptor from "../images/ai_Des.png";
import SEO from "../images/SEO.png";
import E_comm from "../images/e_comm.png";
import Ingrediant from "../images/ingrediant.png";

function Services() {
  const gridClass =
    "grid grid-cols-1 md:grid-cols-[repeat(24,minmax(0,1fr))] gap-6 md:gap-8 items-center";

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 flex flex-col gap-16">
      
      {/* Card 1 - image left */}
      <div className={gridClass}>
        <div className="hidden md:block md:col-span-3" />

        <img
          src={Ingrediant}
          alt="service one"
          className="md:col-span-8 w-full max-w-md md:max-w-full mx-auto h-auto md:h-64 rounded-2xl object-cover"
        />

        <div className="md:col-span-10 text-center md:text-left">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-[#344D3B]">
            Ingredient Benefits
          </h3>

          <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-700 leading-7">
            Highlight the benefits of key ingredients in a simple and
            customer-friendly way. Help customers understand product value,
            build trust, and make informed purchasing decisions.
          </p>

          <button className="mt-5 rounded-full px-5 py-2.5 text-sm font-semibold text-white bg-orange-500 hover:bg-orange-600 mx-auto md:mx-0 block">
            Learn More
          </button>
        </div>

        <div className="hidden md:block md:col-span-3" />
      </div>

      {/* Card 2 - image right */}
      <div className={gridClass}>
        <div className="hidden md:block md:col-span-3" />

        <div className="md:col-span-10 text-center md:text-left">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-[#344D3B]">
            AI Product Descriptions
          </h3>

          <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-700 leading-7">
            Turn product information into well-structured descriptions that are
            easy to understand, informative, and suitable for showcasing
            products across online marketplaces.
          </p>

          <button className="mt-5 rounded-full px-5 py-2.5 text-sm font-semibold text-white bg-orange-500 hover:bg-orange-600 mx-auto md:mx-0 block">
            Learn More
          </button>
        </div>

        <img
          src={Descriptor}
          alt="service two"
          className="md:col-span-8 w-full max-w-md md:max-w-full mx-auto h-auto md:h-64 rounded-2xl object-cover"
        />

        <div className="hidden md:block md:col-span-3" />
      </div>

      {/* Card 3 - image left */}
      <div className={gridClass}>
        <div className="hidden md:block md:col-span-3" />

        <img
          src={SEO}
          alt="service three"
          className="md:col-span-8 w-full max-w-md md:max-w-full mx-auto h-auto md:h-64 rounded-2xl object-cover"
        />

        <div className="md:col-span-10 text-center md:text-left">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-[#344D3B]">
            SEO Keyword Suggestions
          </h3>

          <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-700 leading-7">
            Identify important search terms related to your product to improve
            discoverability, increase online visibility, and help customers
            find your products more easily across digital platforms.
          </p>

          <button className="mt-5 rounded-full px-5 py-2.5 text-sm font-semibold text-white bg-orange-500 hover:bg-orange-600 mx-auto md:mx-0 block">
            Learn More
          </button>
        </div>

        <div className="hidden md:block md:col-span-3" />
      </div>

      {/* Card 4 - image right */}
      <div className={gridClass}>
        <div className="hidden md:block md:col-span-3" />

        <div className="md:col-span-10 text-center md:text-left">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-[#344D3B]">
            E-commerce Optimization
          </h3>

          <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-700 leading-7">
            Prepare product content that is suitable for online marketplaces.
            Improve product titles, descriptions, and key information to make
            listings more attractive, informative, and easier for customers to
            discover and understand.
          </p>

          <button className="mt-5 rounded-full px-5 py-2.5 text-sm font-semibold text-white bg-orange-500 hover:bg-orange-600 mx-auto md:mx-0 block">
            Learn More
          </button>
        </div>

        <img
          src={E_comm}
          alt="service four"
          className="md:col-span-8 w-full max-w-md md:max-w-full mx-auto h-auto md:h-64 rounded-2xl object-cover"
        />

        <div className="hidden md:block md:col-span-3" />
      </div>

    </section>
  );
}

export default Services;