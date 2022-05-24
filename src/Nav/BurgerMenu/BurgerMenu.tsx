import React, {useState} from "react";
import "./BurgerMenu.scss";

export const BurgerMenu = () => {
    const [toggle, setToggle] = useState(false);

    const onChangeBurger = () => {
        setToggle(!toggle);
    }

    return (
        <>
            <div onClick={onChangeBurger} className={toggle ? "change" : "menu"}>
                <div className={"menu_bar"}>
                    <div className={"bar"}></div>
                    <div className={"bar"}></div>
                    <div className={'bar'}></div>
                </div>
                <nav className={toggle? "change" : "nav"}>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Blog</a></li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

