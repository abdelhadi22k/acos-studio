import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";
import NavProject from "../components/project/NavProject";
import Project from "../components/project/Project";
import { domain } from "../utils/stn";

const ProjectsSection = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  // جلب التصنيفات
  useEffect(() => {
    async function fetchCategories() {
      try {
        const { data } = await axios.get(`${domain}/api/project/categories`);
        setCategories(["All", ...data]);
      } catch (err) {
        console.error("Error fetching categories:", err);
      }
    }
    fetchCategories();
  }, []);

  // جلب المشاريع
  useEffect(() => {
    async function fetchProjects() {
      try {
        const { data } = await axios.get(`${domain}/api/project`);
        setProjects(data);
        setFilteredProjects(data); // عرض كل المشاريع مبدئيًا
        setLoading(false);
      } catch (err) {
        console.error("Error fetching projects:", err);
        setLoading(false);
      }
    }
    fetchProjects();
  }, []);

  // فلترة المشاريع حسب التصنيف المحدد
  const handleCategorySelection = (category) => {
    setSelectedCategory(category);
    if (category === "All") {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter(
        (project) => project.category === category
      );
      setFilteredProjects(filtered);
    }
  };

 

  return (
    <section className="ProjectsSection" id="projects">
      <Container className="ProjectsContainer">
                <div className="mainTitle2">
                  <div>
                    <h5>Our project</h5>
                    <h1>
                      <span>Take</span> a look at some of our past work
                    </h1>
                  </div>
        
                  <div>
                    <p>
                      We create and develop customized digital projects that reflect 
                      each client's needs. Browse samples of our previous work.
                    </p>
                    <a  href="#contact" className="mainButton1">Let's start now</a>
                  </div>
                </div>

        {/* التصنيفات */}
        <div className="projectNavbar">
          <NavProject
            showCategory={handleCategorySelection}
            allCat={categories}
          />
        </div>

        {/* المشاريع */}
        <div className="projectHolder">
          {loading ? (
            <p>Loading projects...</p>
          ) : (
            <Project project={filteredProjects} />
          )}
        </div>

      
      </Container>
    </section>
  );
};

export default ProjectsSection;
