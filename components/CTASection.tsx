"use client";
import React, { useRef } from "react";
import { ArrowRight, Phone, Mail, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

const CTASection = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const benefitsRef = useRef(null);
  const contactRef = useRef(null);
  const trustRef = useRef(null);
  const expertiseRef = useRef(null);

  // Scroll hook for parallax effects
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Scroll-based transformations
  const y = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, 0.8]
  );

  // useInView hooks to detect visibility
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });
  const isBenefitsInView = useInView(benefitsRef, {
    once: true,
    margin: "-50px",
  });
  const isContactInView = useInView(contactRef, {
    once: true,
    margin: "-50px",
  });
  const isTrustInView = useInView(trustRef, { once: true, margin: "-50px" });
  const isExpertiseInView = useInView(expertiseRef, {
    once: true,
    margin: "-50px",
  });

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

  // Variants for contact cards
  const contactCardVariants = {
    hidden: {
      opacity: 0,
      x: -60,
      scale: 0.9,
    },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1],
        delay: i * 0.2,
      },
    }),
    hover: {
      scale: 1.02,
      y: -5,
      boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  // Variants for icons
  const iconVariants = {
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
        delay: i * 0.2 + 0.3,
      },
    }),
    hover: {
      scale: 1.2,
      rotate: 10,
      transition: { duration: 0.2 },
    },
  };

  // Variants for benefits
  const benefitItemVariants = {
    hidden: {
      opacity: 0,
      x: -30,
      scale: 0.8,
    },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: i * 0.1,
      },
    }),
    hover: {
      x: 10,
      scale: 1.05,
      transition: { duration: 0.2 },
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

  // Variants for statistics
  const statVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 10,
        delay: i * 0.2,
      },
    }),
    hover: {
      scale: 1.1,
      color: "#3b82f6",
      transition: { duration: 0.2 },
    },
  };

  // Variants for expertise cards
  const expertiseCardVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.8,
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 12,
        delay: i * 0.15,
      },
    }),
    hover: {
      scale: 1.05,
      y: -10,
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

  const benefits = [
    "Free technical consultation",
    "Detailed quote within 48h",
    "Personalized guidance",
    "Ongoing support included",
  ];

  const contactOptions = [
    {
      icon: Phone,
      title: "Phone consultation",
      description: "Let's discuss your needs directly",
      contact: "+237 678 830 036",
      availability: "Mon-Fri: 9am-6pm",
      action: "Call us",
    },
    {
      icon: Mail,
      title: "Email request",
      description: "Describe your project in detail",
      contact: "contact@techsolutions.com",
      availability: "Response within 24h",
      action: "Email us",
    },
  ];

  const expertiseItems = [
    {
      title: "Certified Expertise",
      description: "Team certified in AWS, Azure and enterprise technologies",
    },
    {
      title: "Enhanced Security",
      description: "ISO 27001 compliance and protection of your critical data",
    },
    {
      title: "Complete Support",
      description: "From initial audit to maintenance, support at every step",
    },
  ];

  const handleStartProject = () => {
    // Navigate to contact page
    window.location.href = "/contact";
  };

  return (
    <motion.section
      ref={sectionRef}
      id="contact"
      className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden"
      style={{ opacity }}
    >
      {/* Animated background with subtle gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
      />

      {/* Floating particles */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)",
          backgroundSize: "600px 600px",
        }}
      />

      <motion.div
        className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
        style={{ y }}
      >
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Main CTA */}
          <motion.div
            ref={headerRef}
            className="space-y-8"
            variants={fadeInUp}
            initial="hidden"
            animate={isHeaderInView ? "visible" : "hidden"}
          >
            <div className="space-y-6">
              <motion.div variants={badgeVariants}>
                <motion.div
                  className="inline-flex items-center px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium"
                  whileHover={{ scale: 1.05 }}
                  animate={{
                    boxShadow: [
                      "0 0 0 0 rgba(255, 255, 255, 0)",
                      "0 0 0 8px rgba(255, 255, 255, 0.1)",
                      "0 0 0 0 rgba(255, 255, 255, 0)",
                    ],
                  }}
                  transition={{
                    boxShadow: { duration: 2.5, repeat: Infinity, delay: 1 },
                  }}
                >
                  Free Consultation
                </motion.div>
              </motion.div>

              <motion.h2
                className="text-3xl lg:text-4xl font-bold text-white leading-tight"
                variants={childVariants}
              >
                Let&apos;s transform your{" "}
                <motion.span
                  className="text-blue-400"
                  initial={{ opacity: 0, x: -20 }}
                  animate={
                    isHeaderInView
                      ? { opacity: 1, x: 0 }
                      : { opacity: 0, x: -20 }
                  }
                  transition={{ delay: 0.8, duration: 0.8 }}
                >
                  IT infrastructure
                </motion.span>{" "}
                together
              </motion.h2>

              <motion.p
                className="text-lg text-slate-300 leading-relaxed"
                variants={childVariants}
              >
                Benefit from our expertise to optimize your infrastructure,
                secure your data, and accelerate your digital transformation.
              </motion.p>
            </div>

            {/* Benefits List */}
            <motion.div
              ref={benefitsRef}
              className="space-y-4"
              variants={staggerContainer}
              initial="hidden"
              animate={isBenefitsInView ? "visible" : "hidden"}
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3 cursor-pointer"
                  variants={benefitItemVariants}
                  custom={index}
                  whileHover="hover"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  </motion.div>
                  <span className="text-slate-300 text-sm">{benefit}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Primary CTA */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              variants={staggerContainer}
              initial="hidden"
              animate={isHeaderInView ? "visible" : "hidden"}
            >
              {[
                {
                  text: "Start your project",
                  icon: ArrowRight,
                  primary: true,
                },
              ].map((button, index) => (
                <motion.div
                  key={index}
                  variants={buttonVariants}
                  custom={index}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <Button
                    size="lg"
                    className={
                      button.primary
                        ? "bg-blue-600 hover:bg-blue-700 text-white px-8"
                        : "border-slate-600 text-slate-300 hover:bg-slate-800 px-8"
                    }
                    variant={button.primary ? "default" : "outline"}
                    onClick={handleStartProject}
                  >
                    {button.text}
                    {button.icon && (
                      <motion.div
                        className="ml-2"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <button.icon className="w-4 h-4" />
                      </motion.div>
                    )}
                  </Button>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Contact Options */}
          <motion.div
            ref={contactRef}
            className="space-y-6"
            variants={fadeInUp}
            initial="hidden"
            animate={isContactInView ? "visible" : "hidden"}
          >
            <motion.h3
              className="text-xl font-semibold text-white mb-6"
              variants={childVariants}
            >
              Contact our team
            </motion.h3>

            <motion.div
              className="space-y-4"
              variants={staggerContainer}
              initial="hidden"
              animate={isContactInView ? "visible" : "hidden"}
            >
              {contactOptions.map((option, index) => (
                <motion.div
                  key={index}
                  variants={contactCardVariants}
                  custom={index}
                  whileHover="hover"
                >
                  <Card className="bg-white/5 backdrop-blur-sm border-slate-700 hover:bg-white/10 transition-colors duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <motion.div
                          className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0"
                          variants={iconVariants}
                          custom={index}
                          whileHover="hover"
                        >
                          <option.icon className="w-5 h-5 text-white" />
                        </motion.div>
                        <div className="flex-1">
                          <motion.h4
                            className="font-semibold text-white mb-2"
                            initial={{ opacity: 0, x: -20 }}
                            animate={
                              isContactInView
                                ? { opacity: 1, x: 0 }
                                : { opacity: 0, x: -20 }
                            }
                            transition={{
                              delay: index * 0.2 + 0.5,
                              duration: 0.6,
                            }}
                          >
                            {option.title}
                          </motion.h4>
                          <motion.p
                            className="text-slate-400 text-sm mb-3"
                            initial={{ opacity: 0, y: 10 }}
                            animate={
                              isContactInView
                                ? { opacity: 1, y: 0 }
                                : { opacity: 0, y: 10 }
                            }
                            transition={{
                              delay: index * 0.2 + 0.7,
                              duration: 0.5,
                            }}
                          >
                            {option.description}
                          </motion.p>
                          <div className="space-y-1">
                            <motion.div
                              className="text-blue-400 font-medium"
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={
                                isContactInView
                                  ? { opacity: 1, scale: 1 }
                                  : { opacity: 0, scale: 0.8 }
                              }
                              transition={{
                                delay: index * 0.2 + 0.9,
                                duration: 0.5,
                              }}
                              whileHover={{ scale: 1.05, color: "#60a5fa" }}
                            >
                              {option.contact}
                            </motion.div>
                            <motion.div
                              className="text-slate-500 text-xs"
                              initial={{ opacity: 0, x: 10 }}
                              animate={
                                isContactInView
                                  ? { opacity: 1, x: 0 }
                                  : { opacity: 0, x: 10 }
                              }
                              transition={{
                                delay: index * 0.2 + 1.1,
                                duration: 0.5,
                              }}
                            >
                              {option.availability}
                            </motion.div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              ref={trustRef}
              className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700"
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={
                isTrustInView
                  ? { opacity: 1, scale: 1, y: 0 }
                  : { opacity: 0, scale: 0.9, y: 40 }
              }
              transition={{ duration: 0.8, ease: "easeOut" }}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
              }}
            >
              <div className="text-center space-y-3">
                <motion.div
                  className="text-2xl font-bold text-white"
                  variants={statVariants}
                  custom={0}
                  initial="hidden"
                  animate={isTrustInView ? "visible" : "hidden"}
                  whileHover="hover"
                >
                  100+
                </motion.div>
                <motion.div
                  className="text-slate-400 text-sm"
                  initial={{ opacity: 0, y: 10 }}
                  animate={
                    isTrustInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                  }
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  Infrastructure projects completed
                </motion.div>
                <div className="flex justify-center space-x-6 pt-3">
                  {[
                    { value: "99%", label: "Satisfaction" },
                    { value: "24/7", label: "Support" },
                  ].map((stat, index) => (
                    <div key={index} className="text-center">
                      <motion.div
                        className="text-lg font-semibold text-blue-400"
                        variants={statVariants}
                        custom={index + 1}
                        initial="hidden"
                        animate={isTrustInView ? "visible" : "hidden"}
                        whileHover="hover"
                      >
                        {stat.value}
                      </motion.div>
                      <motion.div
                        className="text-slate-500 text-xs"
                        initial={{ opacity: 0, y: 5 }}
                        animate={
                          isTrustInView
                            ? { opacity: 1, y: 0 }
                            : { opacity: 0, y: 5 }
                        }
                        transition={{
                          delay: index * 0.2 + 0.5,
                          duration: 0.5,
                        }}
                      >
                        {stat.label}
                      </motion.div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom section with expertise highlights */}
        <motion.div
          ref={expertiseRef}
          className="mt-16 pt-16 border-t border-slate-700"
          initial={{ opacity: 0, y: 60 }}
          animate={
            isExpertiseInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }
          }
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="grid md:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            animate={isExpertiseInView ? "visible" : "hidden"}
          >
            {expertiseItems.map((item, index) => (
              <motion.div
                key={index}
                className="text-center cursor-pointer"
                variants={expertiseCardVariants}
                custom={index}
                whileHover="hover"
              >
                <motion.div
                  className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4"
                  variants={iconVariants}
                  custom={index}
                  whileHover="hover"
                >
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                  >
                    <CheckCircle className="w-6 h-6 text-white" />
                  </motion.div>
                </motion.div>
                <motion.h4
                  className="font-semibold text-white mb-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={
                    isExpertiseInView
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 10 }
                  }
                  transition={{ delay: index * 0.2 + 0.5, duration: 0.6 }}
                >
                  {item.title}
                </motion.h4>
                <motion.p
                  className="text-slate-400 text-sm"
                  initial={{ opacity: 0, y: 10 }}
                  animate={
                    isExpertiseInView
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 10 }
                  }
                  transition={{ delay: index * 0.2 + 0.7, duration: 0.6 }}
                >
                  {item.description}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default CTASection;
