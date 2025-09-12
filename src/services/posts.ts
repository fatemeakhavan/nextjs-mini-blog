
export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

const POSTS_URL = `${process.env.NEXT_PUBLIC_API_URL}/posts`;

export async function getPosts(): Promise<Post[]> {
    const res = await fetch(POSTS_URL);
    if (!res.ok) throw new Error("Failed to fetch posts");
    return res.json();
}

export async function getPostDetails(postId: string): Promise<Post> {
    const res = await fetch(`${POSTS_URL}/${postId}`);
    if (!res.ok) throw new Error("Failed to fetch post details");
    return res.json();
}
