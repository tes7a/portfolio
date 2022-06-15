import React from "react";
import s from "./Projects.module.scss";
import sContainer from "../common/Styles/Container.module.scss";
import {Project} from "./Project/Project";
import {Title} from "../common/components/title/Title";
import todoIcon from "./../assets/image/todolist.jpg";
import socialIcon from "./../assets/image/social.jpg";

export const Projects = () => {
    const social_network = {
        backgroundImage: `url(${socialIcon})`,
    };
    const todoList = {
        backgroundImage: `url(${todoIcon})`,
    };

    return (
        <div className={s.projects_block}>
            <div className={`${sContainer.container} ${s.project_container}`}>
                <Title title={"My Works"}/>
                <span>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium condis ut?
                </span>
                <div className={s.projects}>
                    <Project style={social_network}
                             title={'Social Network'}
                             description={
                                'not donenot donenot donenot'
                            }/>
                    <Project style={todoList}
                             title={'TodoList'}
                             description={
                                'not donenot donenot donenot'
                            }/>
                    <Project style={todoList}
                             title={'TodoList'}
                             description={
                                'not donenot donenot donenot'
                            }/>
                    <Project style={todoList}
                             title={'TodoList'}
                             description={
                                'not donenot donenot donenot'
                            }/>
                </div>
            </div>
        </div>
    )
}