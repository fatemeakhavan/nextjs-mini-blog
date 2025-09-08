import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t mt-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between p-4 text-sm text-gray-600">
        <p>&copy; {new Date().getFullYear()} MiniBlog. All rights reserved.</p>
        <ul className="flex gap-4 mt-2 md:mt-0">
          <li><Link href="/privacy" className="hover:text-primary">Privacy</Link></li>
          <li><Link href="/terms" className="hover:text-primary">Terms</Link></li>
        </ul>
      </div>
    </footer>
  )
}