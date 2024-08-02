import { NeonGradientCard } from "./magicui/neon-gradient-card";
import "../App.css";
import { IoIosCheckmarkCircle } from "react-icons/io";

const CustomPackageCard = () => {
  const firstColor = "#e3e3e3";
  const secondColor = "#5403FF";
  return (
    <>
      <div
      style={{ fontFamily: "'Shippori Antique B1', sans-serif" }}
      className="flex items-center justify-center w-full sm:w-[475px] h-[800px]"
      >
        <NeonGradientCard
          neonColors={{ firstColor, secondColor }}
          borderSize={2}
          borderRadius={15}
        >
          <h1 className="text-4xl font-bold text-center mb-6">
            Custom Development
          </h1>
          <h2 className="text-xl font-semibold mb-2">You Need:</h2>
          <ul className="text-gray-400 space-y-3 ml-7 mb-2">
            {[
              "A bespoke solution that doesn't fit standard offerings",
              "Flexibility in project scope, timeline, and deliverables",
              "Expert guidance to bring your innovative ideas to life"
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
              "Personalized consultation to define your unique requirements",
              "Scalable solutions adaptable to your evolving needs",
              "Flexible engagement models (time & materials, milestone-based, etc.)",
              "Ongoing support and maintenance options"
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <IoIosCheckmarkCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </NeonGradientCard>
      </div>
    </>
  );
};

export default CustomPackageCard;
