"use client";

import React, { useState, useEffect, ReactElement } from "react";
import {
  Menu,
  X,
  ChevronDown,
  Network,
  Cloud,
  Server,
  Code,
  Shield,
  Monitor,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const headerY = useTransform(scrollY, [0, 100], [0, -5]);
  const headerOpacity = useTransform(scrollY, [0, 50], [0.9, 0.95]);

  const services = [
    {
      name: "Local Networks & Security",
      icon: Network,
      href: "/services/network-infrastructure",
    },
    { name: "Cloud Migration", icon: Cloud, href: "/services/cloud-migration" },
    {
      name: "Infrastructure Management",
      icon: Server,
      href: "/services/infrastructure-management",
    },
    {
      name: "Application Development",
      icon: Code,
      href: "/services/application-development",
    },
    {
      name: "Monitoring & Support",
      icon: Monitor,
      href: "/",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest("header")) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMenuOpen]);

  // Close services dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isServicesOpen && !event.target.closest(".services-dropdown")) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isServicesOpen]);

  return (
    <>
      <motion.header
        style={{ y: headerY, opacity: headerOpacity }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm"
            : "bg-white/90 backdrop-blur-sm border-b border-slate-100"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <motion.div
              className="flex items-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Link href="/" className=" w-52">
                <AnimatePresence mode="wait">
                  {!isScrolled ? (
                    <motion.div
                      key="logo"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Image
                        src="/logo.png"
                        alt="TechRescue247 Logo"
                        width={200}
                        height={40}
                        className="object-contain"
                      />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="icon"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Image
                        src="/icon.png"
                        alt="TechRescue247 Icon"
                        width={32}
                        height={32}
                        className="object-contain"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <motion.nav
              className="hidden md:flex items-center space-x-1"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="/"
                  className="px-4 py-2 text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-lg transition-all duration-200 font-medium"
                >
                  Home
                </Link>
              </motion.div>

              {/* Services Dropdown */}
              <div className="relative services-dropdown">
                <motion.button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className={`flex items-center px-4 py-2 text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-lg transition-all duration-200 font-medium ${
                    isServicesOpen ? "text-blue-600 bg-slate-50" : ""
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Services
                  <motion.div
                    animate={{ rotate: isServicesOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="ml-1 w-4 h-4" />
                  </motion.div>
                </motion.button>

                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div
                      className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-xl border border-slate-200 py-2"
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                    >
                      {services.map((service, index) => (
                        <motion.div
                          key={service.name}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.2, delay: index * 0.05 }}
                          whileHover={{
                            x: 4,
                            backgroundColor: "rgb(248 250 252)",
                          }}
                        >
                          <Link
                            href={service.href}
                            className="flex items-center px-4 py-3 text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition-all duration-200 group"
                            onClick={() => setIsServicesOpen(false)}
                          >
                            <motion.div
                              className="w-8 h-8 bg-slate-100 group-hover:bg-blue-50 rounded-lg flex items-center justify-center mr-3 transition-colors duration-200"
                              whileHover={{ scale: 1.1, rotate: 5 }}
                            >
                              <service.icon className="w-4 h-4 text-slate-600 group-hover:text-blue-600 transition-colors duration-200" />
                            </motion.div>
                            <span className="text-sm font-medium">
                              {service.name}
                            </span>
                          </Link>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="/about"
                  className="px-4 py-2 text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-lg transition-all duration-200 font-medium"
                >
                  About Us
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="/contact"
                  className="px-4 py-2 text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-lg transition-all duration-200 font-medium"
                >
                  Contact Us
                </Link>
              </motion.div>
            </motion.nav>

            {/* CTA Button */}
            <motion.div
              className="hidden md:block"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <motion.div
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/contact">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-200 font-medium px-6">
                    Free Audit
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Mobile menu button */}
            <motion.div
              className="md:hidden"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <motion.button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-lg transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  animate={{ rotate: isMenuOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isMenuOpen ? (
                    <X className="w-6 h-6" />
                  ) : (
                    <Menu className="w-6 h-6" />
                  )}
                </motion.div>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm"
              onClick={() => setIsMenuOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Mobile Menu */}
            <motion.div
              className="fixed top-16 left-0 right-0 bg-white border-b border-slate-200 shadow-xl"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div className="px-4 py-6 space-y-1">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    href="/"
                    className="block px-4 py-3 text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-lg transition-all duration-200 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Home
                  </Link>
                </motion.div>

                {/* Mobile Services Section */}
                <motion.div
                  className="space-y-1"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.15 }}
                >
                  <div className="px-4 py-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Services
                  </div>
                  {services.map((service, index) => (
                    <motion.div
                      key={service.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Link
                        href={service.href}
                        className="flex items-center px-4 py-3 text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-lg transition-all duration-200 group"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <motion.div
                          className="w-8 h-8 bg-slate-100 group-hover:bg-blue-50 rounded-lg flex items-center justify-center mr-3 transition-colors duration-200"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                          <service.icon className="w-4 h-4 text-slate-600 group-hover:text-blue-600 transition-colors duration-200" />
                        </motion.div>
                        <span className="text-sm font-medium">
                          {service.name}
                        </span>
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.55 }}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    href="/about"
                    className="block px-4 py-3 text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-lg transition-all duration-200 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.6 }}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    href="/contact"
                    className="block px-4 py-3 text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-lg transition-all duration-200 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </motion.div>

                {/* Mobile CTA */}
                <motion.div
                  className="pt-4 border-t border-slate-200 mt-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.65 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link href="/contact">
                      <Button
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg font-medium"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Free Audit
                      </Button>
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
