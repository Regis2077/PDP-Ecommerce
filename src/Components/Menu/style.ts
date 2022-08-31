import styled from 'styled-components'

export const Container = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
  background: #030303;
  height: 48px;

`
export const ContainerLista = styled.ul `
  display: flex;
  list-style-type: none;
  justify-content: space-around;
  width: 100%;
  *{
    text-decoration: none;
  }
  li{
    a{
      font-family: 'Inter';
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
      color: #FFFFFF;
    }
  }

`