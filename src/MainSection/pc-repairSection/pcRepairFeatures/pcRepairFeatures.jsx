import React from "react";

import PCRepairFeature from "./pcRepairFeature";


export default function pcRepairFeatures (props) {
    
    return(
        <div className="pcRepairFeatures">
            <PCRepairFeature features = {props.state}/>
        </div>
        
    )
}