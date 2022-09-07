import React, { useState } from "react";
import { AddToCartButton, BuyButton, BuyContainer, Container, CounterButton, CounterButtonsDiv, CounterContainer, StockSpan, Title } from "./styles";

const Price = () =>{

  const [counter, setCounter] = useState(0);
   const increase = () => {
    setCounter(count => count + 1);
  };
 
  //decrease counter
  const decrease = () => {
    setCounter(count => count - 1);
  };
 
 
  return(
   <Container>
      <div>
        <Title>$ 3000</Title>
      </div>
      <CounterContainer>
        <CounterButtonsDiv>
          <CounterButton onClick={decrease}>
            <svg width="14" height="2" viewBox="0 0 14 2" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1H13" stroke="#40B25C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </CounterButton>
          {counter > 3  ? <span>0</span> : <span>{counter}</span>}
          <CounterButton onClick={increase}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 1V13" stroke="#40B25C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M1 7H13" stroke="#40B25C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </CounterButton>
        </CounterButtonsDiv>
        <StockSpan>
          <span style={{color: '#E63737'}}>Only 3 left in Stock </span>
          <span> Buy now!</span>
        </StockSpan>
      </CounterContainer>
      <BuyContainer>
        <AddToCartButton>add to cart</AddToCartButton>
        <BuyButton>buy now</BuyButton>
        <span>Shipped by Store 1 Sold by Store 2</span>
      </BuyContainer>
   </Container>
  )
}

export default Price