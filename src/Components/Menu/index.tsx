import React from "react";
import { Container, ContainerLista } from "./style";

const Menu = () =>{
  const itemsMenu = ["Eletronics", "Smart Home", "Computers", "Smartphones", 
  "New in Furnitures", "Home & Kitchen", "Video Games Sale", "Holiday Deals"]
  return(
    <>
      <Container>
        <ContainerLista>
          {itemsMenu.map((items, id) => 
            <li key={id}>
              <a href="#">{items}</a>
            </li>)}          
        </ContainerLista>
      </Container>
    </>
  )
}

export default Menu