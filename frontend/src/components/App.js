import React, { Component } from "react";
import {Route, Switch} from 'react-router-dom'

import '../styles/App.scss';

import Main from './Main'
import DisplayMap from './DisplayMap'
import Header from './Header'
import Footer from './Footer'
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
                    {error && <p className='error'>API error: {error.message}</p>}
                    {!isLoaded && <p>Загрузка данных...</p>}
                    <Switch>
                      <Route exact path='/' render={() => <Main />}/>
                      {Array.isArray(cases) && <Route exact path='/map'
                        render={() => <DisplayMap data={cases} getInfo={this.getInfo} />}
                      />}
                      
                      <Route path='/login' render={() => <Login />} />
                      <Route path='*' render={() => <Notfound />} />
                    </Switch>
                </main>
                
                <Footer />
                </div>

    }
}

export default App;
