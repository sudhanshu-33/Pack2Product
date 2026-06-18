import React from "react";
import logo from "../images/logo.png";
import heroImage from "../images/hero.jpg"

export default function Hero() {
  return (
    <section
      className="relative flex flex-col items-center justify-center text-center min-h-[420px] sm:min-h-[480px] bg-cover bg-center px-6"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-black/20" />

      <div className="relative flex flex-col items-center">
        <h1 className="text-4xl  font-bold text-orange-500">Pack2Product</h1>

        <h1 className="text-4xl sm:text-5xl mt-8 md:text-6xl font-extrabold text-white leading-tight max-w-3xl">
          Food Brand Assitant
        </h1>
        <p className="text-2xl sm:text-sm  md:text-md font-bold text-white leading-tight max-w-xl">Making it easier for food brands to showcase their products<br/>with clear descriptions, ingredient information, and market-ready content.</p>

        <button className="mt-8 rounded-full px-6 py-3 text-md font-semibold bg-white text-gray-900 hover:bg-gray-100">
          services
        </button>
      </div>
    </section>
  );
}