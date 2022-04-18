import React from "react";
import s from './Main.module.css'
import sContainer from '../common/Styles/Container.module.css'

export const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={sContainer.container}>
                <div className={s.text}>
                    <span>Hi There</span>
                    <h1>I am Costas Dudkin</h1>
                    <p>Frontend Developer</p>
                </div>
                <div className={s.photo}>
                    photo
                </div>
            </div>
        </div>
    );
}