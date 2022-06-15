import React from 'react';
import './App.scss';
import {Header} from "./Header/Header";
import {Profile} from "./Profile/Profile";
import {Skills} from "./Skills/Skills";
import {Projects} from "./Projects/Projects";
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
                <Profile/>
                <Skills/>
                <Projects/>
                <RemoteWork/>
                <Contacts/>
            </body>
            <footer>
                <Footer/>
            </footer>
        </div>
    )
}

