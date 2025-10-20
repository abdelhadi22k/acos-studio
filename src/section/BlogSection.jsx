import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import SoloBlog from "../components/blog/SoloBlog";
import axios from "axios";
import { domain } from "../utils/stn";

const BlogSection = () => {
  const [blog, setBlog] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchBlog() {
      try {
        const { data } = await axios.get(`${domain}/api/blog`);
        setBlog(data);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        setError(err.message);
      }
    }
    fetchBlog();
  }, []);

  return (
    <section className="blogSection" id="blog">
      <Container className="blogContainer">
        <div className="mainTitle3">
          <div>
            <h5>our blog</h5>
            <h1>
              <span>Our</span>  blog features some important news.
            </h1>
          </div>

          <div>
            <p>
              Watch the latest developments in the world of digital collage development exclusively on our blog.
            </p>

            <Link to="/Blog" className="mainButton1">
              Check out our blog
            </Link>
          </div>
        </div>

        <div className="blogHolder">
          {loading ? (
            <h1>Loading...</h1>
          ) : error ? (
            <h1 style={{ color: "red" }}>{error}</h1>
          ) : (
            <SoloBlog blog={blog.slice(0, 3)} />
          )}
        </div>
      </Container>
    </section>
  );
};

export default BlogSection;
