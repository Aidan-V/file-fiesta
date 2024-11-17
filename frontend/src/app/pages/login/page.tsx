"use client";

import React from 'react';
import { Eye, EyeOff, Mail } from 'lucide-react';
import Image from 'next/image'

const LoginPage = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="bg-white p-8 rounded-lg shadow-sm">
          <div className="mb-12">
            <Image
              src="/images/pnc-logo-rev.svg.png"
              width={500}
              height={100}
              alt="Picture of the author"
            />
          </div>

          <form className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm text-gray-600">Email address</label>
              <div className="relative">
                <input
                  type="email"
                  className="w-full p-3 border rounded-lg pr-10 text-black focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Enter your email"
                />
                <Mail className="w-5 h-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-black-400" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm text-gray-600">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full p-3 border rounded-lg pr-10 text-black focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5 text-gray-400" />
                  ) : (
                    <Eye className="w-5 h-5 text-gray-400" />
                  )}
                </button>
              </div>
              <a href="#" className="text-sm text-orange-500 hover:text-orange-600 block text-right">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition-colors"
            >
              Login
            </button>

            <div className="text-center">
              <span className="text-gray-500">OR</span>
            </div>

            <button
              type="button"
              className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Sign up
            </button>
          </form>
        </div>

        <div className="hidden md:flex items-center justify-center">
          <Image
            src="/images/Mobile login-pana 1.png"
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
