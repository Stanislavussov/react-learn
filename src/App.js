import React, {Component} from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import s from './App.module.css';
import {BrowserRouter, Route} from "react-router-dom";


function App() {
    return (
        <BrowserRouter>
            <div className={s.appWrapper}>
                <Header/>
                <Navbar/>
                <div>
                    <Route path="/dialogs" component={Dialogs}/>
                    <Route path="/profile"  component={Profile}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
