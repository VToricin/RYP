import React from "react";
import { pcRepairSectionFeatures } from "../../MainSectionState";
import PCRepairFeature from "./pcRepairFeature";


export default function pcRepairFeatures () {
    
    return(
        <div className="pcRepairFeatures">
            <PCRepairFeature features = {pcRepairSectionFeatures}/>
        </div>
        
    )
}