import Link from "next/link";
import { Github, Linkedin, Mail, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const socialLinks = [
    { icon: Mail, href: "mailto:kodanda4u@gmail.com", label: "Email" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/kasuru-kodanda-rama-raju-1bb8442/", label: "LinkedIn" },
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
      </div>
    </footer>
  );
};

export default Footer;
