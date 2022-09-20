import React from "react";
import Logo from "./Logo";
import Navigation from "./Navigation/Navigation";
export default function Header () {
    return (
        <header className="Header">    
          <Logo/>
          <Navigation/>  
        </header>
    )
}