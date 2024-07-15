import video1 from "../../../images/video-1.webp";
import video2 from "../../../images/video-2.webp";
import article1 from "../../../images/article-1.png";
import article2 from "../../../images/article-2.png";
import article3 from "../../../images/article-3.png";
import { Link } from "react-router-dom";

export default function Resource() {
  return (
    <section className="resource fluid">
      <h2>Blogs & Resources</h2>
      <div className="inner">
      <div className="grid">
        <div className="wrapper">
          <img src={video1} alt="video 1" />
        </div>
        <div className="wrapper">
          <img src={video2} alt="video 2" />
        </div>
        <div className="wrapper">
          <img src={video2} alt="video 3" />
        </div>
      </div>
      <div className="grid">
        <div className="wrapper">
          <div className="articles">
            <div>
              <h4>Top Ten Most Powerful Startup</h4>
              <span>
                Top Ten Most Powerful Startup. Top Ten Most Powerful Startup.
                Top Ten Most Powerful Startup
              </span>
            </div>
            <img src={article1} alt="article 1" />
          </div>
        </div>
        <div className="wrapper">
          <div className="articles">
            <div>
              <h4>Top Ten Most Powerful Startup</h4>
              <span>
                Top Ten Most Powerful Startup. Top Ten Most Powerful Startup.
                Top Ten Most Powerful Startup
              </span>
            </div>
            <img src={article2} alt="article 2" />
          </div>
        </div>
        <div className="wrapper">
          <div className="articles">
            <div>
              <h4>Top Ten Most Powerful Startup</h4>
              <span>
                Top Ten Most Powerful Startup. Top Ten Most Powerful Startup.
                Top Ten Most Powerful Startup
              </span>
            </div>
            <img src={article3} alt="article 3" />
          </div>
        </div>
      </div>
      </div>
      <Link to="/sinc/blog" className="action">
        See More Blogs & Resources
      </Link>
    </section>
  );
}
