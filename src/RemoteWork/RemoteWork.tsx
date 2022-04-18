import React from "react";
import s from './RemoteWork.module.css'

export const RemoteWork = () => {
    return(
        <div className={s.remoteWorkBlock}>
            <div className={s.remoteWorkContainer}>
                <h2 className={s.title}>Considering remote work</h2>
                <button>hire me</button>
            </div>
        </div>
    )
}