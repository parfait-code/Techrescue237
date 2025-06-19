"use client";
import React, { useRef } from "react";
import {
  Trophy,
  Clock,
  Users,
  Shield,
  Zap,
  Heart,
  CheckCircle,
} from "lucide-react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import CTA from "./CTA";

const WhyChooseSection = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const advantagesRef = useRef(null);
  const trustRef = useRef(null);
  const ctaRef = useRef(null);

  // Scroll hook for parallax effects
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Transformations based on scroll
  const y = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, 0.8]
  );

  // useInView hooks to detect visibility
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });
  const isAdvantagesInView = useInView(advantagesRef, {
    once: true,
    margin: "-50px",
  });
  const isTrustInView = useInView(trustRef, { once: true, margin: "-50px" });
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

  // Variants for advantage cards (similar to process steps)
  const cardVariants = {
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
      boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  // Variants for card icons
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

  // Variants for statistics with counter effect
  const statVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 10,
        delay: i * 0.2 + 0.5,
      },
    }),
    hover: {
      scale: 1.1,
      color: "#2563eb",
      transition: { duration: 0.2 },
    },
  };

  // Variants for quality commitments
  const trustCardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
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
      y: -5,
      boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
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

  // Variants for advantage details
  const detailVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: i * 0.1,
      },
    }),
  };

  const advantages = [
    {
      icon: Clock,
      title: "Fast Delivery",
      description:
        "Agile methodology ensuring deliveries within agreed timelines with impeccable quality.",
      stat: "98%",
      statLabel: "projects delivered on time",
      color: "blue",
      details: [
        "Agile methodology",
        "Iterative deliveries",
        "Quality control",
        "Deadline compliance",
      ],
    },
    {
      icon: Users,
      title: "Expert Team",
      description:
        "Certified senior developers and solution architects with recognized expertise.",
      stat: "15+",
      statLabel: "technical experts",
      color: "purple",
      details: [
        "Senior developers",
        "Certified architects",
        "Recognized expertise",
        "Continuous training",
      ],
    },
    {
      icon: Shield,
      title: "Maximum Security",
      description:
        "Enterprise security standards with regular audits and regulatory compliance.",
      stat: "100%",
      statLabel: "security compliance",
      color: "green",
      details: [
        "Enterprise standards",
        "Regular audits",
        "GDPR compliance",
        "Advanced encryption",
      ],
    },
    {
      icon: Zap,
      title: "Responsive Support",
      description:
        "Technical assistance available to guarantee continuity of your critical services.",
      stat: "24/7",
      statLabel: "availability",
      color: "orange",
      details: [
        "24/7 support",
        "Dedicated team",
        "Quick resolution",
        "Continuous monitoring",
      ],
    },
    {
      icon: Heart,
      title: "Client Satisfaction",
      description:
        "Collaborative approach and active listening for solutions perfectly adapted to your needs.",
      stat: "99%",
      statLabel: "satisfied clients",
      color: "red",
      details: [
        "Active listening",
        "Custom solutions",
        "Personalized follow-up",
        "Continuous feedback",
      ],
    },
    {
      icon: Trophy,
      title: "Technical Excellence",
      description:
        "Certifications and best practices for robust and scalable solutions.",
      stat: "AWS",
      statLabel: "certification",
      color: "yellow",
      details: [
        "ISO certifications",
        "Best practices",
        "Code reviews",
        "Automated testing",
      ],
    },
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: {
        bg: "bg-blue-100",
        text: "text-blue-600",
        border: "border-blue-200",
      },
      purple: {
        bg: "bg-purple-100",
        text: "text-purple-600",
        border: "border-purple-200",
      },
      green: {
        bg: "bg-green-100",
        text: "text-green-600",
        border: "border-green-200",
      },
      orange: {
        bg: "bg-orange-100",
        text: "text-orange-600",
        border: "border-orange-200",
      },
      red: {
        bg: "bg-red-100",
        text: "text-red-600",
        border: "border-red-200",
      },
      yellow: {
        bg: "bg-yellow-100",
        text: "text-yellow-600",
        border: "border-yellow-200",
      },
    };
    return colors[color] || colors.blue;
  };

  const trustItems = [
    {
      title: "ISO 27001 Certification",
      description:
        "Strict compliance with international security standards for protecting your sensitive data.",
    },
    {
      title: "Agile Methods",
      description:
        "Iterative and collaborative approach for maximum adaptability to your project's evolution.",
    },
    {
      title: "Proactive Maintenance",
      description:
        "Continuous monitoring and preventive maintenance to guarantee your systems' performance.",
    },
  ];

  return (
    <motion.section
      ref={sectionRef}
      className="py-20 bg-white relative overflow-hidden"
      style={{ opacity }}
    >
      {/* Subtle animated background */}
      <motion.div
        className="absolute inset-0 opacity-20"
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
            "radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)",
          backgroundSize: "800px 800px",
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
              Why Choose Us
            </motion.div>
          </motion.div>

          <motion.h2
            className="text-3xl lg:text-4xl font-bold text-slate-900"
            variants={childVariants}
          >
            Your trusted{" "}
            <motion.span
              className="text-blue-600"
              initial={{ opacity: 0, x: -20 }}
              animate={
                isHeaderInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
              }
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              partner
            </motion.span>
          </motion.h2>

          <motion.p
            className="text-lg text-slate-600 max-w-2xl mx-auto"
            variants={childVariants}
          >
            Our technical expertise, methodical approach, and quality commitment
            guarantee the success of your infrastructure projects.
          </motion.p>
        </motion.div>

        {/* Advantages Cards */}
        <motion.div
          ref={advantagesRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          variants={staggerContainer}
          initial="hidden"
          animate={isAdvantagesInView ? "visible" : "hidden"}
        >
          {advantages.map((advantage, index) => {
            const colorClasses = getColorClasses(advantage.color);

            return (
              <motion.div
                key={index}
                className="relative"
                variants={cardVariants}
                custom={index}
                whileHover="hover"
              >
                <div className="bg-slate-50 rounded-lg p-6 hover:bg-white transition-colors duration-300 border border-slate-200 h-full">
                  <div className="flex items-start space-x-4 mb-4">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <motion.div
                        className={`w-12 h-12 ${colorClasses.bg} rounded-lg flex items-center justify-center relative`}
                        variants={iconVariants}
                        custom={index}
                        whileHover="hover"
                      >
                        <advantage.icon
                          className={`w-6 h-6 ${colorClasses.text}`}
                        />

                        {/* Pulse effect */}
                        <motion.div
                          className={`absolute inset-0 rounded-lg ${colorClasses.bg}`}
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.5, 0, 0.5],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: index * 0.4 + 2,
                          }}
                        />
                      </motion.div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <motion.h3
                        className="text-lg font-semibold text-slate-900 mb-1"
                        initial={{ opacity: 0, x: -20 }}
                        animate={
                          isAdvantagesInView
                            ? { opacity: 1, x: 0 }
                            : { opacity: 0, x: -20 }
                        }
                        transition={{
                          delay: index * 0.2 + 0.5,
                          duration: 0.6,
                        }}
                      >
                        {advantage.title}
                      </motion.h3>

                      <div className="flex items-baseline space-x-2 mb-3">
                        <motion.span
                          className="text-xl font-bold text-blue-600"
                          variants={statVariants}
                          custom={index}
                          initial="hidden"
                          animate={isAdvantagesInView ? "visible" : "hidden"}
                          whileHover="hover"
                        >
                          {advantage.stat}
                        </motion.span>
                        <motion.span
                          className="text-slate-500 text-xs"
                          initial={{ opacity: 0, x: 10 }}
                          animate={
                            isAdvantagesInView
                              ? { opacity: 1, x: 0 }
                              : { opacity: 0, x: 10 }
                          }
                          transition={{
                            delay: index * 0.2 + 0.7,
                            duration: 0.5,
                          }}
                        >
                          {advantage.statLabel}
                        </motion.span>
                      </div>
                    </div>
                  </div>

                  <motion.p
                    className="text-slate-600 mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      isAdvantagesInView
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: 20 }
                    }
                    transition={{ delay: index * 0.2 + 0.8, duration: 0.6 }}
                  >
                    {advantage.description}
                  </motion.p>

                  {/* Details */}
                  <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 gap-2"
                    variants={staggerContainer}
                    initial="hidden"
                    animate={isAdvantagesInView ? "visible" : "hidden"}
                  >
                    {advantage.details.map((detail, detailIndex) => (
                      <motion.div
                        key={detailIndex}
                        className="flex items-center text-sm text-slate-600 group"
                        variants={detailVariants}
                        custom={detailIndex}
                        whileHover={{ x: 5, color: colorClasses.text }}
                      >
                        <motion.div
                          whileHover={{ scale: 1.2, rotate: 10 }}
                          transition={{ duration: 0.2 }}
                        >
                          <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                        </motion.div>
                        {detail}
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Trust Section */}
        <motion.div
          ref={trustRef}
          className="bg-slate-50 rounded-lg p-8 mb-12"
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          animate={
            isTrustInView
              ? { opacity: 1, scale: 1, y: 0 }
              : { opacity: 0, scale: 0.95, y: 40 }
          }
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h3
            className="text-xl font-semibold text-slate-900 mb-6 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={
              isTrustInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }
            }
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Our quality commitments
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {trustItems.map((trust, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center justify-center space-y-3 bg-white rounded-lg p-6 cursor-pointer"
                variants={trustCardVariants}
                custom={index}
                initial="hidden"
                animate={isTrustInView ? "visible" : "hidden"}
                whileHover="hover"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                >
                  <CheckCircle className="w-8 h-8 text-green-600 flex-shrink-0" />
                </motion.div>
                <h4 className="font-semibold text-slate-900 text-center">
                  {trust.title}
                </h4>
                <p className="text-slate-600 text-sm text-center leading-relaxed">
                  {trust.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <CTA
          title="Trust our expertise"
          description="Join our clients who trust us for their critical projects. Let's discuss your needs with no commitment."
        />
      </motion.div>
    </motion.section>
  );
};

export default WhyChooseSection;
