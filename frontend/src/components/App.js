import React, { Component } from "react";

import '../styles/App.css';

import DisplayMap from './DisplayMap'


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
        return <div>
            {isLoading && <p>Загрузка данных...</p>}
            {Array.isArray(cases) && <DisplayMap data={cases} />}
        </div>
    }
}

export default App;
