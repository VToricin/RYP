import React from "react";




export default function NavigaotionItems (props) {

    
    let closeMenuIfOpened = () => {
        if (props.menu__status === "NavigationItems isOpen"){
            props.setBurgerState();
        }
    }
    
    return (
        
        <div className={props.menu__status}>
            <a href=""><p className="Navigation__item" onClick={closeMenuIfOpened}>РЕМОНТ КОМПЬЮТЕРОВ</p></a>
            <p className="Navigation__item" onClick={closeMenuIfOpened}>ОБСЛУЖИВАНИЕ</p>
            <p className="Navigation__item" onClick={closeMenuIfOpened}>ВОССТАНОВЛЕНИЕ ДАННЫХ</p>
            <a name="websites"><p className="Navigation__item" onClick={closeMenuIfOpened}>СОЗДАНИЕ САЙТОВ</p></a>
            
        </div>    
    );

} 