'use client'

import Link from 'next/link'
import { useEffect } from 'react'
import Aboutsection from './components/Aboutsection'

export default function Home() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth'
  }, [])

  return (
    <div>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-10">
        <ul className="flex justify-center gap-6 py-4 text-gray-800 font-semibold">
          <li><Link href="#home">Home</Link></li>
          <li><Link href="#sobre">Sobre</Link></li>
          <li><Link href="#servicos">Serviços</Link></li>
          <li><Link href="#contato">Contato</Link></li>
        </ul>
      </nav>

      {/* Seções */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-24">
        {/* <h1 className="text-4xl font-bold">Bem-vindo!</h1> */}
        <Aboutsection/>
      </section>

      <section id="sobre" className="min-h-screen flex items-center justify-center bg-green-100">
        <h2 className="text-3xl">Sobre Mim</h2>
      </section>

      <section id="servicos" className="min-h-screen flex items-center justify-center bg-yellow-100">
        <h2 className="text-3xl">Meus Serviços</h2>
      </section>

      <section id="contato" className="min-h-screen flex items-center justify-center bg-red-100">
        <h2 className="text-3xl">Contato</h2>
      </section>
    </div>
  )
}
