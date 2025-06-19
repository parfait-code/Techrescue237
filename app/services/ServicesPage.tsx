"use client";
import React, { useRef } from "react";
import Link from "next/link";
import {
  Network,
  Cloud,
  Code,
  ArrowRight,
  Server,
  CheckCircle,
  Star,
  Users,
  Award,
  Clock,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { getAllServices, Service } from "@/data/services";

const iconMap = {
  Network,
  Cloud,
  Server,
  Code,
};

interface ServicesPageProps {
  services?: Service[];
}

const ServicesPage: React.FC<ServicesPageProps> = ({
  services = getAllServices(),
}) => {
  // Refs for sections
  const pageRef = useRef(null);
  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const servicesRef = useRef(null);
  const ctaRef = useRef(null);

  // Scroll hook for parallax effects
  const { scrollYProgress } = useScroll({
    target: pageRef,
    offset: ["start start", "end start"],
  });

  // Scroll-based transformations
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -200]);

  // useInView hooks to detect visibility
  const isHeroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const isStatsInView = useInView(statsRef, { once: true, margin: "-100px" });
  const isServicesInView = useInView(servicesRef, {
    once: true,
    margin: "-100px",
  });
  const isCtaInView = useInView(ctaRef, { once: true, margin: "-100px" });

  // Animation variants
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

  // Variants for stats
  const statsVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.8,
    },
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
      y: -5,
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeOut",
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

  // Variants for features
  const featureVariants = {
    hidden: { opacity: 0, x: -20 },
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

  const stats = [
    {
      icon: Users,
      label: "Satisfied Clients",
      value: "10+",
      description: "Companies trust us",
    },
    {
      icon: Award,
      label: "Certifications",
      value: "4+",
      description: "Technical certifications",
    },
    {
      icon: Clock,
      label: "Availability",
      value: "99.9%",
      description: "Guaranteed SLA",
    },
    {
      icon: Star,
      label: "Satisfaction",
      value: "4.9/5",
      description: "Average client rating",
    },
  ];

  return (
    <motion.div
      ref={pageRef}
      className="min-h-screen bg-slate-50 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        className="bg-slate-50 text-slate-900 py-20 relative overflow-hidden"
        style={{ y: heroY }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            className="text-center space-y-6"
            variants={fadeInUp}
            initial="hidden"
            animate={isHeroInView ? "visible" : "hidden"}
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
                  boxShadow: { duration: 2, repeat: Infinity, delay: 3 },
                }}
              >
                Our IT Services
              </motion.div>
            </motion.div>

            <motion.h1
              className="text-4xl lg:text-5xl font-bold"
              variants={childVariants}
            >
              Complete IT Solutions for Your Business
            </motion.h1>

            <motion.p
              className="text-xl text-slate-700 max-w-3xl mx-auto"
              variants={childVariants}
            >
              From network infrastructure to application development, we cover
              all your technological needs with recognized expertise.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={staggerContainer}
            >
              <motion.div variants={buttonVariants} custom={0}>
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 shadow-lg hover:shadow-xl"
                >
                  Discover our services
                </Button>
              </motion.div>
              <motion.div variants={buttonVariants} custom={1}>
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 py-3 border-slate-300 text-slate-700 hover:bg-slate-50"
                >
                  Request a quote
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section
        ref={statsRef}
        className="py-16 bg-white relative overflow-hidden"
      >
        {/* Subtle background */}
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.05) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(147, 51, 234, 0.05) 0%, transparent 50%)",
            backgroundSize: "600px 600px",
          }}
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            animate={isStatsInView ? "visible" : "hidden"}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center cursor-pointer"
                variants={statsVariants}
                custom={index}
                whileHover="hover"
              >
                <motion.div
                  className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4"
                  whileHover={{
                    rotate: [0, -10, 10, 0],
                    scale: 1.1,
                    backgroundColor: "#dbeafe",
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <stat.icon className="w-6 h-6 text-blue-600" />
                </motion.div>
                <motion.div
                  className="text-2xl font-bold text-slate-900 mb-1"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.5,
                  }}
                >
                  {stat.value}
                </motion.div>
                <div className="font-medium text-slate-700 mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-slate-500">{stat.description}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Services Grid */}
      <motion.section
        ref={servicesRef}
        className="py-20 relative overflow-hidden"
      >
        {/* Animated background */}
        <motion.div
          className="absolute inset-0 opacity-40"
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
          <motion.div
            className="text-center mb-16"
            variants={fadeInUp}
            initial="hidden"
            animate={isServicesInView ? "visible" : "hidden"}
          >
            <motion.h2
              className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4"
              variants={childVariants}
            >
              Our Specialized Services
            </motion.h2>
            <motion.p
              className="text-lg text-slate-600 max-w-2xl mx-auto"
              variants={childVariants}
            >
              Each service is designed to address the specific technological
              challenges of your industry sector.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="hidden"
            animate={isServicesInView ? "visible" : "hidden"}
          >
            {services.map((service, index) => {
              const IconComponent =
                iconMap[service.icon as keyof typeof iconMap];

              return (
                <motion.div
                  key={service.id}
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
                          <IconComponent
                            className={`w-6 h-6 ${service.iconColor}`}
                          />
                        </motion.div>
                        <div className="flex-1">
                          <CardTitle className="text-lg font-semibold text-slate-900 mb-2">
                            {service.title}
                          </CardTitle>
                          <CardDescription className="text-slate-600">
                            {service.shortDescription}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="pt-0">
                      <motion.div
                        className="space-y-3 mb-6"
                        variants={staggerContainer}
                        initial="hidden"
                        animate={isServicesInView ? "visible" : "hidden"}
                      >
                        {service.features.map((feature, featureIndex) => (
                          <motion.div
                            key={featureIndex}
                            className="flex items-center space-x-3"
                            variants={featureVariants}
                            custom={featureIndex}
                            whileHover={{ x: 5, transition: { duration: 0.2 } }}
                          >
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={
                                isServicesInView ? { scale: 1 } : { scale: 0 }
                              }
                              transition={{
                                delay: 0.5 + featureIndex * 0.1,
                                duration: 0.3,
                              }}
                            >
                              <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                            </motion.div>
                            <span className="text-sm text-slate-700">
                              {feature}
                            </span>
                          </motion.div>
                        ))}
                      </motion.div>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {service.technologies
                          .slice(0, 4)
                          .map((tech, techIndex) => (
                            <motion.div
                              key={techIndex}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={
                                isServicesInView
                                  ? { opacity: 1, scale: 1 }
                                  : { opacity: 0, scale: 0.8 }
                              }
                              transition={{
                                delay: 0.8 + techIndex * 0.1,
                                duration: 0.3,
                              }}
                              whileHover={{ scale: 1.1 }}
                            >
                              <Badge
                                variant="secondary"
                                className="text-xs cursor-pointer"
                              >
                                {tech}
                              </Badge>
                            </motion.div>
                          ))}
                        {service.technologies.length > 4 && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={
                              isServicesInView
                                ? { opacity: 1, scale: 1 }
                                : { opacity: 0, scale: 0.8 }
                            }
                            transition={{ delay: 1.2, duration: 0.3 }}
                            whileHover={{ scale: 1.1 }}
                          >
                            <Badge variant="outline" className="text-xs">
                              +{service.technologies.length - 4} more
                            </Badge>
                          </motion.div>
                        )}
                      </div>

                      <motion.div
                        className="flex flex-col sm:flex-row gap-3"
                        variants={staggerContainer}
                      >
                        <motion.div
                          className="flex-1"
                          variants={buttonVariants}
                          custom={0}
                        >
                          <Link
                            href={`/services/${service.id}`}
                            className="flex-1"
                          >
                            <Button variant="default" className="w-full group">
                              View details
                              <motion.div
                                animate={{ x: [0, 5, 0] }}
                                transition={{
                                  repeat: Infinity,
                                  duration: 2,
                                  delay: 1,
                                }}
                              >
                                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                              </motion.div>
                            </Button>
                          </Link>
                        </motion.div>
                        <motion.div
                          className="flex-1"
                          variants={buttonVariants}
                          custom={1}
                        >
                          <Button variant="outline" className="w-full">
                            Request a quote
                          </Button>
                        </motion.div>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        ref={ctaRef}
        className="py-20 bg-slate-900 relative overflow-hidden"
      >
        {/* Animated background */}
        <motion.div
          className="absolute inset-0 opacity-20"
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
              "radial-gradient(circle at 30% 40%, rgba(59, 130, 246, 0.4) 0%, transparent 50%), radial-gradient(circle at 70% 60%, rgba(147, 51, 234, 0.4) 0%, transparent 50%)",
            backgroundSize: "1000px 1000px",
          }}
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div
            className="space-y-8"
            variants={fadeInUp}
            initial="hidden"
            animate={isCtaInView ? "visible" : "hidden"}
          >
            <motion.h2
              className="text-3xl lg:text-4xl font-bold text-white"
              variants={childVariants}
            >
              Ready to Transform Your IT Infrastructure?
            </motion.h2>
            <motion.p
              className="text-xl text-slate-300"
              variants={childVariants}
            >
              Benefit from a free audit and our personalized recommendations.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={staggerContainer}
            >
              <motion.div variants={buttonVariants} custom={0}>
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Schedule a free audit
                </Button>
              </motion.div>
              <motion.div variants={buttonVariants} custom={1}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-slate-600 text-slate-300 hover:bg-slate-800"
                >
                  View our references
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default ServicesPage;
