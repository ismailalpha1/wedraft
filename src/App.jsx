import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Categories from "./pages/Categories";
import CategoryDetails from "./pages/CategoryDetails";
import Deals from "./pages/Deals";
import Blog from "./pages/Blog";
import ArticleDetails from "./pages/ArticleDetails";
// import About from "./pages/About";


function App() {

  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        {/* HOME */}

        <Route
          path="/"
          element={<Home />}
        />


        {/* PRODUCTS */}

        <Route
          path="/products"
          element={<Products />}
        />

        <Route
          path="/products/:slug"
          element={<ProductDetails />}
        />


        {/* CATEGORIES */}

        <Route
          path="/categories"
          element={<Categories />}
        />

        <Route
          path="/categories/:categoryId"
          element={<CategoryDetails />}
        />


        {/* DEALS */}

        <Route
          path="/deals"
          element={<Deals />}
        />


        {/* BLOG */}

        <Route
          path="/blog"
          element={<Blog />}
        />

        <Route
          path="/blog/:slug"
          element={<ArticleDetails />}
        />


        {/* ABOUT */}
{/* 
        <Route
          path="/about"
          element={<About />}
        /> */}

      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;