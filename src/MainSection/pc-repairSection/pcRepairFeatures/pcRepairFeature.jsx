import React from "react";

export default function pcRepairFeature (props) {
   return Object.keys(props.features).map((el)=>{
            
            return (
                <div className="bim">
                    <div className="circlePicture"></div>
                    <p>{props.features[el].name}</p>
                </div>
            )
        }
    )
    
}