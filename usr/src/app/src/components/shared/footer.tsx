"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Footer = () => {
  const [testContent, setTestContent] = useState("Loading test content...");

  useEffect(() => {
    fetch('/test.txt')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text();
      })
      .then(text => setTestContent(text))
      .catch(() => setTestContent("Error: Could not load test.txt. The public folder is likely in the wrong location (e.g., inside /src). It must be at the root level."));
  }, []);

  const socialLinks = [
    { icon: Mail, href: "mailto:kodanda4u@gmail.com", label: "Email" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/kasuru/", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/Ramkasuru", label: "GitHub" },
    { icon: FileText, href: "/Ram-Kasuru-Resume.pdf", label: "Resume" },
  ];

  return (
    <footer className="bg-background/50 text-gray-300 py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center items-center gap-4 mb-4">
          {socialLinks.map((link) => (
            <Button asChild key={link.label} variant="ghost" size="icon" className="text-gray-300 hover:bg-white/10 hover:text-white">
              <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
                <link.icon className="h-5 w-5" />
              </a>
            </Button>
          ))}
        </div>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Ram Kasuru. All rights reserved.
        </p>
        <p className="text-xs text-gray-400 mt-2">
          Designed and built with Next.js, Tailwind CSS, and a cup of coffee.
        </p>
        <div className="mt-4 p-2 border border-dashed border-gray-600 rounded-md max-w-2xl mx-auto">
          <p className="text-xs text-yellow-400">Debug Info: {testContent}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;