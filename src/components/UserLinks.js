import "../styles/UserLinks.css";
import TwitterIcon from "../icon-components/TwitterIcon";
import LocationIcon from "../icon-components/LocationIcon";
import BlogIcon from "../icon-components/BlogIcon";
import CompanyIcon from "../icon-components/CompanyIcon";

function UserLinks({ location, twitter, blog, company }) {
  return (
    <div className="user-links">
      <div className="location-blog">
        <div className="location" style={{ opacity: location ? null : 0.5 }}>
          <LocationIcon />
          <p>{location ? location : "Not available"}</p>
        </div>
        <div className="blog" style={{ opacity: blog ? null : 0.5 }}>
          <BlogIcon />
          <a className="blog-name" href={blog} target="_blank" rel="noreferrer">
            {blog ? blog : "Not available"}
          </a>
        </div>
      </div>
      <div className="twitter-company">
        <div className="twitter" style={{ opacity: twitter ? null : 0.5 }}>
          <TwitterIcon />
          <a
            className="twitter-name"
            href={twitter}
            target="_blank"
            rel="noreferrer"
          >
            {twitter ? twitter : "Not available"}
          </a>
        </div>
        <div className="company" style={{ opacity: company ? null : 0.5 }}>
          <CompanyIcon />
          <p>{company ? company : "Not available"}</p>
        </div>
      </div>
    </div>
  );
}

export default UserLinks;
