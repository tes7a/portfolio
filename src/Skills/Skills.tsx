import React from "react";
import s from './Skills.module.css'
import sContainer from '../common/Styles/Container.module.css'
import {Skill} from "./Skill/Skill";

export const Skills = () => {
    return (
      <div className={s.skillsBlock}>
          <div className={`${sContainer.container} ${s.skillsContainer}`}>
              <h2 className={s.title}>Skills</h2>
              <div className={s.skills}>
                  <Skill title={"JS"} description={"Learn JS"}/>
                  <Skill title={"React"} description={'Learn React'}/>
                  <Skill title={"CSS"} description={'Learn CSS'}/>
              </div>
          </div>
      </div>
    );
}