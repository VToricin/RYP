import React from "react";



export default function PricesContainer (props) {
    console.log(props.state.servicePrices.name)

    let priceBuilderFunction = () => {
        return (
            props.state.servicePrices.map(element => {
                
                return (
                    <div className="pricesContainer">
                        <div className="serviceName"><p>{element.serviceName}</p></div>
                        <div className="price"><p>{element.price}</p></div>
                    </div>   
                                    )
            })
        )
    }

    
    return(

        <div className="serviceSectionPricesContainer">
                <div className="serviceSectionPricesTable">
                    
                        {priceBuilderFunction()}
                    
                </div>
            </div>
        
    )
}