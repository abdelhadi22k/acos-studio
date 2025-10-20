import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import OpinionsClient from "../components/OpinionsClient";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { domain } from "../utils/stn";

const itemsPerPage = 3; // عدد الآراء في كل صفحة

const TestimonialsSection = () => {
  const [opinions, setOpinions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchOpinions = async () => {
      try {
        const { data } = await axios.get(`${domain}/api/opinion`);
        setOpinions(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchOpinions();
  }, []);

  // حساب البيانات الظاهرة في الصفحة الحالية
  const totalPages = Math.ceil(opinions.length / itemsPerPage);
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentOpinions = opinions.slice(indexOfFirst, indexOfLast);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <section className="testimonialsSection" id="testimonials">
      <Container className="testimonialsContainer">
      
           <div className="mainTitle2">
          <div>
            <h5>testimonials</h5>
            <h1>
              <span>Some</span>  of our customers' opinions and testimonials
            </h1>
          </div>

          <div>
            <p>
              We believe every successful project is a collaboration — here's 
              what our clients say about working with us. What’s your take?
            </p>
            <a  href="#contact" className="mainButton1">Add your Opinions</a>
          </div>
        </div>

        {loading ? (
          <h1>Loading...</h1>
        ) : error ? (
          <h1 style={{ color: "red" }}>{error}</h1>
        ) : (
          <>
            <div className="opinionsGrid">
              {currentOpinions.map((opinion, index) => (
                <OpinionsClient key={index} opinionClient={opinion} />
              ))}
            </div>

            <Stack spacing={2} mt={3} alignItems="center">
              <Pagination
                count={totalPages}
                page={currentPage}
                onChange={handlePageChange}
                size="small"
                sx={{
                  "& .MuiPaginationItem-root": { color: "white" },
                  "& .Mui-selected": { backgroundColor: "white", color: "#888" },
                }}
              />
            </Stack>
          </>
        )}
      </Container>
    </section>
  );
};

export default TestimonialsSection;
