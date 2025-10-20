import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import SoloBlogPage from "../components/blog/SoloBlogPage";
import axios from "axios";
import { domain } from "../utils/stn";
import NavBlog from "../components/blog/NavBlog";
import { Link } from "react-router-dom";

const BlogPage = () => {
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

  return loading ? (  
    <h1>loading</h1> 
  ) : error ? (
    <h1>{error}</h1> 
  ) : (
    <div className="blogPage">

    
    <Container>
    <NavBlog />
      </Container>
      <Container className='blogPageContainer'>
        <SoloBlogPage blog={blog} />
      </Container>
    </div>
  );
};

export default BlogPage;