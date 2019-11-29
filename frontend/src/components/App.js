import React, { Component } from "react";

import '../styles/App.scss';

import DisplayMap from './DisplayMap'
import Info from './Info'
import Header from './Header'
import Footer from './Footer'

class App extends Component {
    constructor() {
        super()
        this.state = {
            isLoading: false,
            cases: null,
        }
    }

    componentDidMount() {
      this.setState({ isLoading: true })
      fetch('http://localhost:8000/api/v0/')
        .then(response => {
          return response.json()
        })
        .then(data => {
          this.setState({ isLoading: false, cases: data })
        })
    }

    render() {
        const { cases, isLoading } = this.state
        return <div className="container">
            <Header />
            {isLoading && <p>Загрузка данных...</p>}
            {Array.isArray(cases) && <DisplayMap data={cases} />}
            <Info />
            <Footer />
        </div>
    }
}

export default App;
