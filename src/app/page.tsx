'use client'

import { useState, useEffect, useMemo } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Instagram, Facebook, Twitter, Youtube } from 'lucide-react'
import Image from 'next/image'

export default function Component() {
  const [email, setEmail] = useState('')
  const [teaser, setTeaser] = useState('')

  const teasers = useMemo(() => [
    "Embrace your curves",
    "Confidence is your best accessory",
    "Redefine beauty on your terms",
    "Unleash your inner goddess",
    "Every body is a beach body"
  ], [])

  useEffect(() => {
    const changeTeaserInterval = setInterval(() => {
      setTeaser(teasers[Math.floor(Math.random() * teasers.length)])
    }, 5000) // Change teaser every 5 seconds

    return () => clearInterval(changeTeaserInterval)
  }, [teasers])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement email signup logic
    console.log('Email submitted:', email)
    setEmail('')
  }

  return (
    <div className="relative h-screen flex flex-col overflow-hidden">
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0 filter grayscale opacity-50"
      >
        <source src="/background/bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>

      <nav className="fixed top-0 left-0 right-0 z-30 bg-white bg-opacity-90 shadow-md">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <div className="w-32 flex justify-start space-x-4">
            <a href="#" className="text-gray-600 hover:text-primary transition-colors" aria-label="Follow us on Instagram">
              <Instagram size={24} />
            </a>
            <a href="#" className="text-gray-600 hover:text-primary transition-colors" aria-label="Like us on Facebook">
              <Facebook size={24} />
            </a>
          </div>
          <div className="flex-grow flex justify-center">
            <Image
              src="/images/logo.png"
              alt="Amare Logo"
              width={80}
              height={50}
              className="h-15"
            />
          </div>
          <div className="w-32 flex justify-end space-x-4">
            <a href="#" className="text-gray-600 hover:text-primary transition-colors" aria-label="Follow us on Twitter">
              <Twitter size={24} />
            </a>
            <a href="#" className="text-gray-600 hover:text-primary transition-colors" aria-label="Subscribe to our YouTube channel">
              <Youtube size={24} />
            </a>
          </div>
        </div>
      </nav>

      <div className="relative z-20 flex-grow flex flex-col justify-center items-center px-4 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-2 text-white">Unveiling a Secret</h1>
          <p className="text-lg md:text-xl mb-4 text-primary">A year in the making, about to transform your confidence</p>
          <div className="bg-white bg-opacity-60 backdrop-blur-md rounded-lg p-6 mb-4 shadow-lg">
            <p className="text-sm md:text-base mb-4 text-gray-700">
              Imagine a brand that whispers to your inner goddess, awakens your confidence, and celebrates every curve. 
              Born from cherished memories and a passion for self-love, this isn&apos;t just swimwear - it&apos;s a revolution in fabric form.
              Are you ready to rediscover your radiance?
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-2 justify-center">
              <Input
                type="email"
                placeholder="Be the first to know"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-100 text-gray-800 placeholder-gray-400 border-gray-300 focus:border-primary focus:ring-primary"
                required
              />
              <Button type="submit" className="bg-primary hover:bg-primary/90 text-white">
                Join the Movement
              </Button>
            </form>
          </div>
          <div className="mt-4 text-white">
            <p className="text-xl font-bold mb-1">Stay Tuned</p>
            <p className="text-lg italic">{teaser}</p>
          </div>
          <p className="mt-2 text-xs text-gray-300 font-semibold">#Amare #selflove #swimwear #madeinSA</p>
        </div>
      </div>
    </div>
  )
}