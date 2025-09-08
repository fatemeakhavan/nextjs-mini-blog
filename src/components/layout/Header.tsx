"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="border-b">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <Link href="/" className="text-xl font-bold">
          MiniBlog
        </Link>
        <ul className="hidden md:flex gap-6">
          <li>
            <Link href="/" className="w-full cursor-pointer text-base hover:text-lg transition-all duration-300 ease-in-out">
              Home
            </Link>
          </li>
          <li><Link href="/profile">
            <Button
              size="sm"
              className="cursor-pointer transition-transform duration-300 hover:scale-105"
            >
              Dashboard
            </Button>
          </Link></li>
        </ul>
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setOpen(!open)}>
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </nav>
      {open && (
        <div className="md:hidden bg-white border-t">
          <ul className="flex flex-col gap-4 p-4">
            <li><Link href="/" onClick={() => setOpen(false)}>Home</Link></li>
            <li>
              <Link href="/profile" className="w-full cursor-pointer text-base" onClick={() => setOpen(false)}>
                Dashboard
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
