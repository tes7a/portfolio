import React from "react";
import s from './Contacts.module.scss'

export const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={s.contactsContainer}>
                <div className={s.contactsInformation}>
                    <h3>Contact Info :</h3>
                    <span>
                        I love to work in User Experience & User Interface designing. <br/>
                        Because I love to solve the design problem.
                    </span>
                    <div>
                        <ul>
                            <li>
                                <i className="fa-solid fa-location-dot"></i>
                                703 Homestead Street <br/>
                                Waltham, MA 02453
                            </li>
                            <li>
                                <i className="fa-solid fa-phone"></i>
                                Phone: +810 9900 0077 <br/>
                                Fax: 0000 3333 7777
                            </li>
                            <li>
                                <i className="fa-solid fa-reply"></i>
                                hello@example.com <br/>
                                contact-info@example.com
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={s.blockFrom}>
                    <form className={s.contactsFrom}>
                        <div className={s.blockForm__inputs}>
                            <input placeholder={"Name"} type={"text"}/>
                            <input placeholder={"Email"} type={"text"}/>
                        </div>
                        <textarea placeholder={"Message"}/>
                        <div>
                            <button type={"submit"} className={s.submitBtn}>Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}