import { useMemo, useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";

import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

function Products() {

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("featured");


  const categories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];


  const filteredProducts = useMemo(() => {

    let result = [...products];


    // SEARCH

    if (search.trim()) {

      const query = search.toLowerCase();

      result = result.filter((product) =>
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query)
      );

    }


    // CATEGORY

    if (category !== "All") {

      result = result.filter(
        (product) => product.category === category
      );

    }


    // SORT

    if (sort === "rating") {

      result.sort(
        (a, b) => b.rating - a.rating
      );

    }

    if (sort === "price-low") {

      result.sort(
        (a, b) =>
          parseFloat(a.price.replace("$", "")) -
          parseFloat(b.price.replace("$", ""))
      );

    }

    if (sort === "price-high") {

      result.sort(
        (a, b) =>
          parseFloat(b.price.replace("$", "")) -
          parseFloat(a.price.replace("$", ""))
      );

    }


    return result;

  }, [search, category, sort]);


  return (
    <main>

      {/* HEADER */}

      <section className="page-header">

        <div>

          <span className="section-label">
            DISCOVER
          </span>

          <h1>Products</h1>

          <p>
            Browse products worth checking out.
          </p>

        </div>

      </section>


      {/* FILTERS */}

      <section className="products-section">

        <div className="filters">

          {/* SEARCH */}

          <div className="search-box">

            <Search size={20} />

            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
            />

          </div>


          {/* CATEGORY */}

          <div className="filter-control">

            <SlidersHorizontal size={18} />

            <select
              value={category}
              onChange={(e) =>
                setCategory(e.target.value)
              }
            >

              {categories.map((item) => (
                <option key={item}>
                  {item}
                </option>
              ))}

            </select>

          </div>


          {/* SORT */}

          <select
            className="sort-control"
            value={sort}
            onChange={(e) =>
              setSort(e.target.value)
            }
          >

            <option value="featured">
              Featured
            </option>

            <option value="rating">
              Highest Rated
            </option>

            <option value="price-low">
              Price: Low to High
            </option>

            <option value="price-high">
              Price: High to Low
            </option>

          </select>

        </div>


        {/* RESULT COUNT */}

        <div className="results-info">

          <p>
            {filteredProducts.length} products found
          </p>

        </div>


        {/* PRODUCTS */}

        {filteredProducts.length > 0 ? (

          <div className="product-grid">

            {filteredProducts.map((product) => (

              <ProductCard
                key={product.id}
                product={product}
              />

            ))}

          </div>

        ) : (

          <div className="empty-state">

            <h2>No products found</h2>

            <p>
              Try changing your search or filters.
            </p>

          </div>

        )}

      </section>

    </main>
  );
}

export default Products;