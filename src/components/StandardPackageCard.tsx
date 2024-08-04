import React from "react";
import { NeonGradientCard } from "./magicui/neon-gradient-card";
import "../App.css";
import { IoIosCheckmarkCircle, IoMdArrowRoundForward } from "react-icons/io";
import ShimmerButton from "../components/magicui/shimmer-button";
import AnimatedGradientText from "../components/magicui/animated-gradient-text";
import { cn } from "../@/lib/utils";

interface StandardPackageCardProps {
  isMobile?: boolean;
}

const StandardPackageCard: React.FC<StandardPackageCardProps> = ({ isMobile = false }) => {
    const firstColor = "#e3e3e3";
    const secondColor = "#ffffff";
  return (
    <div
      style={{ fontFamily: "'Shippori Antique B1', sans-serif" }}
      className={`flex items-center justify-center relative`}
    >
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
        <div className="z-10 flex items-center justify-center">
          <AnimatedGradientText
            fromColor={firstColor}
            viaColor={secondColor}
            toColor={firstColor}
          >
            <div
              className={cn(`inline animate-gradient bg-gradient-to-r from-[${firstColor}] via-[${secondColor}] to-[${firstColor}] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,)}
            >
              Standard
            </div>
          </AnimatedGradientText>
        </div>
      </div>
      <NeonGradientCard
        neonColors={{ firstColor, secondColor }}
        borderSize={2}
        borderRadius={15}
        className="relative h-180 z-10 sm:w-[475px]"
      >
        <h1 className={`${isMobile ? "text-3xl" : "text-4xl"} font-bold text-center mb-6`}>Project</h1>
        <h2 className={`${isMobile ? "text-xl" : "text-2xl"} font-semibold mb-2`}>You Need:</h2>
        <ul className={`text-gray-400 space-y-3 ml-7 mb-2 ${isMobile ? "text-base" : "text-base"}`}>
          {[
            "Bring an idea to life that is so insanely amazing that it could not possibly fit within the standard offerings",
            "Build out of a new (or rebuild) website, app or software solution",
            "Integrations with essential apps & extensions"
          ].map((item, index) => (
            <li key={index} className="flex items-start">
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <h2 className={`${isMobile ? "text-xl" : "text-2xl"} font-semibold mb-2`}>Includes:</h2>
        <ul className={`text-gray-400 space-y-3 ${isMobile ? "text-base" : "text-base"}`}>
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
    <div className="flex flex-col items-center justify-center space-y-3 mt-4">
      <div className="text-center">
      <div className={`${isMobile ? "text-lg" : "text-lg"} text-gray-400 mb-1`}>
        Starting At
      </div>
      <div className={`${isMobile ? "text-3xl" : "text-3xl"} text-white`}>
        $5,000
      </div>
    </div>
        <ShimmerButton
          shimmerSize="3px"
          shimmerColor="#00FF47"
          className={`bg-black text-white ${isMobile ? "text-lg" : "text-lg"} cursor-pointer px-6 py-2 w-48 rounded-full border-2 border-white inline-flex items-center justify-center no-underline transition-all duration-300 ease-in-out mt-2`}
        >
          Get Started <IoMdArrowRoundForward className="ml-2" />
        </ShimmerButton>
    </div> 
      </NeonGradientCard>
    </div>
  );
};

export default StandardPackageCard;