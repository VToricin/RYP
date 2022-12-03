import React from "react";
import IntroSection from "./introSection/introSection";
import PCRepairSection from "./pc-repairSection/pc-repair";
import ServiceSection from "./serviceSection/serviceSection";

export default function MainSection () {
    return (
        <div className="mainSection">
            <IntroSection/>
            <PCRepairSection/>
            <ServiceSection/>
        </div>
    )
}