import React from "react";
import { ImageContainer } from "./styles";

const ProductPreview = () =>{
  return (
  <ImageContainer>
   <img src="https://www.apple.com/newsroom/images/product/mac/standard/Apple_MacBook-Pro_14-16-inch_10182021_big.jpg.large.jpg" 
   alt="Macbook" 
    />
   <span>Roll over image to zoom in</span>

  </ImageContainer>
  )
}

export default ProductPreview