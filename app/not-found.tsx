"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Home, ArrowLeft, Search, AlertCircle } from "lucide-react";

export default function NotFound() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-16 md:py-32">
      <div className="max-w-md w-full text-center">
        {/* Icône principale avec animation */}
        <div className="mb-8 relative">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-white rounded-full shadow-lg border border-slate-200 mb-6 animate-bounce">
            <AlertCircle className="w-12 h-12 text-slate-400" />
          </div>

          {/* Éléments décoratifs flottants */}
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-400 rounded-full animate-pulse opacity-70"></div>
          <div className="absolute -bottom-1 -left-3 w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-75 opacity-70"></div>
          <div className="absolute top-1/2 -right-6 w-2 h-2 bg-pink-400 rounded-full animate-pulse delay-150 opacity-70"></div>
        </div>

        {/* Main title */}
        <div className="mb-6">
          <h1 className="text-6xl font-bold text-slate-800 mb-2 animate-fadeIn">
            404
          </h1>
          <h2 className="text-2xl font-semibold text-slate-700 mb-4">
            Page Not Found
          </h2>
          <p className="text-slate-500 leading-relaxed">
            The page you&apos;re looking for seems to have vanished into the
            digital void. Maybe it was moved or no longer exists?
          </p>
        </div>

        {/* Action suggestions */}
        <div className="space-y-4 mb-8">
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg"
            >
              <Home className="w-4 h-4" />
              Back to Home
            </Link>

            <button
              onClick={() => router.back()}
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-slate-700 px-6 py-3 rounded-lg font-medium border border-slate-300 transition-all duration-200 hover:scale-105 hover:shadow-md"
            >
              <ArrowLeft className="w-4 h-4" />
              Previous Page
            </button>
          </div>
        </div>

        {/* Suggested search bar */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-200">
          <div className="flex items-center gap-3 mb-3">
            <Search className="w-5 h-5 text-slate-400" />
            <h3 className="font-medium text-slate-700">
              Maybe you&apos;re looking for...
            </h3>
          </div>

          <div className="flex flex-wrap gap-2">
            <Link
              href="/about"
              className="inline-block bg-slate-100 hover:bg-slate-200 text-slate-600 px-3 py-1 rounded-full text-sm transition-colors duration-200"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="inline-block bg-slate-100 hover:bg-slate-200 text-slate-600 px-3 py-1 rounded-full text-sm transition-colors duration-200"
            >
              Contact
            </Link>
            {/* <Link
              href="/services"
              className="inline-block bg-slate-100 hover:bg-slate-200 text-slate-600 px-3 py-1 rounded-full text-sm transition-colors duration-200"
            >
              Services
            </Link> */}
          </div>
        </div>

        {/* Help message */}
        <p className="text-sm text-slate-400 mt-8">
          If the problem persists, feel free to{" "}
          <Link
            href="/contact"
            className="text-blue-600 hover:text-blue-700 underline"
          >
            contact us
          </Link>
        </p>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
      `}</style>
    </div>
  );
}
