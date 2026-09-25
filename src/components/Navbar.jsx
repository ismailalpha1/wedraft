import { Link, NavLink } from "react-router-dom";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Categories", path: "/categories" },
    // { name: "Deals", path: "/deals" },
    // { name: "Guides", path: "/blog" },
  ];

  return (
    <header className="navbar">

      <div className="navbar-container">

        {/* LOGO */}

        <Link to="/" className="logo" aria-label="Amazon Finds home">
          <img src="/images/logo.png" alt="Amazon Finds logo" className="logo-image" />
        </Link>


        {/* DESKTOP NAV */}

        <nav className="desktop-nav">

          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              {item.name}
            </NavLink>
          ))}

        </nav>


        {/* ACTIONS */}

        <div className="navbar-actions">

          <Link to="/search" className="icon-button">
            <Search size={20} />
          </Link>

          <Link to="/products" className="deals-button">
            <ShoppingBag size={18} />
            <span>Shop</span>
          </Link>

          <button
            className="mobile-menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>

        </div>

      </div>


      {/* MOBILE MENU */}

      {menuOpen && (
        <div className="mobile-menu">

          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className="mobile-nav-link"
            >
              {item.name}
            </NavLink>
          ))}

        </div>
      )}

    </header>
  );
}

export default Navbar;