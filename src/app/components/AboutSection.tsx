import Image from "next/image";
import fernando from "@/img/img-2.jpg";
import { Button } from "@mui/material";
import { HyperText } from "./ui/Hypertext";

export default function AboutSection() {
  return (
    <section className="w-full min-h-screen pt-20 flex items-center justify-center overflow-hidden">
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <HyperText
                text="Batista Fernando"
                className="text-4xl font-bold text-white"
                animateOnLoad={true}
                duration={3500}
              />
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                Sou um jovem programador apaixonado por tecnologia e inovação.
                Tenho experiência em desenvolvimento front-end, especialmente
                com Next.js.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button variant="contained" color="primary">
                Meus Projetos
              </Button>
              <Button variant="outlined" color="primary">
                Entre em Contato
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:block fixed top-0 right-0 w-1/2 h-full">
        <svg
          className="absolute left-0 top-0 h-full w-full"
          viewBox="0 0 500 1000"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M500 0H100C44.7715 0 0 44.7715 0 100V1000H500V0Z"
            fill="#2563EB"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center p-8 mt-20">
          <div className="relative aspect-square w-full max-w-[500px] overflow-hidden rounded-xl">
            <Image
              alt="Batista Fernando"
              className="object-cover"
              fill
              src={fernando}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
