import React, {  useEffect, useState } from "react";
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

  const saveLocalStorage = () =>{
    if(cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart))
    } else {
      localStorage.removeItem("cart")
    }
  }

  const getLocalStorage = () =>{
    const fullCart = localStorage.getItem("cart")
    if (fullCart){
      setCart(JSON.parse(fullCart))
    }
  }

  useEffect(()=>{
    getLocalStorage()
  },[])

  useEffect(()=>{
    saveLocalStorage()
  },[cart])

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
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
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
      <Header />
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
            productList={productList}
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
          />
        </HomeRow>
        <Cart
          amount={amount}
          setAmount={setAmount}
          cart={cart}
          setCart={setCart}
        />
      </Main>
      <Footer />
    </>
  );
};

export default App;
