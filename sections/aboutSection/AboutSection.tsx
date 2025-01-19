import React from 'react'
import StoriesSlider from "@/components/storiesSlider/StoriesSlider";

const AboutSection = () => {
  return (
    <section className='relative min-h-screen'>
      <div className='padding-b'>
        <h1 className='text-2xl lg:text-4xl font-bold text-saiql-teal mb-4'>Enhancing Your Cycling Journey:</h1>
        <h2 className='text-xl lg:text-3xl font-bold mb-4'>Journeying Through Life on Two Wheels</h2>
        <p className='text-sm text-saiql-primary'>Here from Our Community about their experiences</p>
      </div>
      <div>
        <StoriesSlider />
      </div>
    </section>
  )
}

export default AboutSection
