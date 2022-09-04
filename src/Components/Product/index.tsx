import React from "react";
import Especifications from "./BuyArea";
import ProductPreview from "./Vizualization";

import { Container } from "./styles";

const MainProduct = () => {
  return (
    <Container>
      <ProductPreview />
      <Especifications />
    </Container>
  )
  
}

export default MainProduct