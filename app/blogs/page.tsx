import { CardDescription } from "@/components/ui/card"
import Link from "next/link"
import { Calendar, ArrowRight, Tag } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function BlogsPage() {
  const blogs = [
    {
      title: "Understanding Transformer Models in NLP",
      description:
        "An in-depth look at the architecture and applications of transformer models in natural language processing.",
      date: "2023-05-15",
      readTime: "10 min read",
      tags: ["NLP", "Deep Learning", "Transformers"],
      slug: "understanding-transformer-models",
    },
    {
      title: "Optimizing Machine Learning Models for Production",
      description:
        "Best practices and techniques for deploying efficient and scalable machine learning models in production environments.",
      date: "2023-04-22",
      readTime: "8 min read",
      tags: ["MLOps", "Optimization", "Deployment"],
      slug: "optimizing-ml-models-for-production",
    },
    {
      title: "Exploring Generative Adversarial Networks (GANs)",
      description:
        "A comprehensive guide to understanding and implementing GANs for various applications in computer vision and beyond.",
      date: "2023-03-10",
      readTime: "12 min read",
      tags: ["GANs", "Computer Vision", "Deep Learning"],
      slug: "exploring-gans",
    },
    {
      title: "The Future of AI: Trends and Predictions",
      description:
        "An analysis of current trends in artificial intelligence and predictions for future developments in the field.",
      date: "2023-02-05",
      readTime: "7 min read",
      tags: ["AI", "Future Tech", "Trends"],
      slug: "future-of-ai-trends-and-predictions",
    },
  ]

  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <h1 className="text-4xl sm:text-5xl font-bold text-emerald-400 mb-8">Blogs</h1>

      <div className="grid gap-8">
        {blogs.map((blog, index) => (
          <Card key={index} className="bg-zinc-900 border-zinc-800 hover:border-emerald-400 transition-colors">
            <CardHeader>
              <CardTitle className="text-2xl sm:text-3xl text-emerald-400">{blog.title}</CardTitle>
              <CardDescription className="text-gray-400 flex items-center space-x-4">
                <span className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  {blog.date}
                </span>
                <span>{blog.readTime}</span>
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-300">{blog.description}</p>
              <div className="flex flex-wrap gap-2">
                {blog.tags.map((tag, i) => (
                  <Badge key={i} variant="secondary" className="bg-zinc-800 text-emerald-400">
                    <Tag className="w-3 h-3 mr-1" />
                    {tag}
                  </Badge>
                ))}
              </div>
              <Link
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                Read more
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
