"use client";
import React, { useState } from "react";
import {
  Code,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  // Remplacez YOUR_FORMSPARK_ID par votre ID FormSpark pour la newsletter
  const FORMSPARK_NEWSLETTER_ID = "form_v1_QUWzXEgFhjjQkZSr3Q6GSG4g";

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    try {
      const response = await fetch(
        `https://submit-form.com/${FORMSPARK_NEWSLETTER_ID}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            email: email,
            formType: "newsletter",
            source: "footer",
          }),
        }
      );

      if (response.ok) {
        setMessage("Merci pour votre inscription à notre newsletter !");
        setEmail("");
      } else {
        setMessage("Une erreur s'est produite. Veuillez réessayer.");
      }
    } catch (error) {
      setMessage("Une erreur s'est produite. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    {
      name: "Local Networks & Security",
      href: "/services/network-infrastructure",
    },
    { name: "Cloud Migration", href: "/services/cloud-migration" },
    {
      name: "Infrastructure Management",
      href: "/services/infrastructure-management",
    },
    {
      name: "Application Development",
      href: "/services/application-development",
    },
  ];

  const company = [
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Terms of Service", href: "/legal" },
    { name: "Privacy Policy", href: "/policy" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="lg:flex-1">
              <h3 className="text-2xl font-bold mb-2">
                Stay informed about the latest tech trends
              </h3>
              <p className="text-gray-400 max-w-md">
                Receive our expert advice, industry news and exclusive offers
                directly in your inbox.
              </p>
            </div>
            <div className="mt-6 lg:mt-0 lg:flex-shrink-0">
              <form onSubmit={handleNewsletterSubmit} className="flex max-w-md">
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isSubmitting}
                  className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-r-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <ArrowRight className="w-5 h-5" />
                  )}
                </button>
              </form>
              {message && (
                <p
                  className={`mt-2 text-sm ${
                    message.includes("Merci")
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  {message}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Code className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">TechRescue247</span>
            </div>

            <p className="text-gray-400 leading-relaxed max-w-md">
              Your trusted partner for digital transformation. We create
              innovative solutions that propel your business towards success.
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">+237 678 830 036</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">contact@TechRescue247.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">
                  Mimboman Terminus, Yaounde-Cameroon
                </span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    href={`${service.href}`}
                    className="text-gray-400 hover:text-white transition-colors whitespace-nowrap"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              {company.map((item, index) => (
                <li key={index}>
                  <Link
                    href={`${item.href}`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-gray-400">
                © 2025 TechSolutions. All rights reserved.
              </p>
            </div>

            <div className="flex items-center space-x-2 text-gray-400">
              <span className="text-sm">Made with</span>
              <span className="text-red-500">❤️</span>
              <span className="text-sm">in Yaounde</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
