interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  gradient?: "fresh" | "vitality" | "warm";
  className?: string;
}

const SectionHeader = ({ title, subtitle, gradient = "fresh", className = "" }: SectionHeaderProps) => {
  const gradientClass = {
    fresh: "text-gradient-fresh",
    vitality: "text-gradient-warm", 
    warm: "text-gradient-sunrise"
  }[gradient];

  return (
    <div className={`text-center space-y-4 mb-16 ${className}`}>
      <h2 className={`text-3xl lg:text-5xl font-playfair font-bold ${gradientClass} pulse-fresh`}>
        {title}
      </h2>
      {subtitle && (
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-exo">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;