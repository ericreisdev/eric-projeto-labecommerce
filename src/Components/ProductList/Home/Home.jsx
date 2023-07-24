import React, { useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import {
  DivNomeEProduct,
  ParagrafoEProduct,
  QuantidadeOrdenacao,
} from "./HomeStyle";

const Home = ({
  productList,
  ordination,
  setOrdination,
  handleOrdination,
  handleCart,
}) => {
  return (
    <>
      <ParagrafoEProduct>
        <QuantidadeOrdenacao>
          <p>Quantidade de Produtos:</p>
          <label htmlFor="ordenacao">
            Ordenação:
            <br />
            <select
              name="ordenacao"
              id="ordenacao"
              value={ordination}
              onChange={handleOrdination}
            >
              <option value="selecione">Selecione</option>
              <option value="asc">Crescente</option>
              <option value="desc">Decrescente</option>
            </select>
          </label>
        </QuantidadeOrdenacao>

        <DivNomeEProduct>
          {productList
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
            .map((item) => (
              <ProductCard
                key={item.cod}
                productList={item}
                handleCart={handleCart}
              />
            ))}
        </DivNomeEProduct>
      </ParagrafoEProduct>
    </>
  );
};

export default Home;
