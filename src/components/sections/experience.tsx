import Image from "next/image";
import { experience } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const Experience = () => {
  return (
    <div>
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Professional Experience</h2>
      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-border" aria-hidden="true" />
        
        {experience.map((job, index) => {
          const logo = PlaceHolderImages.find(p => p.id === job.logoId);
          const isLeft = index % 2 === 0;

          return (
            <div key={index} className={`relative mb-12 flex items-center ${isLeft ? 'justify-start' : 'justify-end'}`}>
              <div className={`w-1/2 ${isLeft ? 'pr-8' : 'pl-8'}`}>
                <ScrollReveal from={isLeft ? 'left' : 'right'}>
                  <div className="glass-card p-6 rounded-xl">
                    <div className="flex items-center gap-4 mb-2">
                       {logo && <Image src={logo.imageUrl} alt={`${job.company} logo`} width={40} height={40} className="rounded-full bg-white p-1" data-ai-hint={logo.imageHint} />}
                      <div>
                        <h3 className="text-lg font-bold text-primary">{job.role}</h3>
                        <p className="font-semibold">{job.company}</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">{job.period}</p>
                    <ul className="space-y-2 text-sm list-disc list-inside">
                      {job.description.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 h-5 w-5 rounded-full bg-accent ring-8 ring-background" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
