import React from "react";
import Navbar from "./NavBar/Navbar";
import Hero from "./Hero/Hero";
import "./home_module.css";
import Fondo from "../../assets/prueba.png";

const Home: React.FC = () => {
  const bgImagen = {
    backgroundImage: `url(${Fondo})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom",
    backgroundSize: "cover",
    position: "relative",
  };

  return (
    <div style={bgImagen} className="overflow-hidden min-h-screen">
      <Navbar />
      <Hero />
    </div>
  );
};

export default Home;
