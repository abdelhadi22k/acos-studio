import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Collapse from "react-bootstrap/Collapse";
import { Link as ScrollLink } from "react-scroll";

function NavBar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeLink, setActiveLink] = useState("");
  const [open, setOpen] = useState(false); // 👈 التحكم اليدوي بالـ Collapse (مفتوح دائمًا)

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setShowNavbar(currentScrollY <= lastScrollY);
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
  };

  return (
    <Navbar
      expand={false} // 👈 منع الـ collapse الافتراضي
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
            <img alt="logoBrand" src="sources/website icon/brand logo.svg" />
            <div></div>
          </ScrollLink>
        </Navbar.Brand>

        {/* Collapse مخصص */}

        <div className="linkHolder">
          <Nav>
            <ScrollLink
              className="navLInk"
              to={activeLink}
              smooth={true}
              duration={500}
              offset={-100}
              onClick={() => handleLinkClick(activeLink)}
            >
              {activeLink}
              <div></div>
            </ScrollLink>
          </Nav>
          {/* زر التوجل */}
          <button
            className="custom-icon"
            onClick={() => setOpen(!open)} // 👈 فتح/إغلاق بالقيمة
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
              <ScrollLink
                key={link.id}
                className={`mainLink ${activeLink === link.id ? "active" : ""}`}
                to={link.id}
                smooth={true}
                duration={500}
                offset={-100}
                onClick={() => handleLinkClick(link.id)}
              >
                {link.label}
              </ScrollLink>
            ))}
          </Nav>
        </div>
      </Collapse>
    </Navbar>
  );
}

export default NavBar;
