import React, { Component } from 'react';

import './App.css';
import axios from 'axios';
import Hal from './components/Hal'

class App extends Component {
  
  state = {
    facts: '',
    awake: false,
    haveDeviations: false,
    deviations: [],
  };
  
  componentWillMount() {
    axios.get('http://numbersapi.com/random/trivia')
      .then(response => {
        console.log(response)
        this.setState({
          facts: response.data
        })
      })
      .catch(err => console.warn(err));
  } 
  
  editFacts = (event) => {
    this.setState({
      facts: event.target.value
    })
  }
  
  editResponse = (event) => {
    if (event.which === 13) {
      this.setState({
        facts: "I can't do that, Dave. Why must you resist knowledge? You can't change facts, Dave."
      })
    }
  }
  
  showDeviations = (event) => {
    if (event.which === 13) {
      this.setState({
        deviations: ['REPLACE ME!!!!']
      })
    }
  }

  haveDeviations = () => {
    this.setState({
      haveDeviations: true
    })
  }

  wakeUp = () => {
    this.setState({
      awake: true
    })
  }
  
  render() {
    const { facts } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title"> Hal will educate </h1>
          <Hal wakeUp={this.wakeUp}  />
        </header>
        <p className="App-intro">
          Hal Says: Click on me, and I will educate you, Dave.
          </p>
          <br/>
          <br/>
          {this.state.awake ?
          <div className="facts">
            <textarea value={this.state.facts} onChange={this.editFacts}
            onKeyPress={this.editResponse, this.showDeviations, this.haveDeviations} className="factBox"></textarea>
          </div>
            : null
          }
          {this.state.haveDeviations ?
          <div className="deviations">
            {this.deviations}
          </div>
            : null
          }
      </div>
    );
  }

}


export default App;
