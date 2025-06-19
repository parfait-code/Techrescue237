"use client";
import React from "react";
import { ArrowRight, Shield, Cloud, Network } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const HeroSection = () => {
  const sectionRef = useRef(null);
  const leftColumnRef = useRef(null);
  const rightColumnRef = useRef(null);
  const ctaRef = useRef(null);

  // Scroll hook for parallax effects
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Scroll-based transformations
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  // useInView hooks to detect visibility
  const isLeftColumnInView = useInView(leftColumnRef, {
    once: true,
    margin: "-100px",
  });
  const isRightColumnInView = useInView(rightColumnRef, {
    once: true,
    margin: "-100px",
  });
  const isCtaInView = useInView(ctaRef, { once: true, margin: "-50px" });

  // Simplified animation variants
  const fadeInUp = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  const fadeInLeft = {
    hidden: {
      opacity: 0,
      x: -30,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  const fadeInRight = {
    hidden: {
      opacity: 0,
      x: 30,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  // Simplified child variants
  const childVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  // Simplified card variants
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: i * 0.1,
      },
    }),
    hover: {
      y: -4,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
  };

  // Simplified badge variants
  const badgeVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  // Simplified button variants
  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ opacity }}
    >
      {/* Animated background with parallax */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white"
        style={{ y }}
      />

      {/* Subtle particle effect */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)",
          backgroundSize: "1000px 1000px",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            ref={leftColumnRef}
            className="space-y-8"
            variants={fadeInLeft}
            initial="hidden"
            animate={isLeftColumnInView ? "visible" : "hidden"}
          >
            <div className="space-y-6">
              <motion.div variants={badgeVariants}>
                <div className="inline-flex items-center px-3 py-1 bg-blue-50 border border-blue-100 rounded-full text-blue-700 text-sm font-medium">
                  IT Infrastructure • Recognized Expertise
                </div>
              </motion.div>

              <motion.h1
                className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight"
                variants={childVariants}
              >
                Modernize your IT infrastructure
                <motion.span
                  className="text-blue-600"
                  initial={{ opacity: 0, x: -20 }}
                  animate={
                    isLeftColumnInView
                      ? { opacity: 1, x: 0 }
                      : { opacity: 0, x: -20 }
                  }
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  {" "}
                  securely
                </motion.span>
              </motion.h1>

              <motion.p
                className="text-lg text-slate-600 leading-relaxed max-w-lg"
                variants={childVariants}
              >
                Specialists in local networks, cloud migration, and security. We
                optimize your infrastructure for maximum performance and
                enhanced security.
              </motion.p>
            </div>

            {/* CTA */}
            <motion.div
              ref={ctaRef}
              className="flex flex-col sm:flex-row gap-4"
              initial="hidden"
              animate={isCtaInView ? "visible" : "hidden"}
            >
              <motion.div variants={buttonVariants} whileHover="hover">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 shadow-lg hover:shadow-xl"
                  >
                    Audit
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column - Services Grid */}
          <motion.div
            ref={rightColumnRef}
            className="space-y-6"
            variants={fadeInRight}
            initial="hidden"
            animate={isRightColumnInView ? "visible" : "hidden"}
          >
            {/* Service cards */}
            <div className="space-y-4">
              {[
                {
                  icon: Network,
                  title: "Network Infrastructure",
                  description:
                    "Secure architecture and performance optimization",
                  bgColor: "bg-blue-100",
                  iconColor: "text-blue-600",
                },
                {
                  icon: Cloud,
                  title: "Cloud Migration",
                  description: "Secure transition to AWS, Azure",
                  bgColor: "bg-purple-100",
                  iconColor: "text-purple-600",
                },
                {
                  icon: Shield,
                  title: "Cybersecurity",
                  description: "Advanced protection and continuous monitoring",
                  bgColor: "bg-green-100",
                  iconColor: "text-green-600",
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-lg transition-all duration-300 cursor-pointer backdrop-blur-sm"
                  variants={cardVariants}
                  custom={index}
                  whileHover="hover"
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <div className="flex items-start space-x-4">
                    <div
                      className={`w-10 h-10 ${service.bgColor} rounded-lg flex items-center justify-center flex-shrink-0`}
                    >
                      <service.icon
                        className={`w-5 h-5 ${service.iconColor}`}
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">
                        {service.title}
                      </h3>
                      <p className="text-slate-600 text-sm">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Success indicator */}
            <motion.div
              className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-6 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              whileHover={{
                scale: 1.01,
                transition: { duration: 0.2 },
              }}
            >
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <Shield className="w-4 h-4 text-green-600" />
                </div>
                <span className="font-semibold text-slate-900">
                  Guaranteed Security
                </span>
              </div>
              <p className="text-sm text-slate-600">
                Infrastructure protected by enterprise-level security protocols
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
