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
        {/* لوگو */}
        <Link href="/" className="text-xl font-bold">
          MiniBlog
        </Link>

        {/* منو دسکتاپ */}
        <ul className="hidden md:flex gap-6">
          <li><Link href="/" className="hover:text-primary">Home</Link></li>
          <li><Link href="/profile">
            <Button size="sm">Dashboard</Button>
          </Link></li>
        </ul>

        {/* منو موبایل */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setOpen(!open)}>
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </nav>

      {/* کشویی موبایل */}
      {open && (
        <div className="md:hidden bg-white border-t">
          <ul className="flex flex-col gap-4 p-4">
            <li><Link href="/" onClick={() => setOpen(false)}>Home</Link></li>
            <li>
              <Link href="/profile" onClick={() => setOpen(false)}>
                <Button size="sm" className="w-full">Dashboard</Button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
