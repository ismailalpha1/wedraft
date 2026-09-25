import CategoryCard from "../components/CategoryCard";
import { categories } from "../data/categories";

function Categories() {
  return (
    <main>

      <section className="page-header">

        <div>

          <span className="section-label">
            EXPLORE
          </span>

          <h1>Categories</h1>

          <p>
            Browse our product recommendations by category.
          </p>

        </div>

      </section>


      <section className="section">

        <div className="category-grid large-category-grid">

          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
            />
          ))}

        </div>

      </section>


      <section className="content-cta">

        <div>

          <span className="section-label">
            SHOP SMARTER
          </span>

          <h2>
            Looking for something specific?
          </h2>

          <p>
            Search our product collection and discover
            recommendations across different categories.
          </p>

        </div>

      </section>

    </main>
  );
}

export default Categories;