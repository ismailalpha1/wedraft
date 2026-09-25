import { Link } from "react-router-dom";

function DealCard({ deal }) {

  return (
    <article className="deal-card">

      <div className="deal-card-content">

        <span className="deal-badge">
          {deal.badge}
        </span>

        <span className="deal-category">
          {deal.category}
        </span>

        <h2>
          {deal.title}
        </h2>

        <p>
          {deal.description}
        </p>

        <Link
          to={`/products/${deal.productId}`}
          className="btn-primary"
        >
          Explore deal →
        </Link>

      </div>

    </article>
  );
}

export default DealCard;