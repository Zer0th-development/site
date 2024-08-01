import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import KnotModel from "../components/KnotModel";
import Services from "../components/services";
import Packages from "../components/packages";
import Carousel from "../components/Carousel";
import CompanyGallery from "../components/CompanyGallery";

function Home() {
  const navigate = useNavigate();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const preventDefault = (e: Event) => e.preventDefault();
      canvas.addEventListener("wheel", preventDefault, { passive: true });
      canvas.addEventListener("touchmove", preventDefault, { passive: true });
      canvas.addEventListener("click", preventDefault);
      return () => {
        canvas.removeEventListener("wheel", preventDefault);
        canvas.removeEventListener("touchmove", preventDefault);
        canvas.removeEventListener("click", preventDefault);
      };
    }
  }, []);

  useEffect(() => {
    document.body.style.overflow = "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const isMobile = windowWidth <= 768;

  const handleWhoWeAreClick = () => {
    const windowHeight = window.innerHeight;
    const scrollDistance = windowHeight * 0.8;

    window.scrollTo({
      top: window.scrollY + scrollDistance,
      behavior: "smooth",
    });
  };
  const handleContactClick = () => navigate("/contact");

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 120) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      style={{
        backgroundColor: "#000000",
        color: "#FFFFFF",
        fontFamily: "'Shippori Antique B1', sans-serif",
        minHeight: "100vh",
        padding: isMobile ? "5%" : "0 5%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "20px",
        overflowY: "auto",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          width: "100%",
          height: isMobile ? "auto" : "90vh",
        }}
      >
        <div
          ref={canvasRef}
          style={{
            height: isMobile ? "450px" : "800px",
            width: isMobile ? "450px" : "800px",
            marginBottom: isMobile ? "-100px" : "0",
            order: isMobile ? 0 : 1,
            pointerEvents: "none",
          }}
        >
          <Canvas style={{ height: "100%", width: "100%", marginTop: "30px" }}>
            <ambientLight intensity={0} />
            <KnotModel />
            <Environment preset="sunset" />
            <OrbitControls enabled={false} />
          </Canvas>
        </div>
        <div
          style={{
            textAlign: isMobile ? "center" : "left",
            marginLeft: isMobile ? "0" : "40px",
            order: isMobile ? 1 : 0,
            zIndex: 5,
          }}
        >
          <h1
            style={{
              fontSize: isMobile ? "36px" : "80px",
              fontWeight: "normal",
              marginBottom: isMobile ? "-20px" : "-50px",
              letterSpacing: "0.1em",
            }}
          >
            ZEROTH
          </h1>
          <h2
            style={{
              fontSize: isMobile ? "22px" : "47px",
              fontWeight: "normal",
              marginBottom: isMobile ? "20px" : "0px",
            }}
          >
            {" "}
            DEVELOPMENT{" "}
          </h2>
          <p
            style={{
              fontSize: isMobile ? "16px" : "26px",
              marginBottom: "40px",
            }}
          >
            {" "}
            A Software & Design Studio
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              gap: "20px",
              alignItems: isMobile ? "center" : "flex-start",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                gap: "10px",
                alignItems: isMobile ? "center" : "center",
                marginBottom: isMobile ? "100px" : "0",
              }}
            >
              <button
                onClick={handleWhoWeAreClick}
                style={{
                  backgroundColor: "#000000",
                  color: "#FFFFFF",
                  fontSize: "20px",
                  cursor: "pointer",
                  padding: "5px 5px",
                  width: "190px",
                  borderRadius: "30px",
                  border: "2px solid #FFFFFF",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textDecoration: "none",
                  marginBottom: isMobile ? "10px" : "0",
                  transition: "all 0.3s ease",
                  fontFamily: "'Shippori Antique B1', sans-serif",
                }}
              >
                Who we are
              </button>
              <button
                onClick={handleContactClick}
                style={{
                  backgroundColor: "#FFFFFF",
                  color: "#000000",
                  fontSize: "20px",
                  cursor: "pointer",
                  padding: "5px 20px",
                  width: "190px",
                  borderRadius: "30px",
                  border: "2px solid #FFFFFF",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textDecoration: "none",
                  marginBottom: isMobile ? "10px" : "0",
                  transition: "all 0.3s ease",
                  fontFamily: "'Shippori Antique B1', sans-serif",
                }}
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>

      <p
        className={isVisible ? "visible-text" : "hidden-text"}
        style={{
          fontSize: isMobile ? "16px" : "26px",
          marginBottom: "40px",
          textAlign: "center",
          maxWidth: "840px",
        }}
      >
        We craft bespoke solutions tailored to each client's unique needs.
        specializing in work with creators, artists and entrepreneurs at the top
        of their feild looking for help executing on their creative vision.
      </p>

      <div style={{ width: "100%", marginTop: "40px", overflow: "hidden" }}>
        <Carousel autoScrollSpeed={50} />
      </div>

      <div style={{ marginTop: "80px" }}>
        <CompanyGallery />
      </div>

      <h2
        style={{
          fontSize: isMobile ? "18px" : "40px",
          fontWeight: "normal",
          marginBottom: isMobile ? "-20px" : "-10px",
        }}
      >
        {" "}
        Services{" "}
      </h2>
      <p
        style={{
          fontSize: isMobile ? "16px" : "26px",
          marginBottom: "10px",
          textAlign: "center",
          maxWidth: "850px",
        }}
      >
        Each client receives weekly development and design meetings throughout
        the project, along with comprehensive project roadmapping and detailed
        reporting.
      </p>

      <Services isMobile={isMobile} />

      <h2
        style={{
          fontSize: isMobile ? "18px" : "40px",
          fontWeight: "normal",
          marginBottom: isMobile ? "-20px" : "-10px",
        }}
      >
        {" "}
        Packages{" "}
      </h2>
      <p
        style={{
          fontSize: isMobile ? "16px" : "26px",
          marginBottom: "10px",
          textAlign: "center",
          maxWidth: "850px",
        }}
      >
        Whether you need to complete a single project, optimize and manage your
        entire business, or explore the possibilities of building a larger, more
        complex project, we have the team and resources to meet your needs.
      </p>

      <Packages />
    </div>
  );
}

export default Home;
