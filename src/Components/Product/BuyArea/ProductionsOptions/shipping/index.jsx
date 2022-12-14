import React from "react";
import { Container, ShippintInfo } from "./styles";


const Shipping = () =>{
  return (
    <Container>
      <div>
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21.0899 4H2V21.3328H21.0899V4Z" stroke="#40B25C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M21.0915 10.6666H26.1821L30.0001 14.6665V21.3329H21.0915V10.6666Z" stroke="#40B25C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M7.72795 28C9.48513 28 10.9096 26.5077 10.9096 24.6668C10.9096 22.8259 9.48513 21.3336 7.72795 21.3336C5.97077 21.3336 4.5463 22.8259 4.5463 24.6668C4.5463 26.5077 5.97077 28 7.72795 28Z" stroke="#40B25C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M24.2731 28C26.0303 28 27.4548 26.5077 27.4548 24.6668C27.4548 22.8259 26.0303 21.3336 24.2731 21.3336C22.516 21.3336 21.0915 22.8259 21.0915 24.6668C21.0915 26.5077 22.516 28 24.2731 28Z" stroke="#40B25C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <ShippintInfo>
        <span title='true'>Shipping</span>
        <span>Receive or pickup your products!</span>
        <span style={{color:'green'}}>See shipping options</span>
      </ShippintInfo>
    </Container>
  )
}
export default Shipping