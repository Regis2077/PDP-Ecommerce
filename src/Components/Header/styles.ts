import styled from 'styled-components'
import LogoB8oneAcademy from '../../assets/Header/logo.png'


export const Container = styled.div`

  display: flex;
  padding: 0 0.75rem;
  justify-content: space-between;
  align-items: center;
  
`

export const Search = styled.div`
  position: relative;
  max-width: 902px;
  width: 100%;
  max-height: 48px;
  display: flex;

  input{
    width: 100%;
    padding: 14px 20px;

    &::placeholder{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 1rem;
    line-height: 20px;
    color: #40464D;
    }
  }
  img {
    left: 94%;
    top: 9px;
    position: absolute;
  }
`
export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 16rem;
  width: 100%;

  *{
    background: none;
    border: none
  }
`
export const Button = styled.button`
  display: flex;
  align-items: center;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  text-transform: uppercase;
  color: #030303;

  img{
    margin:0.5rem
  }
`