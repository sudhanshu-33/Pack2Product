import React, { useState } from "react";
import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ClipboardList,
  Users,
  Globe,
  ShoppingCart,
  Brain,
  Utensils,
  Leaf,
} from "lucide-react";


import BACKGROUND_IMAGE from "../images/loginpage.jpg";

const ORANGE = "#F2722B";


const InputField = ({ icon: Icon, type = "text", placeholder, right }) => (
  <div className="relative">
    <Icon className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
    <input
      type={type}
      placeholder={placeholder}
      className="w-full rounded-full border border-gray-200 bg-white py-3 pl-11 pr-11 text-sm text-gray-700 placeholder-gray-400 outline-none transition focus:border-orange-300 focus:ring-2 focus:ring-orange-100"
    />
    {right}
  </div>
);

/* ---------------- Feature row ---------------- */
const Feature = ({ icon: Icon, color, bg, title, text }) => (
  <div className="flex items-start gap-4">
    <div
      className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full shadow-sm"
      style={{ backgroundColor: bg }}
    >
      <Icon className="h-[18px] w-[18px]" style={{ color }} />
    </div>
    <div>
      <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
      <p className="mt-0.5 text-xs leading-relaxed text-gray-500">{text}</p>
    </div>
  </div>
);

export default function FoodieHubSignup() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-neutral-900 p-4 sm:p-8">
      <div
        className="relative flex w-full max-w-6xl flex-col overflow-hidden rounded-3xl shadow-2xl lg:flex-row"
        style={{
          backgroundImage: `url(${BACKGROUND_IMAGE})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#A7AD64", // fallback / matches the image's green
        }}
      >
        {/* ---------------- LEFT: Form card ---------------- */}
        <div className="relative z-10 m-3 flex w-full flex-shrink-0 flex-col rounded-2xl bg-white p-8 lg:w-[400px]">
          {/* Logo */}
          <div className="flex flex-col items-center text-center">
            <div className="relative flex h-14 w-14 items-center justify-center rounded-full border-2 border-gray-100">
              <Utensils className="h-5 w-5 text-[#F2722B]" />
              <Leaf className="absolute -right-1 -top-1 h-4 w-4 rotate-45 text-green-500" />
            </div>
            <h1 className="mt-2 text-xl font-bold">
              {/* <span className="text-gray-900">Foodie</span> */}
              <span className="text-[#F2722B]">Pack2Product</span>
            </h1>
            <p className="text-[12px] text-gray-400">Food Brand Assistant</p>
          </div>

          {/* Heading */}
          <div className="mt-6 text-center">
            <h2 className="text-2xl font-bold text-gray-900">Create Account</h2>
            <p className="mt-1 text-sm text-gray-500">
              Join our community and grow your food brand.
            </p>
          </div>

          {/* Form */}
          <div className="mt-6 flex flex-col gap-3">
            <InputField icon={User} placeholder="Full Name" />
            <InputField icon={Mail} placeholder="Email Address" type="email" />
            <InputField
              icon={Lock}
              placeholder="Password"
              type={showPassword ? "text" : "password"}
              right={
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
                </button>
              }
            />
          </div>

          {/* CTA */}
          <button className="mt-5 w-full rounded-full bg-[#F2722B] py-3 text-sm font-semibold text-white shadow-lg shadow-orange-200 transition hover:bg-[#e0631d]">
            Create Account
          </button>

          {/* Terms */}
          <p className="mt-4 text-center text-[11px] leading-relaxed text-gray-400">
            By creating an account, you agree to our{" "}
            <a href="#" className="font-medium text-[#F2722B]">Terms of Service</a>{" "}
            and{" "}
            <a href="#" className="font-medium text-[#F2722B]">Privacy Policy</a>.
          </p>

       

        

          {/* Login link */}
          <p className="mt-6 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <a href="#" className="font-semibold text-[#F2722B]">Login</a>
          </p>
        </div>

        {/* ---------------- RIGHT: Text content over the background image ---------------- */}
        <div className="relative z-10 flex flex-1 flex-col justify-center p-8 lg:p-12">
          <div className="max-w-md">
            <h2 className="text-3xl font-bold leading-tight text-gray-900 lg:text-4xl">
            <span className="text-[#F2722B]">Describe</span> Product...
              <br />
              Improve <span className="text-[#F2722B]">Visibility.</span>
              <br />
              <span className="text-[#F2722B]">Boost</span> Sales.
            </h2>

           

            <div className="flex flex-col gap-5 mt-8">
             <div className="flex ">
            <div className="bg-[#FDECE3] rounded-full p-2.5 text-[#F2722B] mr-3"><ClipboardList/></div>
              <div>
                  <h3 className="text-black-900 font-bold">Ingredient Benefits</h3>
              <p className="text-sm text-gray-800 font-medium ">Convert ingredients into clear customer-friendly benefits.</p>
              </div>
               </div>
                 <div className="flex ">
            <div className="bg-[#FDECE3] rounded-full p-2.5 text-[#F2722B] mr-3"><Brain/></div>
              <div>
                  <h3 className="text-black-900 font-bold">AI Product Descriptions</h3>
              <p className="text-sm text-gray-800 font-medium ">Generate professional product descriptions in seconds.</p>
              </div>
               </div>
                <div className="flex ">
            <div className="bg-[#FDECE3] rounded-full p-2.5 text-[#F2722B] mr-3"><Globe/></div>
              <div>
                  <h3 className="text-black-900 font-bold">SEO Keyword Suggestions</h3>
              <p className="text-sm text-gray-800 font-medium ">Discover relevant keywords to improve product visibility."</p>
              </div>
               </div>
              <div className="flex ">
            <div className="bg-[#FDECE3] rounded-full p-2.5 text-[#F2722B] mr-3"><ShoppingCart/></div>
              <div>
                  <h3 className="text-black-900 font-bold">E-commerce Optimization</h3>
              <p className="text-sm text-gray-800 font-medium ">Generate content optimized for online marketplaces."</p>
              </div>
               </div> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}