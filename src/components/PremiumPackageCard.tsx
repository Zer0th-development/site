import { NeonGradientCard } from "./magicui/neon-gradient-card";
import "../App.css";
import "../fonts.css";
import { IoIosCheckmarkCircle, IoMdArrowRoundForward } from "react-icons/io";
import ShimmerButton from "../components/magicui/shimmer-button";
import AnimatedGradientText from "../components/magicui/animated-gradient-text";
import { cn } from "../@/lib/utils";

const PremiumPackageCard = () => {
  const firstColor = "#e3e3e3";
  const secondColor = "#00FF47";
  
  return (
    <div className="flex items-center justify-center w-full sm:w-[475px] h-[810px] relative">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
        <div className="z-10 flex items-center justify-center">
          <AnimatedGradientText
            fromColor={firstColor}
            viaColor={secondColor}
            toColor={firstColor}
          >
            <span
              className={cn(`inline animate-gradient bg-gradient-to-r from-[${firstColor}] via-[${secondColor}] to-[${firstColor}] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,)}
            >
              Premium
            </span>
          </AnimatedGradientText>
        </div>
      </div>
      <NeonGradientCard
        neonColors={{ firstColor, secondColor }}
        borderSize={2}
        borderRadius={15}
        fontFamily="SF Pro Display, sans-serif"
        className="relative z-10"
      >
        <div
        style={{ fontWeight: "500", textAlign: "center" }} 
        className="text-4xl mb-6 mt-1"
        >
          Fully Managed Subscription
        </div>

        <div
        style={{ fontWeight: "500", textAlign: "left" }} 
        className="text-2xl mb-2 "
        >
          You Need:
        </div>
        <ul className="text-gray-400 space-y-3 ml-7 mb-2">
          {[
            "A partner to build, manage, and continuously optimize your entire digital ecosystem",
            "Consistent & On-Demand changes, updates, insights and optimizations for your digital assets",
            "Data-driven strategies to boost your online presence and revenue"
          ].map((item, index) => (
            <li key={index} className="flex items-start">
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div
        style={{ fontWeight: "500", textAlign: "left" }} 
        className="text-2xl mb-2 "
        >
          Includes:
        </div>
        <ul className="text-gray-400 space-y-3">
          {[
            "3 Developers + Designer + Technical Project Manager Dedicated to your Project",
            "End-to-end digital solution development and management",
            "Continuous improvements and proactive business operations based on real-time user data",
            "Digital marketing and customer acquisition services",
            "Setup & Managment for product distribution & fulfillment",
            "Regular updates and on-demand changes to your digital assets"
          ].map((item, index) => (
            <li key={index} className="flex items-start">
              <IoIosCheckmarkCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

<div className="flex flex-col items-center justify-center space-y-4">
  <div className="text-center">
    <div className="text-lg text-gray-400 mb-1">
      Starting At
    </div>
    <div className="text-3xl text-white">
      $10,000/month
    </div>
  </div>
  <ShimmerButton
    shimmerSize="3px"
    shimmerColor="#00FF47"
    className="bg-black text-white text-lg cursor-pointer px-6 py-2 w-48 rounded-full border-2 border-white inline-flex items-center justify-center no-underline transition-all duration-300 ease-in-out"
  >
    Get Started <IoMdArrowRoundForward className="ml-2" />
  </ShimmerButton>
</div>

            
      </NeonGradientCard>
    </div>
  );
};

export default PremiumPackageCard;
