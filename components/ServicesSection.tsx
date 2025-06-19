"use client";
import React, { useRef } from "react";
import {
  Network,
  Cloud,
  Code,
  ArrowRight,
  Server,
  CheckCircle,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import CTA from "./CTA";
import Link from "next/link";

const ServicesSection = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const servicesGridRef = useRef(null);
  const expertiseRef = useRef(null);
  const ctaRef = useRef(null);

  // Scroll hook for parallax effects
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Scroll-based transformations
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  // useInView hooks to detect visibility
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });
  const isServicesGridInView = useInView(servicesGridRef, {
    once: true,
    margin: "-100px",
  });
  const isExpertiseInView = useInView(expertiseRef, {
    once: true,
    margin: "-100px",
  });
  const isCtaInView = useInView(ctaRef, { once: true, margin: "-100px" });

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
        staggerChildren: 0.1,
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  // Variants for child elements
  const childVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.215, 0.61, 0.355, 1],
      },
    },
  };

  // Variants for service cards
  const serviceCardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
      rotateX: 10,
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.7,
        ease: [0.215, 0.61, 0.355, 1],
        delay: i * 0.1,
      },
    }),
    hover: {
      y: -8,
      scale: 1.02,
      rotateX: -2,
      boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  // Variants for expertise cards
  const expertiseCardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95,
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.215, 0.61, 0.355, 1],
        delay: i * 0.15,
      },
    }),
    hover: {
      y: -5,
      scale: 1.03,
      boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  // Variants for CTA section
  const ctaVariants = {
    hidden: {
      opacity: 0,
      scale: 0.9,
      y: 50,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1],
        staggerChildren: 0.1,
      },
    },
  };

  // Variants for buttons
  const buttonVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
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
      y: -2,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
    tap: {
      scale: 0.98,
    },
  };

  const services = [
    {
      id: "network-infrastructure",
      icon: Network,
      title: "Network Infrastructure",
      description:
        "Design and secure your local networks for optimal and protected connectivity.",
      features: [
        "LAN/WAN Architecture",
        "Advanced Security",
        "Continuous Monitoring",
        "24/7 Support",
      ],
      iconColor: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      id: "migration-cloud",
      icon: Cloud,
      title: "Cloud Migration",
      description:
        "Complete support to migrate your systems to the cloud without service interruption.",
      features: [
        "Preliminary Audit",
        "Migration Strategy",
        "AWS/Azure/GCP",
        "Team Training",
      ],
      iconColor: "text-purple-600",
      bgColor: "bg-purple-100",
    },
    {
      id: "infrastructure-management",
      icon: Server,
      title: "Infrastructure Management",
      description:
        "Optimization and supervision of your infrastructures for maximum performance and controlled costs.",
      features: [
        "Advanced Monitoring",
        "Cost Optimization",
        "Automation",
        "Backup & Recovery",
      ],
      iconColor: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      id: "application-development",
      icon: Code,
      title: "Application Development",
      description:
        "Creation of custom business applications tailored to your company's specific needs.",
      features: [
        "Web Applications",
        "Mobile Solutions",
        "APIs & Integrations",
        "Evolutionary Maintenance",
      ],
      iconColor: "text-orange-600",
      bgColor: "bg-orange-100",
    },
  ];

  const expertise = [
    {
      title: "Enhanced Security",
      description:
        "ISO 27001 certification and enterprise-level security protocols to protect your critical data.",
    },
    {
      title: "Multi-Cloud Expertise",
      description:
        "Mastery of major cloud platforms for optimal strategy and avoiding vendor lock-in.",
    },
    {
      title: "Regulatory Compliance",
      description:
        "Strict compliance with GDPR, SOC2 and other sector regulations in force.",
    },
  ];

  return (
    <motion.section
      ref={sectionRef}
      id="services"
      className="py-20 bg-slate-50 overflow-hidden relative"
    >
      {/* Animated background with parallax */}
      <motion.div
        className="absolute inset-0 opacity-40"
        // style={{ y: backgroundY  }}
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
            "radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.05) 0%, transparent 60%), radial-gradient(circle at 75% 75%, rgba(147, 51, 234, 0.05) 0%, transparent 60%)",
          backgroundSize: "800px 800px",
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          className="text-center space-y-4 mb-16"
          variants={fadeInUp}
          initial="hidden"
          animate={isHeaderInView ? "visible" : "hidden"}
        >
          <motion.div variants={childVariants}>
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
                boxShadow: { duration: 3, repeat: Infinity, delay: 2 },
              }}
            >
              Our Services
            </motion.div>
          </motion.div>

          <motion.h2
            className="text-3xl lg:text-4xl font-bold text-slate-900"
            variants={childVariants}
          >
            Complete IT infrastructure expertise
          </motion.h2>

          <motion.p
            className="text-lg text-slate-600 max-w-2xl mx-auto"
            variants={childVariants}
          >
            From securing your networks to cloud migration, we cover all your
            needs with recognized technical expertise.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          ref={servicesGridRef}
          className="grid md:grid-cols-2 gap-8 mb-16"
          variants={staggerContainer}
          initial="hidden"
          animate={isServicesGridInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => {
            const serviceLink = service.id;
            return (
              <motion.div
                key={index}
                variants={serviceCardVariants}
                custom={index}
                whileHover="hover"
                className="perspective-1000"
              >
                <Card className="border border-slate-200 hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm h-full">
                  <CardHeader className="pb-4">
                    <div className="flex items-start space-x-4">
                      <motion.div
                        className={`w-12 h-12 ${service.bgColor} rounded-lg flex items-center justify-center flex-shrink-0`}
                        whileHover={{
                          rotate: [0, -10, 10, 0],
                          scale: 1.1,
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        <service.icon
                          className={`w-6 h-6 ${service.iconColor}`}
                        />
                      </motion.div>
                      <div className="flex-1">
                        <CardTitle className="text-lg font-semibold text-slate-900 mb-2">
                          {service.title}
                        </CardTitle>
                        <CardDescription className="text-slate-600">
                          {service.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-3 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center space-x-3"
                        >
                          <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                          <span className="text-sm text-slate-700">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    <Link href={`/services/${serviceLink}`}>
                      <Button
                        variant="ghost"
                        className="w-full justify-between text-slate-700 hover:text-blue-600 hover:bg-blue-50 group"
                      >
                        Learn more
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Expertise Section */}
        <motion.div
          ref={expertiseRef}
          className="mb-16"
          variants={fadeInUp}
          initial="hidden"
          animate={isExpertiseInView ? "visible" : "hidden"}
        >
          <motion.h3
            className="text-xl font-semibold text-slate-900 mb-8 text-center"
            variants={childVariants}
          >
            Our technical expertise
          </motion.h3>

          <motion.div
            className="grid lg:grid-cols-3 gap-6"
            variants={staggerContainer}
          >
            {expertise.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-lg p-6 cursor-pointer"
                variants={expertiseCardVariants}
                custom={index}
                whileHover="hover"
              >
                <motion.h4
                  className="font-semibold text-slate-900 mb-3"
                  whileHover={{
                    color: "#2563eb",
                    transition: { duration: 0.2 },
                  }}
                >
                  {item.title}
                </motion.h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <CTA
          title="Ready to modernize your infrastructure?"
          description="Benefit from a free audit of your current infrastructure and our personalized recommendations."
        />
      </div>
    </motion.section>
  );
};

export default ServicesSection;
