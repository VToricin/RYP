

export default function BurgerMenu (props) {
    
        

    
    
   
    return (
        <div className="BurgerMenu" onClick={props.setBurgerState}>
            
            <div className="BurgerMenu__stripe " style={props.burgerState.stripe__move.stripe__top}></div>
            <div className="BurgerMenu__stripe " style={props.burgerState.stripe__move.stripe__bottom}></div>
            <div className="BurgerMenu__stripe " style={props.burgerState.stripe__move.stripe__middle}></div>
        </div>
    )
}