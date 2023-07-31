import React, { useEffect, useState } from "react";
import Filters from "./Components/Filters/Filters";
import Home from "./Components/ProductList/Home/Home";
import Cart from "./Components/ShoppingCart/Cart/Cart";
import { GlobalStyle, HomeRow, Main } from "./GlobalStyle";
import productList from "./assets/productsList";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

const App = () => {
  const [minFilter, setMinFilter] = useState("");

  const [maxFilter, setMaxFilter] = useState("");

  const [searchFilter, setSearchFilter] = useState("");

  const [cart, setCart] = useState([]);

  const [amount, setAmount] = useState([]);

  const [ordination, setOrdination] = useState("");

  const [cartOpen, setCartOpen] = useState(false);

  const [filteredProducts, setFilteredProducts] = useState(productList);

  useEffect(() => {
    let tempProducts = productList
      .filter((item) => {
        return item.name.includes(searchFilter);
      })
      .filter((item) => {
        return isNaN(minFilter) || item.value >= minFilter || minFilter === "";
      })
      .filter((item) => {
        return isNaN(maxFilter) || item.value <= maxFilter || maxFilter === "";
      })
      .sort((a, b) => {
        const firstItem = a.name.toUpperCase();
        const lastItem = b.name.toUpperCase();
        if (ordination === "selecione") {
          return 0;
        } else if (firstItem < lastItem) {
          return ordination === "asc" ? -1 : 1;
        } else if (firstItem > lastItem) {
          return ordination === "desc" ? -1 : 1;
        }
        return 0;
      });

    setFilteredProducts(tempProducts);
  }, [searchFilter, minFilter, maxFilter, ordination]);

  const saveLocalStorage = () => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    } else {
      localStorage.removeItem("cart");
    }
  };

  const getLocalStorage = () => {
    const fullCart = localStorage.getItem("cart");
    if (fullCart) {
      setCart(JSON.parse(fullCart));
    }
  };

  useEffect(() => {
    getLocalStorage();
  }, []);

  useEffect(() => {
    saveLocalStorage();
  }, [cart]);

  const handleMinFilter = (e) => {
    const newMinFilter = parseFloat(e.target.value);
    if (newMinFilter >= 0 || isNaN(newMinFilter)) {
      setMinFilter(newMinFilter);
    }
  };

  const handleMaxFilter = (e) => {
    const newMaxFilter = parseFloat(e.target.value);
    if (newMaxFilter >= 0 || isNaN(newMaxFilter)) {
      setMaxFilter(newMaxFilter);
    }
  };

  const handleSearchFilter = (e) => {
    setSearchFilter(e.target.value);
  };

  const handleCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      const updatedCart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    } else {
      const newItem = { ...product, quantity: 1 };
      setCart([...cart, newItem]);
    }
  };

  const handleAmount = (e) => {
    setAmount(e.target.value);
  };

  const handleOrdination = (e) => {
    setOrdination(e.target.value);
  };

  return (
    <>
      <GlobalStyle />
      <Header
      cartOpen={cartOpen}
      setCartOpen={setCartOpen}
      />
      <Main>
        <Filters
          minFilter={minFilter}
          setMinFilter={setMinFilter}
          maxFilter={maxFilter}
          setMaxFilter={setMaxFilter}
          searchFilter={searchFilter}
          setSearchFilter={setSearchFilter}
          handleMinFilter={handleMinFilter}
          handleMaxFilter={handleMaxFilter}
          handleSearchFilter={handleSearchFilter}
        />
        <HomeRow>
          <Home
            productList={filteredProducts}
            productCount={filteredProducts.length}
            ordination={ordination}
            setOrdination={setOrdination}
            handleOrdination={handleOrdination}
            amount={amount}
            setAmount={setAmount}
            cart={cart}
            setCart={setCart}
            handleCart={handleCart}
            minFilter={minFilter}
            setMinFilter={setMinFilter}
            maxFilter={maxFilter}
            setMaxFilter={setMaxFilter}
            searchFilter={searchFilter}
            setSearchFilter={setSearchFilter}
            handleMinFilter={handleMinFilter}
            handleMaxFilter={handleMaxFilter}
            handleSearchFilter={handleSearchFilter}
            setCartOpen={setCartOpen}
            cartOpen={cartOpen}
          />
        </HomeRow>
        <Cart
          amount={amount}
          setAmount={setAmount}
          cart={cart}
          setCart={setCart}
          cartOpen={cartOpen}
          setCartOpen={setCartOpen}
        />
      </Main>
      <Footer />
    </>
  );
};

export default App;
