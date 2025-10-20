import React, { useState, useRef, useEffect } from "react";
import { Accordion, Col, Container, Row } from "react-bootstrap";
import { Link as ScrollLink } from "react-scroll";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const Footer = () => {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState("paper");

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = useRef(null);
  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <div className="Footer">
      <Container className="FooterContainer1">
        <h1 className="mainTitle">
          What are <span>you waiting</span> for
        </h1>
      </Container>
      <Container className="FooterContainer">
        <div className="Line"></div>
      </Container>

      <footer>
        <div className="Created">
          <Container>
            <Row>
              <Col md="6" lg="4" className="CreatedContainer">
                <div className="footerinfo">
                  <img
                    className="footerImg"
                    alt="logoBrand"
                    src="sources/website icon/brand logo.svg"
                  />
                  <p className="mb-5">
                   Acos Studio is a team specializing in digital project development, 
                   offering services that help businesses grow.
                  </p>
                  <div className="copryt">
                    <ul className="d-flex mt-5 list-unstyled gap-3 align-items-center accounts">
                      <li>
                        <a
                          className="d-block text-light"
                          target="blank"
                          href="https://www.facebook.com/profile.php?id=100091746498169"
                        >
                          <script src="https://cdn.lordicon.com/lordicon.js"></script>
                          <lord-icon
                            src="https://cdn.lordicon.com/lplofcfe.json"
                            stroke="bold"
                            trigger="hover"
                            colors="primary:#EEEEEE,secondary:#EEEEEE"
                            style={{ width: "40px", height: "40px" }}
                          ></lord-icon>
                        </a>
                      </li>

                      <li>
                        <a
                          className="d-block text-light"
                          target="blank"
                          href="https://www.instagram.com/acos.studio/?hl=ar"
                        >
                          <script src="https://cdn.lordicon.com/lordicon.js"></script>
                          <lord-icon
                            src="https://cdn.lordicon.com/cuwcpyqc.json"
                            stroke="bold"
                            trigger="hover"
                            colors="primary:#EEEEEE,secondary:#EEEEEE"
                            style={{ width: "40px", height: "40px" }}
                          ></lord-icon>
                        </a>
                      </li>

                      <li>
                        <a
                          className="d-block text-light"
                          target="blank"
                          href="https://www.linkedin.com/in/acos-web-studio-701331300/"
                        >
                          <script src="https://cdn.lordicon.com/lordicon.js"></script>
                          <lord-icon
                            src="https://cdn.lordicon.com/euybrknk.json"
                            stroke="bold"
                            trigger="hover"
                            colors="primary:#EEEEEE,secondary:#EEEEEE"
                            style={{ width: "40px", height: "40px" }}
                          ></lord-icon>
                        </a>
                      </li>

                      <li>
                        <a
                          className="d-block text-light"
                          target="blank"
                          href="https://dribbble.com/acos_web_designer"
                        >
                          <script src="https://cdn.lordicon.com/lordicon.js"></script>
                          <lord-icon
                            src="https://cdn.lordicon.com/sbhkbqnq.json"
                            stroke="bold"
                            trigger="hover"
                            colors="primary:#EEEEEE,secondary:#EEEEEE"
                            style={{ width: "40px", height: "40px" }}
                          ></lord-icon>
                        </a>
                      </li>
                      <li>
                        <a
                          className="d-block text-light"
                          target="blank"
                          href="https://www.behance.net/cosx"
                        >
                          <script src="https://cdn.lordicon.com/lordicon.js"></script>
                          <lord-icon
                            src="https://cdn.lordicon.com/hdmufqcq.json"
                            stroke="bold"
                            trigger="hover"
                            colors="primary:#EEEEEE,secondary:#EEEEEE"
                            style={{ width: "40px", height: "40px" }}
                          ></lord-icon>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>

              <Col md="6" lg="2" className="CreatedContainer">
                <div className="footerlinks">
                  <h5 className="sectionTitle">Navigation</h5>
                  <ul className="list-unstyled lh-lg">
                    <li>
                      <ScrollLink
                        className="mainLinkf"
                        to="services"
                        smooth={true}
                        duration={500}
                        offset={-100}
                      >
                        services
                      </ScrollLink>
                    </li>
                    <li>
                      <ScrollLink
                        className="mainLinkf"
                        to="about"
                        smooth={true}
                        duration={500}
                        offset={-100}
                      >
                        about
                      </ScrollLink>
                    </li>
                    <li>
                      <ScrollLink
                        className="mainLinkf"
                        to="projects"
                        smooth={true}
                        duration={500}
                        offset={-100}
                      >
                        project
                      </ScrollLink>
                    </li>
                    <li>
                      <ScrollLink
                        className="mainLinkf"
                        to="experience"
                        smooth={true}
                        duration={500}
                        offset={-100}
                      >
                        experience
                      </ScrollLink>
                    </li>

                    <li>
                      <React.Fragment>
                        <p
                          className="mainLinkf"
                          onClick={handleClickOpen("paper")}
                        >
                          FQAs
                        </p>
                        <Dialog
                          open={open}
                          onClose={handleClose}
                          scroll={scroll}
                          aria-labelledby="scroll-dialog-title"
                          aria-describedby="scroll-dialog-description"
                        >
                          <DialogTitle id="scroll-dialog-title">
                            FQAs
                          </DialogTitle>
                          <DialogContent dividers={scroll === "paper"}>
                            <DialogContentText
                              id="scroll-dialog-description"
                              ref={descriptionElementRef}
                              tabIndex={-1}
                            >
                              <Accordion
                                className="AccordionBox"
                                style={{ backgroundColor: "#e56543" }}
                              >
                                <Accordion.Item
                                  eventKey="0"
                                  className="AccordionItem"
                                >
                                  <Accordion.Header className="AccordionHeader">
                                    <h4>introduction</h4>
                                  </Accordion.Header>
                                  <Accordion.Body className="AccordionBody">
                                    We seek to provide high-quality services to
                                    our customers and achieve their complete
                                    satisfaction. Therefore, we have established
                                    these policies to ensure smooth and
                                    efficient workflow, and to preserve the
                                    rights of all parties involved.
                                  </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item
                                  eventKey="1"
                                  className="AccordionItem"
                                >
                                  <Accordion.Header className="AccordionHeader">
                                    <h4>
                                      1. What services does Acos Studio offer?
                                    </h4>
                                  </Accordion.Header>
                                  <Accordion.Body>
                                    Acos studio specializes in <br />
                                     1 web development <br /> 
                                     2 UI/UX design <br />
                                     3 Ai automation. <br />
                                    We create tailored digital solutions that
                                    meet the unique needs of businesses, helping
                                    them establish a strong online presence.
                                  </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item
                                  eventKey="5"
                                  className="AccordionItem"
                                >
                                  <Accordion.Header className="AccordionHeader">
                                    <h4>2. Where is Acos studio based?</h4>
                                  </Accordion.Header>
                                  <Accordion.Body>
                                    We are based in Algeria but proudly serve
                                    clients from all around the world.
                                  </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item
                                  eventKey="6"
                                  className="AccordionItem"
                                >
                                  <Accordion.Header className="AccordionHeader">
                                    <h4>
                                      3. Do you work with international clients?
                                    </h4>
                                  </Accordion.Header>
                                  <Accordion.Body>
                                    Yes, our team is experienced in
                                    collaborating with clients globally. We
                                    adapt to your time zone and ensure smooth
                                    communication throughout the project.
                                  </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item
                                  eventKey="7"
                                  className="AccordionItem"
                                >
                                  <Accordion.Header className="AccordionHeader">
                                    <h4>
                                      4. Can you redesign an existing website?
                                    </h4>
                                  </Accordion.Header>
                                  <Accordion.Body>
                                    Absolutely. We can modernize and enhance
                                    your website's functionality, design, and
                                    SEO performance to align with your goals.
                                  </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item
                                  eventKey="8"
                                  className="AccordionItem"
                                >
                                  <Accordion.Header className="AccordionHeader">
                                    <h4>5. How do you handle SEO?</h4>
                                  </Accordion.Header>
                                  <Accordion.Body>
                                    Our SEO experts use advanced strategies to
                                    improve your website’s visibility on search
                                    engines. This includes keyword research,
                                    technical SEO, content optimization, and
                                    performance monitoring.
                                  </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item
                                  eventKey="9"
                                  className="AccordionItem"
                                >
                                  <Accordion.Header className="AccordionHeader">
                                    <h4>
                                      6. What industries do you specialize in?
                                    </h4>
                                  </Accordion.Header>
                                  <Accordion.Body>
                                    We work with a variety of industries,
                                    including e-commerce, hospitality,
                                    technology, and more. Whatever your niche,
                                    we tailor our services to fit your
                                    requirements.
                                  </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item
                                  eventKey="10"
                                  className="AccordionItem"
                                >
                                  <Accordion.Header className="AccordionHeader">
                                    <h4>
                                      7. How can I get started with Acos studio?
                                    </h4>
                                  </Accordion.Header>
                                  <Accordion.Body>
                                    Simply reach out to us through our contact
                                    form, email, or phone. We'll schedule a
                                    consultation to discuss your needs and
                                    propose a personalized solution.
                                  </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item
                                  eventKey="11"
                                  className="AccordionItem"
                                >
                                  <Accordion.Header className="AccordionHeader">
                                    <h4>8. What is your pricing structure?</h4>
                                  </Accordion.Header>
                                  <Accordion.Body>
                                    Our pricing varies depending on the
                                    complexity and scope of the project. After
                                    an initial consultation, we’ll provide you
                                    with a transparent and detailed quote.
                                  </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item
                                  eventKey="12"
                                  className="AccordionItem"
                                >
                                  <Accordion.Header className="AccordionHeader">
                                    <h4>
                                      9. Do you provide ongoing support after
                                      project completion?
                                    </h4>
                                  </Accordion.Header>
                                  <Accordion.Body>
                                    Yes, we offer maintenance and support
                                    services to ensure your project continues to
                                    perform optimally.
                                  </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item
                                  eventKey="13"
                                  className="AccordionItem"
                                >
                                  <Accordion.Header className="AccordionHeader">
                                    <h4>
                                      10. How do you ensure data security?
                                    </h4>
                                  </Accordion.Header>
                                  <Accordion.Body>
                                    We prioritize data security by using
                                    industry-standard protocols and practices to
                                    protect your information and ensure privacy
                                    compliance.
                                  </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item
                                  eventKey="14"
                                  className="AccordionItem"
                                >
                                  <Accordion.Header className="AccordionHeader">
                                    <h4>Terms and Conditions</h4>
                                  </Accordion.Header>
                                  <Accordion.Body>
                                    <h6> 1. Acceptance of Terms</h6> <br />
                                    By accessing and using our services, you
                                    agree to comply with the terms outlined
                                    here. Any violation of these terms may
                                    result in the termination of services.
                                    <br />
                                    <h6> 2. Payment Terms</h6>
                                    <br />
                                    Payments must be made as per the agreed
                                    schedule. Late payments may incur additional
                                    charges or project delays.
                                    <br />
                                    <h6> 3. Intellectual Property</h6>
                                    <br />
                                    All intellectual property rights, including
                                    designs, code, and content created during
                                    the project, remain the property of Acos
                                    studio until full payment is received.
                                    <br />
                                    <h6> 4. Revisions and Changes</h6>
                                    <br />
                                    Revisions are limited to the scope of work
                                    outlined in the agreement. Any additional
                                    changes may incur extra costs.
                                    <br />
                                    <h6> 5. Service Limitations</h6>
                                    <br />
                                    We strive for the highest quality, but we do
                                    not guarantee specific results, such as top
                                    search engine rankings.
                                  </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item
                                  eventKey="15"
                                  className="AccordionItem"
                                >
                                  <Accordion.Header className="AccordionHeader">
                                    <h4>Privacy Policy</h4>
                                  </Accordion.Header>
                                  <Accordion.Body>
                                    <h6>1. Information Collection</h6> <br />
                                    We collect information such as your name,
                                    email address, and project details to
                                    provide our services effectively.
                                    <br />
                                    <h6> 2. Use of Information</h6>
                                    <br />
                                    Your information is used solely for project
                                    communication, billing, and improving our
                                    services.
                                    <br />
                                    <h6> 3. Data Protection</h6>
                                    <br />
                                    We implement robust security measures to
                                    protect your data from unauthorized access.
                                    <br />
                                    <h6> 4. Sharing of Information</h6>
                                    <br />
                                    We do not share your information with third
                                    parties unless required by law or necessary
                                    for project completion.
                                    <h6> 5. Your Rights</h6>
                                    <br />
                                    You have the right to access, update, or
                                    delete your personal data at any time by
                                    contacting us.
                                  </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item
                                  eventKey="16"
                                  className="AccordionItem"
                                >
                                  <Accordion.Header className="AccordionHeader">
                                    <h4>Cookie Policy</h4>
                                  </Accordion.Header>
                                  <Accordion.Body>
                                    <h6> 1. What are Cookies?</h6>
                                    <br />
                                    Cookies are small files stored on your
                                    device to enhance your browsing experience
                                    on our website.
                                    <br />
                                    <h6>2. How We Use Cookies</h6>
                                    <br />
                                    We use cookies to: Analyze website traffic{" "}
                                    <br />
                                    Remember your preferences
                                    <br />
                                    Improve website functionality
                                    <br />
                                    <h6>3. Managing Cookies</h6>
                                    <br />
                                    You can manage or disable cookies through
                                    your browser settings. Please note that
                                    disabling cookies may affect the
                                    functionality of our website.
                                    <h6>4. Third-Party Cookies</h6>
                                    <br />
                                    Some cookies are placed by third-party
                                    services we use, such as analytics tools.
                                  </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item
                                  eventKey="17"
                                  className="AccordionItem"
                                >
                                  <Accordion.Header className="AccordionHeader">
                                    <h4>Conclusion</h4>
                                  </Accordion.Header>
                                  <Accordion.Body>
                                    We hope that these policies will help
                                    maintain a positive relationship between us
                                    and our customers. We are committed to
                                    providing the best possible services to our
                                    customers.
                                  </Accordion.Body>
                                </Accordion.Item>
                              </Accordion>
                            </DialogContentText>
                          </DialogContent>
                          <DialogActions>
                            <Button onClick={handleClose}>Done</Button>
                          </DialogActions>
                        </Dialog>
                      </React.Fragment>
                    </li>
                  </ul>
                </div>
               </Col>

              <Col md="6" lg="2" className="CreatedContainer">
                <div className="footerlinks">
                  <h5 className="sectionTitle">Contact</h5>
                  <ul className="list-unstyled lh-lg">
                    <li>+213 (774823948)</li>
                    <li>
                      abdelhadikaba64@
                      <br />
                      gmail.com
                    </li>
                    <li>Location Algeria - Algeria  (UTC+01:00) </li>
                  </ul>
                </div>
              </Col>

              <Col md="6" lg="4" className="CreatedContainer">
                <div className="footercontect">
                  <h5 className="sectionTitle" style={{ color: "#DC5F00" }}>
                    {" "}
                    Let's Start
                  </h5>
                </div>

                <div className="footerInput" style={{ color: "#DC5F00" }}>
                  <a className="cta_3" href="#contact">
                    Get the latest information{" "}
                    <i className="fa-solid fa-paper-plane"></i>
                  </a>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </footer>

      <Container className="FooterContainer">
        <div className="Line"></div>
      </Container>

      <Container className="FooterContainer3">
        <div className="FooterInfo1">
         © 2025 acos  <span>(  acos studio )</span> All rights reserved
        </div>

        <div className="FooterInfo">
          <a className="mainLinkf" onClick={handleClickOpen("paper")}>
            Terms and Conditions
          </a>
        </div>

        <div className="FooterInfo">
          <a className="mainLinkf" onClick={handleClickOpen("paper")}>
            Privacy Policy
          </a>
        </div>

        <div className="FooterInfo">
          <a className="mainLinkf" onClick={handleClickOpen("paper")}>
            Cookie Policy
          </a>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
