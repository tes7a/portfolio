import React from "react";
import s from './Main.module.scss'
import sContainer from '../common/Styles/Container.module.scss'

export const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={sContainer.container}>
                <div className={s.text}>
                    <h4>About Me</h4>
                    <span>Hi There</span>
                    <h2>I am Dudkin Konstantine</h2>
                    <span>Frontend Developer</span>
                    <p>
                        I love to work in User Experience & User Interface designing.
                        Because I love to solve the design problem and find easy and better solutions to solve it.
                        I always try my best to make good user interface with the best user experience.
                    </p>
                    <a href={"#"} className={s.defaultBtn}>Download CV</a>
                </div>
                <div className={s.photo}>
                    photo
                </div>
            </div>
        </div>
    );
}