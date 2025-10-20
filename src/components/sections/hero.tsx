"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, FileText, Send } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ParticleBackground from "@/components/ui/particle-background";
import AnimatedText from "@/components/ui/animated-text";

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground />
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">
            <span className="block text-muted-foreground mb-2">Hi, I'm Ram Kasuru</span>
            <AnimatedText 
              text="AI Engineer, CUDA Developer, and Researcher." 
              el="span"
              className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent"
            />
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <a href="/Ram-Kasuru-Resume.pdf" target="_blank" rel="noopener noreferrer">
              <FileText className="mr-2 h-5 w-5" /> View Resume
            </a>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <Link href="#contact">
              <Send className="mr-2 h-5 w-5" /> Contact Me
            </Link>
          </Button>
          <div className="flex gap-2">
            <Button asChild variant="ghost" size="icon" className="h-12 w-12 hover:bg-white/10">
              <a href="https://www.linkedin.com/in/kasuru/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-6 w-6" />
              </a>
            </Button>
            <Button asChild variant="ghost" size="icon" className="h-12 w-12 hover:bg-white/10">
              <a href="https://github.com/Ramkasuru" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-6 w-6" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
