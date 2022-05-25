import React, {useEffect, useState} from "react";
import s from './Nav.module.scss'


export const Nav = () => {
   const [scroll, setScroll] = useState(false);

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

    return (<div className={scroll ? `${s.navSticky} ${s.nav}`: s.nav}>
        <a className={s.linkActive} href={''}>Main</a>
        <a href={''}>Skills</a>
        <a href={''}>Projects</a>
        <a href={''}>Remote Work</a>
        <a href={''}>Contacts</a>
    </div>)
}