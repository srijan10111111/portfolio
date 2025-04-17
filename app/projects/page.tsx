import { ExternalLink, Github, Calendar, Tag } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ProjectsPage() {
  const projects = [
    {
      title: "Sentiment Analysis Model",
      description: "Developed a deep learning model for sentiment analysis on social media data.",
      longDescription:
        "Created a state-of-the-art sentiment analysis model using BERT and fine-tuned it on a large dataset of social media posts. The model achieves high accuracy in detecting complex emotions and sarcasm in short text snippets.",
      tags: ["NLP", "PyTorch", "BERT", "Transformers"],
      github: "https://github.com/username/sentiment-analysis",
      demo: "https://sentiment-demo.example.com",
      date: "2023",
      achievements: [
        "Achieved 92% accuracy on a challenging benchmark dataset",
        "Implemented an efficient data pipeline for processing large volumes of text data",
        "Deployed the model as a real-time API using Flask and Docker",
      ],
    },
    {
      title: "Image Classification with CNNs",
      description: "Built a convolutional neural network for multi-class image classification.",
      longDescription:
        "Implemented a custom CNN architecture for classifying images into 100 different categories. The project involved data augmentation, transfer learning, and model optimization techniques to achieve high accuracy on a limited dataset.",
      tags: ["Computer Vision", "TensorFlow", "Keras", "Transfer Learning"],
      github: "https://github.com/username/image-classifier",
      date: "2022",
      achievements: [
        "Achieved 89% top-5 accuracy on the test set",
        "Reduced model size by 40% using pruning and quantization",
        "Implemented real-time inference on mobile devices using TensorFlow Lite",
      ],
    },
    {
      title: "Predictive Maintenance System",
      description: "Developed a machine learning system for predicting equipment failures.",
      longDescription:
        "Created a predictive maintenance system using IoT sensor data and machine learning algorithms. The system analyzes real-time data from industrial equipment to predict potential failures and schedule maintenance, reducing downtime and maintenance costs.",
      tags: ["Time Series Analysis", "Random Forest", "IoT", "Scikit-learn"],
      github: "https://github.com/username/predictive-maintenance",
      demo: "https://predictive-maintenance.example.com",
      date: "2021",
      achievements: [
        "Reduced unplanned downtime by 35% in a manufacturing plant",
        "Implemented a scalable data ingestion pipeline using Apache Kafka",
        "Developed an interactive dashboard for visualizing equipment health and predictions",
      ],
    },
  ]

  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <h1 className="text-4xl sm:text-5xl font-bold text-emerald-400 mb-8">Projects</h1>

      {projects.map((project, index) => (
        <Card key={index} className="bg-zinc-900 border-zinc-800">
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-2xl sm:text-3xl text-emerald-400">{project.title}</CardTitle>
                <CardDescription className="text-gray-400 mt-1 flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  {project.date}
                </CardDescription>
              </div>
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-zinc-800 text-emerald-400 hover:bg-zinc-700 hover:text-emerald-300 border-emerald-400"
                  asChild
                >
                  <Link href={project.github}>
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Link>
                </Button>
                {project.demo && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-zinc-800 text-emerald-400 hover:bg-zinc-700 hover:text-emerald-300 border-emerald-400"
                    asChild
                  >
                    <Link href={project.demo}>
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-300">{project.longDescription}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <Badge key={i} variant="secondary" className="bg-zinc-800 text-emerald-400">
                  <Tag className="w-3 h-3 mr-1" />
                  {tag}
                </Badge>
              ))}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-200 mb-2">Key Achievements:</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                {project.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
