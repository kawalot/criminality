import React, { Component } from "react";
import '../styles/Main.scss'
import {Route, NavLink, BrowserRouter as Router, Switch} from 'react-router-dom'

import DisplayMap from './DisplayMap'
import About from './About'

const Main = (props) => {
    console.log(props.data)
    return <main id="pageMain">

            <Switch>
                <Route
                    exact path='/'
                    render={(props) => <DisplayMap {...props}/>}
                />
                <Route path='/about' component={About}/>
            </Switch>
           </main>
}

export default Main;
