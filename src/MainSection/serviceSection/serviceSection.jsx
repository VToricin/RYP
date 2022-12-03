import React from "react";
import CleanImage from "../../images/clean.jpg";
import ThermoPaste from "../../images/ThermalPaste.jpg"

export default function serviceSection () {
    return (
        <section className="serviceSection">
            <div className="transparentLayer">

            </div>
            <div className="serviceSectionInfoContainer">
                <div className="serviceSectionImagePart">
                    <img src={CleanImage} alt="Чистка компьютеров" className="ServiceImage pic1"/>
                    <div className="serviceSectionTextPart">
                        <p>Мы c радостью возьмем на сервисное обслуживание и домашний персональный компьютер и целый офис.</p>
                     </div>
                    <img src={ThermoPaste} alt="Чистка компьютеров" className="ServiceImage pic2"/>
                </div>
                
            </div>
        </section>
    )
}