import React from "react";
import s from './Contacts.module.css'

export const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={s.contactsContainer}>
                <h2 className={s.title}>Contacts</h2>
                <form className={s.contactsFrom}>
                    <input/>
                    <input/>
                    <textarea/>
                    <button>Submit</button>
                </form>
            </div>
        </div>
    )
}