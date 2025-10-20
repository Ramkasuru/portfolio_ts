"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";
import { Badge } from "@/components/ui/badge";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

const Skills = () => {
  return (
    <div className="text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-12">Technical Skills</h2>
      
      {Object.entries(skills).map(([category, skillList]) => (
        <div key={category} className="mb-10">
          <h3 className="text-xl font-semibold text-accent mb-6">{category}</h3>
          <motion.div
            className="flex flex-wrap justify-center gap-3 md:gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {skillList.map((skill) => (
              <motion.div key={skill} variants={itemVariants} whileHover={{ scale: 1.1, y: -5 }}>
                <Badge className="text-base md:text-lg px-4 py-2 rounded-full cursor-default bg-secondary/80 hover:bg-primary transition-colors duration-300">
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
