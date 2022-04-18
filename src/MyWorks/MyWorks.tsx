import React from "react";
import s from './MyWorks.module.css'
import sContainer from "../common/Styles/Container.module.css";
import { MyWork } from "./MyWork/MyWork";

export const MyWorks = () => {
    return(
        <div className={s.myWorkBlock}>
            <div className={`${sContainer.container} ${s.myWorkContainer}`}>
                <h2 className={s.myWorkTitle}>My Works</h2>
                <div className={s.myWorks}>
                    <MyWork title={'SocialNetwork'}
                            description={'not done not donenot donenot donenot donenot donenot donenot done'}/>
                    <MyWork title={'TodoList'}
                            description={'not donenot donenot donenot donenot donenot donenot donenot donenot donenot done'}/>
                </div>
            </div>
        </div>
    )
}