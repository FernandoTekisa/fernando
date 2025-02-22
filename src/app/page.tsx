"use client";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";

export default function HomePage() {
  return (
    <Container>
      <Navbar/>
      <AboutSection/>
    </Container>
  );
}
