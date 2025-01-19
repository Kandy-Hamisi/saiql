"use client"

import React, { Component } from 'react'
import Slider from "react-slick"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { userStories } from '@/utils/data';
import Image from 'next/image';

const StoriesSlider = () => {

    const settings = {
        className: "center",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 2000,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true
                }
            }
        ]
    }

  return (
    <div className="slider-container">
        <Slider {...settings}>
            {
                userStories.map((story) => (
                    <div key={story.id} className="relative h-[350px] w-[200px]">
                        <Image src={story.image} alt='' fill className='object-cover' />
                        <div className="absolute text-xs bottom-0 p-4 bg-saiql-primary">
                            <h3 className='text-saiql-teal font-semibold'>{story.title}</h3>
                            <p className='leading-[20px] text-white'>{story.description}</p>
                        </div>
                    </div>
                ))
            }
        </Slider>
    </div> 
)
}

export default StoriesSlider