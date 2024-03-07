import Banner from "./components/Banner.jsx";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import Footer from "./components/Footer";
import Contact from "./components/Contact.jsx";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <Banner />
        <AboutSection />
        <ProjectsSection />
        <Contact/>
      </div>
      <Footer />
    </main>
  );
}
