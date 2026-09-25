import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";

import { products } from "../data/products";

function ProductDetails() {

  const { slug } = useParams();

  const product = products.find(
    (item) => item.slug === slug || item.id === Number(slug)
  );


  if (!product) {

    return (
      <main className="not-found">

        <h1>Product not found</h1>

        <Link to="/products">
          ← Back to products
        </Link>

      </main>
    );

  }


  return (
    <main className="product-details">

      <div className="product-details-container">

        <Link
          to="/products"
          className="back-link"
        >
          <ArrowLeft size={18} />
          Back to products
        </Link>


        <div className="product-details-grid">

          {/* IMAGE */}

          <div className="product-details-image">

            {product.badge && (
              <span className="product-badge">
                {product.badge}
              </span>
            )}

            <img
              src={product.image}
              alt={product.name}
            />

          </div>


          {/* INFORMATION */}

          <div className="product-details-info">

            <span className="product-category">
              {product.category}
            </span>


            <h1>
              {product.name}
            </h1>


            <div className="large-rating">

              ⭐ {product.rating}

              <span>
                {product.reviews.toLocaleString()} reviews
              </span>

            </div>


            <p className="product-description">
              {product.description}
            </p>


            <div className="product-price">
              {product.price}
            </div>


            <a
              href={product.amazonUrl}
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              className="amazon-button"
            >

              Check price on Amazon

              <ExternalLink size={18} />

            </a>


            <p className="affiliate-note">
              Prices and availability may change.
              Check Amazon for the latest information.
            </p>

          </div>

        </div>

      </div>

    </main>
  );
}

export default ProductDetails;