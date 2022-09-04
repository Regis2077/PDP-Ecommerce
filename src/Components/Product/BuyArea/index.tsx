import React from "react";
import ProductInfo from "./InfoProduct";
import ProductOptions from "./ProductionsOptions";

import { BuyContainer, Container } from "./styles";

const Especifications = () =>{
  return (
    <Container>
      <ProductInfo />
     <BuyContainer>
      <ProductOptions />
     </BuyContainer>
    </Container>
  )
}
export default Especifications