import DetailsBlog from "@/components/pages/blog/DetailsBlog"
import { Metadata } from 'next'

interface Props {
  params: { id: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts/${params?.id}`)
  const post = await res.json()

  const image_url = `${process.env.NEXT_PUBLIC_IMAGE_URL}/400/200?random=${params?.id}`

  return {
    title: 'MiniBlog | DetailsBlog',
    description: post?.body?.slice(0, 100),
    openGraph: {
      title: `${post?.title} | MiniBlog`,
      description: post?.body?.slice(0, 100),
      url: `${process.env.NEXT_PUBLIC_LOCAL_HOST}/blog/${params?.id}`,
      siteName: 'MiniBlog',
      type: 'article',
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
      title: `${post?.title} | MiniBlog`,
      description: post?.body?.slice(0, 100),
      images: [image_url],
    },
  }
}

export default function BlogPostPage({ params }: Props) {
  return <DetailsBlog postId={params?.id} />
}
