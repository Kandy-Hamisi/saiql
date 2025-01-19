"use client";

import React from "react";
import BlazeSlider, { BlazeConfig } from "blaze-slider";
// import { BlazeSliderConfig } from "@/types";

function useBlazeSlider(config: BlazeConfig): React.RefObject<HTMLDivElement> {
  const sliderRef = React.useRef<BlazeSlider | null>(null);
  const elRef = React.useRef<HTMLDivElement>(null!);

  React.useEffect(() => {
    // if not already initialized
    if (!sliderRef.current && elRef.current) {
      sliderRef.current = new BlazeSlider(elRef.current, config);
    }
  }, [config]);

  return elRef;
}

export default useBlazeSlider;
