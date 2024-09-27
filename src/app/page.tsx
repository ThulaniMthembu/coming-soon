'use client'

import { useState, useEffect, useMemo, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Instagram, Facebook, Twitter, Youtube, Volume2, VolumeX, Play, Pause } from 'lucide-react'
import Image from 'next/image'
import toast from 'react-hot-toast'
import { Loader } from '@/components/ui/Loader'

export default function Component() {
  const [email, setEmail] = useState('')
  const [teaser, setTeaser] = useState('')
  const [isMuted, setIsMuted] = useState(true)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isLoading, setIsLoading] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

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

    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 5000)

    return () => {
      clearInterval(changeTeaserInterval)
      clearTimeout(timer)
    }
  }, [teasers])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement email signup logic
    console.log('Email submitted:', email)
    toast.custom((t) => (
      <div
        className={`${
          t.visible ? 'animate-enter' : 'animate-leave'
        } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
      >
        <div className="flex-1 w-0 p-4">
          <div className="flex items-start">
            <div className="flex-shrink-0 pt-0.5">
              <Image
                src="/images/logo.png"
                alt="Amare Logo"
                width={40}
                height={40}
                className="h-10 w-10 rounded-full"
              />
            </div>
            <div className="ml-3 flex-1">
              <p className="text-sm font-medium text-gray-900">
                Welcome to the Amare family!
              </p>
              <p className="mt-1 text-sm text-gray-500">
                Thank you for joining our movement. Get ready to embrace your unique beauty!
              </p>
            </div>
          </div>
        </div>
        <div className="flex border-l border-gray-200">
          <button
            onClick={() => toast.dismiss(t.id)}
            className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Close
          </button>
        </div>
      </div>
    ))
    setEmail('')
  }

  const toggleAudio = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted
      setIsMuted(videoRef.current.muted)
    }
  }

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play()
        setIsPlaying(true)
      } else {
        videoRef.current.pause()
        setIsPlaying(false)
      }
    }
  }

  return (
    <>
      <AnimatePresence>
        {isLoading && <Loader />}
      </AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 5 }}
        className="relative h-screen flex flex-col overflow-hidden"
      >
        <video 
          ref={videoRef}
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

        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 5.2 }}
          className="fixed top-0 left-0 right-0 z-30 bg-white bg-opacity-90 shadow-md"
        >
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
        </motion.nav>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 5.4 }}
          className="relative z-20 flex-grow flex flex-col justify-center items-center px-4 pt-20"
        >
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
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 5.6 }}
          className="absolute bottom-4 right-4 z-30 flex space-x-2"
        >
          <button
            onClick={togglePlayPause}
            className="bg-white bg-opacity-50 hover:bg-opacity-75 text-gray-800 p-2 rounded-full transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label={isPlaying ? "Pause video" : "Play video"}
          >
            {isPlaying ? (
              <Pause size={24} className="text-gray-800" />
            ) : (
              <Play size={24} className="text-gray-800" />
            )}
          </button>
          <button
            onClick={toggleAudio}
            className="bg-white bg-opacity-50 hover:bg-opacity-75 text-gray-800 p-2 rounded-full transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label={isMuted ? "Unmute video" : "Mute video"}
          >
            {isMuted ? (
              <VolumeX size={24} className="text-gray-800" />
            ) : (
              <Volume2 size={24} className="text-gray-800" />
            )}
          </button>
        </motion.div>
      </motion.div>
    </>
  )
}