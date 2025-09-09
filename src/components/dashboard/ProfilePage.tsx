"use client"

import * as React from "react"
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
} from "@/components/ui/card"
import { ProfileForm } from "./ProfileForm"

export function ProfilePage() {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <Card className="w-full max-w-4xl shadow-md p-4">
                <CardHeader className="mt-5 gap-4">
                    <CardTitle className="font-bold text-xl">Profile Form</CardTitle>
                    <CardDescription className="text-lg">
                        Fill in your details and preferences below.
                    </CardDescription>
                </CardHeader>
                <ProfileForm />
            </Card>
        </div>
    )
}
