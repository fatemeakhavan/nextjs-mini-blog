import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t py-2">
      <div className="container font-semibold  mx-auto flex flex-col md:flex-row items-center justify-between p-4 text-gray-600">
        <p className="text-sm">&copy; {new Date().getFullYear()} MiniBlog. All rights reserved.</p>
        <ul className="flex text-lg gap-4 mt-2 md:mt-0">
          <li><Link href="/privacy" className="hover:text-primary">Privacy</Link></li>
          <li><Link href="/terms" className="hover:text-primary">Terms</Link></li>
        </ul>
      </div>
    </footer>
  )
}