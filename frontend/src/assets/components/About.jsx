import React from "react";

function About() {
  return (
    <section id="about" className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-[#344D3B]">
          About Pack2Product
        </h2>

        <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
          Pack2Product helps food businesses create professional product
          content for online marketplaces. From product descriptions to
          ingredient highlights, the platform makes it easier to present
          products clearly and effectively.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mt-16">
        <div className="bg-white shadow-md rounded-2xl p-6">
          <h3 className="text-xl font-semibold text-[#344D3B]">
            Our Mission
          </h3>

          <p className="mt-3 text-gray-600">
            To help food brands showcase their products professionally and
            improve their online presence.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-2xl p-6">
          <h3 className="text-xl font-semibold text-[#344D3B]">
            Why Pack2Product?
          </h3>

          <p className="mt-3 text-gray-600">
            Many food businesses have excellent products but struggle to
            present them effectively online. We aim to simplify that process.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-2xl p-6">
          <h3 className="text-xl font-semibold text-[#344D3B]">
            Our Vision
          </h3>

          <p className="mt-3 text-gray-600">
            To make quality product content accessible to every food business,
            regardless of its size.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;