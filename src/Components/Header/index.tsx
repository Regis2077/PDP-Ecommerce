import React from "react"
import LogoB8oneAcademy from '../../assets/Header/logo.png'
import { Container, Search, UserContainer, Button } from "./styles"

import search from '../../assets/Header/search.svg'
import account from '../../assets/Header/account.svg'
import wishlist from '../../assets/Header/wishlist.svg'   
import minicart from '../../assets/Header/minicart.svg'

const Header = () =>{
   return(
    <>
       <Container>
            <h1 className="logo">
                <a href="/" className="logo-site">
                    <img src={LogoB8oneAcademy} alt="" />        
                </a>
            </h1>
            <Search>
                <input type="text" 
                    placeholder="What are you looking for?"
                />
                <img src={search} alt="Search" />
            </Search>
            <UserContainer>
                <Button>
                    <img src={account}  alt="Account Icon" />
                sign in
                </Button>
                <Button >
                    <img src={wishlist} alt="Wishlist Icon" />
                    wishlist
                </Button>
                <div>
                <img src={minicart} alt="Minicart Icon" />
                  
                </div>
            </UserContainer>
      </Container>
    </>
   )
}

export default Header