import React from "react";
import s from './Footer.module.scss'
import {FooterContacts} from "./FooterContacts/FooterContacts";
import {Title} from "../common/components/title/Title";

export const Footer = () => {
    return (
        <div className={s.footerBlock}>
            <div className={s.footerContainer}>
                <Title title={'Costas Dudkin'}/>
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