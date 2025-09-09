import BlogPage from "@/components/blog/BlogPage"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'MiniBlog | Home',
  description: 'Read the latest posts on MiniBlog about tech, life, and more.',
  openGraph: {
    title: 'MiniBlog | Home',
    description: 'Read the latest posts on MiniBlog about tech, life, and more.',
    url: 'http://localhost:3000',
    siteName: 'MiniBlog',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MiniBlog | Home',
    description: 'Read the latest posts on MiniBlog about tech, life, and more.',
    images: ['/og-image.png'],
  },
}

export default function HomePage() {
  return (
    <>
      <BlogPage />
    </>
  )
}
