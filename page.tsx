import { Mail, Twitter, Github } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] lg:grid-cols-[250px_1fr_400px] h-screen">
        {/* Sidebar */}
        <nav className="bg-zinc-950 p-6 border-r border-zinc-800">
          <div className="mb-12">
            <Link href="/" className="text-2xl font-mono text-emerald-400 hover:text-emerald-300 transition-colors">
              nullity
            </Link>
          </div>
          <div className="space-y-4">
            <Link href="/" className="block text-emerald-400 hover:text-emerald-300 transition-colors">
              Home
            </Link>
            <Link href="/projects" className="block text-gray-500 hover:text-gray-300 transition-colors">
              Projects
            </Link>
            <Link href="/learning" className="block text-gray-500 hover:text-gray-300 transition-colors">
              Learning
            </Link>
            <Link href="/experience" className="block text-gray-500 hover:text-gray-300 transition-colors">
              Experience
            </Link>
          </div>
        </nav>

        {/* Main Content */}
        <main className="p-8 lg:p-12 overflow-auto">
          <section className="max-w-3xl space-y-8">
            <h1 className="text-4xl font-semibold text-gray-100">About Me</h1>

            <div className="space-y-6 text-gray-400 leading-relaxed">
              <p>
                I&apos;m a math graduate with a strong interest in applied cryptography, zero knowledge proofs & its
                application in the Ethereum ecosystem.
              </p>

              <p>Previously, I was a MERN stack developer with experience in development of dApps as well.</p>

              <p>
                I specialize in the development, optimization & security of ZK circuits in DSLs(Circom, Noir), libraries
                (Bellman, Halo2, Plonky2) with knowledge in the workings of PLONKish SNARKs.
              </p>

              <p>
                Right now, I do ZK research & security at{" "}
                <Link href="https://yacademy.dev" className="text-emerald-400 hover:text-emerald-300 transition-colors">
                  yAcademyDAO
                </Link>
              </p>
            </div>

            <div className="pt-8">
              <h2 className="text-3xl font-semibold text-gray-100 mb-6">Say Hi</h2>
              <div className="flex gap-6">
                <Link
                  href="mailto:contact@example.com"
                  className="text-gray-400 hover:text-emerald-400 transition-colors"
                >
                  <Mail className="w-6 h-6" />
                  <span className="sr-only">Email</span>
                </Link>
                <Link href="https://twitter.com" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  <Twitter className="w-6 h-6" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="https://github.com" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  <Github className="w-6 h-6" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </div>
            </div>
          </section>
        </main>

        {/* Decorative Side Panel */}
        <div className="hidden lg:block relative">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-16%20212126-LO2Df7bn4u22a10xAawlygkJ7ooTpf.png"
            alt="Decorative gradient"
            fill
            className="object-cover"
          />
          <div className="absolute bottom-8 left-8 text-white/70">Nah, that&apos;s not me</div>
        </div>
      </div>
    </div>
  )
}
