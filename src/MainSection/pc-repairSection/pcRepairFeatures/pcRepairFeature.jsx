import React from "react";

export default function pcRepairFeature (props) {
   return Object.keys(props.features).map((el)=>{
            
            return (
                <div className="PCRepairOptionContainer">
                    <div className="circlePicture"></div>
                    <p>{props.features[el].name}</p>
                    <p className="PCRepairOptionContainer priceColor">{props.features[el].price}</p>
                </div>
            )
        }
    )
    
}