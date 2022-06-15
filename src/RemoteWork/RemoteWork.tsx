import React from "react";
import s from "./RemoteWork.module.scss";

export const RemoteWork = () => {
    return (
        <div className={s.remote_work}>
            <div className={s.remote_work_container}>
                <h2 className={s.remote_work_title}>Considering remote work</h2>
                <span className={s.remote_work_description}>I love to work in User Experience & User Interface designing. <br/>
                    Because I love to solve
                    the design problem and find easy and better solutions to solve it.</span>
                <button className={s.btn_hair_me}>Contact With me</button>
            </div>
        </div>
    )
}