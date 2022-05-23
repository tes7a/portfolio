import React, {useState} from "react";
import "./BurgerMenu.scss";

export const BurgerMenu = () => {
    const [toggle, setToggle] = useState(false);
    const [bgToggle, setBgToggle] = useState(false);

    const onChangeBurger = () => {
        setToggle(!toggle);
        setBgToggle(!bgToggle);
    }

    return (
        <>
            <div onClick={onChangeBurger} className={toggle ? "change" : "menu"}>
                <div className={"menu_bar"}>
                    <div className={"bar"}></div>
                    <div className={"bar"}></div>
                    <div className={'bar'}></div>
                </div>
                <nav className={'nav'}>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Blog</a></li>
                    </ul>
                </nav>
            </div>
            <div className={""}></div>
        </>
    )
}

