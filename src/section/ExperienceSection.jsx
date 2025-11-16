// ExperienceSection.jsx
import Container from "react-bootstrap/Container";
import {
  FaReact,
  FaNodeJs,
  FaFigma,
  FaGithub,
  FaSearch,
  FaRobot,
} from "react-icons/fa";
import { motion } from "framer-motion";

const ExperienceSection = () => {
  const skills = [
    { icon: <FaReact />, name: "React / Next.js", level: "Advanced", value: 90 },
    { icon: <FaNodeJs />, name: "Node.js / Express", level: "Intermediate", value: 70 },
    { icon: <FaFigma />, name: "UI/UX Design", level: "Advanced", value: 92 },
    { icon: <FaGithub />, name: "Git & Version Control", level:  "Advanced", value: 88 },
    { icon: <FaSearch />, name: "SEO/GEO Optimization", level: "Advanced", value: 85 },
    { icon: <FaRobot />, name: "AI Automation", level: "Intermediate", value: 72 },
  ];

  const experiences = [
    {
      year: "2021 - Present",
      role: "web Designer",
      desc: "Built websites for restaurants, agencies, and startups with custom CMS integration.",
    },
    {
      year: "2021 - Present",
      role: "UI/UX Designer",
      desc: "Designed digital products focusing on usability, consistency, and brand identity.",
    },
    {
      year: "2025 - Present",
      role: "AI Automation",
      desc: "I have worked on automating tasks that help businesses save time for growth.",
    },
    {
      year: "2022 - Present",
      role: "SEO/GEO",
      desc: "Improve website performance and make them appear higher in search results.",
    },
  ];

  // Variants
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const experienceItemVariant = {
    hidden: { opacity: 0, x: -25 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const skillItemVariant = {
    hidden: { opacity: 0, y: 20, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.45, ease: "easeOut" },
    },
    hover: {
      y: -4,
      scale: 1.03,
      boxShadow: "0 16px 40px rgba(0,0,0,0.25)",
      transition: { duration: 0.2, ease: "easeOut" },
    },
  };

  const buttonVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    hover: {
      y: -2,
      scale: 1.03,
      boxShadow: "0 15px 40px rgba(0,0,0,0.3)",
      transition: { duration: 0.2 },
    },
    tap: {
      scale: 0.96,
      y: 0,
      boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
    },
  };

  return (
    <motion.section
      className="skillsExperience"
      id="experience"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      <Container className="skillsContainer">
        {/* Title + text + button */}
        <motion.div
          className="skillsInfos"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="mainTitle2" variants={fadeUp}>
            <motion.div variants={fadeUp}>
              <h5>
                Our experience & <br /> Skills
              </h5>
              <h1>
                <span>Take</span>a look at the experiences we have gathered.
              </h1>
            </motion.div>

            <motion.div variants={fadeUp} transition={{ delay: 0.1 }}>
              <p>
                Learn from our knowledge, experience, and skills to get a better
                idea about
              </p>
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
        </motion.div>

        {/* Experience + Skills grid */}
        <motion.div
          className="skillsExperience_grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Experience column */}
          <motion.div className="experienceBox" variants={fadeUp}>
            <h3>Experience</h3>
            <div className="timeline">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className="timelineItem"
                  variants={experienceItemVariant}
                >
                  <span className="timelineYear">{exp.year}</span>
                  <h4>{exp.role}</h4>
                  <p>{exp.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills + animated progress bars */}
          <motion.div className="skillsBox" variants={fadeUp}>
            <h3>Skills</h3>
            <motion.div
              className="skillsList"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="skillItem skillItem-with-bar"
                  variants={skillItemVariant}
                  whileHover="hover"
                >
                  <div className="skillHeader">
                    <div className="skillIcon">{skill.icon}</div>
                    <div className="skillInfo">
                      <p>{skill.name}</p>
                      <span>{skill.level}</span>
                    </div>
                    <span className="skillValue">{skill.value}%</span>
                  </div>

                  <div className="skillBarWrapper">
                    <div className="skillBarBg">
                      <motion.div
                        className="skillBarFill"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.value}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.8,
                          ease: "easeOut",
                          delay: index * 0.06,
                        }}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </motion.section>
  );
};

export default ExperienceSection;
