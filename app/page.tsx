import { Mail, Linkedin, Twitter, Github } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8 sm:space-y-12">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-emerald-400 mb-6 sm:mb-8">About Me</h1>

      <Card className="bg-zinc-900 border-zinc-800">
        <CardContent className="pt-6 space-y-4 text-base sm:text-lg md:text-xl text-gray-300">
          <p>
            I'm a data science and machine learning enthusiast with a strong foundation in mathematics and a passion for
            solving complex problems using AI.
          </p>
          <p>
            With a background in statistical analysis and programming, I've developed a keen interest in applying
            machine learning techniques to real-world challenges.
          </p>
          <p>
            I specialize in developing and implementing machine learning models, with a focus on natural language
            processing and computer vision applications.
          </p>
          <p>
            Currently, I'm expanding my knowledge in deep learning and reinforcement learning at{" "}
            <Link
              href="https://www.deeplearning.ai"
              className="text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              DeepLearning.AI
            </Link>
          </p>
        </CardContent>
      </Card>

      <Card className="bg-zinc-900 border-zinc-800">
        <CardHeader>
          <CardTitle className="text-2xl sm:text-3xl text-emerald-400">Core Competencies</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside text-base sm:text-lg md:text-xl text-gray-300 space-y-2">
            <li>Machine Learning Algorithms (Supervised and Unsupervised)</li>
            <li>Deep Learning and Neural Networks</li>
            <li>Natural Language Processing</li>
            <li>Computer Vision</li>
            <li>Data Analysis and Visualization</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="bg-zinc-900 border-zinc-800">
        <CardHeader>
          <CardTitle className="text-2xl sm:text-3xl text-emerald-400">Current Focus</CardTitle>
        </CardHeader>
        <CardContent className="text-base sm:text-lg md:text-xl text-gray-300">
          <p>
            I'm currently diving deep into advanced topics in machine learning, including generative adversarial
            networks (GANs) and transformers. My goal is to contribute to cutting-edge research in AI and develop
            innovative solutions that can make a positive impact on society.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-zinc-900 border-zinc-800">
        <CardHeader>
          <CardTitle className="text-2xl sm:text-3xl text-emerald-400">Connect With Me</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-3 sm:gap-4">
            <Button
              variant="outline"
              size="sm"
              className="w-full sm:w-auto bg-zinc-900 text-emerald-400 border-emerald-400 hover:bg-emerald-400 hover:text-zinc-900 transition-colors"
              asChild
            >
              <Link href="mailto:contact@example.com">
                <Mail className="w-4 h-4 mr-2" />
                <span className="sm:hidden">Email</span>
                <span className="hidden sm:inline">Email</span>
              </Link>
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="w-full sm:w-auto bg-zinc-900 text-emerald-400 border-emerald-400 hover:bg-emerald-400 hover:text-zinc-900 transition-colors"
              asChild
            >
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-4 h-4 mr-2" />
                <span className="sm:hidden">LinkedIn</span>
                <span className="hidden sm:inline">LinkedIn</span>
              </Link>
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="w-full sm:w-auto bg-zinc-900 text-emerald-400 border-emerald-400 hover:bg-emerald-400 hover:text-zinc-900 transition-colors"
              asChild
            >
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Twitter className="w-4 h-4 mr-2" />
                <span className="sm:hidden">Twitter</span>
                <span className="hidden sm:inline">Twitter</span>
              </Link>
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="w-full sm:w-auto bg-zinc-900 text-emerald-400 border-emerald-400 hover:bg-emerald-400 hover:text-zinc-900 transition-colors"
              asChild
            >
              <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                <span className="sm:hidden">GitHub</span>
                <span className="hidden sm:inline">GitHub</span>
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
