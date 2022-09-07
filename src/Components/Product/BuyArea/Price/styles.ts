import styled from "styled-components";

export const Container = styled.div`
  max-width: 40.625rem;
  padding: 1.5rem;
  background: #FFFFFF;
  border: 1px solid #E9E9E9;
  border-radius: 4px;
`

export const Title = styled.h3`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  color: #030303;
`
export const CounterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
export const CounterButtonsDiv =  styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 128px;
  height: 48px;
  background: #FFFFFF;
  border: 1px solid #9FA3A6;
  border-radius: 4px;

  span{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: #030303;
  }
`
export const CounterButton = styled.div`
  border: none;
`
export const StockSpan= styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
`

export const BuyContainer =  styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  span{
    font-family: 'Inter';
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 16px;
      text-align: center;
      color: #40464D;
      margin-top: 1rem;
  }
`

export const AddToCartButton = styled.button`
  width: 267px;
  height: 56px;
  border: none;
  margin-top: 2rem;
  background: #40B25C;
  border-radius: 4px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  text-transform: uppercase;
  color: #FFFFFF;
`
export const BuyButton = styled(AddToCartButton)`
  background: #E36305;
  margin-top: 0.5rem;
  &::before{
    content: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4.125 1L1.25 4.6V17.2C1.25 17.6774 1.45193 18.1352 1.81138 18.4728C2.17082 18.8104 2.65834 19 3.16667 19H16.5833C17.0917 19 17.5792 18.8104 17.9386 18.4728C18.2981 18.1352 18.5 17.6774 18.5 17.2V4.6L15.625 1H4.125Z' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M1.25 4.60028H18.5' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M13.7087 8.19983C13.7087 9.15533 13.3048 10.0717 12.5859 10.7473C11.867 11.423 10.892 11.8025 9.87532 11.8025C8.85866 11.8025 7.88364 11.423 7.16475 10.7473C6.44586 10.0717 6.04199 9.15533 6.04199 8.19983' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
    align-self: center;
    margin-right: 1rem;
  }
`
  

