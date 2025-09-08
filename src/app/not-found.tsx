"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Ghost } from "lucide-react"

export default function NotFound() {
    return (
        <section className="flex items-center justify-center min-h-screen px-4">
            <div className="text-center space-y-6">
                <div className="flex justify-center">
                    <Ghost className="w-20 h-20 text-muted-foreground" />
                </div>
                <h1 className="text-5xl font-bold">404</h1>
                <p className="text-xl text-muted-foreground">
                    Oops! The page you are looking for does not exist.
                </p>
                <Link href="/">
                    <Button size="lg" className="mt-4">
                        Back to Home
                    </Button>
                </Link>
            </div>
        </section>
    )
}
