"use client";
import React, { useRef } from "react";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Image from "next/image";
import CTA from "./CTA";

const TestimonialsSection = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const testimonialsRef = useRef(null);
  const statsRef = useRef(null);
  const ctaRef = useRef(null);

  // Scroll hook for parallax effects
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Scroll-based transformations
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, 0.8]
  );

  // useInView hooks to detect visibility
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });
  const isTestimonialsInView = useInView(testimonialsRef, {
    once: true,
    margin: "-50px",
  });
  const isStatsInView = useInView(statsRef, { once: true, margin: "-50px" });
  const isCtaInView = useInView(ctaRef, { once: true, margin: "-50px" });

  // Animation variants for containers
  const fadeInUp = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1],
        staggerChildren: 0.15,
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  // Variants for child elements
  const childVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.215, 0.61, 0.355, 1],
      },
    },
  };

  // Variants for testimonial cards
  const testimonialCardVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.9,
      rotateX: 15,
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1],
        delay: i * 0.2,
      },
    }),
    hover: {
      scale: 1.03,
      y: -8,
      rotateX: -2,
      boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  // Variants for stars
  const starVariants = {
    hidden: {
      scale: 0,
      rotate: -180,
      opacity: 0,
    },
    visible: (i: number) => ({
      scale: 1,
      rotate: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10,
        delay: i * 0.1 + 0.5,
      },
    }),
    hover: {
      scale: 1.2,
      rotate: 360,
      transition: { duration: 0.5 },
    },
  };

  // Variants for statistics
  const statVariants = {
    hidden: {
      opacity: 0,
      scale: 0.5,
      y: 30,
    },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 10,
        delay: i * 0.2,
      },
    }),
    hover: {
      scale: 1.1,
      y: -5,
      transition: { duration: 0.2 },
    },
  };

  // Variants for badge
  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8, y: -20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10,
      },
    },
  };

  // Variants for CTA buttons
  const buttonVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: i * 0.1,
      },
    }),
    hover: {
      scale: 1.05,
      y: -3,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
    tap: {
      scale: 0.98,
    },
  };

  // Variants for profile images
  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 0.5,
      rotate: -180,
    },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 12,
        delay: i * 0.2 + 0.8,
      },
    }),
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: { duration: 0.3 },
    },
  };

  const testimonials = [
    {
      name: "Jean-Pierre Moreau",
      role: "CIO",
      company: "French Industrial Group",
      image:
        "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      text: "The migration of our infrastructure to AWS was completed without any service interruption. The team handled the technical complexity with expertise and our IT costs decreased by 35%.",
      project: "AWS Cloud Migration",
      result: "35% cost reduction",
    },
    {
      name: "Marie Dubois",
      role: "Technical Director",
      company: "FinTech Solutions",
      image:
        "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      text: "Complete network security implementation with next-generation solutions. Zero security incidents since deployment and optimized network performance.",
      project: "Infrastructure Security",
      result: "0 security incidents",
    },
    {
      name: "Thomas Martin",
      role: "CEO",
      company: "Tech StartUp",
      image:
        "https://images.pexels.com/photos/3184394/pexels-photo-3184394.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      text: "Application developed with exceptional quality and on time. Intuitive interface, robust backend and impeccable technical support.",
      project: "Application Development",
      result: "On-time delivery",
    },
  ];

  const stats = [
    {
      number: "150+",
      label: "Completed projects",
    },
    {
      number: "99%",
      label: "Satisfied clients",
    },
    {
      number: "24/7",
      label: "Technical support",
    },
  ];

  return (
    <motion.section
      ref={sectionRef}
      id="testimonials"
      className="py-20 bg-slate-50 relative overflow-hidden"
      style={{ opacity }}
    >
      {/* Subtle animated background */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)",
          backgroundSize: "1000px 1000px",
        }}
      />

      <motion.div
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
        style={{ y }}
      >
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          className="text-center space-y-4 mb-16"
          variants={fadeInUp}
          initial="hidden"
          animate={isHeaderInView ? "visible" : "hidden"}
        >
          <motion.div variants={badgeVariants}>
            <motion.div
              className="inline-flex items-center px-3 py-1 bg-blue-50 border border-blue-100 rounded-full text-blue-700 text-sm font-medium"
              whileHover={{ scale: 1.05 }}
              animate={{
                boxShadow: [
                  "0 0 0 0 rgba(59, 130, 246, 0)",
                  "0 0 0 8px rgba(59, 130, 246, 0.1)",
                  "0 0 0 0 rgba(59, 130, 246, 0)",
                ],
              }}
              transition={{
                boxShadow: { duration: 2.5, repeat: Infinity, delay: 1 },
              }}
            >
              Client Testimonials
            </motion.div>
          </motion.div>

          <motion.h2
            className="text-3xl lg:text-4xl font-bold text-slate-900"
            variants={childVariants}
          >
            The{" "}
            <motion.span
              className="text-blue-600"
              initial={{ opacity: 0, x: -20 }}
              animate={
                isHeaderInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
              }
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              trust
            </motion.span>{" "}
            of our clients
          </motion.h2>

          <motion.p
            className="text-lg text-slate-600 max-w-2xl mx-auto"
            variants={childVariants}
          >
            Discover our clients&apos; feedback on their infrastructure and
            digital transformation projects.
          </motion.p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          ref={testimonialsRef}
          className="grid lg:grid-cols-3 gap-8 mb-16"
          variants={staggerContainer}
          initial="hidden"
          animate={isTestimonialsInView ? "visible" : "hidden"}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={testimonialCardVariants}
              custom={index}
              whileHover="hover"
              className="relative"
            >
              <Card className="border border-slate-200 hover:shadow-lg transition-shadow duration-300 bg-white h-full relative overflow-hidden">
                {/* Hover glow effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />

                <CardContent className="p-6 space-y-4 relative z-10">
                  {/* Quote and Rating */}
                  <div className="flex justify-between items-start">
                    <motion.div
                      whileHover={{ rotate: 15, scale: 1.2 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Quote className="w-6 h-6 text-blue-600 opacity-30" />
                    </motion.div>
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          variants={starVariants}
                          custom={i}
                          initial="hidden"
                          animate={isTestimonialsInView ? "visible" : "hidden"}
                          whileHover="hover"
                        >
                          <Star className="w-4 h-4 fill-blue-600 text-blue-600" />
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Testimonial Text */}
                  <motion.p
                    className="text-slate-700 leading-relaxed text-sm"
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      isTestimonialsInView
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: 20 }
                    }
                    transition={{ delay: index * 0.2 + 0.4, duration: 0.6 }}
                  >
                    &quot;{testimonial.text}&quot;
                  </motion.p>

                  {/* Project Details */}
                  <motion.div className="bg-slate-50 rounded-lg p-4 space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-medium text-slate-500 uppercase tracking-wide">
                        Project
                      </span>
                      <span className="text-sm text-slate-900 font-semibold">
                        {testimonial.project}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-medium text-slate-500 uppercase tracking-wide">
                        Result
                      </span>
                      <span className="text-sm text-blue-600 font-semibold">
                        {testimonial.result}
                      </span>
                    </div>
                  </motion.div>

                  {/* Client Info */}
                  <div className="flex items-center space-x-3 pt-4 border-t border-slate-100">
                    <motion.div
                      variants={imageVariants}
                      custom={index}
                      initial="hidden"
                      animate={isTestimonialsInView ? "visible" : "hidden"}
                      whileHover="hover"
                    >
                      <Image
                        height={40}
                        width={40}
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-md"
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={
                        isTestimonialsInView
                          ? { opacity: 1, x: 0 }
                          : { opacity: 0, x: -20 }
                      }
                      transition={{ delay: index * 0.2 + 0.8, duration: 0.6 }}
                    >
                      <div className="font-semibold text-slate-900 text-sm">
                        {testimonial.name}
                      </div>
                      <div className="text-xs text-slate-600">
                        {testimonial.role}
                      </div>
                      <motion.div
                        className="text-xs text-blue-600 font-medium"
                        whileHover={{ color: "#1d4ed8" }}
                      >
                        {testimonial.company}
                      </motion.div>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          ref={statsRef}
          className="mb-16"
          initial="hidden"
          animate={isStatsInView ? "visible" : "hidden"}
        >
          <motion.h3
            className="text-xl font-semibold text-slate-900 mb-8 text-center"
            variants={childVariants}
          >
            Our results in numbers
          </motion.h3>
          <motion.div
            className="grid lg:grid-cols-3 gap-6"
            variants={staggerContainer}
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded-lg p-6 text-center cursor-pointer"
              >
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-600 text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <CTA
          title="Join our satisfied clients"
          description="Trust our expertise to make your project successful. Our
            references speak for themselves."
        />
      </motion.div>
    </motion.section>
  );
};

export default TestimonialsSection;
