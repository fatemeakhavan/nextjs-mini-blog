import DetailsBlog from "@/components/blog/DetailsBlog"
import { Metadata } from 'next'

interface Props {
  params: { id: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
  const post = await res.json()

  return {
    title: `${post.title} | MiniBlog`,
    description: post.body.slice(0, 100),
    openGraph: {
      title: `${post.title} | MiniBlog`,
      description: post.body.slice(0, 100),
      url: `http://localhost:3000/blog/${params.id}`,
      siteName: 'MiniBlog',
      type: 'article',
      images: [
        {
          url: '/blog-og.png',
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${post.title} | MiniBlog`,
      description: post.body.slice(0, 100),
      images: ['/blog-og.png'],
    },
  }
}

export default function BlogPostPage() {
  return (
    <>
      <DetailsBlog />
    </>
  )
}
