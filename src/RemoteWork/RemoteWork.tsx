import React from "react";
import { Title } from "../common/components/title/Title";
import s from './RemoteWork.module.scss'

export const RemoteWork = () => {
    return(
        <div className={s.remoteWorkBlock}>
            <div className={s.remoteWorkContainer}>
                <Title title={"Considering remote work"}/>
                <button className={s.btnHairMe}>hire me</button>
            </div>
        </div>
    )
}