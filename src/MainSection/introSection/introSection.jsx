import React from "react";  
import IntroImage from "../../images/main.jpg"
export default function IntroSection () {
    return (
        <section className="introSection">
            <div className="introSection__textContainer introHalf">
                <div className="introSection__textField ">
                    <p>Мы ремонтируем компьютеры, серверы и ноутбуки уже более 10 лет и гарантируем оптимальные решения за приятные цены</p>
                </div>
            </div>
            <div className="introSection__imageContainer introHalf">
                <img src={IntroImage} class="img__intro" alt="Intro"/>
            </div>
        </section>
    ) 
}