"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navItems = [
  { id: "hero", label: "Home" },
  { id: "skills", label: "My Skills" },
  { id: "experience", label: "Work History" },
  { id: "education", label: "Education" },
  { id: "testimonials", label: "Testimonials" },
  { id: "contact", label: "Contact Me" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 w-full z-50 bg-blue-700 shadow-md backdrop-blur bg-opacity-90"
    >
      <div className="w-full flex justify-between items-center px-4 py-2">
        <div className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="Forklift icon"
            width={40}
            height={40}
            className="object-contain"
          />
          <div className="flex flex-col leading-tight">
            <span className="text-white font-semibold text-base sm:text-lg md:text-xl">
              Sydney L. Hopson Jr.
            </span>
            <span className="text-white text-xs sm:text-sm md:text-base opacity-80 mt-[-2px]">
              Certified Forklift Operator & Logistics Clerk
            </span>
          </div>
        </div>

        <div className="hidden md:flex gap-6 text-sm font-medium">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-white hover:text-yellow-300 transition-colors duration-300 hover:scale-105"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 pb-4 text-sm font-medium bg-blue-700">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-white hover:text-yellow-300 transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </motion.header>
  );
}
