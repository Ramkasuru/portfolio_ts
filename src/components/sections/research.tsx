"use client";

import { motion } from "framer-motion";
import { researchPapers } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

const Research = () => {
  return (
    <div id="research" className="snap-y snap-mandatory">
      {researchPapers.map((paper, i) => {
        const image = PlaceHolderImages.find(p => p.id === paper.imageId);
        return (
          <motion.section
            key={i}
            className="h-screen w-full snap-start relative flex items-center justify-center p-8"
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {image && (
              <Image
                src={image.imageUrl}
                alt={paper.title}
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
                <h2 className="text-3xl md:text-5xl font-bold z-10 mb-4 text-primary">
                  {paper.title}
                </h2>
                <p className="text-lg text-gray-300 max-w-2xl z-10">
                  {paper.description}
                </p>

                <div className="flex flex-wrap justify-center mt-6 gap-3 z-10">
                  {paper.keywords.map((kw, index) => (
                    <span
                      key={index}
                      className="bg-white/10 text-gray-200 border border-gray-500 rounded-full px-4 py-1 text-sm"
                    >
                      {kw}
                    </span>
                  ))}
                </div>

                <Button asChild className="mt-8 z-10" size="lg">
                  <a
                    href={paper.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read Full Paper
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </motion.div>
            </div>
          </motion.section>
        );
      })}
    </div>
  );
};

export default Research;
