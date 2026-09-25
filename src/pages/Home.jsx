import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

function Home() {
  return (
    <main>

      {/* HERO */}

      <section className="hero">

        <div className="hero-content">

          <span className="hero-label">
            SMART SHOPPING
          </span>

          <h1>
            Discover products
            <br />
            worth buying.
          </h1>

          <p>
            We research popular products and help you
            discover useful products without wasting hours
            comparing hundreds of options.
          </p>

          <div className="hero-buttons">

            <Link to="/products" className="btn-primary">
              Explore Products
            </Link>

            <Link to="/deals" className="btn-secondary">
              Today's Deals
            </Link>

          </div>

        </div>

      </section>


      {/* CATEGORIES */}

      <section className="section">

        <div className="section-header">

          <div>
            <span className="section-label">
              EXPLORE
            </span>

            <h2>Shop by category</h2>
          </div>

          <Link to="/categories">
            View all →
          </Link>

        </div>


        <div className="category-grid">

          <Link to="/products?category=electronics">
            <div className="category-card">
              <span>💻</span>
              <h3>Electronics</h3>
              <p>Tech worth checking out.</p>
            </div>
          </Link>

          <Link to="/products?category=kitchen">
            <div className="category-card">
              <span>🍳</span>
              <h3>Kitchen</h3>
              <p>Useful kitchen products.</p>
            </div>
          </Link>

          <Link to="/products?category=fitness">
            <div className="category-card">
              <span>🏋️</span>
              <h3>Fitness</h3>
              <p>Equipment for your workouts.</p>
            </div>
          </Link>

          <Link to="/products?category=home">
            <div className="category-card">
              <span>🏠</span>
              <h3>Home</h3>
              <p>Products for everyday life.</p>
            </div>
          </Link>

        </div>

      </section>


      {/* FEATURED PRODUCTS */}

      <section className="section">

        <div className="section-header">

          <div>
            <span className="section-label">
              OUR PICKS
            </span>

            <h2>Featured products</h2>
          </div>

          <Link to="/products">
            See all →
          </Link>

        </div>


        <div className="product-grid">

          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>

      </section>


      {/* CONTENT CTA */}

      <section className="content-cta">

        <div>

          <span className="section-label">
            BUY SMARTER
          </span>

          <h2>
            Don't buy before
            <br />
            you read the guide.
          </h2>

          <p>
            Discover buying guides, comparisons and
            product recommendations designed to help
            you make better purchasing decisions.
          </p>

          <Link to="/blog" className="btn-primary">
            Read our guides
          </Link>

        </div>

      </section>

    </main>
  );
}

export default Home;