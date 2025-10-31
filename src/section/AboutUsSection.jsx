import Container from "react-bootstrap/Container";
import { Image } from "react-bootstrap";

const AboutUsSection = () => {
  return (
    <section className="aboutUs" id="about">
      <Container className="aboutContainer">
        <div className="aboutInfo">


          <div className="mainTitles">
            <h5>About us</h5>
            <h1>
              <span>Come</span> and get to know each other more
            </h1>
            <p>
           
              We are a passionate team of designers, developers, and strategists 
              dedicated to helping businesses build stronger brands through web 
              design, SEO, UI, UX, and automation.
            </p>
          </div>


          <div className="aboutInfoHolders">
            <div className="aboutInfoHolder">
              <div className="aboutBox">
                <h3>
                  <span>+16</span> Happy customer
                </h3>
                <p>
                  who trusted us and we succeeded in gaining their satisfaction.
                </p>
              </div>
              <div className="aboutBox">
                <h3>
                  <span>+38</span> Completed projects
                </h3>
                <p>
                  have been professionally executed, from design to launch.
                 </p>
              </div>
            </div>

            <div className="aboutInfoHolder">
              <div className="aboutBox">
                <h3>
                  <span>+04</span> yours Experience
                </h3>
                <p>
                Over 4 years of experience in providing effective digital solutions. 
                </p>
              </div>
              <div className="aboutBox">
                <h3>
                  <span>Balanced </span> work team
                </h3>
                <p>
                 integrated team, combining creativity, experience, and precision.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="aboutImg">
          <Image
            className="projectImg"
            src="sources/website img/aboutUs.webp"
            alt="about Img"
            loading="lazy"
            fluid
          />
        </div>
      </Container>
    </section>
  );
};

export default AboutUsSection;
