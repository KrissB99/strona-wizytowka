import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/shadcn/card";
import { Button } from "@/components/shadcn/button";
import { Badge } from "@/components/shadcn/badge";
import { ExternalLink, Github, Link } from "lucide-react";

export function ProjectsSection() {
  const projects = [
    {
      title: "Churn Prediction App",
      description:
        "This full-stack app lets enter customer data and receive churn probability predictions using a trained machine learning model.",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg",
      technologies: [
        "Flask",
        "Scikit-Learn",
        "Next.js",
        "Tailwind CSS",
        "Docker",
        "Docker Compose",
      ],
      liveUrl: "#",
      githubUrl: "https://github.com/KrissB99/Customer-Churn-Prediction",
      category: "AI/ML",
    },
    {
      title: "Digit Classification Using CNN",
      description:
        "The results of my Master's Thesis project: Classification of handwritten digits using a Convolutional Neural Network (CNN) trained on the MNIST dataset.",
      image: "/alexnet-training.png",
      technologies: [
        "Python",
        "Numpy",
        "Pandas",
        "Keras",
        "Tensorflow",
        "Torch",
        "Sklearn",
        "Matplotlib",
        "Seaborn",
      ],
      liveUrl: "#",
      githubUrl: "https://github.com/KrissB99/DigitClassificationUsingCNN",
      category: "Master's Thesis",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 pt-0">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Learning Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experiments and apps built to explore new technologies and sharpen
            my skills.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 overflow-hidden pt-0"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary">{project.category}</Badge>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-pretty">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3 pt-4">
                  <Button size="sm" className="flex-1">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 bg-transparent"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="https://github.com/KrissB99" target="_blank">
            <Button variant="outline" size="lg">
              <Github className="h-4 w-4 mr-2" />
              View More on GitHub
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
