"use client";
import React from "react";
import {
  Users,
  Award,
  Target,
  Heart,
  Shield,
  Zap,
  Globe,
  TrendingUp,
  CheckCircle,
  Mail,
  Phone,
  Calendar,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import CTA from "@/components/CTA";

const AboutPage = () => {
  const pageRef = useRef(null);
  const heroRef = useRef(null);
  const storyRef = useRef(null);
  const valuesRef = useRef(null);
  const teamRef = useRef(null);
  const statsRef = useRef(null);
  const certificationRef = useRef(null);
  const contactRef = useRef(null);

  // Scroll hook for parallax effects
  const { scrollYProgress } = useScroll({
    target: pageRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  // useInView hooks
  const isHeroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const isStoryInView = useInView(storyRef, { once: true, margin: "-100px" });
  const isValuesInView = useInView(valuesRef, { once: true, margin: "-100px" });
  const isTeamInView = useInView(teamRef, { once: true, margin: "-100px" });
  const isStatsInView = useInView(statsRef, { once: true, margin: "-100px" });
  const isCertificationInView = useInView(certificationRef, {
    once: true,
    margin: "-100px",
  });
  const isContactInView = useInView(contactRef, {
    once: true,
    margin: "-100px",
  });

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
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

  const fadeInLeft = {
    hidden: { opacity: 0, x: -60, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1],
        staggerChildren: 0.15,
      },
    },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 60, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1],
        staggerChildren: 0.1,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
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

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.215, 0.61, 0.355, 1],
        delay: i * 0.1,
      },
    }),
    hover: {
      y: -8,
      scale: 1.03,
      boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  const statVariants = {
    hidden: { opacity: 0, scale: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "backOut",
        delay: i * 0.1,
      },
    }),
  };

  // Data
  const values = [
    {
      icon: Shield,
      title: "Security",
      description: "Maximum protection for your data and infrastructure",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Continuous optimization for exceptional results",
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600",
    },
    {
      icon: Heart,
      title: "Trust",
      description: "Long-lasting relationships based on transparency",
      bgColor: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      icon: Target,
      title: "Excellence",
      description: "High standards in every project",
      bgColor: "bg-orange-100",
      iconColor: "text-orange-600",
    },
  ];

  const team = [
    {
      name: "Emmanuel Andoh ",
      role: "Technical Director",
      experience: "7 years",
      speciality: "Cloud Architecture",
      avatar: "EA",
    },
    {
      name: "Parfait Kouam",
      role: "digital project manager",
      experience: "4 years",
      speciality: "API Developper",
      avatar: "PD",
    },
    // {
    //   name: "Marie Chen",
    //   role: "Network Architect",
    //   experience: "10+ years",
    //   speciality: "Infrastructure",
    //   avatar: "MC",
    // },
    // {
    //   name: "Alex Johnson",
    //   role: "Project Manager",
    //   experience: "8+ years",
    //   speciality: "Migration",
    //   avatar: "AJ",
    // },
  ];

  const stats = [
    { value: "10+", label: "Satisfied clients", icon: Users },
    { value: "99.9%", label: "Uptime", icon: TrendingUp },
    { value: "24/7", label: "Support", icon: Shield },
    { value: "1+", label: "Years of experience", icon: Calendar },
  ];

  const certifications = [
    "AWS Advanced Consulting Partner",
    "Microsoft Azur",
    "CCNA Certified Team",
    "Google Cloud Partner",
    "Cloud Solution Archited",
    "Google Associate Android Developer",
  ];

  return (
    <motion.div
      ref={pageRef}
      className="min-h-screen bg-gradient-to-b from-slate-50 to-white"
      style={{ opacity }}
    >
      {/* Animated background */}
      <motion.div
        className="fixed inset-0 opacity-30 pointer-events-none"
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
          backgroundSize: "1200px 1200px",
        }}
      />

      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        className="relative pt-24 pb-16 overflow-hidden"
        style={{ y }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center space-y-8"
            variants={fadeInUp}
            initial="hidden"
            animate={isHeroInView ? "visible" : "hidden"}
          >
            <motion.div variants={childVariants}>
              <motion.div
                className="inline-flex items-center px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-blue-700 text-sm font-medium mb-6"
                whileHover={{ scale: 1.05 }}
                animate={{
                  boxShadow: [
                    "0 0 0 0 rgba(59, 130, 246, 0)",
                    "0 0 0 10px rgba(59, 130, 246, 0.1)",
                    "0 0 0 0 rgba(59, 130, 246, 0)",
                  ],
                }}
                transition={{
                  boxShadow: { duration: 3, repeat: Infinity, delay: 2 },
                }}
              >
                <Award className="w-4 h-4 mr-2" />
                About our expertise
              </motion.div>
            </motion.div>

            <motion.h1
              className="text-4xl lg:text-6xl font-bold text-slate-900 leading-tight"
              variants={childVariants}
            >
              Your trusted partner
              <motion.span
                className="block text-blue-600 mt-2"
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                in digital transformation
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto"
              variants={childVariants}
            >
              Since 2024, we have been supporting businesses in their
              technological evolution. Our expertise covers all IT
              infrastructure needs, from design to maintenance and security.
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Story Section */}
      <motion.section ref={storyRef} className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              className="space-y-8"
              variants={fadeInLeft}
              initial="hidden"
              animate={isStoryInView ? "visible" : "hidden"}
            >
              <motion.div variants={childVariants}>
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                  Our story
                </h2>
                <div className="space-y-6 text-slate-600 leading-relaxed">
                  <p>
                    Founded in 2024 by a team of passionate engineers, our
                    company began with a clear vision: to democratize access to
                    advanced infrastructure technologies for all businesses.
                  </p>
                  <p>
                    Over time, we have developed recognized expertise in
                    information systems modernization, supporting numerous
                    companies in their digital transformation.
                  </p>
                  <p>
                    Today, our team of experts continues to innovate to offer
                    tailor-made solutions that combine performance, security,
                    and sustainability.
                  </p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              className="relative"
              variants={fadeInRight}
              initial="hidden"
              animate={isStoryInView ? "visible" : "hidden"}
            >
              <motion.div
                className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 h-96 flex items-center justify-center"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-center space-y-4">
                  <motion.div
                    className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto"
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      rotate: {
                        duration: 10,
                        repeat: Infinity,
                        ease: "linear",
                      },
                      scale: { duration: 2, repeat: Infinity, delay: 1 },
                    }}
                  >
                    <Globe className="w-10 h-10 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    Continuous innovation
                  </h3>
                  <p className="text-slate-600">
                    Always at the cutting edge of the latest technologies
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Values Section */}
      <motion.section ref={valuesRef} className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            variants={fadeInUp}
            initial="hidden"
            animate={isValuesInView ? "visible" : "hidden"}
          >
            <motion.h2
              className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6"
              variants={childVariants}
            >
              Our values
            </motion.h2>
            <motion.p
              className="text-xl text-slate-600 max-w-3xl mx-auto"
              variants={childVariants}
            >
              The principles that guide our daily actions
            </motion.p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={fadeInUp}
            initial="hidden"
            animate={isValuesInView ? "visible" : "hidden"}
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-white border border-slate-200 rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300 cursor-pointer"
                variants={cardVariants}
                custom={index}
                whileHover="hover"
              >
                <motion.div
                  className={`w-16 h-16 ${value.bgColor} rounded-full flex items-center justify-center mx-auto mb-6`}
                  whileHover={{
                    rotate: [0, -10, 10, 0],
                    scale: 1.1,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <value.icon className={`w-8 h-8 ${value.iconColor}`} />
                </motion.div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-slate-600">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section
        ref={statsRef}
        className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            animate={isStatsInView ? "visible" : "hidden"}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                variants={statVariants}
                custom={index}
                whileHover={{
                  scale: 1.1,
                  y: -10,
                  transition: { duration: 0.3 },
                }}
              >
                <motion.div
                  className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4"
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.5,
                  }}
                >
                  <stat.icon className="w-8 h-8" />
                </motion.div>
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-blue-100">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section ref={teamRef} className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            variants={fadeInUp}
            initial="hidden"
            animate={isTeamInView ? "visible" : "hidden"}
          >
            <motion.h2
              className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6"
              variants={childVariants}
            >
              Our team of experts
            </motion.h2>
            <motion.p
              className="text-xl text-slate-600 max-w-3xl mx-auto"
              variants={childVariants}
            >
              Certified professionals at your service
            </motion.p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2  gap-8 "
            variants={fadeInUp}
            initial="hidden"
            animate={isTeamInView ? "visible" : "hidden"}
          >
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="bg-slate-50 rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300"
                variants={cardVariants}
                custom={index}
                whileHover="hover"
              >
                <motion.div
                  className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  {member.avatar}
                </motion.div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                <p className="text-slate-600 text-sm mb-2">
                  {member.experience}
                </p>
                <p className="text-slate-500 text-sm">{member.speciality}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Certifications Section */}
      <motion.section ref={certificationRef} className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            variants={fadeInUp}
            initial="hidden"
            animate={isCertificationInView ? "visible" : "hidden"}
          >
            <motion.h2
              className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6"
              variants={childVariants}
            >
              Certifications & Partnerships
            </motion.h2>
            <motion.p
              className="text-xl text-slate-600 max-w-3xl mx-auto"
              variants={childVariants}
            >
              Recognized by global technology leaders
            </motion.p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={fadeInUp}
            initial="hidden"
            animate={isCertificationInView ? "visible" : "hidden"}
          >
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="bg-white border border-slate-200 rounded-lg p-6 flex items-center space-x-4 hover:shadow-lg transition-all duration-300"
                variants={cardVariants}
                custom={index}
                whileHover="hover"
              >
                <motion.div
                  className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </motion.div>
                <span className="font-medium text-slate-900">{cert}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Contact CTA Section */}
      <section className="container mx-auto">
        <CTA
          title="Ready to transform your infrastructure?"
          description="Let's discuss your needs and discover how we can support you"
        />
      </section>
    </motion.div>
  );
};

export default AboutPage;
