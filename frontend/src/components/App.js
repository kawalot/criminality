import React, { Component } from "react";

import '../styles/App.scss';

import DisplayMap from './DisplayMap'
import Info from './Info'
import Header from './Header'
import Footer from './Footer'

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
            {error && <p>Ошибка: {error.message}</p>}
            {!isLoaded && <p>Загрузка данных...</p>}
            {Array.isArray(cases) && <DisplayMap data={cases} />}
            <Info />
            <Footer />
        </div>
    }
}

export default App;
