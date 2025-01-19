"use client"

import { useTextCarousel } from '@/hooks/useTextCarousel';
import { carouselVariants, MotionDiv } from '@/utils/helpers';
import { AnimatePresence } from 'framer-motion';
import React from 'react'

const TextCarousel: React.FC<{ texts: string[]; interval?: number }> = ({
    texts,
    interval = 3000
}) => {
    const { page, direction, currentText } = useTextCarousel(texts, interval);

    return (
        <div className='flex items-center justify-center overflow-hidden'>
            <AnimatePresence custom={direction} mode="wait">
                <MotionDiv
                    key={page}
                    custom={direction}
                    variants={carouselVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.5 }}
                    
                >
                    <h1 className='text-[40px] lg:text-8xl  font-bold text-saiql-yellow font-allura'>{ currentText }</h1>
                </MotionDiv>
            </AnimatePresence>
        </div>
    )
}

export default TextCarousel
