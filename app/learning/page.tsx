import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function LearningPage() {
  const skills = [
    {
      category: "Machine Learning",
      items: [
        { name: "Supervised Learning", level: 90 },
        { name: "Unsupervised Learning", level: 85 },
        { name: "Deep Learning", level: 80 },
        { name: "Reinforcement Learning", level: 70 },
      ],
    },
    {
      category: "Programming",
      items: [
        { name: "Python", level: 95 },
        { name: "R", level: 80 },
        { name: "SQL", level: 85 },
        { name: "TensorFlow", level: 75 },
      ],
    },
    {
      category: "Data Analysis",
      items: [
        { name: "Statistical Analysis", level: 90 },
        { name: "Data Visualization", level: 85 },
        { name: "Big Data Technologies", level: 75 },
        { name: "Feature Engineering", level: 80 },
      ],
    },
  ]

  const courses = [
    {
      title: "Deep Learning Specialization",
      institution: "DeepLearning.AI",
      date: "2023",
      status: "Completed",
    },
    {
      title: "Machine Learning Engineering for Production (MLOps)",
      institution: "Coursera",
      date: "2023",
      status: "In Progress",
    },
    {
      title: "Advanced Data Science Research",
      description: "Currently exploring advanced topics in AI and machine learning",
      topics: [
        "Generative Adversarial Networks (GANs)",
        "Transformer Models in NLP",
        "Explainable AI and Model Interpretability",
      ],
    },
  ]

  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <section className="space-y-8">
        <h1 className="text-4xl sm:text-5xl font-bold text-emerald-400">Learning & Skills</h1>

        {skills.map((category, index) => (
          <Card key={index} className="bg-zinc-900 border-zinc-800">
            <CardHeader>
              <CardTitle className="text-2xl text-emerald-400">{category.category}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {category.items.map((skill, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300">{skill.name}</span>
                    <span className="text-gray-400">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="bg-zinc-800" indicatorClassName="bg-emerald-400" />
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-emerald-400">Courses & Research</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {courses.map((course, index) => (
            <Card key={index} className="bg-zinc-900 border-zinc-800">
              <CardHeader>
                <CardTitle className="text-xl text-emerald-400">{course.title}</CardTitle>
                {course.institution && (
                  <CardContent className="text-gray-400">
                    {course.institution} • {course.date}
                    {course.status && ` • ${course.status}`}
                  </CardContent>
                )}
              </CardHeader>
              {course.topics && (
                <CardContent>
                  <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
                    {course.topics.map((topic, i) => (
                      <li key={i}>{topic}</li>
                    ))}
                  </ul>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
