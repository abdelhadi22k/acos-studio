import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Image } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { domain } from "../../utils/stn";

const BlogDetels = () => {
  const params = useParams();
  const { slug } = params;
  const [blog, setBlog] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(`${domain}/api/blog/slug/${slug}`);
        setBlog(result.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [slug]);

  return loading ? (
    <h1>loading</h1>
  ) : error ? (
    <h1>{error}</h1>
  ) : (
    <div className="BlogDetels">
      <Container className="Blog_Container">
        <Image loading="lazy" className="blogImg" src={blog.image} alt={blog.title} fluid />

        <div>
          <div className="blogInfos">
            <div className="blogInfos">
              <span className=" b111"> {blog.category}</span>
              <h1 className="mainTitle">{blog.title}</h1>
              <p>{blog.description.descriptionDetails}</p>

              <br />

              <div>
                {blog.details.map((el, index) => {
                  return (
                    <div key={index}>
                      <h1 className="mainTitle">{el.detailsTitle}</h1>
                      <p>{el.detailsContent}</p>
                    </div>
                  );
                })}
              </div>

              <div>
                {blog.content.map((el, index) => {
                  return (
                    <div key={index}>
                      <h1 className="mainTitle">{el.contentTitle}</h1>
                      <p>{el.contentDetails}</p>
                    </div>
                  );
                })}
              </div>
              <div className="BlogWriter">
                <div>
                  <div></div> {blog.writer}
                </div>
                <div>
                  <div></div> {blog.createdAt.substring(0, 10)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BlogDetels;
