import NavBar from "../components/utils/NavBar";
import AboutUsSection from "../section/AboutUsSection";
import BlogSection from "../section/BlogSection";
import ContactSection from "../section/ContactSection";
import ExperienceSection from "../section/ExperienceSection";
import HomeSection from "../section/HomeSection";
import ProjectsSection from "../section/ProjectsSection";
import ServicesSection from "../section/ServicesSection";
import TestimonialsSection from "../section/TestimonialsSection";
import Footer from "../components/Footer";
import Chatbot from "../components/Chatbot";

const MainPage = () => {
  return (
    <div>
      <NavBar />

      <section id="home">
        <HomeSection />
      </section>

      <section id="about">
        <AboutUsSection />
      </section>

      <section id="services">
        <ServicesSection />
      </section>

      <section id="projects">
        <ProjectsSection />
      </section>

      <section id="experience">
        <ExperienceSection />
      </section>

      <section id="testimonials">
        <TestimonialsSection />
      </section>

      <section id="blog">
        <BlogSection />
      </section>

      <section id="contact">
        <ContactSection />
      </section>

      <Footer />
    </div>
  );
};

export default MainPage;
      // <Chatbot />
