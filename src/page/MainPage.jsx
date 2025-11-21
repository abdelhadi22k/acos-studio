// MainPage.jsx
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
// import Chatbot from "../components/Chatbot";

const MainPage = () => {
  return (
    <div className="mainPageWrapper">
      <NavBar />

      {/* كل سكشن أصلاً عنده id داخلي نفسه (home, about, services, ...) */}
      <HomeSection />
      <AboutUsSection />
      <ServicesSection />
      <ProjectsSection />
      <ExperienceSection />
      <TestimonialsSection />
      <BlogSection />
      <ContactSection />


      <Footer />

      {/* فعّل الشات بوت لما تكون جاهز */}
      {/* <Chatbot /> */}
    </div>
  );
};

export default MainPage;
