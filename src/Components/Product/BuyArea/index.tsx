import React from "react";
import ProductInfo from "./InfoProduct";
import Price from "./Price";
import ProductOptions from "./ProductionsOptions";

import { BuyContainer, Container } from "./styles";

const Especifications = () =>{
  return (
    <Container>
      <ProductInfo />
      <BuyContainer>
        <ProductOptions />
        <Price />
      </BuyContainer>
    </Container>
  )
}
export default Especifications