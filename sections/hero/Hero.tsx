import { fadeIn, MotionDiv, slideInLeft, slideInRight } from '@/utils/helpers'
import React from 'react'
import TextCarousel from "@/components/textCarousel/TextCarousel";

const Hero = () => {
    const carouselTexts = [
        "Adventure",
        "Speed",
        "Passion",
        "Health"
    ]
  return (
    <section className='min-h-screen flex items-center gap-2 justify-center bg-hero bg-cover bg-center'>
        <MotionDiv
            variants={slideInRight}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 1, ease: [0.6, 0.0, 0.3, 1] }}
            className='ml-3'
        >
            <hr className='border-b-4 w-[60px] md:w-[100px] border-white-400 rounded-r-full' />
        </MotionDiv>
        <MotionDiv
            variants={fadeIn}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 1, ease: [0.6, 0.0, 0.3, 1] }}
            className='w-[40vw] md:w-[25%]'
        >
            <TextCarousel texts={carouselTexts} interval={4000} />
        </MotionDiv>
        <MotionDiv
            variants={slideInLeft}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 1, ease: [0.6, 0.0, 0.3, 1] }}
            className='ml-3'
        >
            <hr className='border-b-4 w-[60px] md:w-[100px] border-white-400 rounded-r-full' />
        </MotionDiv>
    </section>
  )
}

export default Hero
