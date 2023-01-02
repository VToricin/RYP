import React from "react";




export default function NavigaotionItems (props) {

    let positionUpdate = (argu) => {
        closeMenuIfOpened();
        let elemRef = document.querySelector(argu); 
        let documentStart = document.querySelector('.introSection');
        if(elemRef.getBoundingClientRect().y !==0){
            let winscroll = documentStart.getBoundingClientRect().y + elemRef.getBoundingClientRect().y
            console.log(documentStart.getBoundingClientRect());
            console.log(elemRef.getBoundingClientRect().y);
            window.scrollTo({
            top: winscroll,
            behavior:"smooth"
        })

        }
        
        
    }
    let closeMenuIfOpened = () => {
        if (props.menu__status === "NavigationItems isOpen"){
            props.setBurgerState();
        }
        
    }
    
    return (
        
        <div className={props.menu__status}>
            <p className="Navigation__item" onClick={()=>{ positionUpdate('.pcRepairSection'); }}>РЕМОНТ КОМПЬЮТЕРОВ</p>
            <p className="Navigation__item" onClick={()=>{ positionUpdate('.transparentLayer'); }}>ОБСЛУЖИВАНИЕ</p>
            <p className="Navigation__item" onClick={()=>{ positionUpdate('.websiteSection'); }}>ВОССТАНОВЛЕНИЕ ДАННЫХ</p>
            <p className="Navigation__item" onClick={()=>{ positionUpdate('.websiteSection'); }}>СОЗДАНИЕ САЙТОВ</p>
            
        </div>    
    );

} 