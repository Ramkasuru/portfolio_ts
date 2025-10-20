import { education, personalityTraits } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const About = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div>
        <h2 className="text-3xl font-bold mb-8 text-accent">Education & Research</h2>
        <div className="relative border-l-2 border-accent/30 space-y-12">
          {education.map((item, index) => (
            <ScrollReveal key={index} delay={index * 0.2}>
              <div className="relative pl-8">
                <div className="absolute -left-2.5 top-1 h-5 w-5 rounded-full bg-accent animate-pulse" />
                <p className="font-semibold text-lg">{item.degree}</p>
                <p className="text-primary font-medium">{item.institution}</p>
                <p className="text-sm text-muted-foreground">{item.years}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-3xl font-bold mb-8 text-accent">Who I Am</h2>
        <div className="grid grid-cols-2 gap-4">
          {personalityTraits.map((trait, index) => (
            <ScrollReveal key={index} delay={index * 0.2}>
              <Card className="glass-card rounded-xl h-full">
                <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-2">
                  <trait.icon className="h-6 w-6 text-accent" />
                  <CardTitle className="text-lg font-semibold">{trait.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{trait.description}</p>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
