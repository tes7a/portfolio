import React from "react";
import s from "./MyWorks.module.scss"
import sContainer from "../common/Styles/Container.module.scss";
import {MyWork} from "./MyWork/MyWork";
import {Title} from "../common/components/title/Title";
import todoIcon from "./../assets/image/todolist.jpg";
import socialIcon from "./../assets/image/social.jpg";

export const MyWorks = () => {
    const socialNetwork = {
        backgroundImage: `url(${socialIcon})`,
    };
    const todoList = {
        backgroundImage: `url(${todoIcon})`,
    };

    return (
        <div className={s.myWorkBlock}>
            <div className={`${sContainer.container} ${s.myWorkContainer}`}>
                <Title title={"My Works"}/>
                <div className={s.myWorks}>
                    <MyWork style={socialNetwork}
                            title={'Social Network'}
                            description={
                                'not donenot donenot donenot donenot donenot donenot donenot donenot donenot done'
                            }/>
                    <MyWork style={todoList}
                            title={'TodoList'}
                            description={
                                'not donenot donenot donenot donenot donenot donenot donenot donenot donenot done'
                            }/>
                </div>
            </div>
        </div>
    )
}