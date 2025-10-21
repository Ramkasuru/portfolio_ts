"use client";

import Image from "next/image";
import { projects } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div id="projects" className="snap-y snap-mandatory">
      <div className="h-screen snap-start flex flex-col justify-center items-center text-center p-4">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          Research & Projects
        </motion.h2>
        <motion.p 
          className="text-lg text-muted-foreground max-w-2xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Scroll to explore my work. Each project is presented in a full-screen view.
        </motion.p>
      </div>

      {projects.map((project, index) => {
        const image = PlaceHolderImages.find(p => p.id === project.imageId);
        return (
          <motion.section
            key={project.title}
            className="h-screen w-full snap-start relative flex items-center justify-center p-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 1 }}
          >
            {image && (
               <Image
                 src={image.imageUrl}
                 alt={project.title}
                 fill
                 className="object-cover absolute inset-0 z-0 opacity-10"
                 data-ai-hint={image.imageHint}
               />
             )}
            <div className="z-10 text-center max-w-3xl glass-card p-8 md:p-12 rounded-2xl">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <h3 className="text-3xl md:text-4xl font-bold mb-4 text-primary">{project.title}</h3>
                <p className="text-muted-foreground text-base md:text-lg mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2 justify-center mb-6">
                  {project.tags.map(tag => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button>
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl bg-background/80 backdrop-blur-md border-border glass-card">
                    <DialogHeader>
                      <DialogTitle className="text-2xl mb-4 text-primary">{project.title}</DialogTitle>
                      <DialogDescription asChild>
                        <div>
                          {image && (
                            <div className="relative h-60 mb-4 rounded-lg overflow-hidden">
                              <Image
                                src={image.imageUrl}
                                alt={project.title}
                                fill
                                className="object-cover"
                                data-ai-hint={image.imageHint}
                              />
                            </div>
                          )}
                           <div className="flex flex-wrap gap-2 my-4">
                            {project.tags.map(tag => (
                              <Badge key={tag} variant="secondary">{tag}</Badge>
                            ))}
                          </div>
                          {project.award && <Badge className="bg-accent text-accent-foreground mb-4">{project.award}</Badge>}
                          <p className="text-foreground mb-4">{project.details}</p>
                          {project.link && (
                            <Button asChild>
                              <a href={project.link} target="_blank" rel="noopener noreferrer">
                                View Project <ArrowRight className="ml-2 h-4 w-4" />
                              </a>
                            </Button>
                          )}
                        </div>
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </motion.div>
            </div>
          </motion.section>
        );
      })}
    </div>
  );
};

export default Projects;
