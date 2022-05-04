import React from "react";
import s from './Footer.module.scss'

export const Footer = () => {
    return (
        <div className={s.footerBlock}>
            <div className={s.footerContainer}>
                <h2 className={s.footerTitle}>Konstantin</h2>
                <div className={s.description}>© 2022 Created by Konstantin</div>
                <div className={s.contacts}>
                    <ul className={s.footerSocial}>
                        <li><a href="/#">
                            <i className={`fa-brands fa-facebook ${s.socialsIcons}`}></i>
                        </a></li>
                        <li><a href="/#">
                            <i className={`fa-brands fa-instagram ${s.socialsIcons}`}></i>
                        </a></li>
                        <li><a href="/#">
                            <i className={`fa-brands fa-telegram ${s.socialsIcons}`}></i>
                        </a></li>
                        <li><a href="/#">
                            <i className={`fa-brands fa-linkedin ${s.socialsIcons}`}></i>
                        </a></li>
                        <li><a href="/#">
                            <i className={`fa-solid fa-envelope ${s.socialsIcons}`}></i>
                        </a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}