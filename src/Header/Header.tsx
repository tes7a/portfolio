import React, {useEffect, useState} from "react";
import s from "./Header.module.scss";
import {Nav} from "./Nav/Nav";
import eat from "../assets/image/restaurant.svg";
import sleep from "../assets/image/sleep.svg";
import code from "../assets/image/programming-code-signs.svg";
import repeat from "../assets/image/repeat.svg";
import {ParticleComponent} from "../common/components/tsparticle/ParticleComponent";
import ReactTypingEffect from "react-typing-effect";
import {BurgerMenu} from "./BurgerMenu/BurgerMenu";

export const Header = () => {
    const [scroll, setScroll] = useState(false);

    const onStart = () => {
        window.scrollTo(0, 0);
    }

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 0) {
                setScroll(true)
            } else {
                setScroll(false)
            }
        };
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [scroll]);

    return (
        <div className={s.background}>
        <ParticleComponent/>
        <div className={scroll ? `${s.header} ${s.header__sticky}` : s.header}>
            <div className={s.header__container}>
                <h2 className={scroll ? `${s.header__title_sticky} ${s.header__title}` : s.header__title}>Konstantin</h2>
                <div className={s.nav}>
                    <Nav/>
                </div>
                <div className={s.burger}>
                    <BurgerMenu/>
                </div>
            </div>
        </div>
        <div className={s.name_surname_block}>
            <h1>Konstantine <span>Dudkin</span></h1>
            <ReactTypingEffect eraseDelay={3000} speed={300} className={s.typing_effect} text={"Frontend Developer"}/>
            <ul className={s.header_social}>
                <li><a href="/#">
                    <i className={`fa-brands fa-facebook ${s.header_social__socials_icons}`}></i>
                </a></li>
                <li><a href="/#">
                    <i className={`fa-brands fa-instagram ${s.header_social__socials_icons}`}></i>
                </a></li>
                <li><a href="/#">
                    <i className={`fa-brands fa-telegram ${s.header_social__socials_icons}`}></i>
                </a></li>
                <li><a href="/#">
                    <i className={`fa-brands fa-linkedin ${s.header_social__socials_icons}`}></i>
                </a></li>
                <li><a href="/#">
                    <i className={`fa-solid fa-envelope ${s.header_social__socials_icons}`}></i>
                </a></li>
            </ul>
        </div>
        <div className={s.img_container}>
            <div className={s.img_container__eat}>
                <img src={eat} alt={"img"}/>
            </div>
            <div className={s.img_container__sleep}>
                <img src={sleep} alt={"img"}/>
            </div>
            <div className={s.img_container__code}>
                <img src={code} alt={"img"}/>
            </div>
            <div className={s.img_container__repeat}>
                <img src={repeat} alt={"img"}/>
            </div>
        </div>
        <div className={scroll ? s.scroll_active : s.scroll_none} onClick={onStart}>
            <i className="fa-solid fa-arrow-up"></i>
        </div>
    </div>)
}
