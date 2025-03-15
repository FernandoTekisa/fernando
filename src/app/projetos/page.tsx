import Image from "next/image";
import { Button, Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";

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
];

export default function page() {
  return (
    <Box component="section" sx={{ py: 8, bgcolor: "grey.100" }}>
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Typography variant="h4" fontWeight="bold">
          Meus Projetos
        </Typography>
      </Box>
      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr", lg: "1fr 1fr 1fr" }, gap: 4, px: 4 }}>
        {projects.map((project, index) => (
          <Card key={index} sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
            <CardMedia sx={{ height: 200, position: "relative" }}>
              <Image src={project.image} alt={project.title} layout="fill" objectFit="cover" />
            </CardMedia>
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="h6">
                {project.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                {project.description}
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "space-between", mt: "auto" }}>
                <Button startIcon={<GitHubIcon />} href={project.github} target="_blank">
                  GitHub
                </Button>
                <Button startIcon={<LaunchIcon />} href={project.live} target="_blank">
                  Ver Projeto
                </Button>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
