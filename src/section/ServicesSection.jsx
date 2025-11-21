// ServicesSection.jsx
import React from "react";
import Container from "react-bootstrap/Container";
import { Image } from "react-bootstrap";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const ServicesSection = () => {
  // أنيميشن عام للقسم عند دخوله في الشاشة
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

  // تحكم في تتابع العناصر داخل الكونتينر
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
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

  // كروت الخدمات
  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.97 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
    hover: {
      y: -8,
      scale: 1.03,
      boxShadow: "0 20px 50px rgba(0,0,0,0.18)",
      transition: {
        duration: 0.25,
        ease: "easeOut",
      },
    },
  };

  // صورة الخدمة داخل الكارت
  const imageHover = {
    hover: {
      scale: 1.05,
      rotate: 0.5,
    },
  };

  const buttonVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      y: -2,
      scale: 1.03,
      boxShadow: "0 15px 40px rgba(0,0,0,0.2)",
      transition: {
        duration: 0.2,
      },
    },
    tap: {
      scale: 0.96,
      y: 0,
      boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
    },
  };

  return (
    <motion.section
      className="ServicesSection"
      id="services"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      <Container className="servicesContainer">
        {/* العناوين والنص والزر العلوي */}
        <motion.div
          className="mainTitle2"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeUp}>
            <motion.h5 variants={fadeUp}>Our services</motion.h5>
            <motion.h1 variants={fadeUp} transition={{ delay: 0.05 }}>
              <span>Find</span> out how we can help you better
            </motion.h1>
          </motion.div>

          <motion.div variants={fadeUp} transition={{ delay: 0.15 }}>
            <motion.p variants={fadeUp}>
              We offer a range of digital services and different types of
              programs. You can view our digital services here.
            </motion.p>
            <motion.a
              href="#contact"
              className="mainButton1"
              variants={buttonVariant}
              whileHover="hover"
              whileTap="tap"
            >
              Let's start now
            </motion.a>
          </motion.div>
        </motion.div>

        {/* كروت الخدمات */}
        <motion.div
          className="servicesHolder"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Web design & development */}
          <motion.div
            className="servicesBox"
            variants={cardVariants}
            whileHover="hover"
          >
            <motion.div
              className="servicesBoxImg"
              variants={imageHover}
              whileHover="hover"
            >
              <Image
                className="projectImg"
                src="sources/website img/webservices.webp"
                alt="Web services"
                fluid
              />
            </motion.div>

            <div className="servicesBoxInfo">
              <h3>web design & development</h3>
              <p>
                We build custom websites that reflect your brand and help you
                grow. We design every detail to make your business look
                professional and turn visitors into customers.
              </p>
            </div>

            <div className="servicesBoxTag">
              <span>Framer</span>
              <span>React js</span>
              <span>Express js</span>
              <span>Node js</span>
              <span>Next js</span>
              <span>
               
                Git/Github
              </span>
              <span>Responsive design</span>
            </div>

            <motion.div
              className="servicesBoxBtn"
              variants={buttonVariant}
              whileHover="hover"
              whileTap="tap"
            >
              <a href="#contact" className="mainButton2">
                start a web design project
              </a>
            </motion.div>
          </motion.div>

          {/* UI/UX design */}
          <motion.div
            className="servicesBox"
            variants={cardVariants}
            whileHover="hover"
          >
            <motion.div
              className="servicesBoxImg"
              variants={imageHover}
              whileHover="hover"
            >
              <Image
                className="projectImg"
                src="sources/website img/uiuxservices.webp"
                alt="UI UX services"
                fluid
              />
            </motion.div>

            <div className="servicesBoxInfo">
              <h3>ui/ux design</h3>
              <p>
                We design experiences that connect people with your brand. Our
                UI/UX design service focuses on creating user-friendly and
                visually stunning interfaces.
              </p>
            </div>

            <div className="servicesBoxTag">
              <span>Ux Research</span>
              <span>Ui design</span>
              <span>Prototyping</span>
              <span>Responsive design</span>
              <span>Usability Testing</span>
            </div>

            <motion.div
              className="servicesBoxBtn"
              variants={buttonVariant}
              whileHover="hover"
              whileTap="tap"
            >
              <a href="#contact" className="mainButton2">
                start a uiux design project
              </a>
            </motion.div>
          </motion.div>

          {/* AI Automation */}
          <motion.div
            className="servicesBox"
            variants={cardVariants}
            whileHover="hover"
          >
            <motion.div
              className="servicesBoxImg"
              variants={imageHover}
              whileHover="hover"
            >
              <Image
                className="projectImg"
                src="sources/website img/aiservices.webp"
                alt="AI services"
                fluid
              />
            </motion.div>

            <div className="servicesBoxInfo">
              <h3>Ai Automation</h3>
              <p>
                We help you automate tasks. From intelligent workflows to
                AI-powered chatbots and data automation, we create intelligent
                systems that save time, reduce costs, and allow you to focus on
                growth.
              </p>
            </div>

            <div className="servicesBoxTag">
              <span>Business Automation</span>
              <span>Automation</span>
              <span>Ai Automation</span>
              <span>Workflow Design</span>
              <span>Ai</span>
            </div>

            <motion.div
              className="servicesBoxBtn"
              variants={buttonVariant}
              whileHover="hover"
              whileTap="tap"
            >
              <a href="#contact" className="mainButton2">
                start a automation project
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </motion.section>
  );
};

export default ServicesSection;
