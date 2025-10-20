import React, { useState } from "react";
import { Image } from "react-bootstrap";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const itemsPerPage = 6;

const Project = ({ project }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(project.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = project.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (event, pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="Stack_holder">



    
      <div className="ProjectContainer">
        {currentItems.map((element , index) => (
          <div key={index} className="project_box">
            <div className="projectBox">
              <Image
                loading="lazy"
                className="projectImg"
                src={element.projectImg}
                alt={element.title}
                fluid
              />
              <div className="project_Infos">
                <h6 className="mainTitle">{element.category}</h6>
                <p className="mainTitle">{element.title}</p>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={element.projectLink}
                  className="mainBtn1"
                >
                  Show More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>









      <Stack spacing={2} mt={3} mb={2} alignItems="center" className="Stack">
      <Pagination
      count={totalPages}
      page={currentPage}
      onChange={handlePageChange}
      size="small"
      sx={{
        "& .MuiPaginationItem-root": {
          color: "white",            // لون النص
          borderColor: "white",      // لون الحدود إذا كان هناك حدود
        },
        "& .Mui-selected": {
          backgroundColor: "white",  // لون الخلفية عند التحديد
          color: "#888888",             // لون النص عند التحديد
        },
        "& .MuiPaginationItem-ellipsis": {
          color: "white",            // لون علامات ...
        }
      }}
    />
      </Stack>
    </div>
  );
};

export default Project;