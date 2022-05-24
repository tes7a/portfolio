import React, {useEffect, useState} from "react";
import s from "./Header.module.scss";
import {Nav} from "../Nav/Nav";
import eat from "../assets/image/restaurant.svg";
import sleep from "../assets/image/sleep.svg";
import code from "../assets/image/programming-code-signs.svg";
import repeat from "../assets/image/repeat.svg";
import {ParticleComponent} from "../common/components/tsparticle/ParticleComponent";
import ReactTypingEffect from 'react-typing-effect';
import {BurgerMenu} from "../Nav/BurgerMenu/BurgerMenu";

export const Header = () => {
    const [scroll, setScroll] = useState(false);

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

    return (<div className={s.background}>
        <ParticleComponent/>
        <div className={scroll ? `${s.header} ${s.headerSticky}` : s.header}>
            <div className={s.headerContainer}>
                <h2 className={scroll ? `${s.headerTitleSticky} ${s.headerTitle}` : s.headerTitle}>Konstantin</h2>
                {/*<Nav/>*/}
                <BurgerMenu/>
            </div>
        </div>
        <div className={s.nameSurnameBlock}>
            <h1>Konstantine <span>Dudkin</span></h1>
            <ReactTypingEffect eraseDelay={3000} speed={300} className={s.typingEffect} text={"Frontend Developer"}/>
            <ul className={s.headerSocial}>
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
        <div className={s.imgContainer}>
            <div className={s.eatBlock}>
                <img src={eat} alt={"img"}/>
            </div>
            <div className={s.sleepBlock}>
                <img src={sleep} alt={"img"}/>
            </div>
            <div className={s.codeBlock}>
                <img src={code} alt={"img"}/>
            </div>
            <div className={s.repeatBlock}>
                <img src={repeat} alt={"img"}/>
            </div>
        </div>
    </div>)
}
