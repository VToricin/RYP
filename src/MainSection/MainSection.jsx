import React from "react";
import IntroSection from "./introSection/introSection";
import PCRepairSection from "./pc-repairSection/pc-repair";
import ServiceSection from "./serviceSection/serviceSection";
import WebsiteSection from "./websiteSection/websiteSection";
import PricesContainer from "./pricesComponents/pricesContainer";
import { prices } from "../MainSection/pricesComponents/prices";
export default function MainSection () {
    return (
        <div className="mainSection">
            <IntroSection/>
            <PCRepairSection state = { prices.pcRepairSectionFeatures }/>
            <ServiceSection/>
            <PricesContainer state = { prices }/>
            <WebsiteSection/>

        </div>
    )
}