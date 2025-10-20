interface SectionWrapperProps {
  children: React.ReactNode;
  id: string;
  className?: string;
}

export const SectionWrapper = ({ children, id, className }: SectionWrapperProps) => {
  return (
    <section id={id} className={`container mx-auto px-4 py-20 md:py-28 ${className}`}>
      {children}
    </section>
  );
};
