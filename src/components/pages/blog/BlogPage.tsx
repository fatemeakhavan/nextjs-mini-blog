"use client"
import { useState } from "react"
import { useQuery } from "@tanstack/react-query";
import { getPosts } from "@/services/posts";
import PostCard from "@/components/pages/blog/PostCard"
import Pagination from "@/components/common/Pagination"
import Loading from "@/app/loading"


const PAGE_SIZE = 6

export default function BlogPage() {
    const [page, setPage] = useState(1)

    const { data, isLoading, error } = useQuery({
        queryKey: ["posts"],
        queryFn: getPosts,
    });

    if (isLoading) return <Loading />
    if (error) return <p>Error: {error?.message}</p>

    const totalPages = Math.ceil((data?.length || 0) / PAGE_SIZE)
    const paginatedPosts = data?.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE) || []

    const handlePageChange = (newPage: number) => {
        setPage(newPage)
    }

    return (
        <section className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4 ml-3">Blog Posts</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {paginatedPosts?.map((post) => (
                    <PostCard key={post?.id} id={post?.id} title={post?.title} body={post?.body} />
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
