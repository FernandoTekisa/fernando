import Image from "next/image"
import { Button, Card, CardContent, CardMedia, Typography } from "@mui/material"
import { GitHub, Launch } from "@mui/icons-material"

const projects = [
  {
    title: "Projeto 1",
    description: "Uma breve descrição do Projeto 1.",
    image: "/placeholder.svg?height=200&width=300",
    github: "https://github.com/seu-usuario/projeto1",
    live: "https://projeto1.com",
  },
  {
    title: "Projeto 2",
    description: "Uma breve descrição do Projeto 2.",
    image: "/placeholder.svg?height=200&width=300",
    github: "https://github.com/seu-usuario/projeto2",
    live: "https://projeto2.com",
  },
  {
    title: "Projeto 3",
    description: "Uma breve descrição do Projeto 3.",
    image: "/placeholder.svg?height=200&width=300",
    github: "https://github.com/seu-usuario/projeto3",
    live: "https://projeto3.com",
  },
]

export default function ProjectsSection() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Meus Projetos</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="h-full flex flex-col">
              <CardMedia component="div" className="h-48 relative">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} layout="fill" objectFit="cover" />
              </CardMedia>
              <CardContent className="flex-grow">
                <Typography gutterBottom variant="h5" component="div">
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" className="mb-4">
                  {project.description}
                </Typography>
                <div className="flex justify-between mt-auto">
                  <Button startIcon={<GitHub />} href={project.github} target="_blank" rel="noopener noreferrer">
                    GitHub
                  </Button>
                  <Button startIcon={<Launch />} href={project.live} target="_blank" rel="noopener noreferrer">
                    Ver Projeto
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

