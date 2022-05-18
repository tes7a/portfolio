import React, {UIEventHandler, useEffect, useState} from "react";
import s from "./Header.module.scss";
import {Nav} from "../Nav/Nav";
import eat from "../assets/image/restaurant.svg";
import sleep from "../assets/image/sleep.svg";
import code from "../assets/image/programming-code-signs.svg";
import repeat from "../assets/image/repeat.svg";

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
        <div className={scroll ? `${s.header} ${s.headerSticky}` : s.header}>
            <div className={s.headerContainer}>
                <h2 className={scroll ? `${s.headerTitleSticky} ${s.headerTitle}` : s.headerTitle}>Konstantin</h2>
                <Nav/>
            </div>
        </div>
        <div className={s.imgContainer}>
            <img src={eat} alt={"img"}/>
            <span>eat();</span>
            <img src={sleep} alt={"img"}/>
            <span>eat();</span>
            <img src={code} alt={"img"}/>
            <span>eat();</span>
            <img src={repeat} alt={"img"}/>
            <span>eat();</span>
        </div>
    </div>)
}
