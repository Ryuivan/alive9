import React, { useState, useEffect } from "react";
import Landing from "../components/Landing/Landing";
import News from "../components/News/News";
import Context from "../components/Context/Context";
import AboutHome from "../components/AboutHome/AboutHome";
import Gallery from "../components/Gallery/Gallery";

export default function Home() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      id="landing-bg"
      style={{
        backgroundImage:
          screenWidth > 600
            ? "url('https://cdn.discordapp.com/attachments/1135924428300099595/1137786167450943559/image.png')"
            : "url('https://cdn.discordapp.com/attachments/1135924428300099595/1138528127706992803/image.png')",
      }}
    >
      <Landing />
      <News />
      <Context />
      <AboutHome />
      <Gallery />
    </div>
  );
}
