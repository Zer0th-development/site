import { NeonGradientCard } from "./magicui/neon-gradient-card";
import "../App.css";
import { IoIosCheckmarkCircle } from "react-icons/io";
import StandardBadge from "./StandardBadge";

const StandardPackageCard: React.FC = () => {
    const firstColor = "#e3e3e3";
    const secondColor = "#ffffff";
  return (
    <div
    style={{ fontFamily: "'Shippori Antique B1', sans-serif", height: '800px', width:'475px', alignItems: 'center', justifyContent: 'center'}} 
    >
      <NeonGradientCard
        neonColors={{ firstColor, secondColor }}
        borderSize={2}
        borderRadius={15}
      >
        <StandardBadge />

        <h1 className="text-4xl font-bold text-center mb-6">Project</h1>

        <h2 className="text-xl font-semibold mb-2">You Need:</h2>
        <ul className="text-gray-400 space-y-3 ml-7 mb-2">
          {[
            "To Build a new (or rebuild) website, app or software solution",
            "Brand oriented & user friendly UI/UX",
            "Integrations with essential apps & extensions"
          ].map((item, index) => (
            <li key={index} className="flex items-start">
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <h2 className="text-xl font-semibold mb-2">Includes:</h2>
        <ul className="text-gray-400 space-y-3">
          {[
            "Development of your digital product",
            "Collaborative design process",
            "Full E-commerce platform integration",
            "Customer data management system",
            "One-time delivery with thorough documentation & content management system for future updates"
          ].map((item, index) => (
            <li key={index} className="flex items-start">
              <IoIosCheckmarkCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </NeonGradientCard>
    </div>
  );
};

export default StandardPackageCard;
