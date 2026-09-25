import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-brand">

          <Link to="/" className="logo" aria-label="Amazon Finds home">
            <img src="/images/logo.png" alt="Amazon Finds logo" className="logo-image" />
          </Link>

          <p>
            Discover useful products, buying guides,
            comparisons and deals to help you shop smarter.
          </p>

        </div>


        <div className="footer-column">

          <h4>Explore</h4>

          <Link to="/products">
            Products
          </Link>

          <Link to="/categories">
            Categories
          </Link>

          <Link to="/deals">
            Deals
          </Link>

          <Link to="/blog">
            Buying Guides
          </Link>

        </div>


        <div className="footer-column">

          <h4>Company</h4>

          <Link to="/about">
            About
          </Link>

          <Link to="/contact">
            Contact
          </Link>

          <Link to="/privacy">
            Privacy
          </Link>

          <Link to="/terms">
            Terms
          </Link>

        </div>

      </div>


      <div className="footer-bottom">

        <p>
          © {new Date().getFullYear()} Amazon Finds.
          All rights reserved.
        </p>

        <p className="affiliate-disclosure">
          As an Amazon Associate, we may earn from qualifying purchases.
        </p>

      </div>

    </footer>
  );
}

export default Footer;