import React from "react";

export default function Footer () {
    return (
        <div className="Footer">
            <div className="Footer__container">
                <div className="Footer__contact__info">
                    <div className="Footer__logoContainer">
                        <p>RYP.SERVICE</p>
                    </div>
                    <a href="tel:+79876543210"><p className="phone">+7-987-654-32-10</p></a>
                    <a href="https://t.me/whiitered"><p className="telegramLink">Telegram</p></a>
                </div>
            </div>
        </div>
    )
}