import React from "react";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding:  1.5rem 2rem;
  align-items: center;
`


export const ShippintInfo = styled.div`

  font-weight: ${(props) => props.title ? '600' : '500'};
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
  font-family: 'Inter';
  font-style: normal;
  font-size: 14px;
  line-height: 20px;
  
`