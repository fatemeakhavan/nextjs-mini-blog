"use client"

import { Loader2 } from "lucide-react"

export default function Loading() {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-background/80 z-50">
            <div className="flex flex-col items-center space-y-4">
                <Loader2 className="w-12 h-12 animate-spin text-primary" />
                <p className="text-lg font-medium text-muted-foreground">
                    Loading...
                </p>
            </div>
        </div>
    )
}
