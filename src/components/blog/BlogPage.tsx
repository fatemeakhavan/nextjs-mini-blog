"use client"
import { useState } from "react"
import PostCard from "@/components/blog/PostCard"
import { usePosts } from "@/hooks/usePosts"
import Pagination from "@/components/common/Pagination"
import Loading from "@/app/loading"


const PAGE_SIZE = 6

export default function BlogPage() {
    const { data, isLoading, error } = usePosts()
    const [page, setPage] = useState(1)

    if (isLoading) return <Loading />
    if (error) return <p>Error: {error.message}</p>

    const totalPages = Math.ceil((data?.length || 0) / PAGE_SIZE)
    const paginatedPosts = data?.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE) || []

    const handlePageChange = (newPage: number) => {
        setPage(newPage)
    }

    return (
        <section className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Blog Posts</h1>
            <div className="flex flex-wrap -m-2 pb-7 min-h-[600px]">
                {paginatedPosts.map((post) => (
                    <PostCard key={post.id} id={post.id} title={post.title} body={post.body} />
                ))}
            </div>
            <Pagination
                currentPage={page}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />
        </section>
    )
}
