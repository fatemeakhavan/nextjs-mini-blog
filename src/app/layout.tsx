import type { Metadata } from "next"
import "./globals.css"
import ReactQueryProvider from "@/lib/react-query"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"

export const metadata: Metadata = {
  title: "Mini Blog",
  description: "A simple blog with dashboard using Next.js, React Query, and Tailwind",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <ReactQueryProvider>
          <Header />
          <main className="flex-1 p-4 bg-muted/30">{children}</main>
          <Footer />
        </ReactQueryProvider>
      </body>
    </html>
  )
}
