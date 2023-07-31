import React, { useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import {
  DivNomeEProduct,
  ParagrafoEProduct,
  QuantidadeOrdenacao,
} from "./HomeStyle";

const Home = ({
  productList,
  productCount,
  ordination,
  setOrdination,
  handleOrdination,
  handleCart,
  minFilter,
  setMinFilter,
  maxFilter,
  setMaxFilter,
  searchFilter,
  setSearchFilter,
  handleMinFilter,
  handleMaxFilter,
  handleSearchFilter,
  cartOpen,
  setCartOpen,
}) => {
  return (
    <>
      <ParagrafoEProduct>
        <QuantidadeOrdenacao>
          <p>Quantidade de Produtos: {productCount}</p>
          <label htmlFor="ordenacao">
            Ordenação:
            <br />
            <select
              name="ordenacao"
              id="ordenacao"
              value={ordination}
              onChange={handleOrdination}
            >
              <option value="">Selecione</option>
              <option value="asc">Crescente</option>
              <option value="desc">Decrescente</option>
            </select>
          </label>
        </QuantidadeOrdenacao>

        <DivNomeEProduct>
          {productList
          .filter((item)=>{
            return item.name.includes(searchFilter)
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
            })
            .map(product => (
              <ProductCard
                key={product.id}
                product={product}
                handleCart={handleCart}
                cartOpen={cartOpen}
                setCartOpen={setCartOpen}
              />
            ))}
        </DivNomeEProduct>
      </ParagrafoEProduct>
    </>
  );
};

export default Home;
