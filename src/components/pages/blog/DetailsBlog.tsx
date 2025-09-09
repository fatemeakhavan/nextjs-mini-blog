"use client"

import { useFindPostById } from "@/hooks/usePosts"
import { Card, CardContent } from "@/components/ui/card"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import Loading from "@/app/loading"

interface IDetailsBlogProps {
  postId: string;
}

export default function DetailsBlog({ postId }: IDetailsBlogProps) {

  const { data, isLoading, error } = useFindPostById(postId as string)

  if (isLoading) return <Loading />
  if (error) return <p>Error: {error.message}</p>
  if (!data) return notFound()

  const placeholder = `${process.env.NEXT_PUBLIC_IMAGE_URL}/800/400?random=${postId}`

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <Link
        href="/"
        className="mb-6 inline-flex items-center gap-2 text-primary hover:underline"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to posts
      </Link>
      <Card className="overflow-hidden shadow-lg rounded-2xl !py-0">
        <div className="relative w-full h-48 sm:h-64 md:h-72 lg:h-80">
          <Image
            src={placeholder}
            alt={data?.title}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>
        <CardContent className="p-4 sm:p-6 lg:p-10">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            {data?.title}
          </h1>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed whitespace-pre-line">
            {data?.body}
          </p>
        </CardContent>
      </Card>
    </section>
  )
}
