import AboutHeroTop from "../components/AboutHeroTop/AboutHeroTop";
import AboutHeroBot from "../components/AboutHeroBot/AboutHeroBot";
import Tagline from "../components/AboutTagline/Tagline";

export default function About() {
  return (
    <div id="about-bg">
      <AboutHeroTop />
      <Tagline />
      <AboutHeroBot />
    </div>
  );
}
