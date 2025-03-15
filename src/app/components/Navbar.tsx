"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="">
      <div className="">
        <div className="fixed top-0 left-0 w-full bg-gray-900 text-white py-6 px-6 flex justify-between items-center shadow-md border-b border-gray-300">
          <Link href="/" className="text-2xl font-bold">
            FERNANDO
          </Link>

          {/* Botão de Menu para Mobile */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "✖" : "☰"}
          </button>

          <div className="hidden md:flex space-x-6">
            <Link href="/" className="text-xl">
              Home
            </Link>
            <Link href="/page" className="text-xl">
              Projetos
            </Link>
            <Link href="/contact" className="text-xl">
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
              Projetos
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
