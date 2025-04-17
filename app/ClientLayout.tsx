"use client"

import type React from "react"
import Link from "next/link"
import { VT323 } from "next/font/google"
import { usePathname } from "next/navigation"
import "./globals.css"

const vt323 = VT323({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
})

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Learning", path: "/learning" },
    { name: "Experience", path: "/experience" },
    { name: "Blogs", path: "/blogs" },
  ]

  return (
    <html lang="en">
      <body className={`${vt323.className} min-h-screen bg-black text-gray-200`}>
        <div className="flex flex-col sm:flex-row min-h-screen">
          {/* Sidebar */}
          <nav className="w-full sm:w-64 md:w-72 bg-zinc-950 border-b sm:border-r border-zinc-800 shrink-0">
            <div className="sticky top-0 p-4 sm:p-6 space-y-4 sm:space-y-8">
              <Link
                href="/"
                className="block text-2xl sm:text-3xl md:text-4xl text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                Srijan Bakhati
              </Link>
              <ul className="flex flex-wrap sm:flex-col justify-between sm:justify-start gap-2 sm:gap-4">
                {navItems.map((item) => (
                  <li key={item.path} className="w-auto sm:w-full">
                    <Link
                      href={item.path}
                      className={`block text-sm sm:text-lg md:text-xl transition-colors py-2 px-3 sm:px-4 rounded-md
                        ${
                          pathname === item.path
                            ? "text-emerald-400 bg-zinc-900 font-bold"
                            : "text-gray-400 hover:text-gray-200 hover:bg-zinc-900"
                        }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          {/* Main Content */}
          <main className="flex-1 overflow-y-auto bg-zinc-900">
            <div className="container mx-auto py-6 sm:py-8 px-4 sm:px-6 lg:px-8">{children}</div>
          </main>
        </div>
      </body>
    </html>
  )
}
