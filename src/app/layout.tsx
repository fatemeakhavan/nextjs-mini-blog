import type { Metadata } from "next"
import "./globals.css"
import ReactQueryProvider from "@/lib/react-query"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';


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
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <Footer />
        </ReactQueryProvider>
      </body>
    </html>
  )
}
