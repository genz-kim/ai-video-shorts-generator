import { Button } from '@/components/ui/button'
import React from 'react'

function Hero() {
  return (
    <div className='p-10 flex flex-col items-center justify-center mt-24 md:px-24 lg:px-36 xl:px-48'>
      <h2 className='font-bold text-6xl text-center'>Ai Youtube Shorts Generator</h2>
      <p className='mt-4 text-2xl text-center text-gray-500'>Create viral YouTube Shorts in seconds with our AI-powered generator! 🚀 Upload your text or script, and instantly get stunning, ready-to-share videos with visuals, captions, and music. Perfect for creators and marketers—no editing skills needed. Turn ideas into trending Shorts effortlessly! ✨
      </p>
      <div className='mt-7 flex gap-8'>
      <Button size="lg" variant="outline">Explore</Button>
        <Button size="lg">Get Started</Button>
      </div>
    </div>
  )
}

export default Hero
