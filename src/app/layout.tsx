import './globals.css'
import { Inter } from 'next/font/google'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Amare - Empowering Women Through Swimwear',
  description: 'Amare: Empowering women of all shapes and sizes to embrace their bodies and celebrate their individuality through our revolutionary swimwear.',
  keywords: 'Amare, swimwear, body positivity, women empowerment, self-love',
  openGraph: {
    title: 'Amare - Empowering Women Through Swimwear',
    description: 'Discover Amare: Revolutionary swimwear celebrating every curve and empowering women to embrace their unique beauty.',
    images: [
      {
        url: 'https://example.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Amare Swimwear',
      },
    ],
    site_name: 'Amare',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@AmareSwimsuits',
    title: 'Amare - Empowering Women Through Swimwear',
    description: 'Join the Amare revolution: Swimwear that celebrates every body and empowers women to feel confident and beautiful.',
    images: ['https://example.com/twitter-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Toaster position="bottom-center" />
      </body>
    </html>
  )
}