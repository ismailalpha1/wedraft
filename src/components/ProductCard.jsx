import { Link } from "react-router-dom";

function ProductCard({ product }) {

  return (
    <article className="product-card">

      <Link
        to={`/products/${product.slug}`}
        className="product-image-wrapper"
      >

        {product.badge && (
          <span className="product-badge">
            {product.badge}
          </span>
        )}

        <img
          src={product.image}
          alt={product.name}
          className="product-image"
        />

      </Link>


      <div className="product-content">

        <span className="product-category">
          {product.category}
        </span>


        <Link to={`/products/${product.slug}`}>

          <h3>
            {product.name}
          </h3>

        </Link>


        <div className="rating">

          ⭐ {product.rating}

          <span>
            ({product.reviews.toLocaleString()})
          </span>

        </div>


        <p>
          {product.description}
        </p>


        <div className="product-bottom">

          <strong>
            {product.price}
          </strong>


          <a
            href={product.amazonUrl}
            target="_blank"
            rel="nofollow sponsored noopener noreferrer"
          >
            View on Amazon
          </a>

        </div>

      </div>

    </article>
  );
}

export default ProductCard;