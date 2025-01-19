"use client"

import React from 'react'

export const useTextCarousel = (texts: string[], interval: number = 3000) => {
  const [[ page, direction ], setPage] =  React.useState([0, 0]);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setPage(([prevPage, prevDirection]) => [
        (prevPage + 1) % texts.length,
        prevDirection > 0 ? 1 : -1
      ]);
    }, interval);

    return () => clearInterval(timer);
  }, [texts, interval])

  const currentText = texts[page];

  return { page, direction, currentText };
}

