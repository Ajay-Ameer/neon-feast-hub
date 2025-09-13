interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  gradient?: "cyber" | "plasma" | "electric";
  className?: string;
}

const SectionHeader = ({ title, subtitle, gradient = "cyber", className = "" }: SectionHeaderProps) => {
  const gradientClass = {
    cyber: "text-gradient-cyber",
    plasma: "text-gradient-plasma", 
    electric: "text-gradient-electric"
  }[gradient];

  return (
    <div className={`text-center space-y-4 mb-16 ${className}`}>
      <h2 className={`text-3xl lg:text-5xl font-orbitron font-bold ${gradientClass} pulse-cyber`}>
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