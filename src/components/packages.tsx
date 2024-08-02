import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import PackageCard from "./StandardPackageCard";

const Packages = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextPackage = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % 3);
  };

  const prevPackage = () => {
    setCurrentIndex(prevIndex => (prevIndex - 1 + 3) % 3);
  };

  return (
    <div
      style={{
        fontFamily: "'Shippori Antique B1', sans-serif",
        height: "1000px",
        width: "100%",
        alignItems: "center",
        justifyContent: "center"
      }}
      className="relative w-full h-80 overflow-hidden"
    >
      <div className="absolute inset-0 flex items-center justify-center">
        {[0, 1, 2].map(index => (
          <div
            key={index}
            className={`absolute transition-all duration-1000 ease-in-out ${
              index === currentIndex
                ? "z-20 scale-100 opacity-100"
                : index === (currentIndex + 1) % 3
                ? "z-10 scale-90 opacity-30 translate-x-3/4"
                : "z-10 scale-90 opacity-30 -translate-x-3/4"
            }`}
          >
            <PackageCard />
          </div>
        ))}
      </div>
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30"
        onClick={prevPackage}
      >
        <ChevronLeft className="h-4 w-4" />
      </button>
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30"
        onClick={nextPackage}
      >
        <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  );
};

export default Packages;
