import { useEffect, useState } from "react";
import { Title, Meta } from "react-head";

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

const MainPage = () => {
  const [currentSection, setCurrentSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observerOptions = { threshold: 0.5 };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          setCurrentSection(id);
          window.history.pushState(null, "", `#${id}`);
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // البيانات الخاصة بالـ meta
  const metaData = {
    home: {
      title: "الصفحة الرئيسية | Acos  Studio",
      description:
        "Build your brand’s digital presence with Acos Studio — experts in SEO, web design, UI/UX, and automation for businesses in UAE, Saudi Arabia, and Algeria.",
    },
    about: {
      title: "من نحن | Acos Studio",
      description:
        "Discover Acos Studio — a creative team delivering web design, SEO, UI/UX, and automation solutions across UAE, Saudi Arabia, and Algeria.",
    },

    services: {
      title: "خدماتنا | Acos Studio",
      description:
        "Explore our digital services at Acos Studio — offering web development, UI/UX design, SEO, and automation solutions for businesses in UAE, Saudi Arabia, and Algeria.",
    },

    projects: {
      title: "مشاريعنا | Acos  Studio",
      description:
        "Explore Acos Studio’s portfolio of web design, UI/UX, SEO, and automation projects across UAE, Saudi Arabia, and Algeria. See how we transform ideas into digital success stories.",
    },

    experience: {
      title: "خبراتنا | Acos  Studio",
      description:
        "Discover how Acos Studio’s 3+ years of experience in web design, SEO, UI/UX, and automation have helped businesses in the UAE, Saudi Arabia, and Algeria grow online.",
    },

    testimonials: {
      title: "شهدات عملائنا | Acos  Studio",
      description:
        "Read real testimonials from Acos Studio clients across the UAE, Saudi Arabia, and Algeria. Discover how our web design, UX, and automation services helped their businesses grow.",
    },

    blog: {
      title: "مدونتنا| Acos Studio",
      description:
        "Stay ahead with Acos Studio’s blog. Discover expert tips on web design, UI/UX, SEO, and AI automation for growing your business in the UAE, Saudi Arabia, and Algeria.",
    },

    contact: {
      title: "اتصل بنا | Acos Studio",
      description:
        "Get in touch with Acos Web Studio — we’d love to hear about your ideas and projects. Contact us today for web design, UI/UX, and AI automation solutions tailored to your business goals.",
    },
  };

  const { title, description } = metaData[currentSection] || metaData["home"];

  return (
    <div>
      <Title>{title}</Title>
      <Meta name="description" content={description} />

      <NavBar />

      {/* مهم: إضافة section + id عشان الـ observer يشتغل */}
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
      
      
      <Footer/>
    </div>
  );
};

export default MainPage;
