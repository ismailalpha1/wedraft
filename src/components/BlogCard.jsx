import { Link } from "react-router-dom";
 
function BlogCard({ article }) {

  return (
    <article className="blog-card">

      <Link
        to={`/blog/${article.slug}`}
        className="blog-image"
      >

        <img
          src={article.image}
          alt={article.title}
        />

      </Link>


      <div className="blog-content">

        <div className="blog-meta">

          <span>
            {article.category}
          </span>

          <span>
            {article.readTime}
          </span>

        </div>


        <Link to={`/blog/${article.slug}`}>

          <h2>
            {article.title}
          </h2>

        </Link>


        <p>
          {article.excerpt}
        </p>


        <Link
          to={`/blog/${article.slug}`}
          className="read-more"
        >
          Read article →
        </Link>

      </div>

    </article>
  );
}

export default BlogCard;