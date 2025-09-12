import BlogPage from "@/components/pages/blog/BlogPage"
import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";
import { getPosts } from "@/services/posts";
import type { Metadata } from 'next'

const image_url = `${process.env.NEXT_PUBLIC_IMAGE_URL}/800/400?random=1`

export const metadata: Metadata = {
  title: 'MiniBlog | Home',
  description: 'Read the latest posts on MiniBlog about tech, life, and more.',
  openGraph: {
    title: 'MiniBlog | Home',
    description: 'Read the latest posts on MiniBlog about tech, life, and more.',
    url: process.env.NEXT_PUBLIC_LOCAL_HOST,
    siteName: 'MiniBlog',
    type: 'website',
    images: [
      {
        url: image_url,
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MiniBlog | Home',
    description: 'Read the latest posts on MiniBlog about tech, life, and more.',
    images: [image_url],
  },
}

export default async function HomePage() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <BlogPage />
    </HydrationBoundary>
  )
}
