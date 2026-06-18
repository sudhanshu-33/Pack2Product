import React from "react";
import heroImage from "../images/hero.jpg";

export default function Hero() {
  return (
    <section
      className="relative flex min-h-[420px] flex-col items-center justify-center bg-cover bg-center px-4 text-center sm:min-h-[600px] lg:min-h-[520px]"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        <h1 className="text-3xl font-bold text-orange-500 sm:text-4xl lg:text-5xl">
          Pack2Product
        </h1>

        <h2 className="mt-6 max-w-4xl text-3xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
          Food Brand Assistant
        </h2>

        <p className="mt-4 max-w-xs text-sm text-gray-200 sm:max-w-2xl sm:text-md lg:text-md font-bold">
          Making it easier for food brands to showcase their products with
          clear descriptions, ingredient information, and market-ready content.
        </p>

        <button className="mt-8 rounded-full bg-white px-6 py-3 text-sm font-semibold text-gray-900 transition hover:bg-gray-100 sm:px-8 sm:py-4 sm:text-base">
          Services
        </button>
      </div>
    </section>
  );
}