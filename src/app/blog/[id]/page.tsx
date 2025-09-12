import DetailsBlog from "@/components/pages/blog/DetailsBlog"
import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";
import { getPostDetails } from "@/services/posts"
import { Metadata } from 'next'

interface Props {
  params: { id: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const {id} = await params
  const image_url = `${process.env.NEXT_PUBLIC_IMAGE_URL}/400/200?random=${id}`
  const post = await getPostDetails(id);

  return {
    title: 'MiniBlog | DetailsBlog',
    description: post?.body?.slice(0, 100),
    openGraph: {
      title: `${post?.title} | MiniBlog`,
      description: post?.body?.slice(0, 100),
      url: `${process.env.NEXT_PUBLIC_LOCAL_HOST}/blog/${id}`,
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

export default async function BlogPostPage({ params }: Props) {
  const {id} = await params;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["post"],
    queryFn: () => getPostDetails(id),
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <DetailsBlog postId={id} />
    </HydrationBoundary>
  )
}
