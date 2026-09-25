import BlogCard from "../components/BlogCard";
import { articles } from "../data/articles";

function Blog() {

  return (
    <main>

      <section className="page-header">

        <div>

          <span className="section-label">
            BUYING GUIDES
          </span>

          <h1>Guides & Articles</h1>

          <p>
            Practical guides to help you research products
            before you buy.
          </p>

        </div>

      </section>


      <section className="section">

        <div className="featured-article">

          <div className="featured-article-content">

            <span className="section-label">
              FEATURED GUIDE
            </span>

            <h2>
              {articles[0].title}
            </h2>

            <p>
              {articles[0].excerpt}
            </p>

            <a
              href={`/blog/${articles[0].slug}`}
              className="btn-primary"
            >
              Read guide →
            </a>

          </div>

        </div>

      </section>


      <section className="section blog-section">

        <div className="section-header">

          <div>

            <span className="section-label">
              LATEST
            </span>

            <h2>
              Latest articles
            </h2>

          </div>

        </div>


        <div className="blog-grid">

          {articles.map((article) => (
            <BlogCard
              key={article.id}
              article={article}
            />
          ))}

        </div>

      </section>

    </main>
  );
}

export default Blog;