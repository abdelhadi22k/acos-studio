import Container from "react-bootstrap/Container";
import { Image } from "react-bootstrap";
import { FaGithub } from 'react-icons/fa';

const ServicesSection = () => {
  return (
    <section className="ServicesSection" id="services">
      <Container className="servicesContainer">
        <div className="mainTitle2">
          <div>
            <h5>Our services</h5>
            <h1>
              <span>Find</span> out how we can help you better
            </h1>
          </div>

          <div>
            <p>
              We offer a range of digital services and different types of
              programs. You can view our digital services here.
            </p>
            <a  href="#contact" className="mainButton1">Let's start now</a>
          </div>
        </div>

        <div className="servicesHolder">
          <div className="servicesBox">
            <div className="servicesBoxImg">
              <Image
                className="projectImg"
                src="sources/website img/webservices.webp"
                alt="about Img"
                fluid
              />
            </div>

            <div className="servicesBoxInfo">
              <h3>web design & development</h3>
              <p>
               We build custom websites that reflect your brand and help you grow.
                We design every detail to make your business look professional 
                and turn visitors into customers.
              </p>
            </div>
            <div className="servicesBoxTag">
              <span>Framer</span>
              <span>React js</span>
              <span>Express js</span>
              <span>Node js</span>
              <span>Next js</span>
              <span>Git/Github</span>
              <span>Responsive design</span>
            </div>
            <div className="servicesBoxBtn">
              <a className="mainButton2">start a web design project</a>
            </div>
          </div>
          <div className="servicesBox">
            <div className="servicesBoxImg">
              <Image
                className="projectImg"
                src="sources/website img/uiuxservices.webp"
                alt="about Img"
                fluid
              />
            </div>

            <div className="servicesBoxInfo">
              <h3>ui/ux design</h3>
              <p>
                We design experiences that connect people with your brand. Our UI/UX design 
                service focuses on creating user-friendly and visually stunning interfaces.
              </p>
            </div>
            <div className="servicesBoxTag">
              <span>Ux Research</span>
              <span>Ui design</span>
              <span>Prototyping</span>
              <span>Responsive design</span>
              <span>Usability Testing</span>
            </div>
            <div className="servicesBoxBtn">
              <a className="mainButton2">start a uiux design project</a>
            </div>
          </div>
          <div className="servicesBox">
            <div className="servicesBoxImg">
              <Image
                className="projectImg"
                src="sources/website img/aiservices.webp"
                alt="about Img"
                fluid
              />
            </div>

            <div className="servicesBoxInfo">
              <h3>Ai Automation</h3>
              <p>
             We help you automate tasks. From intelligent workflows to AI-powered chatbots and 
             data automation, we create intelligent systems that save time, reduce costs, and 
             allow you to focus on growth.
              </p>
            </div>
            <div className="servicesBoxTag">
            <span>Business Automation</span>
              <span>Automation</span>
              <span>Ai Automation</span>
              <span>Workflow Design</span>
              <span>Ai</span>
            </div>
            <div className="servicesBoxBtn">
              <a className="mainButton2">start a automation project</a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ServicesSection;
