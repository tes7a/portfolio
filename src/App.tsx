import React from 'react';
import './App.css';
import {Header} from "./Header/Header";
import {Main} from "./Main/Main";
import {Skills} from "./Skills/Skills";
import {MyWorks} from "./MyWorks/MyWorks";
import {RemoteWork} from './RemoteWork/RemoteWork';
import {Contacts} from "./Contacts/Contacts";
import {Footer} from "./Footer/Footer";

export function App() {
    return (
        <div className={"App"}>
            <header>
                <Header/>
            </header>
            <body>
                <Main/>
                <Skills/>
                <MyWorks/>
                <RemoteWork/>
                <Contacts/>
            </body>
            <footer>
                <Footer/>
            </footer>
        </div>
    )
}

