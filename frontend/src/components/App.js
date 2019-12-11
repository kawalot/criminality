import React, { Component } from "react";
import {Route, Switch} from 'react-router-dom'

import '../styles/App.scss';

import Main from './Main'
import DisplayMap from './DisplayMap'
import Info from './Info'
import Header from './Header'
import Footer from './Footer'
import About from './About'
import Login from './Login'
import Notfound from './Notfound'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            error: null,
            isLoaded: false,
            cases: null,
            infoData: null
        }
    }

    getInfo = (info) => { 
      this.setState({ infoData: info }) 
    }

    setInfoNull = () => {
      this.setState({ infoData: null })
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
                    {error && <p className='error'>Ошибка: {error.message}</p>}
                    {!isLoaded && <p>Загрузка данных...</p>}
                    <Switch>
                      <Route exact path='/' render={() => <Main setInfoNull={this.setInfoNull} />}/>
                      {Array.isArray(cases) && <Route exact path='/map'
                        render={() => <DisplayMap data={cases} getInfo={this.getInfo} />}
                      />}
                      <Route path='/about' render={() => <About setInfoNull={this.setInfoNull} />}/>
                      <Route path='/login' render={() => <Login setInfoNull={this.setInfoNull} />} />
                      <Route path='*' render={() => <Notfound setInfoNull={this.setInfoNull} />} />
                    </Switch>
                </main>
                <Info data={this.state.infoData} />
                <Footer />
                </div>

    }
}

export default App;
