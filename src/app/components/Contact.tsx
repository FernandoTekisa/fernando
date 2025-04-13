"use client"
import {
  Box,
  Typography,
  Container,
  Grid,
  Divider,
  Stack,
  Avatar,
  ThemeProvider,
  createTheme,
  CssBaseline,
  Card,
  CardContent,
  useMediaQuery,
} from "@mui/material"
import EmailIcon from "@mui/icons-material/Email"
import PhoneIcon from "@mui/icons-material/Phone"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import GitHubIcon from "@mui/icons-material/GitHub"
import TwitterIcon from "@mui/icons-material/Twitter"
import ContactMailIcon from "@mui/icons-material/ContactMail"
import PersonIcon from "@mui/icons-material/Person"

export default function ContactSectionMUIDarkHorizontal() {
  // Criar tema escuro personalizado
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#bb86fc", // Roxo claro
        light: "#e2b9ff",
        dark: "#8858c8",
      },
      secondary: {
        main: "#03dac6", // Verde-água
      },
      background: {
        default: "#121212",
        paper: "#1e1e1e",
      },
      error: {
        main: "#cf6679",
      },
    },
    typography: {
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    },
    shape: {
      borderRadius: 8,
    },
  })

  const isMobile = useMediaQuery(darkTheme.breakpoints.down("sm"))

  const contactInfo = [
    {
      icon: <EmailIcon />,
      title: "Email",
      value: "seu.email@exemplo.com",
      link: "mailto:seu.email@exemplo.com",
    },
    {
      icon: <PhoneIcon />,
      title: "Telefone",
      value: "+351 900 000 000",
      link: "tel:+351900000000",
    },
    {
      icon: <LocationOnIcon />,
      title: "Localização",
      value: "Lisboa, Portugal",
      link: "https://maps.google.com/?q=Lisboa,Portugal",
    },
  ]

  const socialLinks = [
    {
      icon: <LinkedInIcon />,
      name: "LinkedIn",
      url: "https://linkedin.com/in/seu-perfil",
      color: "#0077B5",
    },
    {
      icon: <GitHubIcon />,
      name: "GitHub",
      url: "https://github.com/seu-usuario",
      color: "#333",
    },
    {
      icon: <TwitterIcon />,
      name: "Twitter",
      url: "https://twitter.com/seu-usuario",
      color: "#1DA1F2",
    },
  ]

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box
        component="section"
        id="contacto"
        sx={{
          py: 10,
          background: `linear-gradient(to bottom, ${darkTheme.palette.primary.dark}30, ${darkTheme.palette.background.default})`,
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <Typography
              variant="h3"
              component="h2"
              gutterBottom
              fontWeight="bold"
              sx={{
                position: "relative",
                display: "inline-block",
                color: darkTheme.palette.primary.light,
                "&::after": {
                  content: '""',
                  position: "absolute",
                  width: "60px",
                  height: "4px",
                  bottom: "-10px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  backgroundColor: darkTheme.palette.primary.main,
                  borderRadius: "2px",
                },
              }}
            >
              Contacto
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 700, mx: "auto", mt: 4 }}>
              Estou disponível para novos projetos e oportunidades. Vamos conversar!
            </Typography>
          </Box>

          <Card
            elevation={6}
            sx={{
              borderRadius: 4,
              bgcolor: "rgba(30, 30, 30, 0.6)",
              backdropFilter: "blur(10px)",
              border: `1px solid ${darkTheme.palette.divider}`,
              overflow: "hidden",
            }}
          >
            <Grid container>
              {/* Perfil e Redes Sociais */}
              <Grid
                item
                xs={12}
                sm={6}
                sx={{
                  borderRight: { xs: "none", sm: `1px solid ${darkTheme.palette.divider}` },
                  borderBottom: { xs: `1px solid ${darkTheme.palette.divider}`, sm: "none" },
                }}
              >
                <CardContent
                  sx={{
                    p: 4,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Box>
                    <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                      <Avatar
                        sx={{
                          bgcolor: darkTheme.palette.primary.main,
                          color: "#000",
                          mr: 2,
                          width: 56,
                          height: 56,
                        }}
                      >
                        <PersonIcon sx={{ fontSize: 30 }} />
                      </Avatar>
                      <Box>
                        <Typography variant="h5" fontWeight="bold" color="primary.light">
                          Seu Nome
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary">
                          Desenvolvedor Web & Designer
                        </Typography>
                      </Box>
                    </Box>

                    <Typography variant="body1" sx={{ color: "rgba(255, 255, 255, 0.8)", mb: 4 }}>
                      Especializado em criar experiências digitais modernas e intuitivas. Sempre em busca de novos
                      desafios e oportunidades de colaboração.
                    </Typography>
                  </Box>

                  <Box>
                    <Divider sx={{ bgcolor: "rgba(255, 255, 255, 0.1)", mb: 3 }} />
                    <Typography variant="h6" color="primary.light" fontWeight="medium" sx={{ mb: 2 }}>
                      Redes Sociais
                    </Typography>
                    <Stack direction="row" spacing={2}>
                      {socialLinks.map((social, index) => (
                        <Avatar
                          key={index}
                          component="a"
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{
                            bgcolor: "rgba(255, 255, 255, 0.1)",
                            color: darkTheme.palette.primary.light,
                            transition: "all 0.3s ease",
                            "&:hover": {
                              bgcolor: darkTheme.palette.primary.main,
                              color: "#000",
                              transform: "translateY(-3px)",
                              boxShadow: `0 4px 12px ${darkTheme.palette.primary.main}50`,
                            },
                          }}
                        >
                          {social.icon}
                        </Avatar>
                      ))}
                    </Stack>
                  </Box>
                </CardContent>
              </Grid>

              {/* Informações de Contacto */}
              <Grid
                item
                xs={12}
                sm={6}
                sx={{
                  bgcolor: "rgba(187, 134, 252, 0.15)",
                  position: "relative",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `linear-gradient(135deg, ${darkTheme.palette.primary.dark}40 0%, transparent 100%)`,
                    zIndex: 0,
                  },
                }}
              >
                <CardContent sx={{ p: 4, position: "relative", zIndex: 1, height: "100%" }}>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 4 }}>
                    <Avatar sx={{ bgcolor: darkTheme.palette.primary.main, color: "#000", mr: 2 }}>
                      <ContactMailIcon />
                    </Avatar>
                    <Typography variant="h5" fontWeight="bold" color="primary.light">
                      Informações de Contacto
                    </Typography>
                  </Box>

                  <Typography variant="body1" sx={{ mb: 4, color: "rgba(255, 255, 255, 0.8)" }}>
                    Estou disponível para novos projetos. Entre em contacto comigo através dos seguintes meios:
                  </Typography>

                  <Stack spacing={isMobile ? 3 : 4} sx={{ mt: 3 }}>
                    {contactInfo.map((info, index) => (
                      <Box key={index} sx={{ display: "flex", alignItems: "center" }}>
                        <Avatar
                          sx={{
                            bgcolor: "rgba(187, 134, 252, 0.2)",
                            color: darkTheme.palette.primary.light,
                            width: 48,
                            height: 48,
                            mr: 2,
                          }}
                        >
                          {info.icon}
                        </Avatar>
                        <Box>
                          <Typography
                            variant="subtitle1"
                            sx={{ color: "rgba(255, 255, 255, 0.9)", fontWeight: "medium" }}
                          >
                            {info.title}
                          </Typography>
                          <Typography
                            variant="body2"
                            component="a"
                            href={info.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                              color: darkTheme.palette.primary.light,
                              textDecoration: "none",
                              "&:hover": { textDecoration: "underline" },
                            }}
                          >
                            {info.value}
                          </Typography>
                        </Box>
                      </Box>
                    ))}
                  </Stack>
                </CardContent>
              </Grid>
            </Grid>
          </Card>
        </Container>
      </Box>
    </ThemeProvider>
  )
}
