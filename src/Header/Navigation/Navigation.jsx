import React from "react";
import NavigationItems from "./Navigation-items";
import BurgerMenu from "./Burger-menu/Burger-menu";

export default function Navigation () {
    return (
        <div className="Navigation">
            <NavigationItems/>
            <BurgerMenu/>
            <p className="Navigation__item tel">+7(987)-654-32-10</p>
        </div>
    )
}