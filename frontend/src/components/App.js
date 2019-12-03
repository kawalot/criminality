import React, { Component } from "react";
import {Route, NavLink, BrowserRouter as Router, Switch} from 'react-router-dom'

import '../styles/App.scss';

import Main from './Main'
import DisplayMap from './DisplayMap'
import Info from './Info'
import Header from './Header'
import Footer from './Footer'
import About from './About'
import Notfound from './Notfound'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            error: null,
            isLoaded: false,
            cases: null,
        }
    }

    componentDidMount() {
      fetch("http://localhost:8000/api/v0/")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              cases: result
            });
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }

    render() {
        const { error, cases, isLoaded } = this.state
        return <div className="container">
            <Header />
            <main id="pageMain">
                {error && <p>Ошибка: {error.message}</p>}
                {!isLoaded && <p>Загрузка данных...</p>}
                <Switch>
                    {Array.isArray(cases) && <Route exact path='/'
                        render={() => <DisplayMap data={cases} />}
                    />}
                    <Route path='/about' component={About} />
                    <Route path="*" component={Notfound} />
                </Switch>
            </main>
            <Info />
            <Footer />
        </div>
    }
}

export default App;
