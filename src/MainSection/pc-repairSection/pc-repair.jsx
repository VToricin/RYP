import React from "react";
import PCRepairFeatures from "./pcRepairFeatures/pcRepairFeatures";

export default function pcRepairSection (props) {
    return (
        <section className="pcRepairSection">
            <h1> ЧТО ДЕЛАЕМ ЧАЩЕ ВСЕГО:</h1>
            <PCRepairFeatures state = {props.state}/>
        </section>
    )

}