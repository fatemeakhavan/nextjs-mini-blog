import { useQuery } from "@tanstack/react-query"

export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

async function fetchPosts(): Promise<Post[]> {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    if (!res.ok) throw new Error("Failed to fetch posts")
    return res.json()
}

export function usePosts() {
    return useQuery<Post[], Error>({
        queryKey: ["posts"],
        queryFn: fetchPosts,
    })
}
