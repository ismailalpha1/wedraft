import { Link, useParams } from "react-router-dom";

import { categories } from "../data/categories";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

function CategoryDetails() {

  const { categoryId } = useParams();

  const category = categories.find(
    (item) => item.id === categoryId
  );

  if (!category) {
    return (
      <main className="not-found">
        <h1>Category not found</h1>

        <Link to="/categories">
          ← Back to categories
        </Link>
      </main>
    );
  }


  const categoryProducts = products.filter(
    (product) =>
      product.category.toLowerCase() ===
      category.name.toLowerCase()
  );


  return (
    <main>

      <section className="page-header">

        <div>

          <div className="category-hero-icon">
            {category.icon}
          </div>

          <span className="section-label">
            CATEGORY
          </span>

          <h1>{category.name}</h1>

          <p>
            {category.description}
          </p>

        </div>

      </section>


      <section className="section">

        <div className="section-header">

          <div>
            <span className="section-label">
              RECOMMENDATIONS
            </span>

            <h2>
              {category.name} products
            </h2>
          </div>

          <Link to="/products">
            All products →
          </Link>

        </div>


        {categoryProducts.length > 0 ? (

          <div className="product-grid">

            {categoryProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}

          </div>

        ) : (

          <div className="empty-state">

            <h2>
              More products coming soon
            </h2>

            <p>
              We're building this category.
            </p>

          </div>

        )}

      </section>

    </main>
  );
}

export default CategoryDetails;