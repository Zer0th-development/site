import React from "react";
import AnimatedShinyText from "./magicui/animated-shiny-text";
import "../App.css";

interface StandardBadgeProps {
  text?: string;
  className?: string;
}

const StandardBadge: React.FC<StandardBadgeProps> = ({
  text = "Standard",
  className
}) => {
  return (
    <div
      style={{
        fontFamily: "'Shippori Antique B1', sans-serif",
        alignItems: "center",
        justifyContent: "center",
        background: "#242424"
      }}
      className={`inline-block px-3 py-1 rounded-full ${className}`}
    >
      <AnimatedShinyText
        className="text-sm font-semibold text-transparent bg-clip-text custom-shimmer"
        shimmerWidth={200}
      >
        {text}
      </AnimatedShinyText>
    </div>
  );
};

export default StandardBadge;
