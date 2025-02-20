"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold">
            Meu App
          </Link>

          {/* Botão de Menu para Mobile */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "✖" : "☰"}
          </button>

          <div className="hidden md:flex space-x-6">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <Link href="/about" className="hover:underline">
              Sobre
            </Link>
            <Link href="/contact" className="hover:underline">
              Contato
            </Link>
          </div>
        </div>

        {/* Links do Menu (Mobile) */}
        {isOpen && (
          <div className="md:hidden flex flex-col space-y-2 pb-4">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <Link href="/about" className="hover:underline">
              Sobre
            </Link>
            <Link href="/contact" className="hover:underline">
              Contato
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
