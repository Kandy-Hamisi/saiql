"use client";

import React from "react";

import "blaze-slider/dist/blaze.css";
import { userStories } from "@/utils/data";
import Image from "next/image";
import useBlazeSlider from "@/hooks/useBlazeSlider";

const CommunityExperience = () => {
  const slideRef = useBlazeSlider({
    all: {
      slidesToShow: 3,
      slidesToScroll: 1,
      enableAutoplay: true,
      transitionDuration: 300,
      autoplayInterval: 3000,
    },
    "(max-width: 999px)": {
      slidesToShow: 2,
    },
    "(max-width: 500px)": {
      slidesToShow: 1,
    },
  });

  return (
    <div className="blaze-slider" ref={slideRef}>
      <div className="blaze-container">
        <div className="blaze-track-container">
          <div className="blaze-track">
            {userStories.map((userStory) => (
              <div key={userStory.id} className="relative h-[300px] w-[450px]">
                <Image
                  src={userStory.image}
                  alt={userStory.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 bg-saiql-primary p-4 w-full">
                  <div className="flex items-center gap-1">
                    <h3 className="text-white-400 font-semibold font-palanquin">
                      {userStory.name}
                    </h3>
                    <span className="text-saiql-orange-secondary">.</span>
                    <span className="text-sm text-gray-300">
                      {userStory.title}
                    </span>
                  </div>
                  <div>
                    <p className="text-xs leading-5">{userStory.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default CommunityExperience;
