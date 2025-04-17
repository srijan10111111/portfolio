import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ExperiencePage() {
  const experiences = [
    {
      title: "Machine Learning Engineer",
      company: "AI Solutions Inc.",
      period: "2023 - Present",
      description:
        "Developing and deploying machine learning models for real-world applications, focusing on natural language processing and computer vision.",
      achievements: [
        "Implemented a state-of-the-art NLP model improving sentiment analysis accuracy by 15%",
        "Optimized deep learning models for edge devices, reducing inference time by 30%",
        "Contributed to open-source ML libraries, gaining over 500 GitHub stars",
      ],
      skills: ["PyTorch", "TensorFlow", "Scikit-learn", "Docker", "Kubernetes"],
    },
    {
      title: "Data Scientist",
      company: "Tech Innovations Ltd.",
      period: "2021 - 2023",
      description:
        "Led data-driven projects, from data collection and preprocessing to model development and deployment.",
      achievements: [
        "Developed a predictive maintenance system reducing equipment downtime by 25%",
        "Created a recommendation engine increasing user engagement by 40%",
        "Implemented A/B testing framework for data-driven decision making",
      ],
      skills: ["Python", "Pandas", "NumPy", "SQL", "Tableau"],
    },
    {
      title: "Junior Data Analyst",
      company: "DataCorp Solutions",
      period: "2019 - 2021",
      description: "Analyzed large datasets to extract insights and support business decisions.",
      achievements: [
        "Developed automated reporting systems saving 10 hours of manual work weekly",
        "Conducted statistical analysis to identify key factors influencing customer churn",
        "Created interactive dashboards for real-time monitoring of KPIs",
      ],
      skills: ["R", "Excel", "Power BI", "Statistical Analysis", "Data Visualization"],
    },
  ]

  return (
    <div className="max-w-4xl mx-auto space-y-12 p-4">
      <h1 className="text-4xl sm:text-5xl font-bold text-emerald-400 mb-8">Experience</h1>

      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="relative">
            <div className="absolute left-0 top-0 w-1 h-full bg-emerald-400 transform -translate-x-1/2"></div>
            <div className="absolute left-0 top-6 w-4 h-4 bg-emerald-400 rounded-full transform -translate-x-1/2"></div>
            <Card className="bg-zinc-900 border-zinc-800 ml-6">
              <CardHeader className="pb-2">
                <div className="space-y-1">
                  <CardTitle className="text-2xl sm:text-3xl text-emerald-400">{exp.title}</CardTitle>
                  <CardDescription className="text-xl text-gray-300">{exp.company}</CardDescription>
                  <CardDescription className="text-gray-400">{exp.period}</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300">{exp.description}</p>
                <div>
                  <h3 className="text-lg font-semibold text-gray-200 mb-2">Key Achievements:</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-200 mb-2">Skills:</h3>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <Badge key={i} variant="outline" className="bg-zinc-800 text-emerald-400 border-emerald-400">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}
