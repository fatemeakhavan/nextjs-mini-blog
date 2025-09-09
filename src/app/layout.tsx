import type { Metadata } from "next"
import "./globals.css"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import 'react-toastify/dist/ReactToastify.css';
import Providers from "./providers"
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Mini Blog",
  description: "A simple blog with dashboard using Next.js, React Query, and Tailwind",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Providers>
          <Header />
          <main className={`flex-1 p-4 bg-muted/30 ${inter.className}`}>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
