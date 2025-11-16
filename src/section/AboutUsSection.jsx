// AboutUsSection.jsx
import React from "react";
import Container from "react-bootstrap/Container";
import { Image } from "react-bootstrap";
import { motion } from "framer-motion";

const AboutUsSection = () => {
  // Variants عامة للقسم
  const sectionVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const contentContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 25, scale: 0.97 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.65,
        ease: "easeOut",
      },
    },
    hover: {
      y: -6,
      scale: 1.03,
      boxShadow: "0 18px 45px rgba(0,0,0,0.15)",
      transition: {
        duration: 0.25,
        ease: "easeOut",
      },
    },
  };

  const imageVariant = {
    hidden: { opacity: 0, x: 60, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.9,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      className="aboutUs"
      id="about"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <Container className="aboutContainer">
        <motion.div
          className="aboutInfo"
          variants={contentContainer}
          initial="hidden"
          animate="visible"
        >
          {/* العناوين والنص التعريفي */}
          <motion.div className="mainTitles" variants={fadeUp}>
            <motion.h5 variants={fadeUp}>About us</motion.h5>
            <motion.h1 variants={fadeUp} transition={{ delay: 0.1 }}>
              <span>Come</span> and get to know each other more
            </motion.h1>
            <motion.p variants={fadeUp} transition={{ delay: 0.2 }}>
              We are a passionate team of designers, developers, and strategists
              dedicated to helping businesses build stronger brands through web
              design, SEO, UI, UX, and automation.
            </motion.p>
          </motion.div>

          {/* الكروت / المعلومات الإحصائية */}
          <motion.div className="aboutInfoHolders" variants={contentContainer}>
            <motion.div className="aboutInfoHolder" variants={fadeUp}>
              <motion.div
                className="aboutBox"
                variants={cardVariant}
                whileHover="hover"
              >
                <h3>
                  <span>+16</span> Happy customer
                </h3>
                <p>
                  who trusted us and we succeeded in gaining their satisfaction.
                </p>
              </motion.div>

              <motion.div
                className="aboutBox"
                variants={cardVariant}
                whileHover="hover"
              >
                <h3>
                  <span>+38</span> Completed projects
                </h3>
                <p>
                  have been professionally executed, from design to launch.
                </p>
              </motion.div>
            </motion.div>

            <motion.div className="aboutInfoHolder" variants={fadeUp}>
              <motion.div
                className="aboutBox"
                variants={cardVariant}
                whileHover="hover"
              >
                <h3>
                  <span>+04</span> years Experience
                </h3>
                <p>
                  Over 4 years of experience in providing effective digital
                  solutions.
                </p>
              </motion.div>

              <motion.div
                className="aboutBox"
                variants={cardVariant}
                whileHover="hover"
              >
                <h3>
                  <span>Balanced </span> work team
                </h3>
                <p>
                  integrated team, combining creativity, experience, and
                  precision.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* صورة القسم */}
        <motion.div
          className="aboutImg"
          variants={imageVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.div
            whileHover={{ scale: 1.03, rotate: -1 }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
          >
            <Image
              className="projectImg"
              src="sources/website img/aboutUs.webp"
              alt="about Img"
              loading="lazy"
              fluid
            />
          </motion.div>
        </motion.div>
      </Container>
    </motion.section>
  );
};

export default AboutUsSection;
