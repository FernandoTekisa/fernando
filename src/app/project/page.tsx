"use client";
import Navbar from "../components/Navbar";
import advice from "@/img/advice.png";
import count from "@/img/count.png";
import money from "@/img/money.png"
import Image from "next/image";
import { Button,Card,CardContent,Typography,Box,Container,Grid,CardActions,useTheme,} from "@mui/material";

const projects = [
  {
    description: "Um site que retorna conselhos",
    image: advice,
    github: "https://github.com/FernandoTekisa/advice_web",
    live: "https://advice-ochre.vercel.app/",
  },
  {
    description: "Um site contador para sair do tédio😁",
    image:count ,
    github: "https://github.com/FernandoTekisa/count-next",
    live: "https://count-next.vercel.app/",
  },
  {
    description: "A Money Academy é uma plataforma inovadora focada em capacitar pessoas a vender qualquer produto de forma eficiente e lucrativa na internet.",
    image: money,
    github: "https://github.com/FernandoTekisa",
    live: "https://projeto3.com",
  },
];

export default function Project() {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";

  return (
    <Box
    component="section"
    sx={{ py: 8, bgcolor: "#111827" }} // Cor de fundo fixa
  >
      <Navbar/>
      <Container maxWidth="lg" sx={{ mt: 10 }}>
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            variant="h4"
            component="h2"
            fontWeight="bold"
            gutterBottom
            color={isDarkMode ? "grey.100" : "text.primary"}
          >
            Meus Projetos
          </Typography>
          <Typography
            variant="subtitle1"
            color={isDarkMode ? "grey.400" : "text.secondary"}
            sx={{ maxWidth: "600px", mx: "auto" }}
          >
            Confira alguns dos meus trabalhos recentes
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: isDarkMode ? "grey.800" : "background.paper",
                  color: isDarkMode ? "grey.100" : "text.primary",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: 6,
                  },
                }}
              >
                <Box
                  sx={{ position: "relative", height: 200, overflow: "hidden" }}
                >
                  <Image
                    src={project.image}
                    alt={project.alt ||advice }
                    fill
                    sizes="(max-width: 600px) 100vw, (max-width: 960px) 50vw, 33vw"
                    style={{
                      objectFit: "cover",
                      transition: "transform 0.5s ease",
                    }}
                    className="project-image"
                  />
                </Box>

                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="h3"
                    fontWeight="bold"
                    color={isDarkMode ? "grey.400" : "text.primary"}
                  >
                    {project.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color={isDarkMode ? "grey.400" : "text.secondary"}
                  >
                    {project.description}
                  </Typography>
                </CardContent>

                <CardActions
                  sx={{ justifyContent: "space-between", px: 2, pb: 2 }}
                >
                  <Button
                    size="small"
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outlined"
                    color={isDarkMode ? "secondary" : "primary"}
                  >
                    GitHub
                  </Button>
                  <Button
                    size="small"
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="contained"
                    color="primary"
                  >
                    Ver Projeto
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <style jsx global>{`
        .project-image:hover {
          transform: scale(1.1);
        }
      `}</style>
    </Box>
  );
}
