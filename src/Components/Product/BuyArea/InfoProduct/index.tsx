import React from 'react';
import { SkuContainer } from './styles';

const ProductInfo = () =>{
  return(
    <>
      <span>Apple</span>
      <h2>Apple 13.3" MacBook Pro, 2.6GHz Intel Core i7 6 Core 9th Gen (Late 2019, Space Gray)</h2>
      <SkuContainer>
        <span>SKU: 000000</span>
        <a href="#">read full description</a>
      </SkuContainer>
      
    </>
  )
}

export default ProductInfo