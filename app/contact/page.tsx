"use client";
import React, { useRef, useState, useEffect } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  ArrowRight,
  MessageSquare,
  Calendar,
  Users,
  Shield,
} from "lucide-react";

const ContactPage = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const formRef = useRef(null);
  const infoRef = useRef(null);
  const ctaRef = useRef(null);

  // Form states
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState({
    header: false,
    form: false,
    info: false,
    cta: false,
  });

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const section = entry.target.getAttribute("data-section");
            setIsVisible((prev) => ({ ...prev, [section]: true }));
          }
        });
      },
      { threshold: 0.1, rootMargin: "-100px" }
    );

    if (headerRef.current) observer.observe(headerRef.current);
    if (formRef.current) observer.observe(formRef.current);
    if (infoRef.current) observer.observe(infoRef.current);
    if (ctaRef.current) observer.observe(ctaRef.current);

    return () => observer.disconnect();
  }, []);

  // Form handling
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate sending
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);
  };

  // Contact data
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      value: "+237 678 830 036",
      subtitle: "Mon-Fri 8am-6pm",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      icon: Mail,
      title: "Email",
      value: "contact@techtescue247.com",
      subtitle: "Response within 2h",
      bgColor: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      icon: MapPin,
      title: "Address",
      value: "Mimboman Terminus, Yaoundé-Cameroon",
      subtitle: "By appointment",
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600",
    },
    {
      icon: Clock,
      title: "Emergency",
      value: "24/7 Support",
      subtitle: "For premium clients",
      bgColor: "bg-orange-100",
      iconColor: "text-orange-600",
    },
  ];

  const services = [
    "Network Infrastructure",
    "Cloud Migration",
    "Cybersecurity",
    "Application Development",
    "Support & Maintenance",
    "Audit & Consulting",
  ];

  const quickActions = [
    {
      icon: Calendar,
      title: "Schedule an audit",
      description: "Free infrastructure audit",
      color: "blue",
    },
    {
      icon: MessageSquare,
      title: "Live chat",
      description: "Immediate response from our experts",
      color: "green",
    },
    {
      icon: Users,
      title: "Meet the team",
      description: "On-site or video conference presentation",
      color: "purple",
    },
  ];

  return (
    <div
      ref={sectionRef}
      className="min-h-screen bg-gradient-to-b from-slate-50 to-white overflow-hidden relative"
    >
      {/* Animated background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)",
          backgroundSize: "1200px 1200px",
          animation: "float 30s ease-in-out infinite alternate",
        }}
      />

      <style jsx>{`
        @keyframes float {
          0% {
            background-position: 0% 0%;
          }
          100% {
            background-position: 100% 100%;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(60px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-60px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(60px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        @keyframes bounce {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes pulse {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        @keyframes slideRight {
          0% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(5px);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-fadeInLeft {
          animation: fadeInLeft 0.8s ease-out forwards;
        }

        .animate-fadeInRight {
          animation: fadeInRight 0.8s ease-out forwards;
        }

        .animate-bounce-slow {
          animation: bounce 2s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse 3s ease-in-out infinite;
        }

        .animate-slide-right {
          animation: slideRight 2s ease-in-out infinite;
        }

        .stagger-1 {
          animation-delay: 0.1s;
        }
        .stagger-2 {
          animation-delay: 0.2s;
        }
        .stagger-3 {
          animation-delay: 0.3s;
        }
        .stagger-4 {
          animation-delay: 0.4s;
        }
        .stagger-5 {
          animation-delay: 0.5s;
        }
        .stagger-6 {
          animation-delay: 0.6s;
        }
      `}</style>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header Section */}
        <div
          ref={headerRef}
          data-section="header"
          className={`text-center space-y-6 mb-16 transition-all duration-1000 ${
            isVisible.header ? "animate-fadeInUp" : "opacity-0"
          }`}
        >
          <div className="stagger-1">
            <div className="inline-flex items-center px-3 py-1 bg-blue-50 border border-blue-100 rounded-full text-blue-700 text-sm font-medium hover:scale-105 transition-transform duration-300">
              <MessageSquare className="w-4 h-4 mr-2" />
              Contact Us
            </div>
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight stagger-2">
            Let&apos;s discuss your
            <span className="text-blue-600"> infrastructure</span> project
          </h1>

          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto stagger-3">
            Our team of experts is available to analyze your needs and offer you
            the best technological solutions.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          {/* Contact Form */}
          <div
            ref={formRef}
            data-section="form"
            className={`transition-all duration-1000 ${
              isVisible.form ? "animate-fadeInLeft" : "opacity-0"
            }`}
          >
            <div className="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center hover:rotate-12 hover:scale-110 transition-transform duration-300">
                  <Send className="w-5 h-5 text-blue-600" />
                </div>
                <h2 className="text-xl font-semibold text-slate-900">
                  Request a Quote
                </h2>
              </div>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    {["name", "email"].map((field, index) => (
                      <div key={field} className={`stagger-${index + 1}`}>
                        <label className="block text-sm font-medium text-slate-700 mb-2 capitalize">
                          {field === "name" ? "Full Name" : "Email"}
                          <span className="text-red-500 ml-1">*</span>
                        </label>
                        <input
                          type={field === "email" ? "email" : "text"}
                          name={field}
                          value={formData[field]}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-slate-400 focus:scale-105"
                          placeholder={
                            field === "name"
                              ? "John Doe"
                              : "johndoe@company.com"
                          }
                        />
                      </div>
                    ))}
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    {["company", "phone"].map((field, index) => (
                      <div key={field} className={`stagger-${index + 3}`}>
                        <label className="block text-sm font-medium text-slate-700 mb-2 capitalize">
                          {field === "company" ? "Company" : "Phone"}
                        </label>
                        <input
                          type={field === "phone" ? "tel" : "text"}
                          name={field}
                          value={formData[field]}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-slate-400 focus:scale-105"
                          placeholder={
                            field === "company"
                              ? "Your company"
                              : "+237 XX XX XX XX"
                          }
                        />
                      </div>
                    ))}
                  </div>

                  <div className="stagger-5">
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Desired Service
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-slate-400 focus:scale-105"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="stagger-6">
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Describe your project
                      <span className="text-red-500 ml-1">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none hover:border-slate-400 focus:scale-105"
                      placeholder="Describe your needs, constraints and objectives..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 flex items-center justify-center space-x-2 font-medium"
                  >
                    <span>Send Request</span>
                    <ArrowRight className="w-4 h-4 animate-slide-right" />
                  </button>
                </form>
              ) : (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce-slow">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    Request sent!
                  </h3>
                  <p className="text-slate-600 mb-4">
                    We will contact you within 2 business hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="border border-slate-300 text-slate-700 hover:bg-slate-50 px-6 py-2 rounded-lg transition-colors duration-200"
                  >
                    New request
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Contact Information */}
          <div
            ref={infoRef}
            data-section="info"
            className={`space-y-6 transition-all duration-1000 ${
              isVisible.info ? "animate-fadeInRight" : "opacity-0"
            }`}
          >
            {/* Contact Cards */}
            <div className="grid gap-4">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className={`bg-white/80 backdrop-blur-sm border border-slate-200 rounded-lg p-6 hover:shadow-lg transition-all duration-300 cursor-pointer hover:-translate-y-2 hover:scale-105 stagger-${
                    index + 1
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    <div
                      className={`w-12 h-12 ${info.bgColor} rounded-lg flex items-center justify-center flex-shrink-0 hover:rotate-12 hover:scale-110 transition-transform duration-300`}
                    >
                      <info.icon className={`w-6 h-6 ${info.iconColor}`} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">
                        {info.title}
                      </h3>
                      <p className="text-slate-800 font-medium mb-1">
                        {info.value}
                      </p>
                      <p className="text-slate-600 text-sm">{info.subtitle}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Actions */}
            {/* <div className="bg-slate-900 rounded-lg p-6 relative overflow-hidden hover:scale-105 hover:shadow-2xl transition-all duration-300">
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  background:
                    "radial-gradient(circle at 30% 30%, #3b82f6 0%, transparent 70%)",
                  animation: "pulse 8s ease-in-out infinite",
                }}
              />

              <div className="relative z-10">
                <h3 className="text-lg font-semibold text-white mb-4">
                  Quick Actions
                </h3>

                <div className="space-y-3">
                  {quickActions.map((action, index) => (
                    <div
                      key={index}
                      className={`flex items-center space-x-3 p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-200 cursor-pointer hover:translate-x-2 hover:scale-105 stagger-${
                        index + 1
                      }`}
                    >
                      <action.icon className="w-5 h-5 text-white flex-shrink-0" />
                      <div>
                        <p className="text-white font-medium text-sm">
                          {action.title}
                        </p>
                        <p className="text-slate-300 text-xs">
                          {action.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div> */}
          </div>
        </div>

        {/* Final CTA Section */}
        <div
          ref={ctaRef}
          data-section="cta"
          className={`bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-8 lg:p-12 text-center relative overflow-hidden transition-all duration-1000 ${
            isVisible.cta ? "animate-fadeInUp" : "opacity-0"
          }`}
        >
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 60%)",
              backgroundSize: "600px 600px",
              animation: "float 20s ease-in-out infinite alternate",
            }}
          />

          <div className="relative z-10">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center animate-pulse-slow">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
            </div>

            <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
              Secure your infrastructure today
            </h3>

            <p className="text-slate-600 text-lg mb-6 max-w-2xl mx-auto">
              Join over 300 companies who trust us with their IT infrastructure.
              Free audit with no commitment.
            </p>

            <div className="flex items-center justify-center space-x-6 text-sm text-slate-500">
              <span>✓ Response within 2h</span>
              <span>✓ Free audit</span>
              <span>✓ Certified experts</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
