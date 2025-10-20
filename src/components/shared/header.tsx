"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Header = () => {
  const [hidden, setHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <>
      <motion.header
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <div className="container mx-auto px-4 my-2">
          <div className="flex items-center justify-between h-16 glass-card rounded-xl px-6">
            <Link href="#home" className="text-xl font-bold text-primary hover:text-accent transition-colors">
              Ram Kasuru
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-2">
              {navLinks.map((link) => (
                <Button key={link.name} asChild variant="ghost">
                  <Link href={link.href}>{link.name}</Link>
                </Button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button onClick={toggleMobileMenu} variant="ghost" size="icon">
                {isMobileMenuOpen ? <X /> : <Menu />}
                <span className="sr-only">Toggle menu</span>
              </Button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-40 bg-background/80 backdrop-blur-lg md:hidden"
          onClick={toggleMobileMenu}
        >
          <motion.nav
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 left-0 right-0 p-4 pt-24 bg-background border-b border-border shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <ul className="flex flex-col items-center gap-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-xl py-2 block" onClick={toggleMobileMenu}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>
        </motion.div>
      )}
    </>
  );
};

export default Header;
