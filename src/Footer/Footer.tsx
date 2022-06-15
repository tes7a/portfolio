import React from "react";
import s from "./Footer.module.scss";

export const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={s.footer_container}>
                <h2 className={s.footer_title}>Konstantin</h2>
                <div className={s.description}>© 2022 Created by Konstantin</div>
                <div className={s.contacts}>
                    <ul className={s.footer_social}>
                        <li><a href="/#">
                            <i className={`fa-brands fa-facebook ${s.socials_icons}`}></i>
                        </a></li>
                        <li><a href="/#">
                            <i className={`fa-brands fa-instagram ${s.socials_icons}`}></i>
                        </a></li>
                        <li><a href="/#">
                            <i className={`fa-brands fa-telegram ${s.socials_icons}`}></i>
                        </a></li>
                        <li><a href="/#">
                            <i className={`fa-brands fa-linkedin ${s.socials_icons}`}></i>
                        </a></li>
                        <li><a href="/#">
                            <i className={`fa-solid fa-envelope ${s.socials_icons}`}></i>
                        </a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}