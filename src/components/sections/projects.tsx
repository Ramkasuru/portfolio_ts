import Image from "next/image";
import { projects } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "../ui/scroll-reveal";

const Projects = () => {
  return (
    <div>
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Research & Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => {
          const image = PlaceHolderImages.find(p => p.id === project.imageId);
          return (
            <ScrollReveal key={project.title} delay={index * 0.1}>
              <Dialog>
                <DialogTrigger asChild>
                  <div className="group glass-card rounded-xl overflow-hidden cursor-pointer h-full flex flex-col">
                    {image && (
                      <div className="overflow-hidden relative h-64">
                        <Image
                          src={image.imageUrl}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                          data-ai-hint={image.imageHint}
                        />
                      </div>
                    )}
                    <div className="p-6 flex-grow flex flex-col">
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-muted-foreground text-sm flex-grow">{project.description}</p>
                      <div className="flex flex-wrap gap-2 my-4">
                        {project.tags.map(tag => (
                          <Badge key={tag} variant="secondary">{tag}</Badge>
                        ))}
                      </div>
                       <div className="flex justify-between items-center mt-auto pt-4 border-t border-border">
                         {project.award && <Badge className="bg-accent/80 text-accent-foreground">{project.award}</Badge>}
                         <div className="flex items-center text-sm font-semibold text-primary group-hover:text-accent transition-colors">
                           Read More <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                         </div>
                       </div>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-2xl bg-background border-border glass-card">
                  <DialogHeader>
                    <DialogTitle className="text-2xl mb-4 text-primary">{project.title}</DialogTitle>
                    <DialogDescription asChild>
                      <div>
                        {image && (
                          <div className="relative h-80 mb-4 rounded-lg overflow-hidden">
                            <Image
                              src={image.imageUrl}
                              alt={project.title}
                              fill
                              className="object-cover"
                              data-ai-hint={image.imageHint}
                            />
                          </div>
                        )}
                        <p className="text-foreground mb-4">{project.details}</p>
                        <div className="flex flex-wrap gap-2 my-4">
                          {project.tags.map(tag => (
                            <Badge key={tag} variant="secondary">{tag}</Badge>
                          ))}
                        </div>
                        {project.award && <Badge className="bg-accent text-accent-foreground mb-4">{project.award}</Badge>}
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
            </ScrollReveal>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
