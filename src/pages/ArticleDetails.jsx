import { Link, useParams } from "react-router-dom";

import { articles } from "../data/articles";

function ArticleDetails() {

  const { slug } = useParams();

  const article = articles.find(
    (item) => item.slug === slug
  );


  if (!article) {

    return (
      <main className="not-found">

        <h1>Article not found</h1>

        <Link to="/blog">
          ← Back to guides
        </Link>

      </main>
    );

  }


  return (
    <main className="article-page">

      <article>

        <header className="article-header">

          <span className="section-label">
            {article.category}
          </span>

          <h1>
            {article.title}
          </h1>

          <p>
            {article.excerpt}
          </p>

          <div className="article-meta">

            <span>
              {article.date}
            </span>

            <span>
              {article.readTime}
            </span>

          </div>

        </header>


        <div className="article-image">

          <img
            src={article.image}
            alt={article.title}
          />

        </div>


        <div className="article-content">

          {article.content.map((block, index) => {

            if (block.type === "heading") {

              return (
                <h2 key={index}>
                  {block.text}
                </h2>
              );

            }


            return (
              <p key={index}>
                {block.text}
              </p>
            );

          })}


          <div className="article-cta">

            <h3>
              Looking for products?
            </h3>

            <p>
              Explore our product recommendations.
            </p>

            <Link
              to="/products"
              className="btn-primary"
            >
              Browse products →
            </Link>

          </div>

        </div>

      </article>

    </main>
  );
}

export default ArticleDetails;