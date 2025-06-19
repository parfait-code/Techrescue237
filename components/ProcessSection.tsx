"use client";
import React, { useRef } from "react";
import {
  Search,
  FileText,
  Settings,
  Rocket,
  CheckCircle,
  Clock,
  ArrowRight,
} from "lucide-react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import CTA from "./CTA";

const ProcessSection = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const stepsRef = useRef(null);
  const guaranteesRef = useRef(null);
  const ctaRef = useRef(null);

  // Scroll hooks for parallax effects
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

  // useInView hooks for visibility detection
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });
  const isStepsInView = useInView(stepsRef, { once: true, margin: "-50px" });
  const isGuaranteesInView = useInView(guaranteesRef, {
    once: true,
    margin: "-50px",
  });
  const isCtaInView = useInView(ctaRef, { once: true, margin: "-50px" });

  // Simplified animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.1 },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  // Simplified step variants with reduced animations
  const stepVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: i * 0.1,
      },
    }),
  };

  // Simplified guarantee variants
  const guaranteeVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
        delay: i * 0.1,
      },
    }),
  };

  const steps = [
    {
      icon: Search,
      title: "Audit & Analysis",
      description:
        "Comprehensive evaluation of your existing infrastructure and identification of improvement opportunities.",
      details: [
        "Infrastructure audit",
        "Security analysis",
        "Performance evaluation",
        "Network mapping",
      ],
      duration: "1-2 weeks",
      color: "blue",
      number: "01",
    },
    {
      icon: FileText,
      title: "Design & Planning",
      description:
        "Development of a detailed plan with technical architecture and implementation roadmap.",
      details: [
        "Technical architecture",
        "Migration plan",
        "Security strategy",
        "Project timeline",
      ],
      duration: "1-2 weeks",
      color: "purple",
      number: "02",
    },
    {
      icon: Settings,
      title: "Implementation",
      description:
        "Progressive deployment with continuous validation and team training.",
      details: [
        "Phased deployment",
        "Security testing",
        "Team training",
        "Documentation",
      ],
      duration: "2-8 weeks",
      color: "green",
      number: "03",
    },
    {
      icon: Rocket,
      title: "Support & Optimization",
      description:
        "Continuous monitoring, preventive maintenance and optimizations for optimal performance.",
      details: [
        "24/7 monitoring",
        "Preventive maintenance",
        "Optimizations",
        "Technical support",
      ],
      duration: "Ongoing",
      color: "orange",
      number: "04",
    },
  ];

  const guarantees = [
    "Zero service interruption",
    "Progressive and secure migration",
    "Complete team training",
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: "bg-blue-50",
        bgGradient: "from-blue-50 to-blue-100",
        text: "text-blue-600",
        border: "border-blue-200",
        accent: "bg-blue-600",
        shadow: "shadow-blue-200/50",
        ring: "ring-blue-100",
      },
      purple: {
        bg: "bg-purple-50",
        bgGradient: "from-purple-50 to-purple-100",
        text: "text-purple-600",
        border: "border-purple-200",
        accent: "bg-purple-600",
        shadow: "shadow-purple-200/50",
        ring: "ring-purple-100",
      },
      green: {
        bg: "bg-green-50",
        bgGradient: "from-green-50 to-green-100",
        text: "text-green-600",
        border: "border-green-200",
        accent: "bg-green-600",
        shadow: "shadow-green-200/50",
        ring: "ring-green-100",
      },
      orange: {
        bg: "bg-orange-50",
        bgGradient: "from-orange-50 to-orange-100",
        text: "text-orange-600",
        border: "border-orange-200",
        accent: "bg-orange-600",
        shadow: "shadow-orange-200/50",
        ring: "ring-orange-100",
      },
    };
    return colors[color] || colors.blue;
  };

  return (
    <motion.section
      ref={sectionRef}
      id="process"
      className="py-20 bg-gradient-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden"
      style={{ opacity }}
    >
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        style={{ y }}
      >
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          className="text-center space-y-4 mb-20"
          variants={fadeInUp}
          initial="hidden"
          animate={isHeaderInView ? "visible" : "hidden"}
        >
          <motion.div
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-full text-green-700 text-sm font-medium shadow-sm"
            variants={childVariants}
          >
            Our Process
          </motion.div>

          <motion.h2
            className="text-3xl lg:text-4xl font-bold text-slate-900"
            variants={childVariants}
          >
            Proven methodology in{" "}
            <span className="text-green-600">4 steps</span>
          </motion.h2>

          <motion.p
            className="text-lg text-slate-600 max-w-2xl mx-auto"
            variants={childVariants}
          >
            A structured approach to ensure the success of your digital
            transformation, from initial audit to ongoing support.
          </motion.p>
        </motion.div>

        {/* Process Steps - Simplified animations */}
        <motion.div
          ref={stepsRef}
          className="space-y-8 mb-16"
          variants={staggerContainer}
          initial="hidden"
          animate={isStepsInView ? "visible" : "hidden"}
        >
          {steps.map((step, index) => {
            const colorClasses = getColorClasses(step.color);

            return (
              <motion.div
                key={index}
                className="relative"
                variants={stepVariants}
                custom={index}
              >
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-8 top-24 w-0.5 h-20 bg-gradient-to-b from-slate-300 via-slate-200 to-transparent hidden lg:block" />
                )}

                <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-6 lg:space-y-0 lg:space-x-8">
                  {/* Step Number & Icon */}
                  <div className="flex items-center space-x-4 lg:flex-col lg:space-x-0 lg:space-y-3">
                    {/* Step Number */}
                    <div className="relative">
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${colorClasses.bgGradient} border-2 ${colorClasses.border} flex items-center justify-center shadow-lg ${colorClasses.shadow}`}
                      >
                        <span
                          className={`text-2xl font-bold ${colorClasses.text}`}
                        >
                          {step.number}
                        </span>
                      </div>
                    </div>

                    {/* Step Icon */}
                    <div
                      className={`w-12 h-12 ${colorClasses.bg} rounded-xl flex items-center justify-center ring-4 ${colorClasses.ring} lg:w-14 lg:h-14`}
                    >
                      <step.icon
                        className={`w-6 h-6 ${colorClasses.text} lg:w-7 lg:h-7`}
                      />
                    </div>
                  </div>

                  {/* Step Content */}
                  <div className="flex-1 w-full">
                    <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-xl border border-slate-100 hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden">
                      {/* Decorative gradient */}
                      <div
                        className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${colorClasses.bgGradient}`}
                      />

                      {/* Header */}
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6 space-y-3 sm:space-y-0">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-slate-900 mb-2 lg:text-2xl">
                            {step.title}
                          </h3>

                          <div
                            className={`inline-flex items-center px-3 py-1.5 ${colorClasses.bg} ${colorClasses.border} border rounded-full text-sm ${colorClasses.text} font-medium`}
                          >
                            <Clock className="w-4 h-4 mr-2" />
                            {step.duration}
                          </div>
                        </div>

                        {/* Arrow indicator */}
                        <div
                          className={`w-8 h-8 ${colorClasses.bg} rounded-full flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity`}
                        >
                          <ArrowRight
                            className={`w-4 h-4 ${colorClasses.text}`}
                          />
                        </div>
                      </div>

                      <p className="text-slate-600 mb-6 text-base lg:text-lg leading-relaxed">
                        {step.description}
                      </p>

                      {/* Details Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {step.details.map((detail, detailIndex) => (
                          <div
                            key={detailIndex}
                            className="flex items-center p-3 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors duration-200 cursor-pointer"
                          >
                            <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                            <span className="text-sm text-slate-700 font-medium">
                              {detail}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Guarantees Section */}
        <motion.div
          ref={guaranteesRef}
          className="bg-gradient-to-r from-slate-50 to-slate-100 rounded-2xl p-8 mb-12 shadow-xl border border-slate-200"
          initial={{ opacity: 0, y: 40 }}
          animate={
            isGuaranteesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
          }
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.h3
            className="text-2xl font-bold text-slate-900 mb-8 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={
              isGuaranteesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }
            }
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Our Commitments
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {guarantees.map((guarantee, index) => (
              <motion.div
                key={index}
                className="flex items-center justify-center space-x-3 bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-slate-100"
                variants={guaranteeVariants}
                custom={index}
                initial="hidden"
                animate={isGuaranteesInView ? "visible" : "hidden"}
              >
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                <span className="text-slate-700 font-semibold text-center text-sm lg:text-base">
                  {guarantee}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <CTA
          title="A personalized approach for each project"
          description="Our methodology adapts to your technical, budgetary and time
              constraints for an optimal and risk-free result."
        />
      </motion.div>
    </motion.section>
  );
};

export default ProcessSection;
