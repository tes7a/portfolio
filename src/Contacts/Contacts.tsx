import React from "react";
import s from './Contacts.module.scss'
import {Title} from "../common/components/title/Title";

export const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={s.contactsContainer}>
                <Title title={"Contacts"}/>
                <form className={s.contactsFrom}>
                    <input type={"text"}/>
                    <input type={"text"}/>
                    <textarea/>
                    <button type={"submit"} className={s.submitBtn}>Submit</button>
                </form>
            </div>
        </div>
    )
}