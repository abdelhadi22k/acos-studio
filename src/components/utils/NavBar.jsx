// NavBar.jsx
import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Collapse from "react-bootstrap/Collapse";
import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";

function NavBar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeLink, setActiveLink] = useState("home");
  const [open, setOpen] = useState(false);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setShowNavbar(currentScrollY <= lastScrollY || currentScrollY < 80);
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observerOptions = { threshold: 0.5 };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          setActiveLink(sectionId);
          window.history.pushState(null, "", `#${sectionId}`);
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleLinkClick = (id) => {
    setActiveLink(id);
    window.history.pushState(null, "", `#${id}`);
    setOpen(false);
  };

  const navVariants = {
    hidden: { opacity: 0, y: -30, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className={`NavbarWrapper ${showNavbar ? "show" : "hide"}`}
    >
      <Navbar
        expand={false}
        className={`bg-body-tertiary Navbar ${showNavbar ? "show" : "hide"}`}
      >
        <Container>
          <Navbar.Brand>
            <ScrollLink
              to="home"
              smooth={true}
              duration={500}
              offset={-100}
              onClick={() => handleLinkClick("home")}
            >
              <img alt="logoBrand" src="sources/website icon/main logo.svg" />
              <div></div>
            </ScrollLink>
          </Navbar.Brand>

          <div className="linkHolder">
            <Nav>
              <span className="navLInk">
                {activeLink || "home"}
                <div></div>
              </span>
            </Nav>

            <button
              className="custom-icon"
              onClick={() => setOpen(!open)}
            >
              <span>
                <script src="https://cdn.lordicon.com/lordicon.js"></script>
                <lord-icon
                  src="https://cdn.lordicon.com/qwybfpea.json"
                  trigger="hover"
                  colors="primary:#dc5f00"
                  stroke="bold"
                  style={{ width: "22px", height: "22px" }}
                ></lord-icon>
              </span>
            </button>
          </div>

          <div className="contactHolder">
            <ScrollLink
              className="contactLink"
              to="contact"
              smooth={true}
              duration={500}
              offset={-100}
              onClick={() => handleLinkClick("contact")}
            >
              contact us
              <script src="https://cdn.lordicon.com/lordicon.js"></script>
              <lord-icon
                src="https://cdn.lordicon.com/wwsllqpi.json"
                trigger="hover"
                colors="primary:#dc5f00"
                stroke="bold"
                style={{ width: "24px", height: "24px" }}
              ></lord-icon>
            </ScrollLink>
          </div>
        </Container>

        <Collapse in={open} className="Collapse">
          <div id="responsive-navbar-nav" className="linkCollapse">
            <Nav className="linkContainer">
              {[
                { id: "home", label: "Home" },
                { id: "about", label: "About Us" },
                { id: "services", label: "Services" },
                { id: "projects", label: "Projects" },
                { id: "experience", label: "Experience" },
                { id: "testimonials", label: "Testimonials" },
                { id: "blog", label: "Blog" },
                { id: "contact", label: "Contact Us" },
              ].map((link) => (
                <span key={link.id}>
                  <ScrollLink
                    className={`mainLink ${
                      activeLink === link.id ? "active" : ""
                    }`}
                    to={link.id}
                    smooth={true}
                    duration={500}
                    offset={-100}
                    onClick={() => handleLinkClick(link.id)}
                  >
                    {link.label}
                  </ScrollLink>
                </span>
              ))}
            </Nav>
          </div>
        </Collapse>
      </Navbar>
    </motion.div>
  );
}

export default NavBar;
