'use client'

import { motion, Variants, HTMLMotionProps, animate } from "framer-motion";

// Define types for our animation variants

type VariantType = {
    initial?: object;
    animate?: object;
    exit?: object;
    whileHover?: object;
    whileTap?: object;
};


//Fade in animation
export const fadeIn: Variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
};

// Slide in from left animation
export const slideInLeft: Variants = {
    initial: { x: 100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: 100, opacity: 0 },
}

// Slide in from right animation

export const slideInRight: Variants = {
    initial: { x: -100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: -100, opacity: 0 },
}

// Scale up animation
export const scaleUp: Variants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.8, opacity: 0 },
}

// Staggered children animation
export const staggerContainer: Variants = {
    animate: {
        transition: {
            staggerChildren: 0.1,
        }
    }
}

// Hover scale animation

export const hoverScale: Variants = {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
}

// Bike wheel rotation animation
export const rotateWheel: Variants = {
    animate: {
        rotate: 360,
        transition: {
            duration: 4,
            ease: "linear",
            repeat: Infinity,
        },
    }
}

// text carousel animaitons
export const carouselVariants: Variants = {
    enter: (direction: number) => ({
        y: direction > 0 ? 50 : -50,
        opacity: 0
    }),
    center: {
        y: 0,
        opacity: 1
    },
    exit: (direction: number) => ({
        y: direction < 0 ? 50 : -50,
        opacity: 0
    })
}

// Custom motion components with Typescriipt support
export const MotionDiv = motion.div as React.FC<HTMLMotionProps<"div">>;
export const MotionImg = motion.img as React.FC<HTMLMotionProps<"img">>;
export const MotionButton = motion.button as React.FC<HTMLMotionProps<"button">>;


