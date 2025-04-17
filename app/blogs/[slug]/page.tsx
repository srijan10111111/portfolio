import Link from "next/link"
import { ArrowLeft, Calendar, Tag } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// This would typically come from a database or CMS
const blogPosts = {
  "understanding-transformer-models": {
    title: "Understanding Transformer Models in NLP",
    date: "2023-05-15",
    readTime: "10 min read",
    tags: ["NLP", "Deep Learning", "Transformers"],
    content: `
      <p>Transformer models have revolutionized the field of Natural Language Processing (NLP) since their introduction in the paper "Attention Is All You Need" by Vaswani et al. in 2017. These models have become the foundation for state-of-the-art performance in various NLP tasks, including machine translation, text summarization, and question answering.</p>

      <h2>Key Components of Transformer Models</h2>

      <h3>1. Self-Attention Mechanism</h3>
      <p>The self-attention mechanism is the core innovation of transformer models. It allows the model to weigh the importance of different words in the input sequence when processing each word. This enables the model to capture long-range dependencies and contextual information effectively.</p>

      <h3>2. Multi-Head Attention</h3>
      <p>Multi-head attention extends the self-attention mechanism by allowing the model to attend to information from different representation subspaces. This enables the model to capture various aspects of the input simultaneously.</p>

      <h3>3. Positional Encoding</h3>
      <p>Since transformer models process input sequences in parallel, they need a way to understand the order of words. Positional encoding adds information about the position of each word in the sequence to its embedding.</p>

      <h3>4. Feed-Forward Neural Networks</h3>
      <p>After the attention mechanisms, transformer models use feed-forward neural networks to further process the representations.</p>

      <h2>Applications of Transformer Models</h2>

      <p>Transformer models have been successfully applied to various NLP tasks:</p>

      <ul>
        <li>Machine Translation: Models like Google's Neural Machine Translation system use transformers to achieve high-quality translations.</li>
        <li>Text Summarization: Transformer-based models can generate concise and coherent summaries of long documents.</li>
        <li>Question Answering: Models like BERT and its variants excel at understanding context and answering questions based on given passages.</li>
        <li>Text Generation: GPT (Generative Pre-trained Transformer) models can generate human-like text for various applications.</li>
      </ul>

      <h2>Conclusion</h2>

      <p>Transformer models have significantly advanced the field of NLP, enabling more accurate and context-aware language understanding and generation. As research continues, we can expect further improvements and novel applications of these powerful models in various domains.</p>
    `,
  },
  "optimizing-ml-models-for-production": {
    title: "Optimizing Machine Learning Models for Production",
    date: "2023-04-22",
    readTime: "8 min read",
    tags: ["MLOps", "Optimization", "Deployment"],
    content: `
      <p>Deploying machine learning models in production environments presents unique challenges that go beyond model accuracy. In this post, we'll explore best practices and techniques for optimizing ML models for production use.</p>

      <h2>1. Model Compression</h2>
      <p>Reducing model size is crucial for faster inference and lower resource consumption. Techniques include:</p>
      <ul>
        <li>Pruning: Removing unnecessary weights and neurons</li>
        <li>Quantization: Using lower precision representations for weights</li>
        <li>Knowledge Distillation: Training a smaller model to mimic a larger one</li>
      </ul>

      <h2>2. Efficient Inference</h2>
      <p>Optimizing the inference process can significantly improve performance:</p>
      <ul>
        <li>Batching: Processing multiple inputs together</li>
        <li>Hardware Acceleration: Utilizing GPUs or specialized hardware like TPUs</li>
        <li>Model Serving Frameworks: Using optimized serving solutions like TensorFlow Serving or ONNX Runtime</li>
      </ul>

      <h2>3. Scalability</h2>
      <p>Ensuring your model can handle varying loads is essential:</p>
      <ul>
        <li>Horizontal Scaling: Deploying multiple instances of your model</li>
        <li>Load Balancing: Distributing requests across multiple instances</li>
        <li>Caching: Storing frequent predictions to reduce computation</li>
      </ul>

      <h2>4. Monitoring and Logging</h2>
      <p>Implement robust monitoring to catch issues early:</p>
      <ul>
        <li>Performance Metrics: Track inference time, throughput, and resource usage</li>
        <li>Prediction Quality: Monitor for drift in model predictions</li>
        <li>Error Logging: Capture and analyze failures for quick resolution</li>
      </ul>

      <h2>5. Continuous Integration and Deployment (CI/CD)</h2>
      <p>Implement CI/CD pipelines for your ML models:</p>
      <ul>
        <li>Automated Testing: Ensure model quality and performance before deployment</li>
        <li>Versioning: Keep track of model versions and associated data</li>
        <li>Rollback Mechanisms: Quickly revert to previous versions if issues arise</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Optimizing ML models for production is an ongoing process that requires a holistic approach. By focusing on model efficiency, scalability, and robust operational practices, you can ensure your ML models perform reliably and efficiently in real-world applications.</p>
    `,
  },
  // Add content for other blog posts here
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug as keyof typeof blogPosts]

  if (!post) {
    return <div>Blog post not found</div>
  }

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <Link href="/blogs" className="flex items-center text-emerald-400 hover:text-emerald-300 transition-colors">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Blogs
      </Link>

      <Card className="bg-zinc-900 border-zinc-800">
        <CardHeader>
          <CardTitle className="text-3xl sm:text-4xl text-emerald-400">{post.title}</CardTitle>
          <CardDescription className="text-gray-400 flex items-center space-x-4">
            <span className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              {post.date}
            </span>
            <span>{post.readTime}</span>
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag, i) => (
              <Badge key={i} variant="secondary" className="bg-zinc-800 text-emerald-400">
                <Tag className="w-3 h-3 mr-1" />
                {tag}
              </Badge>
            ))}
          </div>
          <div className="prose prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
        </CardContent>
      </Card>
    </div>
  )
}
