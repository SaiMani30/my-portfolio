import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col" style={{ background: 'linear-gradient(to bottom, #002147 0%, #002147 0%, hsla(222, 47%, 11%, 1) 0%, hsla(222, 47%, 11%, 1) 100%)' }}>
      <Navbar />
      <div className="container mt-24 mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 py-4">
        {/* Adjusted padding for various screen sizes */}
        <HeroSection />
        <AchievementsSection />
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
