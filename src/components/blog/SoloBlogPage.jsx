import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const SoloBlogPage = ({ blog }) => {
    return (
        <div>
            <div className="blogContainers2">
                {blog.length !== 0 ? (
                    blog.map((Blog , index) => {
                        return (
                            <div key={index} className="mb-2 blogBox3 ">
                                <div className="blogBox2">
                                    <Link to={`/Blog/${Blog.slug}`}>
                                        <Image
                                            className="blogImg" 
                                            src={Blog.image}
                                            alt={Blog.title}
                                            fluid
                                            loading="lazy"
                                        />
                                    </Link>
                                    <h5 className="">{Blog.title}</h5>
                                    <span className="b111"> {Blog.category}</span> 

                                  
                                </div>
                                
                            </div>
                        );
                    })
                ) : (
                    <h3>No Blogs</h3>
                )}
            </div>
        </div>
    );
};

export default SoloBlogPage;