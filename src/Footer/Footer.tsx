import React from "react";
import s from './Footer.module.css'
import {FooterContacts} from "./FooterContacts/FooterContacts";

export const Footer = () => {
    return (
        <div className={s.footerBlock}>
            <div className={s.footerContainer}>
                <h2 className={s.title}>Costas Dudkin</h2>
                <div className={s.contacts}>
                    <FooterContacts/>
                    <FooterContacts/>
                    <FooterContacts/>
                    <FooterContacts/>
                    <FooterContacts/>
                </div>
                <h4 className={s.title}>@2222 year Все права еще не защищены</h4>
            </div>
        </div>
    )
}