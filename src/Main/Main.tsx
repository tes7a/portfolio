import React from "react";
import s from './Main.module.scss'
import sContainer from '../common/Styles/Container.module.scss'

export const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={sContainer.container}>
                <div className={s.text}>
                    <h4 className={s.selectionH4}>
                        About Me
                    </h4>
                    <h2>
                        I am Dudkin Konstantine <br/> <span>Frontend Developer</span>
                    </h2>

                    <p>
                        I love to work in User Experience & User Interface designing.
                        <br/>Because I love to solve the design problem and find easy and better solutions to solve it.
                        <br/>I always try my best to make good user interface with the best user experience.
                    </p>
                    <a href={"/#"} className={s.btnCV}>Download CV</a>
                </div>
                <div className={s.photo}>
                </div>
            </div>
        </div>
    );
}