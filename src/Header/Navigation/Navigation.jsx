import React from "react";
import NavigationItems from "./Navigation-items";
import BurgerMenu from "./Burger-menu/Burger-menu";
import { useState } from "react";




export default function Navigation () {
    
    let burgerInitialState = {
        stripe__move : {
    
            stripe__top:{
                top: "18px",
                left: "10px",
                transform: "rotateZ(0deg)"
            },
            stripe__bottom : {
                top: "30px",
                left: "10px",
                transform: "rotateZ(0deg)"
            },
            stripe__middle : {
                top: "24px",
                left: "10px",
                transform: "rotateZ(0deg)",
                width: "30px"
            }
            
    
        },
        menu__status: "NavigationItems"
    }

    let [burgerState, setBurgerState] = useState(burgerInitialState);

    let clickBurger = () => {
        setBurgerState(()=>{
        if(burgerState.stripe__move.stripe__top.transform === "rotateZ(0deg)")
            
            {
                
                
                return (

                {
                    stripe__move: {    
                        stripe__top:{
                            top: "24px",
                            left: "10px",
                            transform: "rotateZ(315deg)"
                        },
                        stripe__bottom : {
                            top: "24px",
                            left: "10px",
                            transform: "rotateZ(-315deg)"
                        },
                        stripe__middle : {   
                            top: "24px",
                            width: "3px",
                            left: "24px",
                            transform: "rotateZ(-315deg)"
                        }
                    },
                    menu__status: "NavigationItems isOpen"
                }
                    
                        
                )
                    
            } else {
                
                return (
                    {
                        stripe__move:
                        {
                            stripe__top:{
                                top: "18px",
                                left: "10px",
                                transform: "rotateZ(0deg)"
                            },
                            stripe__bottom : {
                                top: "30px",
                                left: "10px",
                                transform: "rotateZ(0deg)"
                            },
                            stripe__middle : {
                                top: "24px",
                                left: "10px",
                                transform: "rotateZ(0deg)",
                                width: "30px"
                            }
                        },                         
                        menu__status: "NavigationItems"

                    }    
                )
            }
        })
    }
    return (
        <div className="Navigation">
            <NavigationItems menu__status = {burgerState.menu__status} setBurgerState={clickBurger}/>
            <BurgerMenu burgerState = {burgerState} setBurgerState={clickBurger}/>
            <p className="Navigation__item tel">+7(987)-654-32-10</p>
        </div>
    )
}