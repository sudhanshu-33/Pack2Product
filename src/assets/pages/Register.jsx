import React, { useState } from "react";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ClipboardList,
  Globe,
  ShoppingCart,
  Brain,
  User,
} from "lucide-react";
import LOGO from "../images/logo.png";
import BACKGROUND_IMAGE from "../images/loginpage.jpg";
function Register() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="min-h-screen bg-neutral-900 p-3 sm:p-6 lg:p-8">
      
      <div
        className="relative mx-auto flex w-full max-w-6xl flex-col overflow-hidden rounded-3xl shadow-2xl lg:flex-row"
        style={{
          backgroundImage: `url(${BACKGROUND_IMAGE})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#A7AD64",
        }}
      >
        
        {/* LEFT SECTION */}
        <div className="relative z-10 m-2 flex flex-col rounded-2xl bg-white p-6 sm:p-8 lg:w-[400px]">
          
          {/* Logo */}
          <div className="flex flex-col items-center text-center">
            
            <img
              src={LOGO}
              alt="Pack2Product Logo"
              className="h-14 w-14 object-contain"
            />
            <h1 className="mt-2 text-xl font-bold">
              
              <span className="text-[#F2722B]">Pack2Product</span>
            </h1>
            <p className="text-[12px] text-gray-400">
              
              Food Brand Assistant
            </p>
          </div>
          {/* Heading */}
          <div className="mt-3 text-center">
            
            <h2 className="text-2xl font-bold text-gray-900">
              
              Create Account
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              
              Join our community and grow your food brand.
            </p>
          </div>
          {/* Form */}
          <div className="mt-8 flex flex-col gap-6">
            
            {/* Full Name */}
            <div className="relative">
              
              <User className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Full Name"
                className="w-full rounded-full border border-gray-200 bg-white py-3 pl-11 pr-4 text-sm text-gray-700 outline-none focus:border-orange-300 focus:ring-2 focus:ring-orange-100"
              />
            </div>
            {/* Email */}
            <div className="relative">
              
              <Mail className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-full border border-gray-200 bg-white py-3 pl-11 pr-4 text-sm text-gray-700 outline-none focus:border-orange-300 focus:ring-2 focus:ring-orange-100"
              />
            </div>
            {/* Password */}
            <div className="relative">
              
              <Lock className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full rounded-full border border-gray-200 bg-white py-3 pl-11 pr-11 text-sm text-gray-700 outline-none focus:border-orange-300 focus:ring-2 focus:ring-orange-100"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                
                {showPassword ? (
                  <Eye className="h-4 w-4" />
                ) : (
                  <EyeOff className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>
          {/* Button */}
          <button className="mt-8 w-full rounded-full bg-[#F2722B] py-3 text-sm font-semibold text-white shadow-lg shadow-orange-200 transition hover:bg-[#e0631d]">
            
            Create Account
          </button>
          {/* Terms */}
          <p className="mt-4 text-center text-[11px] leading-relaxed text-gray-400">
            
            By creating an account, you agree to our
            <span className="font-medium text-[#F2722B]">
              
              Terms of Service
            </span>
            and
            <span className="font-medium text-[#F2722B]">
              
              Privacy Policy
            </span>
            .
          </p>
          {/* Login Link */}
          <p className="mt-6 text-center text-sm text-gray-600">
            
            Already have an account?
            <span className="cursor-pointer font-semibold text-[#F2722B]">
              
              Login
            </span>
          </p>
        </div>
        {/* RIGHT SECTION */}
        <div className="relative z-10 flex min-h-[350px] flex-1 flex-col justify-center p-6 sm:p-8 lg:p-12">
          
          <div className="max-w-md">
            
            <h2 className="text-2xl font-bold leading-tight text-gray-900 sm:text-3xl lg:text-4xl">
              
              <span className="text-[#F2722B]">Describe</span> Product... <br />
              Improve <span className="text-[#F2722B]">Visibility.</span> <br />
              <span className="text-[#F2722B]">Boost</span> Sales.
            </h2>
            <div className="mt-8 flex flex-col gap-5">
              
              <div className="flex items-start gap-3">
                
                <div className="rounded-full bg-[#FDECE3] p-2.5 text-[#F2722B]">
                  
                  <ClipboardList />
                </div>
                <div>
                  
                  <h3 className="font-bold"> Ingredient Benefits </h3>
                  <p className="text-sm text-gray-800">
                    
                    Convert ingredients into clear customer-friendly
                    benefits.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                
                <div className="rounded-full bg-[#FDECE3] p-2.5 text-[#F2722B]">
                  
                  <Brain />
                </div>
                <div>
                  
                  <h3 className="font-bold"> AI Product Descriptions </h3>
                  <p className="text-sm text-gray-800">
                    
                    Generate professional product descriptions in seconds.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                
                <div className="rounded-full bg-[#FDECE3] p-2.5 text-[#F2722B]">
                  
                  <Globe />
                </div>
                <div>
                  
                  <h3 className="font-bold"> SEO Keyword Suggestions </h3>
                  <p className="text-sm text-gray-800">
                    
                    Discover relevant keywords to improve product
                    visibility.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                
                <div className="rounded-full bg-[#FDECE3] p-2.5 text-[#F2722B]">
                  
                  <ShoppingCart />
                </div>
                <div>
                  
                  <h3 className="font-bold"> E-commerce Optimization </h3>
                  <p className="text-sm text-gray-800">
                    
                    Generate content optimized for online marketplaces.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Register;
