import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const SoloBlog = ({ blog }) => {
  return (
    <div className="blog_grid">
      {blog.length !== 0 ? (
        blog.map((Blog, index) => (
          <div key={index} className="blog_card">
            <div className="blog_image_wrapper">
              <Image
              loading="lazy"
                className="blog_image"
                src={Blog.image}
                alt={Blog.title}
                fluid
              />
            </div>

            <div className="blog_content">
              <h6 className="blog_category">{Blog.category}</h6>
              <h3 className="blog_title">{Blog.title}</h3>




              <div className="blog_footer">
                <span className="blog_date">{Blog.createdAt?.slice(0, 10)}</span>
                <Link className="blog_read_more" to={`/Blog/${Blog.slug}`}>
                  Read More →
                </Link>
              </div>
            </div>
          </div>
        ))
      ) : (
        <h3>No blogs</h3>
      )}
    </div>
  );
};

export default SoloBlog;
