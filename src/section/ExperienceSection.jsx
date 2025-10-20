

import Container from "react-bootstrap/Container";
import { FaReact, FaNodeJs, FaFigma, FaGithub, FaSearch } from "react-icons/fa";
import { FaRobot } from "react-icons/fa";       // الذكاء الصناعي أو الأتمتة الذكية


const ExperienceSection = () => {

    const skills = [
    { icon: <FaReact />, name: "React / Next.js", level: "Advanced" },
    { icon: <FaNodeJs />, name: "Node.js / Express", level: "Intermediate" },
    { icon: <FaFigma />, name: "UI/UX Design", level: "Advanced" },
    { icon: <FaGithub />, name: "Git & Version Control", level: "Advanced" },
    { icon: <FaSearch />, name: "SEO/GEO Optimization", level: "Advanced" },
    { icon: <FaRobot />, name: "AI Automation ", level: "Intermediate" },
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
    }

  ];





  return (
    <section className="skillsExperience" id='experience'>
       <Container className="skillsContainer">
        <div
          className="skillsInfos"
          
        >
                  <div className="mainTitle2">
                  <div>
                    <h5>Our experience &<br/> Skills</h5>
                    <h1>
                      <span>Take</span>a look at the experiences we have gathered.
                    </h1>
                  </div>
        
                  <div>
                    <p>
                     Learn from our knowledge, experience, and skills to get a better idea about
                    </p>
                    <a  href="#contact" className="mainButton1">Let's start now</a>
                  </div>
                </div>
        </div>

        <div className="skillsExperience_grid">

          {/* Experience */}
          <div
            className="experienceBox"
          >
            <h3>Experience</h3>
            <div className="timeline">
              {experiences.map((exp, index) => (
                <div key={index} className="timelineItem">
                  <span className="timelineYear">{exp.year}</span>
                  <h4>{exp.role}</h4>
                  <p>{exp.desc}</p>
                </div>
              ))}
            </div>
          </div>



          {/* Skills */}
          <div
            className="skillsBox">
            <h3>Skills</h3>
            <div className="skillsList">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="skillItem"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="skillIcon">{skill.icon}</div>
                  <div className="skillInfo">
                    <p>{skill.name}</p>
                    <span>{skill.level}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        
        </div>
      </Container>
    </section>
  )
}

export default ExperienceSection
