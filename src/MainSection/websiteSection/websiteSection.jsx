import React from "react";
import ideaImage from "../../images/idea.png";
import likeImage from "../../images/like.png";

export default function websiteSection () {
    return (
        <section className="websiteSection">
            <div className="websitesView">
                <div className="desktopWebsite">
                    <div className="desktopWebsite__header">
                        <p>ВАШ САЙТ ВЕРСИЯ ДЛЯ ПК</p>
                    </div>
                    <div className="desktopWebsite__body">
                        <img src={ideaImage} alt="" className="desktopWebsite__body__image" />
                        <p className="desktopWebsite__body__text">Создадим сайт для Вашей идеи под ключ, или выполним его в Вашем дизайне.</p>
                    </div>
                </div>
                <div className="mobileWebsite">
                    <div className="mobileWebsite__header">
                         <p>ВАШ САЙТ МОБИЛЬНАЯ ВЕРСИЯ</p>
                    </div>
                    <div className="mobileWebsite__body">
                         <img src={likeImage} alt="" className="mobileWebsite__body__image"/>
                         <p className="mobileWebsite__body__text">Разумеется Ваш сайт будет выглядеть хорошо и на мобильных устройствах.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}