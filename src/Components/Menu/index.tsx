import React from "react";

const itemsMenu = ["Eletronics", "Smart Home", "Computers", "Smartphones", 
"New in Furnitures", "Home & Kitchen", "Video Games Sale", "Holiday Deals"]
const Menu = () =>{
  return(
    <div>
      <nav>
        <ul>
          {itemsMenu.map((item) =><li>{item}</li>)} 
        </ul>
      </nav>
    </div>
  )

}

export default Menu