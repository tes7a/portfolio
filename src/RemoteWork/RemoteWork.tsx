import React from "react";
import {Title} from "../common/components/title/Title";
import s from './RemoteWork.module.scss'

export const RemoteWork = () => {
    return (
        <div className={s.remoteWorkBlock}>
            <div className={s.remoteWorkContainer}>
                <h2 className={s.remoteWorkBlockTitle}>Considering remote work</h2>
                <span className={s.remoteWorkDescription}>I love to work in User Experience & User Interface designing. <br/>
                    Because I love to solve
                    the design problem and find easy and better solutions to solve it.</span>
                <button className={s.btnHairMe}>Contact With me</button>
            </div>
        </div>
    )
}