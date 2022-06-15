import React, {useEffect, useState} from "react";
import s from "./BurgerMenu.module.scss";
import {burgerStyleScroll} from "./burger-style-scroll";

export const BurgerMenu = () => {
    const [toggle, setToggle] = useState(false);
    const [scroll, setScroll] = useState(false);

    const onChangeBurger = () => {
        setToggle(!toggle);
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
        <>
            <div onClick={onChangeBurger} className={burgerStyleScroll({
                scroll: scroll,
                toggle: toggle,
                className1: s.change,
                className2: s.menu,
            })}>
                <div className={s.menu_bar}>
                    <div className={s.bar}></div>
                    <div className={s.bar}></div>
                    <div className={s.bar}></div>
                </div>
                <nav className={toggle ? s.menu_nav_open : s.menu_nav}>
                    <ul className={s.menu_nav__list}>
                        <li><a href="src/Header/BurgerMenu/BurgerMenu#">Skills</a></li>
                        <li><a href="src/Header/BurgerMenu/BurgerMenu#">Projects</a></li>
                        <li><a href="src/Header/BurgerMenu/BurgerMenu#">Remote Work</a></li>
                        <li><a href="src/Header/BurgerMenu/BurgerMenu#">Contacts</a></li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

