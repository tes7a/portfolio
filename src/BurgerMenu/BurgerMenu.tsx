import React, {useEffect, useState} from "react";
import s from "./BurgerMenu.module.scss";

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
            }else {
                setScroll(false)
            }
        };
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [scroll]);

    let burgerStyle = toggle ? `${s.change}` : `${s.menu}`;
    if (toggle && scroll) {
        burgerStyle += ` ${s.stickyBar}`
    }
    if(toggle || scroll) {
        burgerStyle += ` ${s.stickyBarPosition}`
    }


    return (
        <>
            <div onClick={onChangeBurger} className={burgerStyle}>
                <div className={s.menu_bar}>
                    <div className={s.bar}></div>
                    <div className={s.bar}></div>
                    <div className={s.bar}></div>
                </div>
                <nav className={toggle ? s.menu_nav_open : s.menu_nav}>
                    <ul className={s.menu_nav__list}>
                        <li><a href="#">Skills</a></li>
                        <li><a href="#">Projects</a></li>
                        <li><a href="#">Remote Work</a></li>
                        <li><a href="#">Contacts</a></li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

