"use client";
import React, { useRef } from "react";
import PropTypes from "prop-types";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

interface props {
  title: string;
  description: string;
}

function CTA(props: props) {
  const sectionRef = useRef(null);
  const ctaRef = useRef(null);

  // Scroll hook for parallax effects
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Scroll-based transformations
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const isCtaInView = useInView(ctaRef, { once: true, margin: "-100px" });

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

  // Variants for the CTA section
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

  const handleContactClick = () => {
    // Navigate to contact page
    window.location.href = "/contact";
  };

  return (
    <motion.div
      ref={ctaRef}
      className="bg-slate-900 rounded-lg p-8 lg:p-12 text-center relative overflow-hidden"
      variants={ctaVariants}
      initial="hidden"
      animate={isCtaInView ? "visible" : "hidden"}
      style={{ y }}
    >
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{
          background: [
            "radial-gradient(circle at 20% 20%, #3b82f6 0%, transparent 50%)",
            "radial-gradient(circle at 80% 80%, #8b5cf6 0%, transparent 50%)",
            "radial-gradient(circle at 20% 20%, #3b82f6 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <motion.h3
        className="text-2xl lg:text-3xl font-bold text-white mb-4 relative z-10"
        variants={childVariants}
      >
        {props.title}
      </motion.h3>

      <motion.p
        className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto relative z-10"
        variants={childVariants}
      >
        {props.description}
      </motion.p>

      <motion.div
        className="flex justify-center relative z-10"
        variants={staggerContainer}
      >
        <motion.div
          variants={buttonVariants}
          custom={0}
          whileHover="hover"
          whileTap="tap"
        >
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 shadow-lg hover:shadow-xl"
            variant="default"
            onClick={handleContactClick}
          >
            Schedule an Audit
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

CTA.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default CTA;
