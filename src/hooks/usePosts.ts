import { useQuery } from "@tanstack/react-query"

export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

const POSTS_URL = `${process.env.NEXT_PUBLIC_API_URL}/posts`

async function fetchPosts(): Promise<Post[]> {
    const res = await fetch(POSTS_URL)
    if (!res.ok) throw new Error("Failed to fetch posts")
    return res.json()
}

export function usePosts() {
    return useQuery<Post[], Error>({
        queryKey: ["posts"],
        queryFn: fetchPosts,
    })
}

async function fetchPostById(postId: string): Promise<Post> {
    const res = await fetch(`${POSTS_URL}/${postId}`)
    if (!res.ok) throw new Error("Failed to fetch post")
    return res.json()
}

export function useFindPostById(postId: string) {
    return useQuery<Post, Error>({
        queryKey: ["post"],
        queryFn: () => fetchPostById(postId),
    })
}