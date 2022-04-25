import React from "react";
import s from './Contacts.module.scss'

export const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={s.contactsContainer}>
                <h2 className={s.title}>Contacts</h2>
                <form className={s.contactsFrom}>
                    <input type={"text"}/>
                    <input type={"text"}/>
                    <textarea/>
                    <button type={"submit"}>Submit</button>
                </form>
            </div>
        </div>
    )
}