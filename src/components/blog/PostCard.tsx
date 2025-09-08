"use client"

import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export interface PostCardProps {
  id: number
  title: string
  body: string
  imageUrl?: string
}

export default function PostCard({ id, title, body, imageUrl }: PostCardProps) {
  const placeholder = imageUrl || `https://picsum.photos/400/200?random=${id}`

  return (
    <article className="w-full sm:w-1/2 lg:w-1/3 p-2" itemScope itemType="https://schema.org/BlogPosting">
      <Card className="hover:shadow-xl transition-shadow duration-300 flex flex-col h-full !py-0">
        <div className="relative w-full h-48">
          <Image
            src={placeholder}
            alt={title}
            fill
            className="object-cover rounded-t-lg"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
        <CardContent className="flex flex-col p-4 h-48">
          <h2 className="text-gray-900 text-lg font-semibold mb-2" itemProp="headline">{title}</h2>
          <p className="text-gray-700  line-clamp-5 mb-2" itemProp="description">{body}</p>
          <Link
            href={`/blog/${id}`}
            className="my-2 inline-flex items-center gap-3 font-bold text-primary hover:underline"
          >
            Read more
            <ArrowRight className="w-5 h-5" />
          </Link>
        </CardContent>
      </Card>
    </article>
  )
}
